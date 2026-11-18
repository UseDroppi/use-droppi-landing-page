import { Home } from './pages/Home'
import { DeleteAccount, Privacy, Terms } from './pages/Legal'

const routes: Record<string, () => React.JSX.Element> = { '/privacidade': Privacy, '/termos': Terms, '/excluir-conta': DeleteAccount }

export default function App() {
  const path = window.location.pathname.slice(import.meta.env.BASE_URL.length - 1).replace(/\/$/, '')
  const Page = routes[path] ?? Home
  return <Page />
}
