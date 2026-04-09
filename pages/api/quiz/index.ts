import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: 1, question: 'What is Dog in Burmese?', answer: 'ခွေး' },
    { id: 2, question: 'What is Cat in Burmese?', answer: 'ကြောင်' }
  ]);
}