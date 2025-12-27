import styled from 'styled-components'

export const VagasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin-top: 32px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
