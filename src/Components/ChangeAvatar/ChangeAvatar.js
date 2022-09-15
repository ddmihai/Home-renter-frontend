import React, { useState, useContext } from 'react'
import API_REQUEST from '../../Axios/axios';

// Components
import { ChangeWrapper, AvatarInput, AvatarButton } from './ChangeAvatar.styles'

import UserContext from '../../Context/userContext';
import Loading from '../../Pages/Loading/Loading';


const ChangeAvatar = ({userId}) => {

    const [image, setImage]  = useState(null);
    const [loading, setLoading] = useState(false);

    const {registerUser}     = useContext(UserContext);


    // Add avatar
    const handleAddAvatar = event => {
        event.preventDefault();
        setLoading(true);

        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = async () => {

            try {
                // Upload avatar with the base64 string
                await API_REQUEST.post(`/add-avatar/${userId}`, {image: reader.result});
                // Update session storage with the new object that contains the new avatar
                const newUser = await API_REQUEST.get(`/get-user/${userId}`);
                registerUser(newUser.data);
                sessionStorage.setItem('user', JSON.stringify(newUser.data));
                setLoading(false);
            } 
            catch (error) {
                if (error.response.data === 'The file is too large..') {
                    setLoading(false);
                    alert(error.response.data);
                }
                else {
                    setLoading(false);
                    console.log(error);
                    }
            }
        }
    };


  return (
        <>
        {loading ? <Loading /> :
        <ChangeWrapper>
        <form onSubmit={handleAddAvatar} encType="multipart/form-data">
            <AvatarInput onChange={e => setImage(e.target.files[0])} 
                type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <AvatarButton type='submit'>Add avatar</AvatarButton>
        </form>
        </ChangeWrapper>
        }
        </>
  )
}

export default ChangeAvatar