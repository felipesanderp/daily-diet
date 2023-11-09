import { LoginForm } from '@/components/LoginForm'

export function LoginPage() {
  return (
    <div className="grid h-screen grid-cols-loginPage">
      <aside className="m-1 flex flex-col items-center justify-between rounded-2xl bg-zinc-900 p-4 duration-500 animate-in slide-in-from-right-full">
        {/* <img src={logo} alt="Daily Diet" /> */}

        <div className="flex flex-col items-center">
          <p className="text-xl text-zinc-100">Controle sua dieta!</p>
          <span className="text-sm text-zinc-300">
            Registre suas refeições e acompanhe seu progresso.
          </span>
        </div>

        <button
          className="rounded-md bg-zinc-100 p-4 text-zinc-700 transition-all hover:bg-zinc-200"
          // onClick={handleRedirectToRegisterPage}
        >
          Ainda não tem uma conta? Registre-se aqui.
        </button>
      </aside>

      <LoginForm />
    </div>
  )
}
