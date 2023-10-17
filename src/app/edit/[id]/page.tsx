import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";

export default async function Edit(props: any) {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').findOne({ _id: new ObjectId((props.params.id)) });

  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form action="/api/edit" method="POST">
        <input type="hidden" name="_id" defaultValue={ result?._id && result._id.toHexString() } />
        <div>
          <p>제목</p>
          <input name="title" type="text" defaultValue={ result && result.title } placeholder="글제목" />
        </div>
        <div>
          <p>내용</p>
          <textarea name="content" defaultValue={ result && result.content } placeholder="글내용" />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}