import { Link, useNavigate } from "react-router-dom"
import { LinksWrapperMobile, LinkElement } from "./Header.styles"


const HeaderLinksMobile = props => {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();

    

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        props.closeHeader();
        navigate('/');
    };

  return (
    <LinksWrapperMobile>

            <LinkElement onClick={props.closeHeader}>
                <Link to='/' >Home</Link>
            </LinkElement>
            
            <LinkElement onClick={props.closeHeader}>
                <Link to='/houses' >All houses</Link>
            </LinkElement>

            {/* Add house /add-house */}
            {user && 
            <LinkElement onClick={props.closeHeader}>
                <Link to='/add-house' >Add house</Link>
            </LinkElement>}

            {/* Profile to be render only if the user is logged in */}
            {user && 
            <LinkElement onClick={props.closeHeader}>
                <Link to='/profile' >Profile</Link>
            </LinkElement>}

            {/* Created houses render only if the user is logged in */}
            {user && 
            <LinkElement onClick={props.closeHeader}>
                <Link to={`/created-houses/${user._id}`}>Created houses</Link>
            </LinkElement>}

            {/* Login render if there is no user in the session storage */}
            {!user &&
            <LinkElement onClick={props.closeHeader}>
                <Link to='/login' >Login</Link>
            </LinkElement>}

            {/* Signup link will be displayed if the user is not loggedin */}
            {!user &&
            <LinkElement onClick={props.closeHeader}>
                <Link to='/signup' >Signup</Link>
            </LinkElement>}

            {/* Logout function to clear session storage */}
            {user &&
            <LinkElement onClick={handleLogout}>
                <Link to='/' >Logout</Link>
            </LinkElement>}

        </LinksWrapperMobile>
  )
}

export default HeaderLinksMobile;


// import { Link } from "react-router-dom"
// import { LinksWrapperMobile, LinkElement } from "./Header.styles"


// const HeaderLinksMobile = props => {
//   return (
//     <LinksWrapperMobile>
//             <LinkElement onClick={props.closeHeader}>
//                 <Link to='/signup' >Signup</Link>
//             </LinkElement>

//             <LinkElement onClick={props.closeHeader}>
//                 <Link to='/signup' >Signup</Link>
//             </LinkElement>

//             <LinkElement onClick={props.closeHeader}>
//                 <Link to='/profile' >Profile</Link>
//             </LinkElement>

//             <LinkElement onClick={props.closeHeader}>
//                 <Link to='/login' >Login</Link>
//             </LinkElement>
//         </LinksWrapperMobile>
//   )
// }

// export default HeaderLinksMobile