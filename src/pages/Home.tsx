import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Logo } from '../brand/Logo'
import { Phone, type Screen } from '../components/Phone'
import { StoreButtons } from '../components/StoreButtons'

const principles = [
  'Constância vale mais que intensidade.',
  'Saúde é pra todo mundo, não só pra quem já treina.',
  'Comunidade antes de competição.',
]

const features: { screen: Screen; title: string; text: string }[] = [
  {
    screen: 'feed',
    title: 'Mostre o seu dia, do jeito que ele foi.',
    text: 'Treino, caminhada, refeição, descanso. Poste fotos e vídeos, curta e comente o progresso de quem está do seu lado.',
  },
  {
    screen: 'dropar',
    title: 'Drope quem te inspira.',
    text: 'Seguir alguém na Droppi é dropar. Descubra pessoas na comunidade e acompanhe o ranking da semana de quem mais recebeu drops.',
  },
  {
    screen: 'servicos',
    title: 'Encontre quem cuida de você.',
    text: 'Academias, personal, nutricionistas, fisioterapeutas, corrida, yoga. Busque por categoria e converse direto pelo chat.',
  },
  {
    screen: 'id',
    title: 'Sua carteirinha na comunidade.',
    text: 'O ID Drop reúne seu perfil num cartão digital pra mostrar em eventos e parceiros da Droppi.',
  },
]

const brands = [
  { name: 'wear', color: '#36A582', text: 'Roupa pra treinar e pra viver o resto do dia.' },
  { name: 'nutri', color: '#4CAF50', text: 'Comida de verdade, sem dieta milagrosa nem culpa.' },
  { name: 'sports', color: '#9C27B0', text: 'Treinos e consultoria pra quem está começando ou recomeçando.' },
  { name: 'media', color: '#2196F3', text: 'Conteúdo que informa, acolhe e tira o peso da comparação.' },
]

const categories = ['Academia', 'CrossFit', 'Corrida', 'Yoga', 'Natação', 'Ciclismo', 'Nutrição', 'Suplementos', 'Fisioterapia']

function useActiveFeature() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return { active, refs }
}

export function Home() {
  const { active, refs } = useActiveFeature()

  return (
    <>
      <header className="nav">
        <a href="/" className="nav-logo"><Logo variant="wordmark" label="Droppi" /></a>
        <nav>
          <a href="#app">O app</a>
          <a href="#submarcas">Submarcas</a>
          <a href="#profissionais">Profissionais</a>
        </nav>
        <a href="#baixar" className="nav-cta">Baixar o app</a>
      </header>

      <main>
        <section className="hero">
          <Logo variant="drop-solid" className="hero-drop" />
          <div className="hero-copy">
            <h1>Cuidar de você, uma gota por&nbsp;dia.</h1>
            <p className="slogan">every drop matters</p>
            <p className="lead">
              A Droppi junta gente, treino, nutrição e conteúdo num só lugar, pra você criar constância no seu ritmo. Sem
              cobrança de corpo perfeito.
            </p>
            <StoreButtons />
          </div>
          <div className="hero-phone">
            <Phone screen="feed" />
          </div>
        </section>

        <section className="manifesto">
          <p className="manifesto-big">
            Ninguém muda de vida num dia. <span>Muda de gota em gota.</span>
          </p>
          <ul>
            {principles.map((p) => (
              <li key={p}><Logo variant="drop-solid" />{p}</li>
            ))}
          </ul>
        </section>

        <section className="app" id="app">
          <h2>Tudo o que te mantém em movimento, num app&nbsp;só.</h2>
          <div className="app-grid">
            <div className="app-steps">
              {features.map((f, i) => (
                <article
                  key={f.screen}
                  data-index={i}
                  ref={(el) => { refs.current[i] = el }}
                  className={i === active ? 'is-active' : ''}
                >
                  <div className="app-step-phone"><Phone screen={f.screen} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
            <div className="app-sticky">
              <Phone screen={features[active].screen} />
              <p className="note">Telas ilustrativas, com pessoas fictícias.</p>
            </div>
          </div>
        </section>

        <section className="brands" id="submarcas">
          <h2>Uma marca, quatro jeitos de&nbsp;cuidar.</h2>
          <ul>
            {brands.map((b) => (
              <li key={b.name} style={{ '--accent': b.color } as CSSProperties}>
                <p className="brand-sign">
                  <span>droppi</span> <em>{b.name}</em>
                </p>
                <p className="brand-text">{b.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pros" id="profissionais">
          <div className="pros-copy">
            <h2>Você cuida de pessoas? A Droppi leva você até&nbsp;elas.</h2>
            <p className="lead">
              Ative a conta empresarial no seu perfil, como empresa ou profissional autônomo. Você aparece em Serviços nas
              categorias que escolher e recebe mensagens direto pelo chat.
            </p>
            <ul className="chips">
              {categories.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="pros-card" aria-hidden="true">
            <div className="pros-card-head">
              <span className="ph-avatar ph-avatar-lg" style={{ background: '#4CAF50' }}>A</span>
              <div><b>Ana Lima</b><small>Nutricionista · profissional autônoma</small></div>
            </div>
            <p>Reeducação alimentar sem neura, pra quem treina ou quer começar.</p>
            <div className="pros-card-tags"><span>Nutrição</span><span>Corrida</span></div>
            <span className="pros-card-cta">Conversar</span>
          </div>
        </section>

        <section className="final" id="baixar">
          <Logo variant="drop-outline" className="final-drop" />
          <h2>Sua próxima gota começa&nbsp;hoje.</h2>
          <p className="lead">Baixe a Droppi, crie seu perfil e encontre sua comunidade.</p>
          <StoreButtons />
        </section>
      </main>

      <Footer />
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <Logo variant="wordmark-tagline" label="Droppi, every drop matters" />
      <nav>
        <a href="/privacidade">Política de Privacidade</a>
        <a href="/termos">Termos de Uso</a>
      </nav>
      <small>© {new Date().getFullYear()} Droppi</small>
    </footer>
  )
}
