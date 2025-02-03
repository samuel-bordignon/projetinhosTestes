import ConfirmSenha from '@/components/ConfirmSenha'
import InputForm from '@/components/InputForm'
import { motion } from "framer-motion";


function page() {

    async function handleCadastro(formData) {
        'use server'
        const data = {
            email: formData.get('email'),
            senha: formData.get('senha')
        }

    }

    return (
        <div
            className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-sky-900 text-black`}
        >    <motion.div animate={{rotate: 320}} className=" flex flex-col bg-white p-8 rounded-lg shadow-lg ">
                <h1 className='text-3xl font-bold text-left'>Cadastro</h1>
                <p className='text-gray-500 mt-2'>informe suas credenciais para iniciar seu cadastro</p>
                <form action="" className='flex flex-col mt-8'>
                    <InputForm
                        label='Email'
                        type='text'
                        id='email'
                        name={'email'}
                        required
                    />
                    <ConfirmSenha label='Senha' />
                    <button className='bg-sky-900 text-white p-2 mt-4 rounded-md'>
                        Cadastrar
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default page
