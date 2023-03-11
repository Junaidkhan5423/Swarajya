import create from "zustand"
export const useAuthentication =create((set)=>({
    auth :{
        name:"",
        token:"",
    },
    setAuthentication:(adminDetail)=> set((state)=> ({auth:{...state.auth, name: adminDetail.name , token :adminDetail?.token }}))
}))