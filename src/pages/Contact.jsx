import st from '../styles/App.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'
import useScrollReveal from '../hooks/useScrollReveal'

function Contact() {
    const [ref, visible] = useScrollReveal();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, this would send the form data to a server
        alert('Thank you for your message! I\'ll get back to you soon.');
        e.target.reset();
    };

    return (
        <div id='contacts' className={st.container}>
            <div ref={ref} className={`${st.reveal} ${visible ? st.visible : ''}`}>
                <h2>Contact</h2>
                <div className={st.contactGrid}>
                    <div className={st.contactInfo}>
                        <h3>Let's Connect</h3>
                        <p>Feel free to reach out if you'd like to collaborate or just say hello!</p>
                        
                        <div className={st.contactDetails}>
                            <div className={st.contactItem}>
                                <FontAwesomeIcon icon={faEnvelope} className={st.icon} />
                                <a href="mailto:limbujimmy1@gmail.com">limbujimmy1@gmail.com</a>
                            </div>
                            <div className={st.contactItem}>
                                <FontAwesomeIcon icon={faPhone} className={st.icon} />
                                <a href="tel:+85254980873">+852 5498 0873</a>
                            </div>
                            <div className={st.contactItem}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={st.icon} />
                                <span>Mong Kok, Hong Kong</span>
                            </div>
                        </div>

                        <div className={st.socialLinks}>
                            <a href="https://github.com/jlimbu1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} className={st.socialIcon} />
                            </a>
                            <a href="https://linkedin.com/in/jimmy-limbu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} className={st.socialIcon} />
                            </a>
                            <a href="https://twitter.com/jimmy_limbu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} className={st.socialIcon} />
                            </a>
                        </div>
                    </div>

                    <div className={st.contactForm}>
                        <form className={st.form} onSubmit={handleSubmit}>
                            <div className={st.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className={st.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className={st.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                            <div className={st.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className={st.submitButton}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;