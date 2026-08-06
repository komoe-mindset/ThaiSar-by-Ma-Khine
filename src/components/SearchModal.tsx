import React, { useState } from 'react';
import { LESSON_CATEGORIES } from '../data/lessonsData';
import { UnitLesson } from '../types';
import { playThaiAudio } from '../utils/audio';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUnit: (unit: UnitLesson) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectUnit,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  // Search through all units for dialogues, vocabularies, and unit titles
  const results: {
    unit: UnitLesson;
    type: 'dialogue' | 'vocab' | 'unit';
    thai: string;
    phonetic: string;
    burmese: string;
  }[] = [];

  if (normalized) {
    LESSON_CATEGORIES.forEach((cat) => {
      cat.units.forEach((unit) => {
        // Match unit title
        if (
          unit.titleThai.toLowerCase().includes(normalized) ||
          unit.titleBurmese.toLowerCase().includes(normalized)
        ) {
          results.push({
            unit,
            type: 'unit',
            thai: unit.titleThai,
            phonetic: '',
            burmese: unit.titleBurmese,
          });
        }

        // Match dialogues
        unit.dialogues.forEach((d) => {
          if (
            d.thai.toLowerCase().includes(normalized) ||
            d.phonetic.toLowerCase().includes(normalized) ||
            d.burmese.toLowerCase().includes(normalized)
          ) {
            results.push({
              unit,
              type: 'dialogue',
              thai: d.thai,
              phonetic: d.phonetic,
              burmese: d.burmese,
            });
          }
        });

        // Match vocab
        unit.vocabulary.forEach((v) => {
          if (
            v.thai.toLowerCase().includes(normalized) ||
            v.phonetic.toLowerCase().includes(normalized) ||
            v.burmese.toLowerCase().includes(normalized)
          ) {
            results.push({
              unit,
              type: 'vocab',
              thai: v.thai,
              phonetic: v.phonetic,
              burmese: v.burmese,
            });
          }
        });
      });
    });
  }

  const handleResultClick = (unit: UnitLesson) => {
    onSelectUnit(unit);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-purple-50/50">
          <i className="fa-solid fa-magnifying-glass text-purple-600 text-lg"></i>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ထိုင်းစာ သို့မဟုတ် မြန်မာအဓိပ္ပာယ် ရိုက်ရှာပါ... (Search)"
            className="w-full bg-transparent border-none text-slate-800 font-medium placeholder-slate-400 text-sm focus:outline-none font-myanmar"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 text-xs"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2">
          {!query && (
            <div className="p-8 text-center text-slate-400 text-xs">
              <i className="fa-solid fa-magnifying-glass text-3xl mb-2 text-purple-200 block"></i>
              စကားလုံး သို့မဟုတ် မြန်မာအနက် ရိုက်ထည့်၍ ရှာဖွေနိုင်ပါသည်ရှင်။
            </div>
          )}

          {query && results.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-xs">
              ရှာဖွေမှု ရလဒ် မတွေ့ရှိပါရှင်။
            </div>
          )}

          {results.slice(0, 20).map((res, idx) => (
            <div
              key={idx}
              onClick={() => handleResultClick(res.unit)}
              className="p-3 bg-slate-50 hover:bg-purple-50/80 rounded-2xl border border-slate-200/80 hover:border-purple-300 transition-all cursor-pointer flex items-center justify-between gap-3 group"
            >
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.2 bg-purple-100 text-purple-800 rounded">
                    {res.unit.titleBurmese}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">
                    {res.type}
                  </span>
                </div>
                <h5 className="font-extrabold text-sm text-[#3b0066] font-thai truncate">
                  {res.thai}
                </h5>
                {res.phonetic && (
                  <p className="text-[11px] text-amber-700 font-myanmar">
                    အသံထွက်: {res.phonetic}
                  </p>
                )}
                <p className="text-xs text-slate-600 font-myanmar truncate">
                  {res.burmese}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {res.thai && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playThaiAudio(res.thai);
                    }}
                    className="p-2 bg-white text-[#3b0066] rounded-xl text-xs hover:bg-purple-200 shadow-2xs"
                    title="Play audio"
                  >
                    <i className="fa-solid fa-volume-high"></i>
                  </button>
                )}
                <i className="fa-solid fa-chevron-right text-slate-300 group-hover:text-purple-600 transition-colors text-xs"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 text-center">
          နှိပ်ပါက သက်ဆိုင်ရာ သင်ခန်းစာသို့ တိုက်ရိုက် ရောက်ရှိပါမည်။
        </div>
      </div>
    </div>
  );
};
