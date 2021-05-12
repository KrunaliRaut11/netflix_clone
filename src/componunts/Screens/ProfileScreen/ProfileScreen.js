import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "./profile.css";
import Avatar from "../../../assets/images/avatar.png"
import { useSelector } from 'react-redux';
import { auth } from '../../config/Firebase';

import { selectUser } from '../../../features/counter/userSlice';
import PlansScreen from '../PlansScreen/PlansScreen';


function ProfileScreen() {
  const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                <img src={Avatar} alt="Avatar" />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <PlansScreen />
                        <button onClick={()=> auth.signOut()} className="profileScreen_signOut"> Sign Out</button>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
