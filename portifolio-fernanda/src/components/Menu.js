import React, {useState} from 'react'
import styles from './Menu.Module.css'
import stylesMobile from './MenuMobile.Module.css'


function Menu (){

    return (

        <section>
            <div className="menuContent">
                <img src="https://via.placeholder.com/50" />
                <nav>
                    <ul className="menu">
                        <li><a href="">Meus trabalhos</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">CV</a></li>
                        
                    </ul>
                </nav>
            </div>
        </section>

    )
}

export default Menu;