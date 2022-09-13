import React from 'react'
import { useNavigate } from 'react-router-dom'
import API_REQUEST from '../../Axios/axios'
import { CreatedHousesHeader, CreatedHousesSubtitle, HouseDetailsInfo, HouseImgAndInfo, HousePriceEl, 
        HouseWrapper, MainWrapper, HousePriceNr, HouseTenancy, IconWrapper, AddNewHouseWrapper, HouseTitle } from './CreatedHousesList.styles';

// Icons and Colors
import { AiOutlineInfoCircle, AiOutlineDelete } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import Colors from '../../variables/Colors';

// Mediaquery
import { useMediaQuery } from 'react-responsive';
import { Button } from '../ButtonLined/ButtonLined.styles';



const CreatedHousesList = ({houseList, getHouses}) => {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 600px)' });
    
    const navigate = useNavigate();



    // Execute api request to delete house and get all the created houses again
    const handleDeleteHouse = async id => {
        try {
            await API_REQUEST.delete(`/delete-house/${id}`);    
            getHouses();
        } 
        catch (error) {
            console.log(error);
        }
    }
    


  return (
   <MainWrapper>
    <CreatedHousesHeader>Your added houses</CreatedHousesHeader>
    <CreatedHousesSubtitle>Add, edit or remove your added houses</CreatedHousesSubtitle>

    {houseList && houseList.map(house => (
        
        <HouseWrapper key={house._id}>
      
        {/* container containing the first house image and details */}
        <HouseImgAndInfo>
            <div>
                <img src={house.images[0]} width={180} height={120} alt='House landing pic'/>
            </div>

            {/* House details */}
            <HouseDetailsInfo isBigScreen={isBigScreen} isMobile={isMobile}>
                <HouseTitle>{house.city}</HouseTitle>
                <p>{house.street}</p>
                {/* <p>Price: {house.price} £ / {house.typeOfTenancy}</p> */}
                <p>
                    <HousePriceEl>Price: </HousePriceEl>
                    <HousePriceNr>{house.price}£ </HousePriceNr>
                    <HouseTenancy>, {house.typeOfTenancy}</HouseTenancy>
                </p>
            </HouseDetailsInfo>
        </HouseImgAndInfo>


            {/* Button details */}
            <IconWrapper style={{ display: 'flex', justifyContent: 'right !important'}}>
                <AiOutlineInfoCircle color={Colors.darkGrey} size={22}
                    onClick={() => navigate(`/house-details/${house._id}`)}>Details</AiOutlineInfoCircle>
                <AiOutlineDelete color={Colors.darkGrey} size={22}
                    onClick={() => handleDeleteHouse(house._id)}>Delete</AiOutlineDelete>
                <FiSettings color={Colors.darkGrey} size={22}
                    onClick={() => navigate(`/add-house-img/${house._id}`)}>Edit house</FiSettings>
            </IconWrapper>
        </HouseWrapper>
    ))}


    {/* Display this div if the  */}
    {
            !houseList && 
            <>
            <p>No house added to profile</p>
            <Button onClick={() => navigate('/add-house')}>Add house</Button>
            </>
    }
    
    <AddNewHouseWrapper>
        <Button onClick={() => navigate('/add-house')}>Add new house</Button>
    </AddNewHouseWrapper>
   </MainWrapper>
  )
}

export default CreatedHousesList