import { Home } from './pages/Home'
import { Privacy, Terms } from './pages/Legal'

const routes: Record<string, () => React.JSX.Element> = { '/privacidade': Privacy, '/termos': Terms }

export default function App() {
  const Page = routes[window.location.pathname.replace(/\/$/, '')] ?? Home
  return <Page />
}
