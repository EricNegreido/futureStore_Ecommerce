"use client"

import Image from "next/image";
import styles from './description.module.sass';
import { useState } from "react";
import classNames from 'classnames/bind';

export const Description = () => {

  const [border, setBorder] = useState(false);

  function handleClick () {
    setBorder(!border);
  }

  const cx = classNames.bind(styles)

  const buttonStyles = cx('description_Button', {
    'description_Button--border': border
  }) 


  return (
    <section className={styles.description}>

      <button onClick={handleClick} className={buttonStyles}>

        <div className={styles.description_ImageContainer}>

          <Image
            src="/img/one-piece.jpg"
            alt="luffy"
            fill />

        </div>
        
      </button>

      <div>
        <h1> The king of pirates</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos quaerat iste hic dolores? Suscipit?</p>
      </div>
    </section>

  )
}