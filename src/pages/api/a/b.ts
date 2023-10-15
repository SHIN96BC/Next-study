export default function handler(request: any, response: any) {
  return response.status(200).json('api/a/b 처리완료');
}