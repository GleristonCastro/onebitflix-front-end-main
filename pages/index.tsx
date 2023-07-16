import Head from 'next/head';
import style from '../styles/HomeNoAtuth.module.scss';
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth';
import PresentationSection from '@/src/components/homeNoAuth/presentationSection';
import CardsSection from '@/src/components/homeNoAuth/cardsSection';

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
      <div className={style.sectionBackground}>
        <HeaderNoAuth />
        <PresentationSection />
      </div>
      <CardsSection />
    </main>
    </>
  );
};

export default HomeNoAuth;