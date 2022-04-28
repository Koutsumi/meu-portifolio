import React, {useState} from 'react'
import styles from './MenuMobile.Module.css'
import imageMenu from '../images/menu.png'

function MenuMobile(){

    const [menu, setMenu] = useState(false)
    const toggle = () => {
        if(!menu){
            setMenu(true)
        }
        else{
            setMenu(false)
        }
    }

    return(

        <section className="menuMobile">
            <img  src = {imageMenu} onClick={toggle} />
            <div className="menuMobile_content" style={{display: menu ? 'flex' : 'none'}} >
                <div className="closeMenu">

                </div>
                <nav>
                    <ul>
                        <li><a href="">Meus trabalhos</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">CV</a></li>
                    </ul>
                </nav>

            </div>
        </section>

    )
}

export default MenuMobile;