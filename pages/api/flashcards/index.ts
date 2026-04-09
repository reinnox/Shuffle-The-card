import type { NextApiRequest, NextApiResponse } from 'next'

let flashcards = [
  { id: '1', front: 'Cat', back: 'ကြောင်', lang: 'en' },
  { id: '2', front: 'Dog', back: 'ခွေး', lang: 'en' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(flashcards);
  } else if (req.method === 'POST') {
    const newCard = { ...req.body, id: Math.random().toString() };
    flashcards.push(newCard);
    res.status(201).json(newCard);
  } else {
    res.status(405).end();
  }
}