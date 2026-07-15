export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: 'What makes every day with you special?',
    options: ['Your smile', 'Your love', 'Everything about you', 'All of the above'],
    correctIndex: 3,
  },
  {
    id: 2,
    question: 'Where does my heart belong?',
    options: ['With my friends', 'With my family', 'With you, always', 'Nowhere else'],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'What is the greatest gift in my life?',
    options: ['Success', 'Travel', 'You, Kidest', 'Money'],
    correctIndex: 2,
  },
  {
    id: 4,
    question: 'How do I feel when I hear your voice?',
    options: ['Bored', 'Happy', 'At home', 'Both happy and at home'],
    correctIndex: 3,
  },
  {
    id: 5,
    question: 'What will I do until we meet again?',
    options: ['Forget you', 'Love you endlessly', 'Move on', 'Give up'],
    correctIndex: 1,
  },
]
