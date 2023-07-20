import styles from "../sign-in-nft/page.module.css";
import Head from "next/head";
import globalStyles from "../../app/style.global";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>PNFT Market</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={styles.main}>
        <div className={styles["logo-container"]}>
          <img src="/assets-sign-in-nft/images/Frame.svg" alt="PNFT Market" />
          <div className={styles["logo-text"]}>PNFT Market</div>
        </div>
        <div className={styles["sign-in-container"]}>
          <div className={styles["responsive-logo-container"]}>
            <img src="/assets-sign-in-nft/images/Frame.svg" alt="PNFT Market" />
            <div className={styles["logo-text"]}>PNFT Market</div>
          </div>
          <div className={styles["sign-in-form"]}>
            <div className={styles["headline-container"]}>
              <div className={styles["headline-text"]}>NFT Access</div>
              <div className={styles["hint-text"]}>
                Please fill your detail to access your account.
              </div>
            </div>
            <div className={styles["email-container"]}>
              <div className={styles["input-label"]}>Email</div>
              <div className={styles["input-content"]}>
                <input
                  className={styles["input"]}
                  type="text"
                  placeholder="debra.holt@example.com"
                />
                <img
                  className={styles["input-image"]}
                  src="/assets-sign-in-nft/images/X Icon.svg"
                  alt="Email input"
                />
              </div>
            </div>
            <div className={styles["password-container"]}>
              <div className={styles["input-label"]}>Password</div>
              <div className={styles["input-content"]}>
                <input
                  className={styles["input"]}
                  type="password"
                  value="12345678"
                />
                <img
                  className={styles["input-image"]}
                  src="/assets-sign-in-nft/images/Hide Icon.svg"
                  alt="Email input"
                />
              </div>
            </div>
            <div className={styles["remember-me-container"]}>
              <div className={styles["remember-me-section"]}>
                <input
                  type="checkbox"
                  className={styles["remember-me-section__checkbox"]}
                  id="checkbox"
                />
                <label
                  className={styles["remember-me-section__text"]}
                  htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <a href="" className={styles.link}>
                Forgot Password?
              </a>
            </div>
            <button
              className={
                styles["sign-in-button"] +
                " " +
                styles["sign-in-button--primary"]
              }>
              Sign in
            </button>
            <button
              className={
                styles["sign-in-button"] +
                " " +
                styles["sign-in-button--google"]
              }>
              <img
                className={styles["sign-in-button__image"]}
                src="/assets-sign-in-nft/images/Google.svg"
                alt="Google icon"
              />
              Sign in with Google
            </button>
            <div className={styles["register-section"]}>
              Don&apos;t have an account?{" "}
              <a className={styles.link} href="">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className={styles["credits-container"]}>@CreatedbyNAMDesign</div>
        <div className={styles["image-section"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles["image-container__image"]}
              src="/assets-sign-in-nft/images/DRIP_20.png"
              alt="PNFT Market"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
