import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_REQUEST from '../../Axios/axios';
import ButtonLined from '../../Components/ButtonLined/ButtonLined';
import TextInput from '../../Components/TextInput/TextInput';
import { FormInputWrapper, MainHouseForm, MainHouseSubTitle, MainHouseTitle } from './AddHouse.styles';

const AddHouse = () => {

  const userId = JSON.parse(sessionStorage.getItem('user'))._id;
  const navigate = useNavigate();

  // House states
  const [number, setNumber]                 = useState('');
  const [street, setStreet]                 = useState('');
  const [city, setCity]                     = useState('');
  const [postcode, setPostCode]             = useState('');
  const [description, setDescription]       = useState('');
  const [price, setPrice]                   = useState('');
  const [typeOfTenancy, settypeOfTenancy]   = useState('');

  
  const handleAddHouse = async event => {
    event.preventDefault();

    if (number && street && city && postcode && description && price && typeOfTenancy) {
      try {
        const createdHouse = await API_REQUEST.post('/create-house', 
          {author: userId, number, street, city, postcode, description, price, typeOfTenancy});  
          
          // Navigate into add image page and send the house id as param
          navigate(`/add-house-img/${createdHouse.data._id}`);
      } 
      catch (error) {
        console.log(error);
      }
    }
    else return console.log('App input must be completed');
  }
  
  
  return (
    <main>
      <MainHouseForm onSubmit={handleAddHouse}>
        <MainHouseTitle>Add new house</MainHouseTitle>
        <MainHouseSubTitle>Please complete all the fields in order to add the house</MainHouseSubTitle>

        <FormInputWrapper>
          <TextInput type='number' placeholder='House nr.' value={number}         
              onChange={e => setNumber(e.target.value)} required/>
          <TextInput type='text' placeholder='Street' value={street}         
              onChange={e => setStreet(e.target.value)} required/>
          <TextInput type='text' placeholder='City' value={city}           
              onChange={e => setCity(e.target.value)} required/>
          <TextInput type='text' placeholder='Postcode' value={postcode}       
              onChange={e => setPostCode(e.target.value)} required/>
          <TextInput type='text' placeholder='Description' value={description}    
              onChange={e => setDescription(e.target.value)} required/>
          <TextInput type='number' placeholder='Price' value={price}          
              onChange={e => setPrice(e.target.value)} required/>
          <TextInput type='text' placeholder='Week/Month' value={typeOfTenancy}  
              onChange={e => settypeOfTenancy(e.target.value)} required/>
        </FormInputWrapper>
        
        {/* Button submit */}
        <ButtonLined type='submit'>Add house</ButtonLined>
      </MainHouseForm>
    </main>
  )
};

export default AddHouse