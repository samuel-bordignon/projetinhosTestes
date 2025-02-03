import Header from "@/components/Header"
import { getDataById } from "@/lib/api"
import Link from "next/link"
async function detalhePost({ params }) {
  const { user } = await params
  const data = await getDataById(`posts`, 'id', user)

  return (
    <div>
      <Header/>
      <h1>Detalhe do post {user}</h1>
      <Link href="/posts">Voltar</Link>
      <div className="bg-gray-800 p-4 my-2 rounded-md">
        <h2 className="text-xl font-bold">{data.title || ''}</h2>
        <p>{data.descripion || ''}</p>
      </div>
    </div>
  )
}

export default detalhePost
