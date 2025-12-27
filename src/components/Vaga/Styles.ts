import styled from 'styled-components';

export const Vaga = styled.div`
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
      border: 1px solid var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`;

export const VagaTitulo = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const VagaInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;
  }
`;

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
`;
