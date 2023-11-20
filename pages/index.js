import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getData } from '@/utils/fetchData'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

export async function getServerSideProps(context) {
  const req = await getData('api/v1/events');
  const res = req.data;

  return {
    props: { data: res },
  };
}
