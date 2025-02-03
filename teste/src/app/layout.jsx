import Header from "@/components/Header"
import "./globals.css"

export const metadata = {
  title: 'Gradões',
  description: 'Não, eu não escrevi "dragões" errado. Gradões é um site de notícias sobre o Grêmio, o maior time de futebol do mundo. Aqui você encontra notícias, análises, opiniões e muito mais sobre o tricolor gaúcho.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col  min-h-screen bg-gray-100 text-white`}
      >
        {children}
      </body>
    </html>
  )
}
