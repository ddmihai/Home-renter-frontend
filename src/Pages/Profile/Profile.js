import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeAvatar from '../../Components/ChangeAvatar/ChangeAvatar';
import EditUserDetails from '../../Components/EditUserDetails/EditUserDetails';
import CreatedHouses from '../../Components/CreatedHouses/CreatedHouses';
import { ProfileAvatar, ProfileInfo, ProfileInfoTextWrapper, 
        ProfileWrapper, EditWrapper, CreateNewHouse } from './Profile.styles';

        
import Loading from '../Loading/Loading';

// Context
import UserContext from '../../Context/userContext.js';



const Profile = () => {

  // Get userDetails from context api and and session storage
  const {userData}    = useContext(UserContext);
  const userDetails   = JSON.parse(sessionStorage.getItem('user'));
  const dateJoined    = new Date(userDetails.joined).toLocaleDateString();

  // If the userData from context returns null, than avatarImage will be the old 
  // image from session storage..... Else, the avatarImage will be the new Image from context
  // IMPORTANT => Either way, the avatar from session storage will be updated
  const avatarImage = userData ? userData[0].avatar : userDetails.avatar;
  const navigate = useNavigate();



  return (
    // Main wrapper
    <ProfileWrapper>
      
      {/* Profile holder with avatar */}
      <ProfileInfo>
        {avatarImage ? <ProfileAvatar alt='Profile avatar' src={avatarImage}/> : <Loading />}
        <ProfileInfoTextWrapper>
            <p>{userDetails.fName } {userDetails.lName}</p>
            <p>
              Joined: 
              <i><small> {dateJoined}</small></i>
            </p>
        </ProfileInfoTextWrapper>
      </ProfileInfo>

      {/* Get the created Houses */}
      <EditWrapper>
        <CreatedHouses userId={userDetails._id} />
        <CreateNewHouse onClick={() => navigate('/add-house')}>
          Add new house <strong>here</strong>
        </CreateNewHouse>
      </EditWrapper>

      {/* Change Avatar mate */}
      <ChangeAvatar userId={userDetails._id} />

      {/* Edit user details */}
      <EditUserDetails userId={userDetails._id}/>

    </ProfileWrapper>
  )
}

export default Profile;