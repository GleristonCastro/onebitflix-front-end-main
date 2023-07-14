import Head from 'next/head';
import style from '../styles/HomeNoAtuth.module.scss';
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth';

const HomeNoAuth = () => {
  return (
    <>
    <Head>
      <title>OneBitFlix</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <meta property="og:title" content="Onebitflix" key="title" />
      <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."/>
    </Head>
    <main>
      <HeaderNoAuth />
    </main>
    </>
  );
};

export default HomeNoAuth;