import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <a href="sign-in-nft">Sign-in-NFT</a>
      <a href="digital-agency-enver">Digital Agency Enver</a>
    </div>
  )
}
