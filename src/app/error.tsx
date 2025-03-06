"use client"

import Image from 'next/image';
import styles from 'app/sass/global-error.module.sass';

export default function GlobalError ({reset}: ErrorPageProps) {
  return(
    <main className={styles.Error}>
      <h1 className={styles.Error__title}> Ha ocurrido un error </h1>
      <Image 
      src='/img/error.png'
      width={500}
      height={500}
      alt='error'/>
      <p className={styles.Error__message}> Ups, Al parece ha ocurrido un error </p>
      <button className={styles.Error__button} onClick={reset}> Reintentar </button>
    </main>
  )
}