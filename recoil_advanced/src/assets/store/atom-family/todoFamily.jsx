
import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todoFamily = atomFamily({
    key:"todoFamily",
    default: selectorFamily({
        key:"todoFamilySelector",
        get: id => async ()=>{
            const response = await axios.get("http://localhost:3000/todos")
            const list = response.data
            return list.find(x=>x.id===id)
        }
    })
})
