import React, { useState, useContext } from 'react'
import API_REQUEST from '../../Axios/axios';

// Components
import { ChangeWrapper, AvatarInput, AvatarButton } from './ChangeAvatar.styles'

import UserContext from '../../Context/userContext';


const ChangeAvatar = ({userId}) => {

    const [image, setImage]  = useState(null);
    const {registerUser}     =      useContext(UserContext);


    // Add avatar
    const handleAddAvatar = async event => {
        event.preventDefault();

        // Add image to the form data
        let formData = new FormData();    
        formData.append('file', image);

        try {
            // Upload avatar
            await API_REQUEST.post(`/add-avatar/${userId}`, formData);
            
            // Update session storage with the new object that contains the new avatar
            const newUser = await API_REQUEST.get(`/get-user/${userId}`);
            registerUser(newUser.data);
            sessionStorage.setItem('user', JSON.stringify(newUser.data));
        } 
        catch (error) {
            console.log(error);
        }
    };


  return (
        <ChangeWrapper>
        <form onSubmit={handleAddAvatar} encType="multipart/form-data">
            <AvatarInput onChange={e => setImage(e.target.files[0])} 
                type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <AvatarButton type='submit'>Add avatar</AvatarButton>
        </form>
        </ChangeWrapper>
  )
}

export default ChangeAvatar