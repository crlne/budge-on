import { CompletedChallengs } from "../components/CompletedChallengs";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from "../components/ChallengeBox";

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/Home.module.css';
import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";



interface NomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: NomeProps) {

  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Inicio | Budge </title>
      </Head>

    <ExperienceBar />

    <CountdownProvider>
    <section>
       <div>
         <Profile />
         <CompletedChallengs />
         <Countdown />
       </div>
       <div>

       <ChallengeBox />
       </div>
    </section>
    </CountdownProvider>
  </div>
  </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps =  async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}