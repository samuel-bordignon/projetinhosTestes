import React from 'react'

function Login() {
  return (
    <div className='flex flex-row items-center justify-center h-screen bg-white'>
      <div className="w-1/2 h-screen">
        <form action="">
          <label htmlFor="">
            <input type="email" placeholder='Email' />
          </label>
          <label htmlFor="">
            <input type="password" placeholder='Senha' />
          </label>
          <button>
            Logar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
