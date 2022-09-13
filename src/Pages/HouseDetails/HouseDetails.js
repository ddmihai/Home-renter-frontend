import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import API_REQUEST from '../../Axios/axios';
import HouseAddress from '../../Components/HouseDetailsElements/HouseAddress/HouseAddress';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import {Button} from '../../Components/ButtonLined/ButtonLined.styles'

import { CarrouselWrapper, HouseDescription, HouseTimeCreated, ImageAndHouseInfo, MainHouseInfo } from './HouseDetails.styles';




const HouseDetails = () => {

    const { _id } = useParams(); 

    const navigate = useNavigate();
    const [houseObj , setHouseObj]      = useState(null);
    const [imageArray , setimageArray]  = useState([]);

    const dateCreated = houseObj ? new Date(houseObj.addedTime).toLocaleDateString() : 'Loading'; 



    // Get house by idd
    const getHouseById = async () => {

        // Get the house by the _id and set the house state with the API responser
        try {
            const response = await API_REQUEST.get(`/get-house-by-id/${_id}`);
            setHouseObj(response.data);
            response.data.images.map(image => {
               return setimageArray(img => [...img, {url: image}])
            });
        } 
        catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getHouseById();
        
        // eslint-disable-next-line
    }, []);





  return (
    <MainHouseInfo>

        <ImageAndHouseInfo>
            <CarrouselWrapper>
                <ImageSlider slides={imageArray}/>
            </CarrouselWrapper>

            {/* House details */}
            {houseObj && 
             <div>
             <HouseAddress city={houseObj.city} 
                  street={houseObj.street} 
                  number={houseObj.number} 
                  postcode={houseObj.postcode}
                  typeOftenancy={houseObj.typeOfTenancy}
                  price={houseObj.price}/>
            </div>}
        </ImageAndHouseInfo>

        {/* Description of the house */}
        {houseObj && 
        <>
            <HouseDescription>{houseObj.description}</HouseDescription>
            <HouseTimeCreated>Created at: {dateCreated}</HouseTimeCreated>
        </>}
        
        {/* Btton containers */}
        <Button style={{maxWidth: '200px', marginLeft: 'auto !important'}} onClick={() => navigate('/')}>Created houses</Button>
    </MainHouseInfo>
  )
}

export default HouseDetails;