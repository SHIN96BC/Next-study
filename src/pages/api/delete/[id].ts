import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === 'DELETE') {

    console.log('req = ', req.query.id);

    const id = req.query.id;

    if (!id) return res.status(400).json('삭제할 게시물 id 없음');

    try {
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount > 0) {
        // return res.status(200).json('OK');
        res.status(200).json('삭제 완료');
      } else {
        res.status(500).json('삭제 실패');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}