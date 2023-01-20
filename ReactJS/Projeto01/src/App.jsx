import { Post } from './Post'

export function App() {
  return (
    <>
      <h1>Hello word</h1>

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
