import Header from "@/components/Header"

export const metadata = {
  title: 'Home',
  description: 'Não, eu não escrevi "dragões" errado. Gradões é um site de notícias sobre o Grêmio, o maior time de futebol do mundo. Aqui você encontra notícias, análises, opiniões e muito mais sobre o tricolor gaúcho.',
}

export default function Page() {
  return (
    <div className="">
      <Header />
      <h1>Page</h1>
    </div>)
}
