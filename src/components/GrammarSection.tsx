import React from 'react';
import { GrammarPoint } from '../types';
import { playThaiAudio } from '../utils/audio';

interface GrammarSectionProps {
  grammarList: GrammarPoint[];
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({ grammarList }) => {
  if (!grammarList || grammarList.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
        <i className="fa-solid fa-wand-magic-sparkles text-3xl text-amber-300 mb-2 block"></i>
        ဤ အခန်းအတွက် သီးခြား သဒ္ဒါမရှိသေးပါ။
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <h3 className="font-extrabold text-base text-[#3b0066] flex items-center gap-2">
          <span className="p-1.5 bg-amber-100 text-amber-700 rounded-lg text-xs">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </span>
          ထိုင်း သဒ္ဒါနှင့် ဝါကျဖွဲ့စည်းပုံ (Grammar & Sentence Structure)
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          ဝါကျဖွဲ့စည်းပုံ ပုံစံများနှင့် ဥပမာ ဝါကျများကို အသံထွက်နှင့်တကွ လေ့လာပါ။
        </p>
      </div>

      <div className="space-y-5">
        {grammarList.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl border border-purple-100 shadow-xs space-y-4 hover:border-purple-300 transition-colors"
          >
            {/* Grammar Title & Pattern Header */}
            <div className="bg-gradient-to-r from-[#3b0066] to-[#5a189a] text-white p-4 rounded-xl shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold bg-amber-400 text-[#3b0066] px-2.5 py-0.5 rounded-full">
                  {item.titleBurmese}
                </span>
                <button
                  onClick={() => playThaiAudio(item.titleThai)}
                  className="text-amber-300 hover:text-white p-1 rounded-lg text-xs font-bold flex items-center gap-1"
                >
                  <i className="fa-solid fa-volume-high"></i>
                  <span>အသံ</span>
                </button>
              </div>

              <h4 className="text-xl font-extrabold font-thai mt-2 text-white">
                {item.titleThai} <span className="text-xs font-normal text-amber-300 font-myanmar">({item.titlePhonetic})</span>
              </h4>

              <div className="mt-2 text-xs text-purple-200 font-mono bg-purple-950/40 p-2 rounded-lg border border-purple-500/30">
                ဝါကျပုံစံ: <strong className="text-amber-300 font-sans">{item.pattern}</strong>
              </div>
            </div>

            {/* Explanation */}
            <p className="text-xs text-slate-700 leading-relaxed font-myanmar bg-purple-50/50 p-3 rounded-xl border border-purple-100">
              <i className="fa-solid fa-circle-info text-purple-600 mr-1.5"></i>
              {item.explanation}
            </p>

            {/* Examples List */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                <i className="fa-solid fa-lightbulb text-amber-500"></i>
                ဥပမာ ဝါကျများ (Examples):
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {item.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/80 hover:bg-amber-50/50 hover:border-amber-200 transition-colors flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <p className="font-extrabold text-sm text-slate-800 font-thai">
                        {ex.thai}
                      </p>
                      <p className="text-[11px] font-semibold text-amber-700 font-myanmar">
                        အသံထွက်: {ex.phonetic}
                      </p>
                      <p className="text-xs text-slate-600 font-myanmar">
                        {ex.burmese}
                      </p>
                    </div>

                    <button
                      onClick={() => playThaiAudio(ex.thai)}
                      className="p-2 bg-purple-100 hover:bg-purple-200 text-[#3b0066] rounded-xl text-xs shrink-0 self-center transition-colors"
                      title="Play example audio"
                    >
                      <i className="fa-solid fa-volume-high"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
