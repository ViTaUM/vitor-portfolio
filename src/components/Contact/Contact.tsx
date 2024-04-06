import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contato</h2>
        <p>Pronto para começar seu projeto? </p>
        <p>Contate-me agora para uma consulta gratuita.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:vitaum.alves@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:vitaum.alves@gmail.com">vitaum.alves@gmail.com</a>
        </div>
        <div>
        <a href="tel:+71993555912"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+71993555912">(+71) 9 9355-5912</a>
        </div>  
      </div>
    </Container>
  )
}