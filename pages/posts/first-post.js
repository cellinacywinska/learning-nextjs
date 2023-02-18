import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={utilStyles.headingMd}>Hi. This is my first post. Today is Feb 17th 2023 and I am learning Next.js.
                I hope to use it in my senior thesis.</h1>
        </Layout>
    )
}