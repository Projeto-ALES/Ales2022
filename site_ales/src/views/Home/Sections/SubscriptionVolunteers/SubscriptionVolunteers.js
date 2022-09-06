import React from "react";
import Container from "../../../../components/Container/Container";
import ButtonIcon from "../../../../components/ButtonIcon/ButtonIcon";
import Alessauro from "../../../../assets/logos/alessauro.svg";
import styles from "./SubscriptionVolunteers.module.scss";
import {RiErrorWarningFill} from 'react-icons/ri'

const SubscriptionVolunteers = () => {
  return (
    <div className={styles.container} id="recrutamento">
      <Container>
        <div className={styles.icone}>
          <RiErrorWarningFill size={70}/>
        </div>
        <div className={styles.title}>
          <h3><b>As inscrições para voluntáries e alunes serão abertas em breve!</b></h3>
        </div>
        <div className={styles.subtitle}>
          <h4>O Projeto Ales está em fase de reestruturação para o segundo semestre de 2022.</h4>
        </div>
        <div className={styles.description}>
          <p>
            O Ales neste primeiro semestre de 2022 está se reestruturando internamente, com previsão de volta para o segundo semestre de 2022. Nos vemos em breve! :)
        
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.title}>
          <h3>
            <b>Áreas para voluntáries atuarem:</b>
          </h3>
        </div>
        <div className={styles.description}>

<p><b>Administrativo</b></p>
          <div className={styles.table}>
            <table>
              <tr>
                <td>Comunicação</td>
                <td></td>
                <td>Financeiro</td>
                <td></td>
                <td>Pessoas</td>
                <td></td>
                <td>TECH</td>
               
              </tr>
 </table>
</div>

  <p><b>Ensino</b></p>
     <div className={styles.table}>
    <table>
              <tr>
                <td>Desenho</td>
                <td></td>
                <td>Inglês</td>
                <td></td>
                <td>Humanidades</td>
                <td></td>
                <td>Matemática</td>
                <td></td>
                <td>Programação</td>
              </tr>
             
            </table>
          </div>

          </div>
        </Container >

{/*
<div className={styles.buttons}>
            <a
              className={styles.button}
              href="https://drive.google.com/file/d/1TAZaFTOWkym_cJJax4Jf2mfcLUrC0WJs/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonIcon text="Edital" kind="secondary" icon="far fa-file-alt" />
            </a>
          </div>          

<p>
            As inscrições vão até <b>28/01</b> e podem ser feitas pelo formulário a seguir:
            </p>

          <div className={styles.buttons}>
            <a
              className={styles.button}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCtFWbTMnEreqQ61mImHAmSoLH5euHQfrlWWCOtsYELt89Tw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonIcon text="Inscrição" kind="secondary" icon="far fa-file-alt" />
            </a>
          </div>


        
        <div className={styles.info}>
          <br></br>
          <p>Todo o processo ocorrerá de forma remota, assim como as atividades realizadas ao longo do semestre. <br></br>
          </p>
        </div>
      
    
  */}
   </div >
  )
}
export default SubscriptionVolunteers;
