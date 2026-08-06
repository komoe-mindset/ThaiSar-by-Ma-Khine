import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * Native Thai Text-To-Speech API route
 * Uses native Thai TTS audio streams to guarantee working sound
 * regardless of client OS/Browser missing voice packs.
 */
app.get('/api/tts', async (req, res) => {
  try {
    const text = req.query.text as string;
    if (!text) {
      return res.status(400).json({ error: 'Text parameter is required' });
    }

    // Clean text (remove phonetic brackets or metadata)
    const cleanText = text.split(' (')[0].trim();
    if (!cleanText) {
      return res.status(400).json({ error: 'Valid Thai text is required' });
    }

    // Native Google Translate TTS stream for Thai
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
      cleanText
    )}&tl=th&client=tw-ob`;

    const response = await fetch(ttsUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`TTS provider HTTP ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': buffer.length,
      'Cache-Control': 'public, max-age=86400',
    });

    return res.send(buffer);
  } catch (err) {
    console.error('Error serving Native Thai TTS:', err);
    return res.status(500).json({ error: 'Failed to generate Thai speech audio' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
