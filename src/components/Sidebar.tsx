import React, { useState } from 'react';
import { LESSON_CATEGORIES } from '../data/lessonsData';
import { UnitLesson, CategoryId } from '../types';

interface SidebarProps {
  currentUnitId: string;
  onSelectUnit: (unit: UnitLesson) => void;
  completedUnits: string[];
  isOpen: boolean;
  onCloseMobileSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentUnitId,
  onSelectUnit,
  completedUnits,
  isOpen,
  onCloseMobileSidebar,
}) => {
  // State for expanded categories
  const [expandedCategories, setExpandedCategories] = useState<Record<CategoryId, boolean>>({
    level1: true,
    level2: true,
    vocabulary: true,
  });

  const toggleCategory = (catId: CategoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const handleUnitClick = (unit: UnitLesson) => {
    onSelectUnit(unit);
    onCloseMobileSidebar();
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobileSidebar}
        />
      )}

      {/* Sidebar Drawer Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[105px] left-0 z-50 lg:z-10 w-72 md:w-80 h-full lg:h-[calc(100vh-105px)] bg-white border-r border-slate-200/80 shadow-xl lg:shadow-none flex flex-col transition-transform duration-300 ease-in-out shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#3b0066] flex items-center justify-center text-xs">
              <i className="fa-solid fa-list-ul"></i>
            </div>
            <span>သင်ရိုး မာတိကာ (Units)</span>
          </div>
          
          <button
            onClick={onCloseMobileSidebar}
            className="lg:hidden p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 text-sm"
            title="Close drawer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {LESSON_CATEGORIES.map((cat) => {
            const isExpanded = expandedCategories[cat.id];
            
            return (
              <div key={cat.id} className="space-y-1.5">
                {/* Category Header Button */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/70 text-slate-800 font-bold text-xs transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-black text-white bg-gradient-to-r ${cat.color}`}
                    >
                      {cat.badge}
                    </span>
                    <span className="text-slate-800 group-hover:text-[#3b0066]">
                      {cat.title}
                    </span>
                  </div>
                  <i
                    className={`fa-solid fa-chevron-down text-[10px] text-slate-500 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Collapsible Units List */}
                {isExpanded && (
                  <div className="pl-2 space-y-1">
                    {cat.units.map((unit) => {
                      const isActive = unit.id === currentUnitId;
                      const isCompleted = completedUnits.includes(unit.id);

                      return (
                        <button
                          key={unit.id}
                          onClick={() => handleUnitClick(unit)}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-start gap-2.5 ${
                            isActive
                              ? 'bg-gradient-to-r from-[#3b0066] to-[#5a189a] text-white font-bold shadow-md shadow-purple-900/10'
                              : 'text-slate-700 hover:bg-purple-50/70 hover:text-[#3b0066]'
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] shrink-0 mt-0.5 ${
                              isActive
                                ? 'bg-amber-400 text-[#3b0066] font-bold'
                                : isCompleted
                                ? 'bg-emerald-100 text-emerald-700 font-bold'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {isCompleted ? (
                              <i className="fa-solid fa-check"></i>
                            ) : (
                              <i className={`fa-solid ${unit.iconName}`}></i>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="truncate text-[12px] leading-tight">
                              {unit.titleBurmese}
                            </div>
                            <div
                              className={`text-[10px] truncate mt-0.5 ${
                                isActive ? 'text-purple-200' : 'text-slate-400'
                              }`}
                            >
                              {unit.titleThai}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50 text-[11px] text-slate-500 text-center">
          <p className="font-semibold text-purple-900">Thaisar - ထိုင်းစာ</p>
          <p className="text-[10px] text-slate-400">Level 1 & 2 Learning Material</p>
        </div>
      </aside>
    </>
  );
};
