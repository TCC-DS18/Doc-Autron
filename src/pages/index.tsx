import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const highlights = [
  ['Assistente pedagógico', 'Chatbot por voz e texto para apoiar dúvidas técnicas, procedimentos do laboratório e acesso a conteúdos.'],
  ['Plataforma integrada', 'Ambiente web para aulas, quizzes, calendário, ranking e acompanhamento de aprendizes.'],
  ['Arquitetura escalável', 'React, Spring Boot, FastAPI, Azure Blob, PostgreSQL e pgvector trabalhando em camadas especializadas.'],
  ['Acessibilidade', 'VLibras, legendagem, ajustes audiovisuais e preocupação com contraste e navegação sem barreiras.'],
];

export default function Home(): JSX.Element {
  return (
    <Layout title="Autron" description="Documentação essencial do projeto Autron">
      <main>
        <section className={styles.hero}>
          <div className={styles.supergraphic} />
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <span className={styles.kicker}>SENAI Roberto Mange · ETS Bosch</span>
                <Heading as="h1">Autron</Heading>
                <p>
                  Robô assistente para o espaço automotivo, criado para apoiar aprendizes e instrutores no curso de Mecatrônica Automotiva.
                </p>
                <div className={styles.actions}>
                  <Link className="button button--primary button--lg" to="/docs/produto/visao-geral">Ver documentação</Link>
                </div>
              </div>
              <div className={styles.identityPanel} aria-label="Identidade visual do Autron">
                <img src="img/autron_logo.png" alt="Logo Autron" />
                <div>
                  <strong>Tecnologia, automação e aprendizagem</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Pontos essenciais</Heading>
            <div className={styles.cardGrid}>
              {highlights.map(([title, description]) => (
                <article className={styles.card} key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
