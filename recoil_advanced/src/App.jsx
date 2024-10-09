import { atomFamily, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { allNotifsAtom, totalNotificationsSelector } from "./assets/store/atoms/atoms"
import { todoFamily } from "./assets/store/atom-family/todoFamily"
export default function App(){
  
  const setTodo = useSetRecoilState(todoFamily(2))

  setTimeout(()=>{
    console.log("Timeout triggered")
    setTodo((todo)=>{
      todo.title = "Hi",
      todo.description = "Hey"
    })
  },1000)

  return <>
    <Todo id={1} />
    <Todo id={3} />
    <Todo id={3} />
    <Todo id={3} />
  </>
}


function Todo({id}){
  const todo = useRecoilValue(todoFamily(id))
  return <>
    <b>{todo.title}</b>
    <p>{todo.description}</p>
    <hr/>
  </>
}