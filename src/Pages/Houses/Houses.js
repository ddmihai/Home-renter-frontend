import React, { useEffect, useState } from 'react';
import API_REQUEST from '../../Axios/axios';
import Pagination from '../../Components/Pagination/Pagination';

import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom';
import { HouseAddressHolder, HouseButton, HouseContainer, HouseHolder, HouseImageStyle, HouseMainWrapper } from './Houses.styles';




const Houses = () => {

  // eslint-disable-next-line
  const [loading, isLoading] = useState(false);
  const [housesList, setHousesList] = useState(null);

  // Pages states
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // eslint-disable-next-line
  const pageNumbers = [];
  const navigate = useNavigate();


  // Get all houses
  const getHouses = async () => {
    isLoading(true);

    try {
      const list = await API_REQUEST.get('/get-all-houses');
      setHousesList(list.data);
      isLoading(false);
    } 
    catch (error) {
      isLoading(false);
      console.log(error);
    }
  }

  // Get current posts and create an array of new posts for each page
  // Slice the currentHpuses only after the houses list finished loading
  const indexLastPost   = currentpage * postsPerPage;
  const indexFirstPost  = indexLastPost - postsPerPage;
  const currentHouses   = housesList && housesList.slice(indexFirstPost, indexLastPost);


  // paginate method
  const paginate = pageNumber => setCurrentPage(pageNumber);


  // Use effect 
  useEffect(() => {
    getHouses();

  }, []);





  return (
    <div>
      {
        currentHouses ? 
        <HouseHolder>
          {currentHouses.map(house => (
            <HouseMainWrapper key={house._id}>

              {/* Content */}
              <HouseContainer>
                  <HouseImageStyle src={house.images[0]} alt='First house img' />

                {/* Details div */}
                <HouseAddressHolder>
                  <p>{house.city}</p>
                  <p>{house.street}</p>
                  <p>{house.price}</p>

                  <HouseButton onClick={() => navigate(`/house-details/${house._id}`)}>Details</HouseButton>
                </HouseAddressHolder>
              </HouseContainer>
            </HouseMainWrapper>
          ))}
          <Pagination postsPerPage={postsPerPage} totalPosts={housesList.length} paginate={paginate}/>
        </HouseHolder>
        :
        <Loading />
      }
    </div>
  )
}

export default Houses;
