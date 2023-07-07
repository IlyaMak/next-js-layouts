import styles from '../digital-agency-enver/page.module.css'

export const metadata = {
    title: 'Digital Agency Enver'
}

const Enver = () => {
    return (
        <div className={styles.main}>
            <div className={styles.gradient + ' ' + styles["gradient--first"]}></div>
            <div className={styles.gradient + ' ' + styles["gradient--second"]}></div>
            <div className={styles.gradient + ' ' + styles["gradient--third"]}></div>
            <div className={styles.gradient + ' ' + styles["gradient--fourth"]}></div>
            <div className={styles["menu-section"]}>
                <img className={styles.logo} src="/assets-digital-agency-enver/images/logo.svg" alt="Enver logo" />
                <div className={styles["menu-section__container"]}>
                    <div className={`
                        ${styles["menu-section__item"]}
                        ${styles["menu-section__item--selected"]}
                    `}>
                        Home
                    </div>
                    <div className={styles["menu-section__item"]}>
                        Services
                    </div>
                    <div className={styles["menu-section__item"]}>
                        Our Project
                    </div>
                    <div className={styles["menu-section__item"]}>
                        Abous us
                    </div>
                </div>
                <img className={styles["menu-logo"]} src="/assets-digital-agency-enver/images/Sort.svg" alt="Menu logo" />
                <button className={styles.button + ' ' + styles["button--menu-contacts"]}>
                    Contact us
                </button>
            </div>
            <div className={styles["greeting-section"]}>
                <div className={styles["main__section"]}>
                    <div className={styles["main-header"]}>
                        Build Your Awesome Platform
                    </div>
                    <div className={styles["section-description"]}>
                        Enver studio is a digital studio that offers several services such as UI/UX Design to developers,
                        we will provide the best service for those of you who use our services.
                    </div>
                    <button className={styles.button + ' ' + styles["button--rectangle"]}>
                        Our Services
                        <img className={styles["click-button-logo"]} src="/assets-digital-agency-enver/images/arrow-right-up.svg" alt="Click button logo" />
                    </button>
                </div>
                <div className={styles["man-section"]}>
                    <img className={styles["vector-icon"] + ' ' + styles["vector-icon--man-section"]}
                        src="/assets-digital-agency-enver/images/Vector 13.svg" alt="Vector icon" />
                    <img className={styles["group-circle-icon"] + ' ' + styles["group-circle-icon--man-section"]}
                        src="/assets-digital-agency-enver/images/Group 162526.svg" alt="Group cirle icon" />
                    <img className={styles["group-play-icon"] + ' ' + styles["group-play-icon--man-section"]}
                        src="/assets-digital-agency-enver/images/Group 162527.svg" alt="Group play icon" />
                    <img className={styles["plus-icon"] + ' ' + styles["plus-icon--man-section"]} src="/assets-digital-agency-enver/images/add.svg"
                        alt="Plus icon" />
                    <img src="/assets-digital-agency-enver/images/man.png"
                        alt="Man" className={styles["man-section__image"]} />
                </div>
            </div>
            <div className={styles["video-section"]}>
                <div className={styles["video-section__description-container"]}>
                    <div className={styles["video-section__header"]}>
                        Why Enver Is The Best Choice?
                    </div>
                    <div className={styles["section-description"] + ' ' + styles["section-description--video"]}>
                        Watch this one minute video so you understand why you should use our services!
                    </div>
                </div>
                <div className={styles["video-section__container"]}>
                    <img className={styles["video-section__image"]} src="/assets-digital-agency-enver/images/image 4.png" alt="Video image" />
                    <button className={styles.button + ' ' + styles["ellipse-button"] + ' ' + styles["play-button"]}>
                        <img className={styles["play-icon"]} src="/assets-digital-agency-enver/images/Play.svg" alt="Play icon" />
                    </button>

                </div>
            </div>
            <div className={styles["features-section"]}>
                <div className={styles["features-section__header-container"]}>
                    <img className={styles["group-play-icon"] + ' ' + styles["group-play-icon--features-section"]}
                        src="/assets-digital-agency-enver/images/Group 162527.svg" alt="Group play icon" />
                    <img className={styles["plus-icon"] + ' ' + styles["plus-icon--small"] + ' ' + styles["plus-icon--features-section"]}
                        src="/assets-digital-agency-enver/images/add.svg" alt="Plus icon" />
                    <div className={styles["secondary-header"] + ' ' + styles["secondary-header--features"]}>
                        The Service We Provide For You
                    </div>
                </div>
                <div className={styles["features-section__containers"]}>
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
                <div className={styles["portfolio-section__header-container"]}>
                    <img className={styles["group-circle-icon"] + ' ' + styles["group-circle-icon--portfolio-section"]}
                        src="/assets-digital-agency-enver/images/Group 162526.svg" alt="Group cirle icon" />
                    <img className={styles["plus-icon"] + ' ' + styles["plus-icon--small"] + ' ' + styles["plus-icon--portfolio-section"]} src="/assets-digital-agency-enver/images/add.svg"
                        alt="Plus icon" />
                    <div className={styles["secondary-header"] + ' ' + styles["portfolio-header"]}>
                        Our Awesome Portofolio
                    </div>
                </div>
                <img className={styles["portfolio-section__image"]} src="/assets-digital-agency-enver/images/portfolio-image.svg" alt="Portfolio image" />
                <img className={styles["portfolio-section__image--responsive"]} src="/assets-digital-agency-enver/images/Group 162511.png" alt="Portfolio image" />
                <div className={styles["portfolio-section__footer"]}>
                    <div className={styles["portfolio-section__arrows-container"]}>
                        <button className={styles.button + ' ' + styles["ellipse-button"] + ' ' + styles["ellipse-button--disabled"]}>
                            <img src="/assets-digital-agency-enver/images/chevron-right.png" alt="Left arrow icon" />
                        </button>
                        <button className={styles.button + ' ' + styles["ellipse-button"] + ' ' + styles["ellipse-button--enabled"]}>
                            <img src="/assets-digital-agency-enver/images/chevron-right.png" alt="Right arrow icon" />
                        </button>
                    </div>
                    <div className={styles["portfolio-section__pagination"]}>
                        <img src="/assets-digital-agency-enver/images/Group 162512.svg" alt="Pagination icon" />
                    </div>
                    <img className={styles["vector-icon"] + ' ' + styles["vector-icon--portfolio-section"]}
                        src="/assets-digital-agency-enver/images/Vector 13.svg" alt="Vector icon" />
                </div>
            </div>
            <div className={styles["contacts-section"]}>
                <div className={styles["contacts-container"]}>
                    <div className={styles["secondary-header"] + ' ' + styles["contacts-header"]}>
                        Contact us for the service you want to use
                    </div>
                    <div className={styles["contacts-button-container"]}>
                        <button className={styles.button + ' ' + styles["button--rectangle"] + ' ' + styles["button--contacts"]}>
                            Contact us
                        </button>
                    </div>
                </div>
                <img className={styles["plus-icon"] + ' ' + styles["plus-icon--small"] + ' ' + styles["plus-icon--contacts-section"]}
                    src="/assets-digital-agency-enver/images/add.svg" alt="Plus icon" />
                <img className={styles["group-circle-icon"] + ' ' + styles["group-circle-icon--contacts-section"]}
                    src="/assets-digital-agency-enver/images/Group 162526.svg" alt="Group cirle icon" />
            </div>
            <div className={styles.footer}>
                <img className={styles.logo} src="/assets-digital-agency-enver/images/logo.svg" alt="Enver logo" />
                <div className={styles["footer__menu-items"]}>
                    <div className={styles["footer__item"]}>
                        Support
                    </div>
                    <div className={styles["footer__item"]}>
                        Privacy Policy
                    </div>
                    <div className={styles["footer__item"]}>
                        Terms And Conditions
                    </div>
                </div>
                <div className={styles.copyright}>
                    © 2020 Enver, All right reserved
                </div>
            </div>
        </div>
    )
}

export default Enver