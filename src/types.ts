export type CategoryId = 'level1' | 'level2' | 'vocabulary';

export interface DialogueLine {
  id: string;
  speaker: string;
  speakerGender: 'male' | 'female' | 'neutral';
  thai: string;
  phonetic: string;
  burmese: string;
}

export interface GrammarPoint {
  id: string;
  titleThai: string;
  titlePhonetic: string;
  titleBurmese: string;
  pattern: string;
  explanation: string;
  examples: {
    thai: string;
    phonetic: string;
    burmese: string;
  }[];
}

export interface VocabItem {
  id: string;
  thai: string;
  phonetic: string;
  burmese: string;
  category?: string;
  exampleThai?: string;
  exampleBurmese?: string;
}

export interface Flashcard {
  id: string;
  thai: string;
  phonetic: string;
  burmese: string;
  category?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionPhonetic?: string;
  questionBurmese?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UnitLesson {
  id: string;
  titleThai: string;
  titleBurmese: string;
  level: CategoryId;
  unitNumber: number;
  description: string;
  iconName: string;
  dialogues: DialogueLine[];
  grammar: GrammarPoint[];
  vocabulary: VocabItem[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}

export interface CategoryGroup {
  id: CategoryId;
  title: string;
  titleBurmese: string;
  badge: string;
  color: string;
  units: UnitLesson[];
}
