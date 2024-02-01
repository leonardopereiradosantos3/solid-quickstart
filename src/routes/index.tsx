import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Painéis Solares Fotovoltaicos</Title>
      <h1>Os painéis solares fotovoltaicos são a espinha dorsal da energia solar. Compostos por células de silício, esses painéis convertem diretamente a luz solar em eletricidade. Esta tecnologia tem evoluído, tornando-se uma fonte acessível e eficiente de energia.</h1>
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

 
