import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'
import DB from '@database'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await enablePublicAccess(req, res)
    const db = new DB()
    const allEntries = await db.getAll()
    res.status(200).json({ data: allEntries, length: allEntries.length })
  } catch (error) {
    console.log(error)
    res.status(500)
  }
}
export default allAvos
