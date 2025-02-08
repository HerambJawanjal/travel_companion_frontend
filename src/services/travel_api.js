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
        return error;
    }
}

export const getImages = async (place) => {
    try {
        const images = await axios.get(`https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${place}&gsrlimit=10&gsrnamespace=6&prop=imageinfo&iiprop=url&origin=*`);
        console.log("images", images.data);
        return images.data;
    } catch (error) {
        console.log("error in get images", error);
        return error;
    }
};

