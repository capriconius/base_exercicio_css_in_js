<<<<<<< HEAD
import styles from './Hero.module.css'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
=======
import React from 'react'
import { Form, HeroTitle } from './Styles'
const Hero = () => (
  <Form>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
>>>>>>> 015c58e (atualizando arquivo)
)

export default Hero
