import { useState } from "react"
import { ShieldCheck, Plus, Clock, CheckCircle2, ListTodo, MoreVertical, Calendar } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, Badge } from "../components/ui/Card"

// Mock Data
const MOCK_TASKS = [
  { id: 1, title: "Finalizar relatório de design", category: "Trabalho", isOverdue: true, done: false, priority: "urgent", date: "Ontem" },
  { id: 2, title: "Estudar React Context API", category: "Estudos", isOverdue: false, done: false, priority: "warning", date: "Hoje" },
  { id: 3, title: "Comprar ração do cachorro", category: "Casa", isOverdue: false, done: true, priority: "neutral", date: "Amanhã" },
]

export default function Dashboard() {
  const [tasks] = useState(MOCK_TASKS)
  
  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.done).length,
    overdue: tasks.filter(t => t.isOverdue && !t.done).length
  }

  return (
    <div className="min-h-screen bg-sand-50 pb-24">
      {/* Top Header */}
      <header className="bg-sage-900 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-sm relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage-700/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-sage-700 p-2 rounded-xl">
                 <ShieldCheck size={28} />
              </div>
              <h2 className="text-xl font-medium tracking-wide">Bem-vindo, Alexandre</h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-900 flex items-center justify-center font-bold text-lg">
              A
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Visão Geral
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 -mt-12 relative z-20 flex flex-col gap-8">
        
        {/* Overview Stats Cards */}
        <section className="grid grid-cols-3 gap-3">
           {/* Overdue Card */}
           <Card className="bg-white border-none shadow-sm overflow-visible relative">
             <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-coral rounded-full animate-pulse" hidden={stats.overdue === 0} />
             <CardContent className="p-3 flex flex-col items-center justify-center text-center gap-1">
               <Clock className="text-accent-coral mb-0.5" size={24} />
               <span className="text-2xl font-bold text-ink-900">{stats.overdue}</span>
               <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Atrasadas</span>
             </CardContent>
           </Card>

           {/* Done Card */}
           <Card className="bg-white border-none shadow-sm">
             <CardContent className="p-3 flex flex-col items-center justify-center text-center gap-1">
               <CheckCircle2 className="text-sage-500 mb-0.5" size={24} />
               <span className="text-2xl font-bold text-ink-900">{stats.done}</span>
               <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Feitas</span>
             </CardContent>
           </Card>

           {/* Total Card */}
           <Card className="bg-white border-none shadow-sm">
             <CardContent className="p-3 flex flex-col items-center justify-center text-center gap-1">
               <ListTodo className="text-ink-500 mb-0.5" size={24} />
               <span className="text-2xl font-bold text-ink-900">{stats.total}</span>
               <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Total</span>
             </CardContent>
           </Card>
        </section>

        {/* Focus Area: Urgent / Next Tasks */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h3 className="text-2xl font-bold text-ink-900">Foco Atual</h3>
              <p className="text-ink-500">Tarefas que precisam de atenção.</p>
            </div>
            <Button variant="ghost" className="text-sage-700 p-0 h-auto font-bold hover:bg-transparent hover:text-sage-900 flex items-center gap-1">
              Ver todas <MoreVertical size={16} />
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {tasks.map(task => (
              <Card key={task.id} className={`transition-all hover:border-sage-200 hover:shadow-md cursor-pointer ${task.done ? 'opacity-60 bg-sand-100' : 'bg-white'}`}>
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  
                  <div className="flex items-center gap-4 flex-1">
                    {/* Checkbox placeholder */}
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${task.done ? 'bg-sage-500 border-sage-500 text-white' : 'border-sage-200'}`}>
                      {task.done && <CheckCircle2 size={16} />}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className={`text-lg font-medium text-ink-900 ${task.done ? 'line-through text-ink-500' : ''}`}>
                        {task.title}
                      </span>
                      <div className="flex items-center gap-3 mt-1 text-sm font-medium">
                        <span className="text-ink-500 flex items-center gap-1">
                          <Calendar size={14} /> {task.date}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-sage-200" />
                        <span className="text-sage-700 font-semibold">{task.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges Area */}
                  <div className="flex flex-col md:flex-row items-end gap-2 shrink-0">
                    <Badge variant={task.priority}>
                      {task.priority === 'urgent' ? 'Urgente' : task.priority === 'warning' ? 'Média' : 'Normal'}
                    </Badge>
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button for New Task */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Button className="rounded-full shadow-xl shadow-sage-900/20 px-6 py-3 gap-2 text-lg font-bold pointer-events-auto">
          <Plus size={24} strokeWidth={3} /> Nova Tarefa
        </Button>
      </div>
    </div>
  )
}
