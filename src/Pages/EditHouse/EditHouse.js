import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API_REQUEST from '../../Axios/axios';
import TextInput from '../../Components/TextInput/TextInput';
import Loading from '../Loading/Loading';
import { EditHouseHeader, FormComponent, FormHolder } from './EditHouse.styles';

import { Button } from '../../Components/ButtonLined/ButtonLined.styles.js'


const EditHouse = () => {


    const { _id }                   = useParams();
    const [houseObj , setHouseObj]  = useState(null);
    const [loading, setIsLoading]   = useState(false);
    const navigate                  = useNavigate();


    // House states
    const [number, setNumber]                 = useState(null);
    const [street, setStreet]                 = useState(null);
    const [city, setCity]                     = useState(null);
    const [postcode, setPostCode]             = useState(null);
    const [description, setDescription]       = useState(null);
    const [price, setPrice]                   = useState(null);
    const [typeOfTenancy, settypeOfTenancy]   = useState(null);



    // Get house by id
    const getHouseById = async () => {
        setIsLoading(true);
        
        try {
            const response = await API_REQUEST.get(`/get-house-by-id/${_id}`);
            setIsLoading(false);
            setHouseObj(response.data);
        } 
        catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }


    // Update house
    // Get old house from the state. 
    // If the user do not provide a value, replace the old values. 
    const handleUpdateHouse = async event => {
        event.preventDefault();

        try {
            await API_REQUEST.put(`/update-house/${_id}`, 
              { number:         number          ? number        : houseObj.number,
                street:         street          ? street        : houseObj.street, 
                city:           city            ? city          : houseObj.city, 
                postcode:       postcode        ? postcode      : houseObj.postcode, 
                description:    description     ? description   : houseObj.description, 
                price:          price           ? price         : houseObj.price, 
                typeOfTenancy:  typeOfTenancy   ? typeOfTenancy : houseObj.typeOfTenancy });

            navigate(`/created-houses/${_id}`);
        } 
        catch (error) {
            console.log(error);
        }
    }
 

    // Use effect get house details on component render
    useEffect(() => {
        getHouseById();

        // eslint-disable-next-line
    }, []);

  return (
    <>
       { !loading && houseObj ?
            <main>

            <FormHolder>
                <EditHouseHeader>Update house</EditHouseHeader>
                <p>Want to add/modify anything before adding the house?</p>
                <FormComponent onSubmit={handleUpdateHouse}>
                    <TextInput type='number' placeholder='House nr.'    onChange={e => setNumber(e.target.value)} />
                    <TextInput type='text' placeholder='Street'         onChange={e => setStreet(e.target.value)} />
                    <TextInput type='text' placeholder='City'           onChange={e => setCity(e.target.value)} />
                    <TextInput type='text' placeholder='Postcode'       onChange={e => setPostCode(e.target.value)} />
                    <TextInput type='text' placeholder='Description'    onChange={e => setDescription(e.target.value)} />
                    <TextInput type='number' placeholder='Price'        onChange={e => setPrice(e.target.value)} />
                    <TextInput type='text' placeholder='Week/Month'     onChange={e => settypeOfTenancy(e.target.value)} />

                    <Button type='submit' >Update</Button>
                    <Button onClick={() => navigate(`/created-houses/${_id}`)} >Skip</Button>
                </FormComponent>
            </FormHolder>




            </main>
       
            : 

            <Loading />
        }
    </>
  )
};

export default EditHouse;