import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    username: 'student',
    exp: 1120,
    level: 5,
    questsCompleted: 13
  });
}