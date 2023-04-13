import { Navigate } from "react-router-dom"
import { MyConsumer } from "./Authcomponent"

export const RequiredAuth=({children})=>{
    const {loged}=MyConsumer()
    if(loged){
       return children
    }else{
        return <Navigate to="/login"/>
    }
}