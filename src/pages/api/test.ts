export default function handler(request: any, response: any) {

  if (request.method === 'POST') {
    response.status(200).json('POST 처리완료');
  } else if (request.method === 'GET') {
    response.status(200).json('GET 처리완료');
  }
}