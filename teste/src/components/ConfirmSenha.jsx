'use client'

import { useState } from "react"

function ConfirmSenha() {
    const eye = '/eye.svg'
    const eyeSlash = '/eye-slash.svg';

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex flex-col">
            <label className="mb-1 font-medium" htmlFor={'senha'}>Senha</label>
            <div className="flex items-center space-x-4">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id='senha'
                    required
                    className="form-input"
                />
                <button
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <img
                        src={showPassword ? eye : eyeSlash}
                        alt="Mostrar/Esconder senha"
                        className="h-7"
                    />
                </button>
            </div>
            <label className="mb-1 font-medium" htmlFor="confirmSenha">  Confirmar Senha</label>
            <input
                type={showPassword ? 'text' : 'password'}
                required
                id="confirmSenha"
                className="form-input" 
            />

        </div>
    );
}

export default ConfirmSenha;
