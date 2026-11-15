import { siApple, siGoogleplay } from 'simple-icons'

const stores = [
  { name: 'Google Play', kicker: 'Disponível no', icon: siGoogleplay, url: import.meta.env.VITE_PLAY_STORE_URL },
  { name: 'App Store', kicker: 'Baixe na', icon: siApple, url: import.meta.env.VITE_APP_STORE_URL },
]

export function StoreButtons({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div className={`stores stores-${tone}`}>
      {stores.map(({ name, kicker, icon, url }) =>
        url ? (
          <a key={name} className="store" href={url} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
            <span><small>{kicker}</small>{name}</span>
          </a>
        ) : (
          <span key={name} className="store is-soon" aria-disabled="true">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
            <span><small>Em breve na</small>{name}</span>
          </span>
        ),
      )}
    </div>
  )
}
