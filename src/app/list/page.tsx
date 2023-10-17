import {connectDB} from "@/utils/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";
import ListItem from "@/app/list/ListItem";

export default async function List() {

  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {
        result.map((v, i) => {
          return (
            <ListItem key={v._id.toHexString()} _id={v._id.toHexString()} title={v.title} content={v.content} />
          );
        })
      }
    </div>
  );
}