import styles from '../sign-in-nft/page.module.css'

export const metadata = {
    title: 'PNFT Market'
}

const SignIn = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <img src="/assets-sign-in-nft/images/Frame.svg" alt="PNFT Market" />
                <div className={styles.logoText}>PNFT Market</div>
            </div>
            <div className={styles.signInContainer}>
                <div className={styles.logoContainerResponsive}>
                    <img src="/assets-sign-in-nft/images/Frame.svg" alt="PNFT Market" />
                    <div className={styles.logoText}>PNFT Market</div>
                </div>
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
                            <img className={styles.inputImage} src="/assets-sign-in-nft/images/X Icon.svg" alt="Email input" />
                        </div>
                    </div>
                    <div className={styles.passwordContainer}>
                        <div className={styles.inputLabel}>
                            Password
                        </div>
                        <div className={styles.inputContent}>
                            <input type="password" className={styles.input} />
                            <img className={styles.inputImage} src="/assets-sign-in-nft/images/Hide Icon.svg" alt="Email input" />
                        </div>
                    </div>
                    <div className={styles.rememberMeContainer}>
                        <div className={styles.rememberMeSection}>
                            <input type="checkbox" className={styles.inputCheckbox} />
                            <div className={styles.rememberMeText}>Remember Me</div>
                        </div>
                        <a href='' className={styles.forgotPasswordText}>Forgot Password?</a>
                    </div>
                    <button className={styles.signInButton}>
                        Sign in
                    </button>
                    <button className={styles.googleSignInButton}>
                        <img className={styles.googleImage} src="/assets-sign-in-nft/images/Google.svg" alt="Google icon" />
                        Sign in with Google
                    </button>
                    <div className={styles.registerSection}>
                        Don&apos;t have an account? <a className={styles.signUpText} href="">Sign up</a>
                    </div>
                </div>
            </div>
            <div className={styles.creditsContainer}>
                @CreatedbyNAMDesign
            </div>
            <div className={styles.imageMainSection}>
                <div className={styles.imageColorfulSection}>
                    <img src="/assets-sign-in-nft/images/DRIP_20.png" className={styles.marketImage} alt="PNFT Market" />
                </div>
            </div>
        </div>
    )
}

export default SignIn