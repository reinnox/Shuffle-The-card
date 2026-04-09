import type { NextApiRequest, NextApiResponse } from 'next'

const quests = [
  { id: 1, title: 'Study 5 flashcards', completed: false },
  { id: 2, title: 'Share a flashcard', completed: false }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(quests);
}