import { NextApiRequest, NextApiResponse } from 'next'

import DB from '@database'

const getAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.id
  const avocado = await db.getById(id as string)

  res.status(200).json(avocado)
}
export default getAvo
