import React, { useState } from 'react'
import API_REQUEST from '../../Axios/axios';
import ButtonLined from '../../Components/ButtonLined/ButtonLined';
import TextInput from '../../Components/TextInput/TextInput'
import { ButtonWrapper, FormWraper, InputWrapper, LoginWrpper, SubtitleLogin, TitleLogin } from './Login.styles'
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState(null);
  const [loading, setLoading]   = useState(false);

  const handleEmailChange       = event => setEmail(event.target.value);
  const handlePasswChange       = event => setPassword(event.target.value);

  const navigate = useNavigate();

  // Handle Login form
  const handleLoginForm = async event => {
    event.preventDefault();
    setLoading(true);
    
    try {
      const userDetails = await API_REQUEST.post('/login', {email, password});
      setLoading(false);
      navigate('/profile');
      sessionStorage.setItem('user', JSON.stringify(userDetails.data));
    }   
    catch (error) {
      // Check for 404 status (Wrong credentials)
      setLoading(false);
      if (error.response.status === 404) return setError(error.response.data);
      else  return setError(`Error: ${error}`);
    }
  }




  return (
    <>
      {
      !loading ? 
      <LoginWrpper>
      {/* Form Wrapper */}
      <FormWraper onSubmit={handleLoginForm}>
        <TitleLogin>Wellcome to home renter</TitleLogin>
        <SubtitleLogin>{error ? error : 'Please complete the form bellow.'}</SubtitleLogin>
      
        <InputWrapper>
          <TextInput onChange={handleEmailChange} type='text' placeholder='User@email.com'  required/>
          <TextInput onChange={handlePasswChange} type='password' placeholder='password'  required/>
        </InputWrapper>

        <ButtonWrapper>
          <ButtonLined type='submit'>Login</ButtonLined>
        </ButtonWrapper>
      </FormWraper>

    </LoginWrpper>

    // Else render loading screen
    : <Loading />
    }
    </>
  )
}

export default Login