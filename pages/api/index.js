import prisma from '@/lib/prisma'

import generateUrl from '../../generateUrl'

import { apiUrlSchema } from '@/validations/ApiUrlValidation'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'Method not allowed!' })
  } else {
    const { error, value } = apiUrlSchema.validate(req.body)

    const { code } = generateUrl()

    try {
      if (error) {
        res.status(400).json({ error: 'Field must be filled out' })
      } else {
        const newUrl = await prisma.url.create({
          data: {
            originalUrl: value.originalUrl,
            code: code,
          },
        })
        res.status(200).json(newUrl)
      }
    } catch (error) {
      res.status(500).json({ error: 'Error', error })
    }
  }
}
