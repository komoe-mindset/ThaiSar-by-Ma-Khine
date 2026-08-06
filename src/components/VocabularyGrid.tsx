import React, { useState } from 'react';
import { VocabItem } from '../types';
import { playThaiAudio } from '../utils/audio';

interface VocabularyGridProps {
  vocabulary: VocabItem[];
  bookmarks: string[];
  onToggleBookmark: (wordThai: string) => void;
}

export const VocabularyGrid: React.FC<VocabularyGridProps> = ({
  vocabulary,
  bookmarks,
  onToggleBookmark,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVocab = vocabulary.filter(
    (v) =>
      v.thai.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.phonetic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.burmese.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!vocabulary || vocabulary.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
        <i className="fa-solid fa-book text-3xl text-purple-300 mb-2 block"></i>
        ဝါဟာရများ မရှိသေးပါ။
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-purple-50/60 p-3 rounded-2xl border border-purple-100">
        <div className="flex items-center gap-2 text-xs font-bold text-[#3b0066]">
          <i className="fa-solid fa-book-open text-amber-500"></i>
          <span>ဝါဟာရများ (Vocabulary - {filteredVocab.length} စကားလုံး)</span>
        </div>

        {/* Local Vocab Search Input */}
        <div className="relative w-full sm:w-64">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="စကားလုံး သို့မဟုတ် အနက် ရှာရန်..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-myanmar"
          />
        </div>
      </div>

      {/* Grid of Word Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredVocab.map((item) => {
          const isBookmarked = bookmarks.includes(item.thai);

          return (
            <div
              key={item.id}
              className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between gap-3 group relative"
            >
              {/* Bookmark Toggle */}
              <button
                onClick={() => onToggleBookmark(item.thai)}
                className={`absolute top-3 right-3 p-1.5 rounded-lg text-xs transition-colors ${
                  isBookmarked
                    ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                    : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                }`}
                title={isBookmarked ? 'Remove Bookmark' : 'Save Word'}
              >
                <i className={`fa-solid fa-bookmark ${isBookmarked ? 'text-amber-500' : ''}`}></i>
              </button>

              <div className="space-y-1 pr-6">
                <h4 className="text-xl font-extrabold text-[#3b0066] font-thai tracking-wide">
                  {item.thai}
                </h4>
                <p className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block font-myanmar">
                  အသံထွက်: {item.phonetic}
                </p>
                <p className="text-sm font-semibold text-slate-700 font-myanmar pt-1">
                  {item.burmese}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 font-mono">ID: {item.id}</span>
                <button
                  onClick={() => playThaiAudio(item.thai)}
                  className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-[#3b0066] rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <i className="fa-solid fa-volume-high text-xs text-purple-700"></i>
                  <span>အသံထွက်</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
