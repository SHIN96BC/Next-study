import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {

    if (!req.body.title || !req.body.content) {
      return res.status(400).json('글제목과 내용은 필수입니다.');
    }

    console.log('req.body = ', req.body);

    try {
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').updateOne(
        {_id: new ObjectId(req.body._id)},
        {
          // $inc === 증감
          $set: { title: req.body.title, content: req.body.content},
          $currentDate: { lastModified: true },
        },
      );

      if (result.modifiedCount > 0) {
        res.redirect(302, `/detail/${req.body._id}`);
      } else {
        res.status(500).json('글 수정 실패');
      }

    } catch (error) {
      console.log(error);
      res.status(500).json('글 수정중 오류발생');
    }

  }
}