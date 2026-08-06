import React, { useState } from 'react';
import { Flashcard } from '../types';
import { playThaiAudio } from '../utils/audio';

interface FlashcardDeckProps {
  cards: Flashcard[];
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [deck, setDeck] = useState<Flashcard[]>(cards);

  if (!cards || cards.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
        <i className="fa-solid fa-clone text-3xl text-purple-300 mb-2 block"></i>
        Flashcards မရှိသေးပါ။
      </div>
    );
  }

  const currentCard = deck[currentIndex] || deck[0];

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    playThaiAudio(currentCard.thai);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Deck Controls Header */}
      <div className="flex items-center justify-between bg-purple-50 p-3.5 rounded-2xl border border-purple-100 text-xs font-bold text-[#3b0066]">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-clone text-amber-500"></i>
          <span>Flashcard လေ့ကျင့်ကွင်း</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="bg-white text-purple-900 border border-purple-200 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
            Card {currentIndex + 1} / {deck.length}
          </span>
          
          <button
            onClick={handleShuffle}
            className="px-2.5 py-1 bg-white hover:bg-purple-100 text-[#3b0066] border border-purple-200 rounded-lg text-xs flex items-center gap-1 transition-colors"
            title="Shuffle deck cards"
          >
            <i className="fa-solid fa-shuffle text-amber-500"></i>
            <span className="hidden sm:inline">မွှေမည်</span>
          </button>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      <div className="flex flex-col items-center justify-center gap-6 py-4">
        <div
          onClick={handleCardClick}
          className={`flashcard-container w-full max-w-md h-72 flashcard-perspective cursor-pointer ${
            isFlipped ? 'flipped' : ''
          }`}
        >
          <div className="flashcard-inner relative w-full h-full transform transition-transform duration-500">
            {/* Front Side: Thai Word & Phonetic */}
            <div className="flashcard-front bg-gradient-to-br from-[#2c004d] via-[#3b0066] to-[#5a189a] text-white p-6 shadow-xl border border-purple-500/30 flex flex-col items-center justify-center relative">
              <span className="absolute top-4 right-4 text-[10px] font-extrabold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-amber-300/30">
                ထိုင်းစာ (Thai)
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold font-thai tracking-wide pb-3 text-white">
                {currentCard.thai}
              </h3>

              <p className="text-xs text-amber-300 font-bold font-myanmar bg-[#2c004d]/80 px-3 py-1.5 rounded-lg border border-purple-400/30 shadow-inner">
                အသံထွက်: {currentCard.phonetic}
              </p>

              <div className="absolute bottom-4 flex items-center gap-2 text-[11px] text-purple-200">
                <i className="fa-solid fa-rotate text-amber-400"></i>
                <span>တစ်ချက်နှိပ်၍ မြန်မာအဓိပ္ပာယ် ကြည့်ပါ</span>
              </div>
            </div>

            {/* Back Side: Burmese Meaning */}
            <div className="flashcard-back bg-amber-50 text-slate-800 p-6 shadow-xl border-2 border-amber-400 flex flex-col items-center justify-center relative">
              <span className="absolute top-4 right-4 text-[10px] font-extrabold text-amber-800 bg-amber-200 px-3 py-1 rounded-full">
                မြန်မာအနက် (Burmese)
              </span>

              <h4 className="text-2xl md:text-3xl font-extrabold text-[#3b0066] font-myanmar text-center">
                {currentCard.burmese}
              </h4>

              <div className="absolute bottom-4 flex items-center gap-2 text-[11px] text-amber-800 font-bold">
                <i className="fa-solid fa-rotate text-amber-600"></i>
                <span>ပြန်လည်လှန်ရန် နှိပ်ပါ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-colors"
          >
            <i className="fa-solid fa-chevron-left"></i> ရှေ့တစ်လုံး
          </button>

          <button
            onClick={handleAudio}
            className="w-12 h-12 bg-amber-400 hover:bg-amber-500 text-[#3b0066] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            title="အသံထွက် နားထောင်မည်"
          >
            <i className="fa-solid fa-volume-high text-xl"></i>
          </button>

          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-[#5a189a] hover:bg-[#7b2cbf] text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-colors"
          >
            နောက်တစ်လုံး <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
