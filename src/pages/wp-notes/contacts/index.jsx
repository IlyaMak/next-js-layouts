import styles from "./page.module.css";
import cnCommon from "../../../modules/classname";
import Layout from "../../../components/wp-notes/layout/layout";

const cn = cnCommon.bind(null, styles);

function Body() {
  return (
    <div className={styles.body}>
      <div className={cn("form")}>
        <div className={cn("header-text")}>Contact Us</div>
        <div className={cn("label")}>Name*</div>
        <input className={cn("input")} type="text" />
        <div className={cn("label")}>Email Address*</div>
        <input className={cn("input")} type="text" />
        <div className={cn("label")}>Your message*</div>
        <textarea className={cn("input", "input--comment")} type="text" />
        <div className={cn("form__button-container")}>
          <button className={cn("button")}>Send</button>
        </div>
      </div>
      <div className={cn("contacts-container")}>
        <div className={cn("contacts")}>
          <div className={cn("contacts__text", "contacts__text--header")}>
            Project Inquiries
          </div>
          <div className={cn("contacts__text", "contacts__text--content")}>
            hello@ cvatina.com
          </div>
          <div className={cn("contacts__text", "contacts__text--content")}>
            754.765.8373
          </div>
        </div>
        <div className={cn("contacts")}>
          <div className={cn("contacts__text", "contacts__text--header")}>
            Office
          </div>
          <div className={cn("contacts__text", "contacts__text--content")}>
            7653 sea Ave, Suite A
          </div>
          <div className={cn("contacts__text", "contacts__text--content")}>
            North Charleston, Sc 87350
          </div>
        </div>
      </div>
    </div>
  );
}

const Notes = () => {
  return (
    <Layout headTitle="Contacts">
      <Body />
    </Layout>
  );
};

export default Notes;
