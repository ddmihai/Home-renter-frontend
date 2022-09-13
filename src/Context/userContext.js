import { createContext, useState } from "react";



// CONTEXT FILE
const UserContext = createContext();

export const UserProvider = ({children}) => {
    // States
    const [userData, setuserData] = useState(null);

    // Make the userData
    const registerUser = user => setuserData([user]);

    return (
        <UserContext.Provider value={
            { userData, registerUser }
        }>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;