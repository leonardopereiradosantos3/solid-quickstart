import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Painéis Solares Fotovoltaicos</Title>
      <h3>Os painéis solares fotovoltaicos são a espinha dorsal da energia solar. Compostos por células de silício, esses painéis convertem diretamente a luz solar em eletricidade. Esta tecnologia tem evoluído, tornando-se uma fonte acessível e eficiente de energia.</h3><br>
      Seção 1: Introdução à Energia Solar
A energia solar é uma fonte de energia renovável derivada da luz do sol. É uma solução sustentável e limpa para atender às necessidades de eletricidade e aquecimento, contribuindo para a redução das emissões de gases de efeito estufa e promovendo a sustentabilidade ambiental.</br>
      <Counter />


      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

 
