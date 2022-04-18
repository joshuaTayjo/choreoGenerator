import type { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../components/navbar';
import labanStyles from '../styles/Laban.module.css';
import homeStyles from '../styles/Home.module.css';

const Laban: NextPage = (): JSX.Element => {
  const efforts = {
    direction: ['direct', 'indirect'],
    weight: ['heavy', 'light'],
    speed: ['quick', 'sustained'],
    flow: ['bound', 'free']
  };
  const levels = ['low', 'medium', 'high', 'in the air'];

  const generator = () => {
    const direction = efforts.direction[Math.floor(Math.random() * efforts.direction.length)];
    const weight = efforts.weight[Math.floor(Math.random() * efforts.weight.length)];
    const speed = efforts.speed[Math.floor(Math.random() * efforts.speed.length)];
    const flow = efforts.flow[Math.floor(Math.random() * efforts.flow.length)];
    const level = levels[Math.floor(Math.random() * levels.length)];
    return { direction, weight, speed, flow, level };
  };

  const createResults = () => {
    const resObj = generator();
    setGenText(`<p>
    Weight: ${resObj.weight}<br>
    Speed: ${resObj.speed}<br>
    Flow: ${resObj.flow}<br>
    Level: ${resObj.level}</p>`);
  };

  const [genText, setGenText] = useState('<p>Results will appear here!</p>');

  const createMarkup = () => {
    return { __html: genText };
  };
  return (
    <div className={homeStyles.main}>
      <Navbar />
      <h1 className={homeStyles.title}>Laban Generator</h1>
      <p className={labanStyles.subtext}>Use to generate results for each of the four movement types and a level to move in</p>
      <div className={labanStyles.results} dangerouslySetInnerHTML={createMarkup()} />
      <button className={labanStyles.button} onClick={createResults}>Generate</button>
    </div>
  );
};

export default Laban;

