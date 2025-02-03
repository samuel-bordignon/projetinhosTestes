import CardPost from "@/components/CardPost"
import Header from "@/components/Header"
import { getData } from "@/lib/api"

export const metadata = {
  title: 'posts',
  description: 'Não, eu não escrevi "dragões" errado. Gradões é um site de notícias sobre o Grêmio, o maior time de futebol do mundo. Aqui você encontra notícias, análises, opiniões e muito mais sobre o tricolor gaúcho.',
}

export default async function Posts() {
  const data = await getData('posts')

  const handleSearchUsers = async (formData) => {
    'use server'
    const userId = formData.get('idUser')
    const response = await getData(`posts/${userId}`)
    return response
  }

  return (
    <div>
      <Header />
      <h1>posts</h1>
      <p>Veja os comentários legais</p>
      <form action={handleSearchUsers}>
        <input
          type="text"
          className="border-gray-200 p-2 text-black"
          placeholder="ID do usuário"
          name="idUser"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Procurar</button>
      </form>
      <div className="">
        {data.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}