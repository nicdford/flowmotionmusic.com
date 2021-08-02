import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flowmotion Music | Seattle, WA</title>
        <meta
          name="description"
          content="Official site for Flowmotion Music based out of Seattle, WA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        style={{
          backgroundImage: `url("./Flowmotion_photo_Kevin_Lowdon.jpg")`,
          backgroundColor: "red",
        }}
      >
        <h1 className={styles.title}>Flowmotion</h1>
        <p>
          Follow us on{" "}
          <a href="https://www.facebook.com/Flowmotionseattle/">Facebook</a>
        </p>
      </main>

      <section className={styles.reader}>
        <h2>Upcoming Shows</h2>
        <ul>
          <li>
            <h3>Seattle Waterfront</h3>
            <p>
              {" "}
              {`We're`} so excited to announce our first show back in over a
              year. Join us for a FREE concert on the Seattle waterfront. Big
              thanks to Downtown Seattle Association for hosting! Dust off them
              dancing shoes. {`We're`} back!!! Showtime is 5:00pm, all ages
              welcome!
            </p>
            <p>Saturday, August 7th, 2021</p>
            <p>Pier 62 Downtown</p>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>&copy; Flowmotion 2021</footer>
    </div>
  );
}
