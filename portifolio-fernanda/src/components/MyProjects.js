import styles from './myProjects.Module.css'
import MyProjectsItens from './MyProjectsItens'

function MyProjects(){
    return(
        <section className="myProjects">
            <div className="myProjects_content">
                <h2>Meus Trabalhos</h2>
                <div className="myProjects_text">

                    <MyProjectsItens description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                    <MyProjectsItens description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                    <MyProjectsItens description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                    
                </div>
            </div>

        </section>
    )
}

export default MyProjects;