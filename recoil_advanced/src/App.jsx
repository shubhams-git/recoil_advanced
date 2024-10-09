import { useRecoilValue } from "recoil"
import { jobsCountAtom } from "./assets/store/atoms/jobsCountAtom"
import { messagesCountAtom } from "./assets/store/atoms/messagesCountAtom"
import { notificationsCountAtom } from "./assets/store/atoms/notificatiosnCountAtom"
import { networkCountAtom } from "./assets/store/atoms/networkCountAtom"
export default function App(){

  const jobsCount = useRecoilValue(jobsCountAtom)
  const networkCount = useRecoilValue(networkCountAtom)
  const messagesCount = useRecoilValue(messagesCountAtom)
  const notificationsCount = useRecoilValue(notificationsCountAtom)

  return <>
    <button>Home</button>
    <button>My Network ({networkCount>=100?"99+":networkCount})</button>
    <button>Jobs {jobsCount>0?`(${jobsCount})`:""}</button>
    <button>Messages {messagesCount>0?`(${messagesCount})`:""}</button>
    <button>Notifications {notificationsCount>0?`(${notificationsCount})`:""}</button>
  </>
}