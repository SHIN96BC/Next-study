import {connectDB} from "@/utils/database";
import {ObjectId} from 'mongodb';

export default async function Detail(props: any) {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
  console.log(result)

  return (
    <div>
      {
        result ?
          <>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
          </>
          :
          <h4>페이지가 존재하지 않습니다.</h4>
      }
    </div>
  );
}