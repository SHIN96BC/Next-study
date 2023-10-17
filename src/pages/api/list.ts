import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find().toArray();

    res.status(200).json(result);
  }
}