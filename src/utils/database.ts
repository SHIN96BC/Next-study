import { MongoClient } from "mongodb";

const url = 'mongodb+srv://admin:qwer1234@clustertest.frvpc5y.mongodb.net/?retryWrites=true&w=majority';
const options = {};

// ### ts error 발생 ###
// MongoDB 공식문서에서 설명해준대로 작성했는데 아래와 같은 에러가 발생했습니다.
// ts7017: element implicitly has an any type because type typeof globalthis has no index signature.
// 해당 이슈가 발생하는 이유는 전역변수를 나타내는 global은 Condition에 제약을 받으면 안되는데 if문안에서 사용했기 때문이었습니다.
// 해당 이슈를 해결하기 위해서 global부분을 if문 밖으로 꺼냈습니다.
let globalWithMongo = global as typeof globalThis & {
  _mongo: Promise<MongoClient>;
}

let connectDB: Promise<MongoClient>;

// Next.js는 개발단계에서는 파일을 저장할 때 모든 Js파일에 있는 코드들을 전부 다시 읽고 지나가기 때문에
// 개발단계에서는 이미 생성된 MongoClient 객체를 재사용하도록 세팅해줍니다.
if (process.env.NODE_ENV === 'development') {
  if (!globalWithMongo._mongo) {
    globalWithMongo._mongo = new MongoClient(url, options).connect();
  }
  connectDB = globalWithMongo._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };