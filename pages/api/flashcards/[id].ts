import type { NextApiRequest, NextApiResponse } from 'next'

let flashcards = [
  { id: '1', front: 'Cat', back: 'ကြောင်', lang: 'en' },
  { id: '2', front: 'Dog', back: 'ခွေး', lang: 'en' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const card = flashcards.find(c => c.id === id);
  if (!card) return res.status(404).json({ error: 'Not found' });

  if (req.method === 'GET') {
    res.status(200).json(card);
  } else if (req.method === 'PUT') {
    Object.assign(card, req.body);
    res.status(200).json(card);
  } else if (req.method === 'DELETE') {
    flashcards = flashcards.filter(c => c.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}