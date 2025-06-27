import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  position: relative;
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 100px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-color: #e5e5e5;
    padding-top: 140px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150px;
    width: 400px;
    height: 100%;
    background: #111;
    transform: skewX(-25deg);
    z-index: 0;
  }
`;
export const ContainerHeader = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-left: 180px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
    text-align: center;
  }
`;

export const CaixaTexto = styled.div`
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const Preco = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const TituloHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BotaoCarrinho = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 20px;
  }
`;

export const CaixaBotoes = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Botoes = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.2s;

  &.verde {
    background-color: #b3e041;
  }

  &.azul {
    background-color: #3267a1;
  }

  &.rosa {
    background-color: #bf9ba9;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImagemTenis = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  transform: rotate(-20deg);
  transition: 0.3s;

  @media (max-width: 768px) {
    max-width: 280px;
    transform: rotate(-10deg);
  }
`;
