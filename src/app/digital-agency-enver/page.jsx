import styles from '../digital-agency-enver/page.module.css'

export const metadata = {
    title: 'Digital Agency Enver'
}

const Enver = () => {
    return (
        <div className={styles.main}>
            <div className={styles["logo-section"]}>
                <img className={styles.logo} src="/assets-digital-agency-enver/images/logo.svg" alt="Enver logo" />
                <img className={styles["menu-logo"]} src="/assets-digital-agency-enver/images/Sort.svg" alt="Menu logo" />
            </div>
        </div>
    )
}

export default Enver