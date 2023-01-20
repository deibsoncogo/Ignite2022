import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Tomás Arthur Real"
        content="Muito bom dever de casa, ótimo"
      />

      <Post
        author="Renan Noah Cauê Aragão"
        content="Sou corretor de imóveis no litoral, promovendo a camada de investimento"
      />
    </>
  )
}
