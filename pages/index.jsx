import Head from 'next/head';
import AudioPlayer from '../components/AudioPlayer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Audio Player</title>
        <meta name='description' content='Custom audio player' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <AudioPlayer />
      </main>
    </div>
  );
}
