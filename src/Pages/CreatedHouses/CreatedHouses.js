import React, { useEffect, useState } from 'react'
import CreatedHousesList from '../../Components/CreatedHousesList/CreatedHousesList';
import { GET_CREATED_HOUSES } from '../../Helpers/getCreatedHouses';
import Loading from '../Loading/Loading';

const CreatedHouses = () => {

  const userObj = JSON.parse(sessionStorage.getItem('user'));
  
  const [houseList, setHouseList] = useState([]);
  const [loading, setLoading] = useState(false);



  // Get all the houses created
  const getHouses = async () => {
    setLoading(true);

    try {
      const response = await GET_CREATED_HOUSES(userObj._id);
      setHouseList(response.data);
      setLoading(false);
    } 
    catch (error) {
      setLoading(false);
      console.log(error);    
    }
  }


  // useefffect
  useEffect(() => {
    getHouses();
    
    // eslint-disable-next-line
  }, []);


  // Return component
  return (
    <>
      {
        !loading ?
        <main>
          <CreatedHousesList getHouses={getHouses} houseList={houseList}/>
        </main>

        : <Loading />
      }
    </>
  )
}

export default CreatedHouses