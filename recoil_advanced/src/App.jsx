import { useRecoilState, useRecoilValue } from "recoil"
import { allNotifsAtom, totalNotificationsSelector } from "./assets/store/atoms/atoms"
import axios from "axios"
import { useEffect } from "react"
export default function App(){

  const [allNotifications, setAllNotifications] = useRecoilState(allNotifsAtom)
  const totalNotifs = useRecoilValue(totalNotificationsSelector)

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get("http://localhost:3000/notifications")
      console.log(response.data)
      return setAllNotifications(response.data)
    }
    fetchData()
  },[])

  return <>
    <button>Home</button>
    <button>My Network ({allNotifications.network>=100?"99+":allNotifications.network})</button>
    <button>Jobs {allNotifications.jobs>0?`(${allNotifications.jobs})`:""}</button>
    <button>Messages {allNotifications.messages>0?`(${allNotifications.messages})`:""}</button>
    <button>Notifications {allNotifications.notifications>0?`(${allNotifications.notifications})`:""}</button>
    <button>Me {totalNotifs>0?`(${totalNotifs})`:""}</button>
  </>
}