import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi! My name is Celina and I am a third year Computer Science student. I am majoring in Databases. I hope to become a full stack engineer :)</p>
          <p>
            (This is a sample website - build using {' '}
            <a href="https://nextjs.org/learn">a Next.js tutorial</a>.)
          </p>
            <h1>
                <Link href="/posts/first-post">Go see my first post</Link>
            </h1>
        </section>
      </Layout>
  );
}