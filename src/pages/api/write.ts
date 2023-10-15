import {connectDB} from "@/utils/database";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {

    if (!req.body.title || !req.body.content) {
      return res.status(400).json('글제목과 내용은 필수입니다.');
    }

    try {
      const db = (await connectDB).db('forum');
      // const result = await db.collection('post').insertMany(req.body);
      const result = await db.collection('post').insertOne(req.body);

      if (result.insertedId) {
        // 302 === redirect
        return res.redirect(302, '/list');
      } else {
        return res.status(500).json('글 작성중 오류발생');
      }
    } catch (error) {
      return res.status(500).json('글 작성중 오류발생');
    }
  }
}