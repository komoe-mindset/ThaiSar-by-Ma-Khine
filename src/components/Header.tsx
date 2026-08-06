import React from 'react';
import { UnitLesson } from '../types';

interface HeaderProps {
  currentUnit: UnitLesson;
  completedUnits: string[];
  bookmarks: string[];
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  onOpenBookmarksModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentUnit,
  completedUnits,
  bookmarks,
  onOpenSearch,
  onToggleSidebar,
  onOpenBookmarksModal,
}) => {
  return (
    <header className="bg-gradient-to-r from-[#2c004d] via-[#3b0066] to-[#5a189a] text-white shadow-lg sticky top-0 z-40 border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-3">
        
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 hover:text-white border border-purple-700/50 transition-colors"
            aria-label="Toggle navigation drawer"
            title="Toggle Menu"
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-[#2c004d] flex items-center justify-center font-black text-xl shadow-md shrink-0 border border-amber-200">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  Thaisar <span className="text-amber-300 font-bold text-base md:text-lg">ထိုင်းစာ</span>
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full">
                  Portal
                </span>
              </div>
              <p className="text-[11px] text-purple-200 font-medium line-clamp-1">
                Thai Language for Myanmar Speakers
              </p>
            </div>
          </div>
        </div>

        {/* Center/Right: Quick Search & Utilities */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-purple-950/50 hover:bg-purple-900/70 border border-purple-500/30 text-purple-200 hover:text-white text-xs font-medium transition-all shadow-inner"
            title="Search word or Burmese meaning"
          >
            <i className="fa-solid fa-magnifying-glass text-amber-300"></i>
            <span className="hidden md:inline">ရှာဖွေရန်... (Search)</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-purple-900 text-purple-200 rounded border border-purple-700">
              ⌘K
            </kbd>
          </button>

          {/* Bookmarks Counter Button */}
          <button
            onClick={onOpenBookmarksModal}
            className="relative p-2 md:px-3 md:py-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/70 border border-purple-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Saved Vocab & Favorites"
          >
            <i className="fa-solid fa-bookmark text-amber-400"></i>
            <span className="hidden sm:inline text-purple-100">မှတ်စု</span>
            {bookmarks.length > 0 && (
              <span className="bg-amber-400 text-[#2c004d] text-[10px] font-black px-1.5 py-0.2 rounded-full">
                {bookmarks.length}
              </span>
            )}
          </button>

          {/* Progress Indicator */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-purple-800/60">
            <div className="text-right text-[11px]">
              <div className="text-purple-200 font-medium">သင်ယူပြီးမြောက်မှု</div>
              <div className="text-amber-300 font-bold">{completedUnits.length} Units Completed</div>
            </div>
          </div>
        </div>

      </div>

      {/* Current Unit Banner Bar */}
      <div className="bg-[#21003b] px-4 py-2 border-t border-purple-900/60 flex items-center justify-between text-xs text-purple-200">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded text-[11px] shrink-0 border border-amber-400/30">
              {currentUnit.level === 'level1' ? 'Level 1' : currentUnit.level === 'level2' ? 'Level 2' : 'Vocab'}
            </span>
            <span className="font-semibold text-white truncate">
              {currentUnit.titleBurmese}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <span className="hidden sm:inline text-purple-300">
              <i className="fa-solid fa-book-open text-amber-400 mr-1"></i>
              {currentUnit.dialogues.length} Dialogues • {currentUnit.vocabulary.length} Vocab
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
