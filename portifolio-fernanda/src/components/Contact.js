import styles from './Contact.Module.css'
import ContactLinks from './ContactLinks'

function Contact(){
    return(
        <section className="contact">

            <div className="contact_content">
                <div className="socialLinks">

                    <ContactLinks logoLinks='https://via.placeholder.com/40'/>
                    <ContactLinks logoLinks='https://via.placeholder.com/40'/>
                    <ContactLinks logoLinks='https://via.placeholder.com/40'/>

                </div>
            </div>

        </section>

    )
}

export default Contact