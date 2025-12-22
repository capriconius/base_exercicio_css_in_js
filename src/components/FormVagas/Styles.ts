import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 16px;
`

export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 16px;

  &:hover {
    background-color: black;
    color: white;
  }
`
