// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  let myblog;
  let allblogs = []
  for (let index = 0; index < data.length; index++) {
    const item  = data[index]
    myblog = await fs.promises.readFile(('blogdata/'+ item),'utf-8')
    allblogs.push(JSON.parse(myblog))
  }
  res.status(200).json(allblogs)
}
