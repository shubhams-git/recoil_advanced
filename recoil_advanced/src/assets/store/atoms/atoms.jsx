import { atom, selector } from "recoil";

export const allNotifsAtom = atom({
    key:"allNotifsAtom",
    default:{
        network:1,
        jobs:2,
        messages:3,
        notifications:4,
    }
})

export const totalNotificationsSelector = selector({
    key:"totalNotificationsSelector",
    get: ({get})=>{
        const allNotifications = get(allNotifsAtom)
        return allNotifications.network+allNotifications.jobs+allNotifications.messages+allNotifications.notifications;
    }
}) 