import { useState } from "react"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import TodoSummary from "./components/TodoSummary"

function App() {
  // 第一個值是dummyData的狀態, 第二個值是更新dummyData的函數
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      // map return a new array, 不會改寫原本的array
      prevTodos.map(todo => (todo.id === id ? {...todo, completed} : todo )))
  }

  function addTodo(title:string) {
    setTodos (prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  function deleteTodo (id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-auto"> 
      <h1 className="font-bold text-3xl text-center">
        Your Todos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <div className="space-y-2">
          <AddTodoForm onSubmit={addTodo}/>
          <TodoList 
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
          />
          <TodoSummary 
          todos = {todos}
          deleteAllCompleted={deleteAllCompletedTodos}
          />
        </div>
      </div>
    </main>
  )
}

export default App
