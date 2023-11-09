import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from 'tailwind-merge'
import { useAuth } from '@/contexts/auth-context'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type FormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const { signIn } = useAuth()

  const form = useForm<FormData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLoginSubmit(data: FormData) {
    try {
      signIn(data.email, data.password)
    } catch {
      console.error('Erro ao realizar login')
    }
  }

  const isButtonDisabled = !form.formState.isValid

  return (
    <form
      onSubmit={form.handleSubmit(handleLoginSubmit)}
      className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-4"
    >
      <h1>Login</h1>
      <input
        type="email"
        className={twMerge(
          'w-full rounded-md border border-zinc-500 p-4 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700',
          form.formState.errors.email &&
            'invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 focus:invalid:text-red-500',
        )}
        placeholder="E-mail"
        {...form.register('email')}
      />

      <input
        type="password"
        className={twMerge(
          'w-full rounded-md border border-zinc-500 p-4 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700',
          form.formState.errors.password &&
            'border-red-500 focus:border-red-500 focus:text-red-500',
        )}
        placeholder="Password"
        {...form.register('password')}
      />

      <button
        type="submit"
        disabled={isButtonDisabled}
        className={
          'w-full rounded-md bg-zinc-700 p-4 text-zinc-100 transition-all hover:enabled:bg-zinc-600 disabled:opacity-70'
        }
      >
        Entrar
      </button>
    </form>
  )
}
