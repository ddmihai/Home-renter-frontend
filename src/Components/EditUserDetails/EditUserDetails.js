import React, { useState, useContext } from 'react'
import TextInput from '../TextInput/TextInput';
import ButtonLined from '../ButtonLined/ButtonLined';
import { FormDocumentWrapper, FromDocumentDescription, FromDocumentSubTitle, FromDocumentTitle,
        FormDocumentInputWrapper } from './EditUserDetails.styles'
import API_REQUEST from '../../Axios/axios';

// Context
import UserContext from '../../Context/userContext.js';






const EditUserDetails = ({userId}) => {

    const { registerUser }    = useContext(UserContext);
    const [fName, setFname]         = useState('');
    const [lName, setLname]         = useState('');
    const [email, setEmail]         = useState('');



    // Handle user update
    const handleEditUserDetails = async event => {
        event.preventDefault();

        try {
            // Get the old user and replace the fields if the user did not completed any
            const oldUser   = await API_REQUEST.get(`/get-user/${userId}`);
            const status    = await API_REQUEST.put('/edit-user', {
                fName:        fName.length        === 0 ? oldUser.data.fName : fName,
                lName:        lName.length        === 0 ? oldUser.data.lName : lName,
                email:        email.length        === 0 ? oldUser.data.email : email,
                userId});
            
            // Add the new user details to localstorage and context api
            registerUser(status.data);
            sessionStorage.setItem('user', JSON.stringify(status.data));
            
            setFname('');
            setLname('');
            setEmail('');
        } 
        catch (error) {
            console.log(error);
        }
    }



    // Render component
  return (
        <FormDocumentWrapper onSubmit={handleEditUserDetails}>
            
            <FromDocumentTitle>Change user details</FromDocumentTitle>
            <FromDocumentSubTitle>Please complete the details required</FromDocumentSubTitle>
            <FromDocumentDescription>
                If you decide to change your email, please do not forget to use it during your next login process.
            </FromDocumentDescription>

            {/* Input rows and button */}
            <FormDocumentInputWrapper>
                <TextInput value={fName}    onChange={e => setFname(e.target.value)}  type='text' placeholder='First name'/>
                <TextInput value={lName}    onChange={e => setLname(e.target.value)}  type='text' placeholder='Last name'/>
                <TextInput value={email}    onChange={e => setEmail(e.target.value)}  type='email' placeholder='User@email.com'/>
            </FormDocumentInputWrapper>

            <ButtonLined type='submit' >Update</ButtonLined>
        </FormDocumentWrapper>
  )
}

export default EditUserDetails;
