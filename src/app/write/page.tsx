export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/write" method="POST">
        <div>
          <p>제목</p>
          <input name="title" type="text" placeholder="글제목" />
        </div>
        <div>
          <p>내용</p>
          <textarea name="content" placeholder="글내용" />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}