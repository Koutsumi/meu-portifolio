import styles from './ContactLinks.Module.css'

function ContactLinks ({logoLinks, links}){
    return(
        <>

        <a href={links}><img className="logo_img" src={logoLinks}/></a>

        </>
    )
}

export default ContactLinks