import "./Contact.css"
import react from 'react'

const Contact = () => {
    let isLogIn = true;
    if(isLogIn){
        return(
            <>
            <h1>Welcome Back</h1>
            </>
        )
    }else{
        return(
            <>
            <h1>Please login</h1>
            </>
        )
    }
}

export default Contact