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
            <div className={styles["main__section"]}>
                <div className={styles["main-header"]}>Build Your Awesome Platform</div>
                <div className={styles.description}>
                    Enver studio is a digital studio that offers several services such as UI/UX Design to developers,
                    we will provide the best service for those of you who use our services.
                </div>
                <button className={styles.button + ' ' + styles["button--rectangle"]}>
                    Our Services
                    <img className={styles["click-button-logo"]} src="/assets-digital-agency-enver/images/arrow-right-up.svg" alt="Click button logo" />
                </button>
                <img src="/assets-digital-agency-enver/images/young-attractive-handsome-guy-feels-delighted-gladden-amazed-min_ccexpress 1.png"
                    alt="Man" className={styles["man-image"]} />
                <div className={styles["secondary-header"]}>
                    Why Enver Is The Best Choice?
                </div>
                <div className={styles.description}>
                    Watch this one minute video so you understand why you should use our services!
                </div>
                <div className={styles["video-image-container"]}>
                    <img className={styles["video-image"]} src="/assets-digital-agency-enver/images/image 4.png" alt="Video image" />
                    <img className={styles["play-icon"]} src="/assets-digital-agency-enver/images/Play.svg" alt="Play icon" />
                </div>
                <div className={styles["secondary-header"]}>
                    The Service We Provide For You
                </div>
                <div className={styles["features-section"]}>
                    <div className={styles["features-section__container"]}>
                        <img className={styles["features-section__image"]} src="/assets-digital-agency-enver/images/development-icon.svg" alt="Development icon" />
                        <div className={styles["features-section__header"]}>
                            Development
                        </div>
                        <div className={styles["features-section__description"]}>
                            Create a platform with the best and coolest quality from us.
                        </div>
                    </div>
                    <div className={styles["features-section__container"]}>
                        <img className={styles["features-section__image"]} src="/assets-digital-agency-enver/images/ui-ux-icon.svg" alt="UI/UX icon" />
                        <div className={styles["features-section__header"]}>
                            UI/UX Designer
                        </div>
                        <div className={styles["features-section__description"]}>
                            We provide UI/UX Design services, and of course with the best quality
                        </div>
                    </div>
                    <div className={styles["features-section__container"]}>
                        <img className={styles["features-section__image"]} src="/assets-digital-agency-enver/images/graphik-designer-icon.svg" alt="Graphik designer icon" />
                        <div className={styles["features-section__header"]}>
                            Graphik Designer
                        </div>
                        <div className={styles["features-section__description"]}>
                            We provide Graphic Design services, with the best designers
                        </div>
                    </div>
                    <div className={styles["features-section__container"]}>
                        <img className={styles["features-section__image"]} src="/assets-digital-agency-enver/images/motion-graphik-icon.svg" alt="Motion graphik icon" />
                        <div className={styles["features-section__header"]}>
                            Motion Graphik
                        </div>
                        <div className={styles["features-section__description"]}>
                            Create a platform with the best and coolest quality from us.
                        </div>
                    </div>
                    <div className={styles["features-section__container"]}>
                        <img className={styles["features-section__image"]} src="/assets-digital-agency-enver/images/photography-icon.svg" alt="Photography icon" />
                        <div className={styles["features-section__header"]}>
                            Photography
                        </div>
                        <div className={styles["features-section__description"]}>
                            We provide Photography services, and of course with the best quality
                        </div>
                    </div>
                    <div className={styles["features-section__container"]}>
                        <img className={styles["features-section__image"]} src="/assets-digital-agency-enver/images/videography-icon.svg" alt="Videography icon" />
                        <div className={styles["features-section__header"]}>
                            Videography
                        </div>
                        <div className={styles["features-section__description"]}>
                            Create a platform with the best and coolest quality from us.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["portfolio-section"]}>
                <div className={styles["secondary-header"] + ' ' + styles["portfolio-section__header"]}>
                    Our Awesome Portofolio
                </div>
                <img className={styles["portfolio-section__image"]} src="/assets-digital-agency-enver/images/portfolio-image.svg" alt="Portfolio image" />
                <div className={styles["portfolio-section__arrows-container"]}>
                    <button className={styles.button + ' ' + styles["ellipse-button"]}>
                        <img src="/assets-digital-agency-enver/images/chevron-right.png" alt="Left arrow icon" />
                    </button>
                    <button className={styles.button + ' ' + styles["ellipse-button"] + ' ' + styles["ellipse-button--enabled"]}>
                        <img src="/assets-digital-agency-enver/images/chevron-right.png" alt="Right arrow icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Enver