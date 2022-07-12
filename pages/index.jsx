import Head from 'next/head';
import AudioPlayer from '../components/AudioPlayer';
import Border from '../components/Border';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Audio Player</title>
        <meta name='description' content='Custom audio player' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Border />
      <section>
        <AudioPlayer />
      </section>
    </main>
  );
}
