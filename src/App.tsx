import React, { useState, useEffect } from 'react';
import { LESSON_CATEGORIES } from './data/lessonsData';
import { UnitLesson } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { UnitContent } from './components/UnitContent';
import { SearchModal } from './components/SearchModal';
import { BookmarksModal } from './components/BookmarksModal';

export default function App() {
  const defaultUnit = LESSON_CATEGORIES[0].units[0];
  const [currentUnit, setCurrentUnit] = useState<UnitLesson>(defaultUnit);

  // Persistence in LocalStorage
  const [completedUnits, setCompletedUnits] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('thaisar_completed_units');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('thaisar_bookmarks');
      return saved ? JSON.parse(saved) : ['ยินดีที่ได้รู้จัก', 'ขอบคุณ'];
    } catch {
      return ['ยินดีที่ได้รู้จัก', 'ขอบคุณ'];
    }
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('thaisar_completed_units', JSON.stringify(completedUnits));
    } catch (e) {
      console.error(e);
    }
  }, [completedUnits]);

  useEffect(() => {
    try {
      localStorage.setItem('thaisar_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  // Keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleBookmark = (wordThai: string) => {
    setBookmarks((prev) =>
      prev.includes(wordThai)
        ? prev.filter((w) => w !== wordThai)
        : [...prev, wordThai]
    );
  };

  const handleCompleteUnitQuiz = (unitId: string) => {
    if (!completedUnits.includes(unitId)) {
      setCompletedUnits((prev) => [...prev, unitId]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Top Header */}
      <Header
        currentUnit={currentUnit}
        completedUnits={completedUnits}
        bookmarks={bookmarks}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        onOpenBookmarksModal={() => setIsBookmarksOpen(true)}
      />

      {/* Main Body with Sidebar Drawer & Dynamic Lesson Pane */}
      <div className="max-w-7xl mx-auto w-full px-3 md:px-6 py-4 flex-1 flex gap-6 items-start">
        
        {/* Navigation Sidebar */}
        <Sidebar
          currentUnitId={currentUnit.id}
          onSelectUnit={(unit) => setCurrentUnit(unit)}
          completedUnits={completedUnits}
          isOpen={isSidebarOpen}
          onCloseMobileSidebar={() => setIsSidebarOpen(false)}
        />

        {/* Dynamic Main Viewing Pane */}
        <main className="flex-1 min-w-0">
          <UnitContent
            unit={currentUnit}
            completedUnits={completedUnits}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onCompleteUnitQuiz={handleCompleteUnitQuiz}
          />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6 border-t border-slate-800 mt-8 text-xs font-myanmar">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-300 font-bold">
            © 2026 Thaisar - ထိုင်းစာ Thai Language Center. All Rights Reserved.
          </p>
          <p className="text-purple-400 font-medium">
            Level 1, Level 2 & Vocabulary Learning System
          </p>
        </div>
      </footer>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectUnit={(unit) => setCurrentUnit(unit)}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
}
