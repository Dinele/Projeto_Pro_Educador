import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { ShieldCheck } from "lucide-react"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulated login redirect
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-sand-50 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sage-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sand-300/20 rounded-full blur-3xl pointer-events-none" />

      <main className="w-full max-w-sm relative z-10 flex flex-col gap-10">
        <header className="flex flex-col gap-3 text-center">
          <div className="mx-auto bg-sage-100 p-4 rounded-full text-sage-900 mb-2">
            <ShieldCheck size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-ink-900">
            Foco & Calma
          </h1>
          <p className="text-xl text-ink-500 font-medium">
            Seu centro de comando pessoal.
          </p>
        </header>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <Input 
            label="E-mail" 
            type="email" 
            placeholder="voce@exemplo.com" 
            required
            autoComplete="email"
          />
          <Input 
            label="Senha" 
            type="password" 
            placeholder="••••••••" 
            required
            autoComplete="current-password"
          />
          
          <Button type="submit" className="mt-2 text-lg font-bold shadow-lg shadow-sage-900/10 w-full">
            Entrar no Painel
          </Button>
        </form>

        <footer className="text-center">
           <p className="text-ink-500 font-medium hover:text-ink-900 transition-colors cursor-pointer">
              Precisa de ajuda para acessar?
           </p>
        </footer>
      </main>
    </div>
  )
}
