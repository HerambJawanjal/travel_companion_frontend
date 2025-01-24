import axios from "axios";

export const handleLogin = async(email,password)=>{

    try {
        const loginData=await axios.post(`http://localhost:8796/api/auth/loginUser`,{
            email:email,
            password:password
        })
        console.log(loginData)

         if(!loginData.data.success){ 
            console.log("login data success == false")
            return false ;
         }

        localStorage.setItem("token",loginData.data.token)


        return loginData;
    } catch (error) {
        console.log("handleLogin error", error)
    }
}
