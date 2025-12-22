import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
<<<<<<< HEAD

import Vaga from '../../components/Vaga'

import styles from './ListaVagas.module.css'

type Vaga = {
=======
import Vaga from '../../components/Vaga'

type VagaProps = {
>>>>>>> 015c58e (atualizando arquivo)
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

<<<<<<< HEAD
const vagas = [
  {
    id: 1,
=======
const vagas: VagaProps[] = [
  {
    id: '1',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
<<<<<<< HEAD
    id: 2,
=======
    id: '2',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
<<<<<<< HEAD
    id: 3,
=======
    id: '3',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
<<<<<<< HEAD
    id: 4,
=======
    id: '4',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
<<<<<<< HEAD
    id: 5,
=======
    id: '5',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
<<<<<<< HEAD
    id: 6,
=======
    id: '6',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
<<<<<<< HEAD
    id: 7,
=======
    id: '7',
>>>>>>> 015c58e (atualizando arquivo)
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
<<<<<<< HEAD
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
=======
    (vaga) => vaga.titulo.toLowerCase().includes(filtro.toLowerCase()) // Modificado para "includes" que é mais direto
>>>>>>> 015c58e (atualizando arquivo)
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
<<<<<<< HEAD
      <ul className={styles.vagas}>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
=======
      <ul>
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
>>>>>>> 015c58e (atualizando arquivo)
          />
        ))}
      </ul>
    </div>
  )
}

export default ListaVagas
