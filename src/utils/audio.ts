/**
 * Native Voice Audio Engine for Thai Speech (Thai Language for Myanmar)
 * Uses high-quality server proxy with fallback to direct audio stream and Web Speech API.
 */

let currentAudio: HTMLAudioElement | null = null;

export async function playThaiAudio(text: string, rate = 1.0): Promise<boolean> {
  // 1. Clean input text: remove parenthetical phonetics e.g. "สวัสดี (sa-wat-dee)" -> "สวัสดี"
  const cleanText = text.replace(/\([^)]*\)/g, '').trim();
  if (!cleanText) return false;

  // 2. Stop any currently playing audio stream or speech synthesis
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // 3. Try primary server API endpoint for native audio
  try {
    const apiUri = `/api/tts?text=${encodeURIComponent(cleanText)}`;
    const audio = new Audio(apiUri);
    audio.playbackRate = rate;
    currentAudio = audio;

    await audio.play();
    return true;
  } catch (err) {
    console.warn('API TTS endpoint playback failed, attempting direct stream fallback:', err);
  }

  // 4. Fallback: Direct Google Translate Native Audio Stream
  try {
    const directUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
      cleanText
    )}&tl=th&client=tw-ob`;
    const fallbackAudio = new Audio(directUrl);
    fallbackAudio.playbackRate = rate;
    currentAudio = fallbackAudio;

    await fallbackAudio.play();
    return true;
  } catch (err) {
    console.warn('Direct audio stream failed, falling back to Web Speech API:', err);
  }

  // 5. Final Fallback: Browser Web Speech API
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'th-TH';
      utterance.rate = rate;

      const voices = window.speechSynthesis.getVoices();
      const thaiVoice = voices.find((v) => v.lang.startsWith('th') || v.lang.includes('TH'));
      if (thaiVoice) {
        utterance.voice = thaiVoice;
      }

      utterance.onend = () => resolve(true);
      utterance.onerror = () => resolve(false);

      window.speechSynthesis.speak(utterance);
    });
  }

  return false;
}

export function stopThaiAudio(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
