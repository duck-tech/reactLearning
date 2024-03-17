import { Trash2 } from 'lucide-react'
import { Todo } from '../types/todo'

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id: number, completed: boolean) => void
    onDelete: (id:number) => void 
}


export const TodoItem = ({todo, onCompletedChange, onDelete}: TodoItemProps) => {
  return (
    <div className='flex items-center gap-1'>
        <label className='flex item-centre gap-2 border rounded-mds p-2 border-gray-400 bg-white hover:bg-slate-50 grow'>
            <input type="checkbox" checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125" />
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
            </span>
        </label>
        <button 
        onClick={() => onDelete(todo.id)} className= 'p-2'>
            <Trash2 size={20} />
        </button>
    </div>
  )
}

export default TodoItem
