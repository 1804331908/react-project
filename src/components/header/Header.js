// import  './Header.css'
import {Link} from 'react-router-dom'
function Header(props){



    return (
        <div className="main-div">
        <div className="logo-div">
            <img src="  https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt=""/>
            <p className="logo-text">Kafene</p>
        </div>
        <div className="keypoint-div">
            <Link to="/Orders" className="order-page">Orders</Link>
            <Link to="/Product" className="products-page">Products</Link>
            <Link to="/Users" className="users-page">Users</Link>
        </div>
        {props.login && (
        <div >
          <a className="logout" onClick={props.onLogout}>
             Logout
          </a>
        </div>
      )}
    </div>
    )
}

export default Header;