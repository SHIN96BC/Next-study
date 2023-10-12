import {connectDB} from "@/utils/database";

export default async function List() {

  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {
        result.map((v, i) => {
          return (
            <div key={i} className="list-item">
              <h4>{v.title}</h4>
              <p>{v.content}</p>
            </div>
          );
        })
      }
    </div>
  );
}