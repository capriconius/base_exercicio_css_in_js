import styled from 'styled-components'

export const VagaWrapper = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  margin-bottom: 16px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;
  }
`

export const VagaLink = styled.a`
  border: 1px solid var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaWrapper>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaInfo>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </VagaInfo>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaWrapper>
)

export default Vaga
