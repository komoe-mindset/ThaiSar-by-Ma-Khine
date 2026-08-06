import React from 'react';
import { LESSON_CATEGORIES } from '../data/lessonsData';
import { VocabItem } from '../types';
import { playThaiAudio } from '../utils/audio';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: string[];
  onToggleBookmark: (wordThai: string) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onToggleBookmark,
}) => {
  if (!isOpen) return null;

  // Gather all vocab items that match bookmarked Thai strings
  const bookmarkedItems: VocabItem[] = [];
  LESSON_CATEGORIES.forEach((cat) => {
    cat.units.forEach((unit) => {
      unit.vocabulary.forEach((v) => {
        if (bookmarks.includes(v.thai) && !bookmarkedItems.some((b) => b.thai === v.thai)) {
          bookmarkedItems.push(v);
        }
      });
    });
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-4 bg-purple-50 border-b border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-[#3b0066] flex items-center justify-center text-sm font-bold">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[#3b0066]">
                သိမ်းဆည်းထားသော မှတ်စုများ (Saved Words)
              </h3>
              <p className="text-[11px] text-slate-500">
                {bookmarkedItems.length} စကားလုံး သိမ်းဆည်းထားပါသည်
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 text-xs"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2.5">
          {bookmarkedItems.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-xs">
              <i className="fa-solid fa-bookmark text-4xl mb-3 text-amber-200 block"></i>
              သိမ်းဆည်းထားသော ဝါဟာရ မှတ်စုများ မရှိသေးပါရှင်။
            </div>
          ) : (
            bookmarkedItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3 hover:border-purple-300 transition-colors"
              >
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-lg text-[#3b0066] font-thai">
                    {item.thai}
                  </h4>
                  <p className="text-xs font-bold text-amber-700 font-myanmar">
                    အသံထွက်: {item.phonetic}
                  </p>
                  <p className="text-xs text-slate-700 font-myanmar">
                    {item.burmese}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => playThaiAudio(item.thai)}
                    className="p-2 bg-purple-100 hover:bg-purple-200 text-[#3b0066] rounded-xl text-xs font-bold flex items-center gap-1.5"
                    title="Play Audio"
                  >
                    <i className="fa-solid fa-volume-high"></i>
                  </button>

                  <button
                    onClick={() => onToggleBookmark(item.thai)}
                    className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold"
                    title="Remove from bookmarks"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 text-center">
          Thaisar - ထိုင်းစာ Thai Language Portal
        </div>
      </div>
    </div>
  );
};
