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

export const handle_Registration = async(firstname, lastname, password, mobileNo, email)=>{

    try {
        const createUser_data=await axios.post(`http://localhost:8796/api/auth/createUser`,{
            firstname:firstname,
            lastname:lastname,
            mobileNo:mobileNo,
            email:email,
            password:password
        })
        console.log(createUser_data)

         if(!createUser_data.data.success){ 
            console.log("login data success == false")
            return false ;
         }

        // localStorage.setItem("token",loginData.data.token)


        return createUser_data.data;
    } catch (error) {
        console.log("handleLogin error", error)
    }
}