import { atom, selector } from "recoil";
import axios from "axios";

export const allNotifsAtom = atom({
    key:"allNotifsAtom",
    default:selector({
        key: "allNotifsSelector",
        get: async ()=>{
            const response = await axios.get("http://localhost:3000/notifications")
            return response.data
        }
    })
})

export const totalNotificationsSelector = selector({
    key:"totalNotificationsSelector",
    get: ({get})=>{
        const allNotifications = get(allNotifsAtom)
        return (
            (allNotifications.network || 0) +
            (allNotifications.jobs || 0) +
            (allNotifications.messages || 0) +
            (allNotifications.notifications || 0)
        );
    }
}) 