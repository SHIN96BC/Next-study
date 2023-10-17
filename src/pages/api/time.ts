export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const today = new Date();

    const year: number  = today.getFullYear();
    const month: number = today.getMonth() + 1;
    const date: number = today.getDate();
    const hours: number = today.getHours();
    const min: number = today.getMinutes();
    const sec: number = today.getSeconds();

    let result = year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec;

    res.status(200).json(result);
  }
}