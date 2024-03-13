import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../../src/styles/yellow.module.scss"

function Yellowdet({yellow }) {
  return (
    <div className={`${styles.cover}  ${styles["item-a"]}`}>
        <Image src={yellow.image} 
        width={220} height={300} style={{borderRadius:"10px"}} loading="lazy"/>
        <h3>{yellow.name}</h3>
      </div>
  )
}

export default Yellowdet