import styles from './MyProjectsItens.Module.css'

function MyProjectsItens ({photo, description}){
    return(
        <div className="myProjectsItens_content">

            <img src="https://via.placeholder.com/300"/>

            <p>
                {description}
            </p>

        </div>
    )
}

export default MyProjectsItens;