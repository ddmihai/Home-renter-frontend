import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API_REQUEST from '../../Axios/axios';
import ButtonLined from '../../Components/ButtonLined/ButtonLined';
import TextInput from '../../Components/TextInput/TextInput'
import Loading from '../Loading/Loading';
import { SignupForm, SignupInfo, SignupInputWrapper, SignupSubTitle, SignupTitle, SignupWrapperStyled } from './Signup.styles'

const Signup = () => {

  const navigate = useNavigate();

  const [fName, setfName]         = useState('');
  const [lName, setlName]         = useState('');
  const [email, setEmail]         = useState('');
  const [passw, setPassw]         = useState('');
  const [confPass, setConfPass]   = useState('');
  const [error, seterror]         = useState(null);
  const [loading, setloading]     = useState(false);

  const handleChangeFname         = event => setfName(event.target.value);
  const handleChangeLname         = event => setlName(event.target.value);
  const handleChangeEmail         = event => setEmail(event.target.value);
  const handleChangePassw         = event => setPassw(event.target.value);
  const handleChangeConfPass      = event => setConfPass(event.target.value);

  const handleSignupForm  = async event => {
    event.preventDefault();
    setloading(true);

    try {
      if (confPass === passw) {
        await API_REQUEST.post('/signup', {fName, lName, avatar: '', email, password: passw});
        alert('Please use these credentials to login.');
        navigate('/login');
        setloading(false);
      }
      else {
        setloading(false);
        seterror('Password do not match.');
      };
    } 
    catch (error) {
      if (error.response.data === 'Please chose another email.') {
          setloading(false);
          seterror('Please chose another email.');
        }
      else {
        setloading(false);
        seterror(error);
      }
    }
  }

  return (
    <>
      {!loading ? 
      // Main wrapper
      <SignupWrapperStyled>
      <SignupForm onSubmit={handleSignupForm}>
        {/* Title, Subtitle and Info section */}
        <SignupTitle>Wellcome to Renter</SignupTitle>
        <SignupSubTitle>{error ? error : 'Create an account for free and checkout the newest rooms and houses added.'}</SignupSubTitle>
        <SignupInfo>Please complete the fields bellow.</SignupInfo>

        {/* Inout Wrapper */}
        <SignupInputWrapper>
          <TextInput onChange={handleChangeFname} placeholder='First name' type='text' required/>
          <TextInput onChange={handleChangeLname} placeholder='Last name' type='text' required/>
          <TextInput onChange={handleChangeEmail} placeholder='User@email.com' type='text' required/>
          {/* Password double checker */}
          <TextInput onChange={handleChangePassw} placeholder='Password' type='password' required/>
          <TextInput onChange={handleChangeConfPass} placeholder='Confirm password' type='password' required/>
        </SignupInputWrapper>

        <ButtonLined type='submit'>Signup</ButtonLined>
      </SignupForm>
    </SignupWrapperStyled>
    : 
    <Loading />}
    </>
  )
}

export default Signup