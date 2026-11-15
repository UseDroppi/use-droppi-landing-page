import { Logo } from '../brand/Logo'

export type Screen = 'feed' | 'dropar' | 'servicos' | 'id'

function Avatar({ name, hue }: { name: string; hue: string }) {
  return <span className="ph-avatar" style={{ background: hue }}>{name[0]}</span>
}

function Feed() {
  return (
    <div className="ph-feed">
      <div className="ph-post">
        <header>
          <Avatar name="Bia" hue="#36A582" />
          <div><b>Bia Nunes</b><small>@bianunes · 12 min</small></div>
        </header>
        <div className="ph-media ph-media-run">
          <span>5,2 km</span>
          <small>caminhada + trote leve</small>
        </div>
        <p>Terceira semana seguida saindo de manhã. Devagar, mas saindo.</p>
        <footer>
          <span><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>48</span>
          <span><svg viewBox="0 0 24 24"><path d="M5 5h14v10H9l-4 4z" /></svg>9</span>
        </footer>
      </div>
      <div className="ph-post">
        <header>
          <Avatar name="Caio" hue="#9C27B0" />
          <div><b>Caio Prado</b><small>@caioprado · 1 h</small></div>
        </header>
        <div className="ph-media ph-media-food" />
      </div>
    </div>
  )
}

function Dropar() {
  const people = [
    ['Lu Teixeira', '@luteixeira', '#4CAF50', true],
    ['Rafa Moura', '@rafamoura', '#2196F3', false],
    ['Nina Alves', '@ninaalves', '#36A582', false],
  ] as const
  return (
    <div className="ph-list">
      <h4>Sugestões para dropar</h4>
      {people.map(([name, handle, hue, on]) => (
        <div className="ph-row" key={handle}>
          <Avatar name={name} hue={hue} />
          <div><b>{name}</b><small>{handle}</small></div>
          <span className={`ph-drop ${on ? 'is-on' : ''}`}>{on ? 'Droppando' : 'Dropar'}</span>
        </div>
      ))}
      <h4>Ranking da semana</h4>
      {[['1', 'Lu Teixeira', '#4CAF50'], ['2', 'Bia Nunes', '#36A582'], ['3', 'Caio Prado', '#9C27B0']].map(([pos, name, hue]) => (
        <div className="ph-row ph-rank" key={pos}>
          <em>{pos}</em>
          <Avatar name={name} hue={hue} />
          <div><b>{name}</b></div>
        </div>
      ))}
    </div>
  )
}

function Servicos() {
  return (
    <div className="ph-list">
      <h4>Serviços</h4>
      <div className="ph-search">Buscar academias, personal, nutri…</div>
      <div className="ph-chips">
        {['Corrida', 'Yoga', 'Nutrição', 'Fisioterapia', 'CrossFit'].map((t, i) => (
          <span key={t} className={i === 2 ? 'is-on' : ''}>{t}</span>
        ))}
      </div>
      {[
        ['Clínica Raiz', 'Nutrição · Pinheiros', '#4CAF50'],
        ['Ana Lima', 'Nutricionista autônoma', '#36A582'],
        ['Mov Estúdio', 'Nutrição · Yoga', '#9C27B0'],
      ].map(([name, meta, hue]) => (
        <div className="ph-card" key={name}>
          <Avatar name={name} hue={hue} />
          <div><b>{name}</b><small>{meta}</small></div>
          <span className="ph-chat">Conversar</span>
        </div>
      ))}
    </div>
  )
}

function IdDrop() {
  return (
    <div className="ph-id">
      <div className="ph-idcard">
        <div className="ph-idhead">
          <Logo variant="wordmark" />
          <Logo variant="drop-solid" />
        </div>
        <span className="ph-avatar ph-avatar-lg" style={{ background: '#36A582' }}>B</span>
        <b>Bia Nunes</b>
        <small>@bianunes</small>
        <span className="ph-idfoot">Conta Droppi</span>
      </div>
    </div>
  )
}

const screens = { feed: Feed, dropar: Dropar, servicos: Servicos, id: IdDrop }

export function Phone({ screen }: { screen: Screen }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="ph-top">
          <Logo variant="wordmark" />
          <span className="ph-balance"><Logo variant="drop-solid" />120</span>
        </div>
        {(Object.keys(screens) as Screen[]).map((key) => {
          const View = screens[key]
          return (
            <div key={key} className={`ph-view ${key === screen ? 'is-active' : ''}`}>
              <View />
            </div>
          )
        })}
        <nav className="ph-tabs">
          {(['feed', 'dropar', 'servicos', 'id'] as Screen[]).map((key) => (
            <span key={key} className={key === screen ? 'is-on' : ''} />
          ))}
        </nav>
      </div>
    </div>
  )
}
