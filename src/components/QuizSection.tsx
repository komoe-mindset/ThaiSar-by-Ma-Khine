import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { playThaiAudio } from '../utils/audio';

interface QuizSectionProps {
  questions: QuizQuestion[];
  onCompleteUnitQuiz: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  questions,
  onCompleteUnitQuiz,
}) => {
  const [gameState, setGameState] = useState<'intro' | 'active' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
        <i className="fa-solid fa-trophy text-3xl text-emerald-300 mb-2 block"></i>
        ဤ အခန်းအတွက် ဉာဏ်စမ်းမေးခွန်းများ မရှိသေးပါ။
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleStartQuiz = () => {
    setGameState('active');
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleSelectOption = (index: number) => {
    if (showFeedback) return;

    setSelectedOption(index);
    setShowFeedback(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 10);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        setGameState('result');
        onCompleteUnitQuiz();
      }
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <h3 className="font-extrabold text-base text-[#3b0066] flex items-center gap-2">
          <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-xs">
            <i className="fa-solid fa-trophy"></i>
          </span>
          ဉာဏ်စမ်းကစားကွင်း (Interactive Quiz)
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          မေးခွန်းများကို ဖြေဆိုပြီး အတန်းအမှတ် လေ့ကျင့်ပါ။
        </p>
      </div>

      <div className="p-6 bg-purple-50/40 rounded-3xl border border-purple-100 shadow-2xs relative">
        {/* State 1: Intro Screen */}
        {gameState === 'intro' && (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-inner">
              <i className="fa-solid fa-gamepad"></i>
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-slate-800">
                Thaisar Unit Quiz
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1 font-myanmar">
                မေးခွန်း ({questions.length}) ခု ပါဝင်ပါသည်ရှင်။ ရမှတ် ၁၀၀ ရအောင် စမ်းသပ်ကြည့်ပါ။
              </p>
            </div>
            <button
              onClick={handleStartQuiz}
              className="px-6 py-3 bg-gradient-to-r from-[#5a189a] to-[#7b2cbf] hover:from-[#7b2cbf] hover:to-[#5a189a] text-white rounded-full font-bold shadow-md transition-all text-xs"
            >
              ဂိမ်းစတင်မည် (Start Quiz)
            </button>
          </div>
        )}

        {/* State 2: Active Question Screen */}
        {gameState === 'active' && currentQ && (
          <div className="space-y-5">
            <div className="flex justify-between items-center text-xs text-slate-500 font-semibold">
              <span>မေးခွန်း {currentIndex + 1} / {questions.length}</span>
              <span className="text-purple-700 font-bold">ရမှတ်: {score}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Text */}
            <div className="text-center py-4 space-y-2 bg-white rounded-2xl p-4 border border-purple-100 shadow-2xs">
              <span className="text-[11px] font-bold uppercase text-purple-500 tracking-wider font-myanmar">
                {currentQ.questionBurmese || 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို မှန်ကန်စွာရွေးပါ'}
              </span>

              <div className="flex items-center justify-center gap-2 pt-1">
                <h5 className="font-extrabold text-2xl md:text-3xl text-slate-800 font-thai">
                  {currentQ.question}
                </h5>
                <button
                  onClick={() => playThaiAudio(currentQ.question)}
                  className="p-2 text-purple-600 hover:text-purple-800 rounded-full hover:bg-purple-50"
                  title="Play audio"
                >
                  <i className="fa-solid fa-volume-high text-base"></i>
                </button>
              </div>
            </div>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle = 'bg-white border-purple-100 text-slate-800 hover:bg-purple-50';
                if (showFeedback) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600 font-bold';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 rounded-2xl border text-xs font-bold transition-all shadow-2xs flex justify-between items-center ${btnStyle}`}
                  >
                    <span className="font-myanmar">{option}</span>
                    {showFeedback && isCorrect && (
                      <i className="fa-solid fa-circle-check text-white text-base"></i>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <i className="fa-solid fa-circle-xmark text-white text-base"></i>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box on feedback */}
            {showFeedback && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-myanmar animate-fade-in">
                <strong>ရှင်းလင်းချက်:</strong> {currentQ.explanation}
              </div>
            )}
          </div>
        )}

        {/* State 3: Quiz Result Screen */}
        {gameState === 'result' && (
          <div className="text-center space-y-4 py-8">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner animate-bounce">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <h4 className="font-extrabold text-xl text-slate-800 font-myanmar">
                ဂုဏ်ယူပါတယ်ရှင်! 🎉
              </h4>
              <p className="text-xs text-slate-600 mt-1 font-myanmar">
                မေးခွန်းများ ဖြေဆိုပြီးဆုံးပါပြီ။
              </p>
            </div>
            <p className="text-3xl font-black text-purple-700">
              ရမှတ်: {score} / {questions.length * 10}
            </p>
            <button
              onClick={handleStartQuiz}
              className="px-5 py-2.5 bg-slate-800 text-white hover:bg-slate-900 rounded-full font-bold text-xs shadow-sm transition-all"
            >
              ထပ်မံကစားမည် (Retry Quiz)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
