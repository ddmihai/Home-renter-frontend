import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Profile from '../Pages/Profile/Profile';
import AddHouse from '../Pages/AddHouse/AddHouse';
import AddHouseImage from '../Pages/AddHouseImage/AddhouseImage';
import EditHouse from '../Pages/EditHouse/EditHouse';
import CreatedHouses from '../Pages/CreatedHouses/CreatedHouses';
import HouseDetails from '../Pages/HouseDetails/HouseDetails';
import Houses from '../Pages/Houses/Houses';





const RouterConfig = () => {
  
  return (
    <>
    <Routes>
        <Route path='/' index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/houses' element={<Houses />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/add-house' element={<AddHouse />}/>
        <Route path='/add-house-img/:_id' element={<AddHouseImage />}/>
        <Route path='/edit-house/:_id' element={<EditHouse />}/>
        <Route path='/created-houses/:_id' element={<CreatedHouses />} />
        <Route path='/house-details/:_id' element={<HouseDetails />} />
    </Routes>
    </>
  )
}

export default RouterConfig