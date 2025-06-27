import tenisAmarelo from "../../assets/nike1.png";
import tenisAzul from "../../assets/nike2.png";
import tenisBranco from "../../assets/nike3.png";
import { useState } from "react";
import {
  BotaoCarrinho,
  Botoes,
  CaixaBotoes,
  CaixaTexto,
  ContainerHeader,
  ContainerPrincipal,
  ImagemTenis,
  Paragrafo,
  Preco,
  TituloHeader,
} from "./styled";

function App() {
  const [imagemAtual, setImagemAtual] = useState(tenisAmarelo);

  function mudarVisual(novaImagem) {
    setImagemAtual(novaImagem);
  }

  return (
    <>
      <ContainerPrincipal>
        <ContainerHeader>
          <CaixaTexto>
            <Preco>R$ 799,99</Preco>
            <TituloHeader>Nike Air Zoom</TituloHeader>
            <Paragrafo>
              Uma passada elástica para qualquer corrida, a sensação familiar e
              perfeita do Peg retorna para ajudá-lo a atingir seus objetivos.
              Esta versão tem a mesma capacidade de resposta e suporte neutro
              que você adora, mas com melhor conforto nas áreas sensíveis do seu
              pé, como o arco e os dedos.
            </Paragrafo>
            <BotaoCarrinho>Adicionar ao Carrinho</BotaoCarrinho>

            <CaixaBotoes>
              {"Outras opções:"}

              <Botoes
                className="verde"
                onClick={() => mudarVisual(tenisAmarelo)}
              />
              <Botoes
                className="rosa"
                onClick={() => mudarVisual(tenisBranco)}
              />
              <Botoes className="azul" onClick={() => mudarVisual(tenisAzul)} />
            </CaixaBotoes>
          </CaixaTexto>
          <ImagemTenis src={imagemAtual} />
        </ContainerHeader>
      </ContainerPrincipal>
    </>
  );
}

export default App;
