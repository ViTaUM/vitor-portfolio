import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import wordpress from "../../assets/wordpress.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse", // Modificado para 'repulse' para uma interação mais dinâmica
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40, // Aumentado para um efeito mais visível
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4, // Aumentado para adicionar mais partículas
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              enable: true, // Linhas conectadas ativadas
              distance: 100,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce", // Modo 'bounce' para as partículas quicarem nas bordas
              random: true,
              speed: 6, // Velocidade aumentada para um movimento mais rápido
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30, // Aumentado o número de partículas
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
              },
            },
            size: {
              value: 10, // Tamanho ajustado
              animation: {
                enable: true,
                speed: 10,
                minimumValue: 5,
              },
            },
            shape: {
              type: "image",
              image: [
                { src: boostrapIcon, width: 20, height: 20 },
                { src: cssIcon, width: 20, height: 20 },
                { src: wordpress, width: 20, height: 20 },
                { src: htmlIcon, width: 20, height: 20 },
                { src: jsIcon, width: 20, height: 20 },
                { src: mysqlIcon, width: 20, height: 20 },
                { src: nodeIcon, width: 20, height: 20 },
                { src: reactIcon, width: 20, height: 20 },
                { src: sassIcon, width: 20, height: 20 },
                { src: typescriptIcon, width: 20, height: 20 },
                { src: vscodeIcon, width: 20, height: 20 },
                { src: vueIcon, width: 20, height: 20 },
              ],
            },
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}
