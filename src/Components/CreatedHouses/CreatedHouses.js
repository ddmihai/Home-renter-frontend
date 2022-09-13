import React, { useState, useEffect } from 'react'
import { GET_CREATED_HOUSES } from '../../Helpers/getCreatedHouses'


const CreatedHouses = ({userId}) => {
    
    const [housesList, setHousesList] = useState(0);

    // Get all the houses created
    const getHouses = async userId => {
        try {
            const response = await GET_CREATED_HOUSES(userId);
            setHousesList(response.data.length);
        } 
        catch (error) {
            console.log(error);    
        }
    }

    useEffect(() => {
        getHouses(userId);
        // eslint-disable-next-line
    }, []);

    return (
    <p>
        Created <b>{housesList}</b> houses.
    </p>
  )
}

export default CreatedHouses