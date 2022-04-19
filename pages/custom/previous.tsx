import { NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';
import { connectToDatabase } from '../../util/mongodb';

// @ts-ignore
const Previous: NextPage = function({ list }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (<div>
    {list[0].cats[0]}  </div>);
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const list = await db.collection('collection').find({}).toArray();
  return {
    props: {
      list: JSON.parse(JSON.stringify(list))
    }
  };
}

export default Previous;
