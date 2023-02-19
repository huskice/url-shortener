import prisma from '@/lib/prisma'

export default async function (req, res) {
  if (req.method === 'GET') {
    const { code } = req.query
    try {
      const url = await prisma.url.findUnique({ where: { code: code } })
      res.status(200).redirect(url.originalUrl)
    } catch (e) {
      res.status(500).json({ e: 'Oh no, something went wrong!' })
    }
  } else {
    res.status(500).json({ message: 'Method not allowed!' })
  }
}
