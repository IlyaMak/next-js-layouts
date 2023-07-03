import styles from '../sign-in-nft/page.module.css'

const SignIn = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <img src="/assets-sign-in-nft/Frame.svg" alt="PNFT Market" />
                <div className={styles.logoText}>PNFT Market</div>
            </div>
            <div className={styles.signInContainer}>
                <div className={styles.signInForm}>
                    <div className={styles.headlineContainer}>
                        <div className={styles.headlineText}>
                            NFT Access
                        </div>
                        <div className={styles.hintText}>
                            Please fill your detail to access your account.
                        </div>
                    </div>
                    <div className={styles.emailContainer}>
                        <div className={styles.inputLabel}>
                            Email
                        </div>
                        <div className={styles.inputContent}>
                            <input type="text" className={styles.input} />
                            <img className={styles.inputImage} src="/assets-sign-in-nft/X Icon.svg" alt="Email input" />
                        </div>
                    </div>
                    <div className={styles.passwordContainer}>
                        <div className={styles.inputLabel}>
                            Password
                        </div>
                        <div className={styles.inputContent}>
                            <input type="password" className={styles.input} />
                            <img className={styles.inputImage} src="/assets-sign-in-nft/Hide Icon.svg" alt="Email input" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn