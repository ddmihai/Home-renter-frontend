import API_REQUEST from "../Axios/axios"


export const GET_CREATED_HOUSES = async _id => {
    try {
        const houses = await API_REQUEST.get(`/get-created-houses/${_id}`);
            if (houses.length === 0) 
                return 0;
            else 
                return houses;
    } 
    catch (error) {
        return error;
    }
}