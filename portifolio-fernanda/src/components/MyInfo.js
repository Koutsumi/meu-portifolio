import styles from './MyInfo.Modules.css';
import Conhecimentos from './Conhecimentos'
import myPhoto from '../images/eu.jpg'

function MyInfo() {
  return (
    <section className="myInfo">
      <div className="myInfo_content">
        <div className="conhecimentos">
          <img src={myPhoto} alt="Fernanda" />

          <ul>

              <Conhecimentos ferramenta='HTML5' nivel='Intermediário' />
              <Conhecimentos ferramenta='CSS3' nivel='Intermediário' />
              <Conhecimentos ferramenta='JavaScript' nivel='Básico' />
              <Conhecimentos ferramenta='SQL' nivel='Básico' />
              <Conhecimentos ferramenta='WordPress' nivel='Intermediário' />
              <Conhecimentos ferramenta='Cypress' nivel='Básico' />

          </ul>
        </div>

        <div className="myInfo_text">
          <h1>Fernanda - QA Jr</h1>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </p>

          <a href="" download="">
            Meu CV - Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyInfo;
