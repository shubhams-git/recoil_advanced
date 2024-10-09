import { atomFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { allNotifsAtom, totalNotificationsSelector } from "./assets/store/atoms/atoms"
import { todoFamily } from "./assets/store/atom-family/todoFamily"
export default function App(){
  
  const setTodo = useSetRecoilState(todoFamily(2))

  return <>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} />
  </>
}

function Todo({id}){
  const todo = useRecoilValueLoadable(todoFamily(id))
  if(todo.state=="loading"){
    return <>
    <b>Loading...</b>
  </>
    
  }else if(todo.state=="hasValue"){
    return <>
    <b>{todo.contents.title}</b>
    <p>{todo.contents.description}</p>
    <hr/>
  </>
  }else if(todo.state=="hasError"){
    <b>There is some server error...</b>
  }
}