import { useRecoilState, useRecoilValue } from "recoil"
import { allNotifsAtom, totalNotificationsSelector } from "./assets/store/atoms/atoms"
export default function App(){

  const allNotifications= useRecoilValue(allNotifsAtom)
  const totalNotifs = useRecoilValue(totalNotificationsSelector)

  return <>
    <button>Home</button>
    <button>My Network ({allNotifications.network>=100?"99+":allNotifications.network})</button>
    <button>Jobs {allNotifications.jobs>0?`(${allNotifications.jobs})`:""}</button>
    <button>Messages {allNotifications.messages>0?`(${allNotifications.messages})`:""}</button>
    <button>Notifications {allNotifications.notifications>0?`(${allNotifications.notifications})`:""}</button>
    <button>Me {totalNotifs>0?`(${totalNotifs})`:""}</button>
  </>
}