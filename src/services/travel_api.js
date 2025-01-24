import axios from "axios";
const authToken=localStorage.getItem("token");
export const getDestination= async (lat ,lon)=>{
    try {

        console.log(lat ,lon)
        const places=axios.get(`http://localhost:8796/api/places/getDestination?lat=${lat}&lon=${lon}`,{headers:{
            Authorization:`Bearer ${authToken}`
        }})
        console.log(authToken)
        console.log(places);
        return places;
    } catch (error) {
        console.log("error in getdetination",error);
    }
}

