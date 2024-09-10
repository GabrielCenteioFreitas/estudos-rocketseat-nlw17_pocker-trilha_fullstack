import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'

export const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="Lets start!" />

      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <button
        type='button'
        className='
          px-4 py-2.5 rounded-lg bg-violet-500 hover:bg-violet-600
          text-violet-50 text-sm font-medium tracking-tight
          flex items-center gap-2
        '
      >
        <Plus className='size-4' />
        Cadastrar meta
      </button>
    </div>
  )
}
