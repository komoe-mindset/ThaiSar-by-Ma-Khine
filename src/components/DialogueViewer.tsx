import React, { useState } from 'react';
import { DialogueLine } from '../types';
import { playThaiAudio } from '../utils/audio';

interface DialogueViewerProps {
  dialogues: DialogueLine[];
  unitTitle: string;
}

export const DialogueViewer: React.FC<DialogueViewerProps> = ({ dialogues, unitTitle }) => {
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [activeLineId, setActiveLineId] = useState<string | null>(null);

  const handleSpeak = (line: DialogueLine) => {
    setActiveLineId(line.id);
    playThaiAudio(line.thai, speechRate);
    setTimeout(() => {
      setActiveLineId(null);
    }, 2000);
  };

  const handlePlayAll = () => {
    let delay = 0;
    dialogues.forEach((line) => {
      setTimeout(() => {
        setActiveLineId(line.id);
        playThaiAudio(line.thai, speechRate);
      }, delay);
      // approximate 3 sec spacing per dialogue line
      delay += 3200;
    });
    setTimeout(() => {
      setActiveLineId(null);
    }, delay);
  };

  if (!dialogues || dialogues.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
        <i className="fa-solid fa-comments text-3xl text-purple-300 mb-2 block"></i>
        ဤ အခန်းအတွက် စကားပြော အခန်းမရှိသေးပါ။ အောက်ပါ သဒ္ဒါ သို့မဟုတ် ဝါဟာရများကို လေ့လာပါ။
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Dialogue Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-purple-50/70 p-4 rounded-2xl border border-purple-100">
        <div>
          <h3 className="font-extrabold text-sm text-[#3b0066] flex items-center gap-2">
            <i className="fa-solid fa-comments text-amber-500"></i>
            အပြန်အလှန် စကားပြော (Conversational Dialogue)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            ထိုင်းအသံထွက် နားထောင်ရန် နားကြပ်ပုံ သို့မဟုတ် အသံခလုတ်ကို နှိပ်ပါ။
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Speech Rate Selector */}
          <div className="flex items-center bg-white rounded-xl border border-purple-200 p-1 text-xs font-semibold text-purple-900 shadow-2xs">
            <span className="text-[10px] text-slate-400 px-1.5">အသံမြန်နှုန်း:</span>
            <button
              onClick={() => setSpeechRate(0.65)}
              className={`px-2 py-0.5 rounded-lg transition-colors ${
                speechRate === 0.65 ? 'bg-purple-700 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              0.6x (နှေး)
            </button>
            <button
              onClick={() => setSpeechRate(0.85)}
              className={`px-2 py-0.5 rounded-lg transition-colors ${
                speechRate === 0.85 ? 'bg-purple-700 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              0.8x (ပုံမှန်)
            </button>
          </div>

          {/* Play All Button */}
          <button
            onClick={handlePlayAll}
            className="px-3.5 py-1.5 bg-[#5a189a] hover:bg-[#7b2cbf] text-white text-xs font-extrabold rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            title="Play all dialogue lines sequentially"
          >
            <i className="fa-solid fa-play text-[10px]"></i>
            <span>အားလုံးနားထောင်မည်</span>
          </button>
        </div>
      </div>

      {/* Dialogue Lines List */}
      <div className="space-y-3">
        {dialogues.map((line) => {
          const isPlaying = activeLineId === line.id;
          const isFemale = line.speakerGender === 'female';

          return (
            <div
              key={line.id}
              className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                isPlaying
                  ? 'bg-amber-50 border-amber-300 shadow-md ring-2 ring-amber-400/40'
                  : isFemale
                  ? 'bg-purple-50/20 border-purple-100 hover:bg-purple-50/50 hover:shadow-2xs'
                  : 'bg-amber-50/20 border-amber-100 hover:bg-amber-50/50 hover:shadow-2xs'
              }`}
            >
              {/* Left Column: Speaker & Text */}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                      isFemale
                        ? 'bg-purple-100 text-purple-800 border border-purple-200'
                        : 'bg-amber-100 text-amber-900 border border-amber-200'
                    }`}
                  >
                    <i className={`fa-solid ${isFemale ? 'fa-venus' : 'fa-mars'} text-[10px]`}></i>
                    {line.speaker}
                  </span>
                </div>

                {/* Thai Script */}
                <h4 className="text-lg md:text-xl font-extrabold text-slate-800 tracking-wide font-thai">
                  {line.thai}
                </h4>

                {/* Burmese Phonetics */}
                <p className="text-xs font-semibold text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/60 inline-block font-myanmar">
                  အသံထွက်: {line.phonetic}
                </p>

                {/* Burmese Meaning */}
                <p className="text-sm font-medium text-slate-700 font-myanmar pt-0.5">
                  {line.burmese}
                </p>
              </div>

              {/* Right Column: Audio Play Button */}
              <button
                onClick={() => handleSpeak(line)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-xs transition-all shrink-0 self-end md:self-center ${
                  isPlaying
                    ? 'bg-amber-500 text-white animate-pulse'
                    : 'bg-[#5a189a] hover:bg-[#7b2cbf] text-white'
                }`}
                title="Play line pronunciation"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-volume-high' : 'fa-volume-low'} text-sm`}></i>
                <span>{isPlaying ? 'အသံထွက်နေပါသည်...' : 'အသံထွက်'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
