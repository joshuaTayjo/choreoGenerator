import { connectToDatabase } from '../../util/mongodb';


export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(404).json({ status: 404, message: 'Bad Request' });
  const { db } = await connectToDatabase();
  const data = req.body;
  const result = await db.collection('generators').insertOne(data);
  console.log(result);
  res.status(201).json({ status: 201, message: 'Created successfully' });
}