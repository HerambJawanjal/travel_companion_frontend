import axios from "axios";
const authToken=localStorage.getItem("token");
export const getDestination= async (lat ,lon,city_name)=>{
    try {


        //  console.log(authToken)
        const places= await axios.get(`http://localhost:8796/api/places/getDestination?lat=${lat}&lon=${lon}`,{headers:{
            Authorization:`Bearer ${authToken}`
        }})
        // console.log(authToken)
        // console.log(places);
        return places;
    } catch (error) {
        console.log("error in getdetination",error);
        return error;
    }
}

export const getImages = async (place) => {
    try {
        const images = await axios.get(`https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${place}&gsrlimit=10&gsrnamespace=6&prop=imageinfo&iiprop=url&origin=*`);
        // console.log("images", images.data);
        return images.data;
    } catch (error) {
        console.log("error in get images", error);
        return error;
    }
};


export const getHotels= async (lat,lon,city_name)=>{
try {
    if(city_name){
        const hotels= await axios.get(`http://localhost:8796/api/places/getHotels?city_name=${city_name}&lat=${lat}&lon=${lon}`);
        console.log("Hotels Data in services Frontend>",hotels.data.data);
    
        return hotels
    }else{
        console.log("city name in FR getHotel not found");
        return
    }
   
    
    
} catch (error) {
    console.log("error in Get Hotel",error);
        return error;
}
}

