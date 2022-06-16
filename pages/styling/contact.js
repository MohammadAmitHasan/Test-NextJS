import styles from '../../styles/Contact.module.css'
import stylesSCSS from '../../styles/Contact.module.scss'

const Contact = () => {
    return <div className={styles.myHeading}>
        <h2>Muhammad Hasan</h2>

        <h2 className={stylesSCSS.mytestSCSSColor}>I am an Intern of Algo Solver LLC</h2>
    </div>;
};
export default Contact;