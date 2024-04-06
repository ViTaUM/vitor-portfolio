import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>Meus Projetos</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://carol-adm.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Karol Dance - Sistema de Gestão</h3>
              <p style={{ textAlign: "justify"}}>
                O desenvolvimento do sistema de gerenciamento do estúdio de
                dança de Karol representou um marco na modernização e eficiência
                da gestão financeira do estabelecimento. <br />Como desenvolvedor,
                assumi a missão de automatizar o processo de pagamento, uma
                tarefa que exigia não apenas habilidade técnica, mas também uma
                compreensão profunda das necessidades específicas do estúdio de
                dança.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Material UI</li>
                <li>Node</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://pottencial.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Pottencial Seguradora - Website</h3>
              <p style={{ textAlign: "justify"}}>
                Tive o privilégio de obter um papel ativo, como Analista Frontend no processo de criação
                do site dessa empresa.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Next</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://certificados.ucsal.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Certificados Online - UCSal</h3>
              <p style={{ textAlign: "justify"}}>
                Inaugurado em 2016, o sistema de certificados online foi
                concebido com um propósito primordial: auxiliar o setor de
                emissão de diplomas na automatização do processo de assinatura,
                efetuado em uma entrega mais ágil e eficiente.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
