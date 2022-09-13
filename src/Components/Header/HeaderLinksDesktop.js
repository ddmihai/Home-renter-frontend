import { Link, useNavigate } from "react-router-dom"
import { LinkWrapperDesktop, LinkElement } from "./Header.styles"


const HeaderLinksDesktop = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();

    

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
    }


  return (
    <LinkWrapperDesktop>
    
            <LinkElement>
                <Link to='/' >Home</Link>
            </LinkElement>

            {/* Signup link will be displayed if the user is not loggedin */}
            {!user &&
            <LinkElement>
                <Link to='/signup' >Signup</Link>
            </LinkElement>}

            <LinkElement>
                <Link to='/houses' >All houses</Link>
            </LinkElement>

            {/* Add house /add-house */}
            {user && 
            <LinkElement>
                <Link to='/add-house' >Add house</Link>
            </LinkElement>}

            {/* Profile to be render only if the user is logged in */}
            {user && 
            <LinkElement>
                <Link to='/profile' >Profile</Link>
            </LinkElement>}

            {/* Created houses render only if the user is logged in */}
            {user && 
            <LinkElement>
                <Link to={`/created-houses/${user._id}`}>Created houses</Link>
            </LinkElement>}

            {/* Login render if there is no user in the session storage */}
            {!user &&
            <LinkElement>
                <Link to='/login' >Login</Link>
            </LinkElement>}

            {/* Logout function to clear session storage */}
            {user &&
            <LinkElement onClick={handleLogout}>
                <Link to='/' >Logout</Link>
            </LinkElement>}

        </LinkWrapperDesktop>
  )
}



export default HeaderLinksDesktop;