'use client'
import Header from "@/components/Header"
import { checkEmailExist, createData, getData, getDataById } from "@/lib/api"

import { useEffect } from 'react'


// export const metadata = {
//   title: 'Home',
//   description: 'Não, eu não escrevi "dragões" errado. Gradões é um site de notícias sobre o Grêmio, o maior time de futebol do mundo. Aqui você encontra notícias, análises, opiniões e muito mais sobre o tricolor gaúcho.',
// }


export default function Page() {


  useEffect(() => {
    // getData('users').then(data => {
    //   console.log(data.data)
    // })
    getDataById('users', 'id', 1).then(data => {
      console.log(data.data)
    })
    const pessoa = {
      username: "user123",
      email: "user@example.com",
      password: "hashedpassword",
      created_at: new Date().toISOString() // Formato "YYYY-MM-DDTHH:MM:SS.sssZ"
    }
  }, [])


  return (
    <div className="">
      <Header />
      <h1>Page</h1>
    </div>)
}
