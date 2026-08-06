import React, { useState } from 'react';
import { UnitLesson } from '../types';
import { DialogueViewer } from './DialogueViewer';
import { GrammarSection } from './GrammarSection';
import { VocabularyGrid } from './VocabularyGrid';
import { FlashcardDeck } from './FlashcardDeck';
import { QuizSection } from './QuizSection';

interface UnitContentProps {
  unit: UnitLesson;
  completedUnits: string[];
  bookmarks: string[];
  onToggleBookmark: (wordThai: string) => void;
  onCompleteUnitQuiz: (unitId: string) => void;
}

type TabType = 'dialogue' | 'grammar' | 'vocab' | 'flashcards' | 'quiz';

export const UnitContent: React.FC<UnitContentProps> = ({
  unit,
  completedUnits,
  bookmarks,
  onToggleBookmark,
  onCompleteUnitQuiz,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('dialogue');

  const isCompleted = completedUnits.includes(unit.id);

  return (
    <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200/80 space-y-6">
      
      {/* Unit Overview Header */}
      <div className="bg-gradient-to-r from-purple-50 via-purple-50/50 to-amber-50/30 p-5 rounded-2xl border border-purple-100/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#3b0066] text-amber-300 flex items-center justify-center text-xl shadow-md shrink-0 border border-purple-800">
            <i className={`fa-solid ${unit.iconName}`}></i>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full">
                {unit.level === 'level1' ? 'Level 1' : unit.level === 'level2' ? 'Level 2' : 'Vocabulary'}
              </span>
              {isCompleted && (
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <i className="fa-solid fa-circle-check"></i> သင်ယူပြီးပြီ
                </span>
              )}
            </div>

            <h2 className="text-xl md:text-2xl font-extrabold text-[#3b0066] font-myanmar">
              {unit.titleBurmese}
            </h2>
            <p className="text-xs text-amber-800 font-bold font-thai">
              {unit.titleThai}
            </p>
            <p className="text-xs text-slate-600 font-myanmar pt-1">
              {unit.description}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-100 scrollbar-none">
        <button
          onClick={() => setActiveTab('dialogue')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'dialogue'
              ? 'bg-[#5a189a] text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-[#3b0066]'
          }`}
        >
          <i className="fa-solid fa-comments"></i>
          <span>၁။ စကားပြော ({unit.dialogues.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('grammar')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'grammar'
              ? 'bg-amber-500 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-800'
          }`}
        >
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <span>၂။ သဒ္ဒါ ({unit.grammar.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'vocab'
              ? 'bg-purple-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-800'
          }`}
        >
          <i className="fa-solid fa-book"></i>
          <span>၃။ ဝါဟာရ ({unit.vocabulary.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('flashcards')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'flashcards'
              ? 'bg-violet-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-800'
          }`}
        >
          <i className="fa-solid fa-clone"></i>
          <span>၄။ Flashcards ({unit.flashcards.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'quiz'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800'
          }`}
        >
          <i className="fa-solid fa-trophy"></i>
          <span>၅။ ဉာဏ်စမ်း ({unit.quiz.length})</span>
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="pt-2">
        {activeTab === 'dialogue' && (
          <DialogueViewer dialogues={unit.dialogues} unitTitle={unit.titleBurmese} />
        )}

        {activeTab === 'grammar' && (
          <GrammarSection grammarList={unit.grammar} />
        )}

        {activeTab === 'vocab' && (
          <VocabularyGrid
            vocabulary={unit.vocabulary}
            bookmarks={bookmarks}
            onToggleBookmark={onToggleBookmark}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardDeck cards={unit.flashcards} />
        )}

        {activeTab === 'quiz' && (
          <QuizSection
            questions={unit.quiz}
            onCompleteUnitQuiz={() => onCompleteUnitQuiz(unit.id)}
          />
        )}
      </div>
    </div>
  );
};
