import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
          backgroundImage: `url("./NYE-Web-Page.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></main>

      <a
        className="inline-block px-6 pt-2 pb-3 mt-4 no-underline bg-purple-600 rounded"
        href="https://www.axs.com/events/410688/beats-antique-tickets?skin=showboxpresents&src=AEGLIVE_WSHBXSEA030115VEN001"
      >
        Buy Tickets
      </a>

      <div className="py-32 space-y-32">
        <section className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-5xl">About Flowmotion</h2>
          <p>
            {`Founded with the sole mission to make people move to the music.
            Flowmotion is a live band experience that pushes all genre
            boundaries. Their music can harness the inspiration to unite
            audiences from all walks through the language of music.`}
          </p>
          <p>
            {`The group's typical formation starts as a 5 piece group led by
            singer-guitarist Joshua Clauson. The lineup always features drums, a
            percussionist extraordinaire, bass, lead guitar, and often times
            keyboards. Clauson assembles high-caliber musicians to indulge and
            explore live improv realms through the framework of Flowmotion
            songs. All songs lead to amoment of free-form expression in some way
            for all.`}
          </p>
          <div className="flex gap-4 mt-8">
            <Link href="https://www.facebook.com/Flowmotionseattle/">
              <a className="flex items-center px-4 py-2 text-white transition rounded-sm shadow-md hover:no-underline backdrop-filter backdrop-blur backdrop-contrast-50">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="inline-block w-10 pr-2"
                />{" "}
                Follow us on Facebook
              </a>
            </Link>

            <Link href="https://www.instagram.com/funkyflowmotion/">
              <a className="flex items-center px-4 py-2 text-white transition rounded-sm shadow-md hover:no-underline backdrop-filter backdrop-blur backdrop-contrast-50">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="inline-block w-10 pr-2"
                />{" "}
                Follow us on Instagram
              </a>
            </Link>
          </div>
        </section>

        <section className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-5xl">Contact Us</h2>
          <p>
            <Link href="mailto:booking@flowmotionmusic.com">
              <a title="Email us at booking@flowmotionmusic.com">
                booking@flowmotionmusic.com
              </a>
            </Link>
          </p>
        </section>

        <section className="max-w-2xl mx-auto space-y-6" id="shows">
          <h2 className="mb-8 text-5xl">Upcoming Shows</h2>
          <ul className="space-y-4">
            <li className="p-8 space-y-4 bg-gray-700 rounded-sm">
              <h3 className="text-3xl">Showbox Sodo</h3>
              <p>
                {`Join us on Saturday for an epic halloween party at Remlinger Brewing! We'll be playing with Panda Conspiracy Horns, Mctuff, Cytrus, and Chris Poage Band. All ages, brewery & restaurant, costume contest and amazing prizes. Don't miss out!`}
              </p>
              <p className="mt-4">
                <span className="inline-block w-20 font-bold">When:</span>
                Friday, December 31st, 2021
              </p>
              <p>
                <span className="inline-block w-20 font-bold">Where:</span>
                <a href="https://www.google.com/maps/place/Showbox+SoDo/@47.5879112,-122.3339439,15z/data=!4m2!3m1!1s0x0:0x61d788774d165072?sa=X&ved=2ahUKEwjX28LmkuX0AhX3IjQIHWd-DYsQ_BJ6BAhAEAU">
                  1700 1st Ave S, Seattle, WA 98134
                </a>
              </p>
              <a
                className="inline-block px-6 pt-2 pb-3 no-underline bg-purple-600 rounded"
                href="https://www.axs.com/events/410688/beats-antique-tickets?skin=showboxpresents&src=AEGLIVE_WSHBXSEA030115VEN001"
              >
                Buy Tickets
              </a>
            </li>
          </ul>
        </section>

        <section className="max-w-2xl mx-auto space-y-6">
          <h2 className="mb-8 text-5xl">Is That Right</h2>
          <ul>
            <li className="flex items-center">
              <Image
                src="/is-that-right-cropped.jpg"
                alt="Albumn art for Is That Right by Flowmotion"
                width="300"
                height="300"
              />
              <div className="flex flex-col ml-8">
                <Link href="https://open.spotify.com/album/1ZmrAA9sR5ppqxgMWcPopy">
                  <a
                    title="Listen on Spotify"
                    className="flex items-center my-4"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="inline-block pr-4 w-14"
                    />
                    <h3 className="inline-block text-3xl">Spotify</h3>
                  </a>
                </Link>
                <Link href="https://music.apple.com/us/album/is-that-right/260843815">
                  <a
                    title="Listen on Apple Music"
                    className="flex items-center my-4"
                  >
                    <FontAwesomeIcon
                      icon={faApple}
                      className="inline-block pr-4 w-14"
                    />
                    <h3 className="inline-block text-3xl">Apple Music</h3>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <footer className="my-8 text-sm">
        &copy; Flowmotion 2021 |{" "}
        <Link href="mailto:booking@flowmotionmusic.com">
          <a title="Email us at booking@flowmotionmusic.com">
            booking@flowmotionmusic.com
          </a>
        </Link>
      </footer>
    </div>
  );
}
