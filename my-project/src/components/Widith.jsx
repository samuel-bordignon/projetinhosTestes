import React from 'react'
import { Rocket } from 'lucide-react'

function Widith() {
    return (
        <div className="w-[448px] rounded overflow-hidden">
            <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className='font-bold'>Notificações</span>
                <button className='text-violet-500 font-bold text-xs hover:text-violet-400 '>MARCAR TODAS COMO LIDAS</button>
            </div>

            <div >
                <div className="bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
                    Recentes
                </div>
                <div className="bg-zinc-800 px-8 py-4 flex items-start gap-6">
                    <Rocket className='w-6 h-6 text-violet-500 mt-3 ' />
                    <div className="flex-1 flex flex-col gap-2">
                        <p className='text-5 leading-relaxed text-zinc-100'>
                            Um foguete vai cair na sua casa, fuja!
                        </p>
                        <div className="text-1 text-zinc-400 flex intems-center gap-1">
                            <span>Tempo estimado</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-800 px-8 py-4 flex items-start gap-6">
                    <Rocket className='w-6 h-6 text-violet-500 mt-3 ' />
                    <div className="flex-1 flex flex-col gap-2">
                        <p className='text-5 leading-relaxed text-zinc-100'>
                            Um foguete vai cair na sua casa, fuja!
                        </p>
                        <div className="text-1 text-zinc-400 flex intems-center gap-1">
                            <span>Tempo estimado</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
                    Recentes
                </div>
                <div className="bg-zinc-800 px-8 py-4 flex items-start gap-6">
                    <Rocket className='w-6 h-6 text-violet-500 mt-3 ' />
                    <div className="flex-1 flex flex-col gap-2">
                        <p className='text-5 leading-relaxed text-zinc-100'>
                            Um foguete vai cair na sua casa, fuja!
                        </p>
                        <div className="text-1 text-zinc-400 flex intems-center gap-1">
                            <span>Tempo estimado</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-800 px-8 py-4 flex items-start gap-6">
                    <Rocket className='w-6 h-6 text-violet-500 mt-3 ' />
                    <div className="flex-1 flex flex-col gap-2">
                        <p className='text-5 leading-relaxed text-zinc-100'>
                            Um foguete vai cair na sua casa, fuja!
                        </p>
                        <div className="text-1 text-zinc-400 flex intems-center gap-1">
                            <span>Tempo estimado</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-800 px-8 py-4 flex items-start gap-6">
                    <Rocket className='w-6 h-6 text-violet-500 mt-3 ' />
                    <div className="flex-1 flex flex-col gap-2">
                        <p className='text-5 leading-relaxed text-zinc-100'>
                            Um foguete vai cair na sua casa, fuja!
                        </p>
                        <div className="text-1 text-zinc-400 flex intems-center gap-1">
                            <span>Tempo estimado</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Widith
