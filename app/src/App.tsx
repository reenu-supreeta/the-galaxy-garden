import { Layout } from './shared/components/Layout'
import { Room } from './features/room/components/Room'
import { Sky } from './features/sky/components/Sky'

function App() {
  return (
    <Layout>
      <Sky />
      <Room />
    </Layout>
  )
}

export default App