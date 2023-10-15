import {connectDB} from "@/utils/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function List() {

  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {
        result.map((v, i) => {
          return (
            <div key={v._id.toHexString()} className="list-item">
              <Link href={`/detail/${v._id.toHexString()}`}>
                <h4>{v.title}</h4>
              </Link>
              <p>{v.content}</p>
            </div>
          );
        })
      }
    </div>
  );
}