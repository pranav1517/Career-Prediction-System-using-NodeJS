import "./Signin.css"
import { Link, useLocation} from 'react-router-dom'

export default function Main() {
    let location = useLocation();
    return (
        <div className="main">
            <div className="nav">
                <div className="nav--upper" style={{color:'#FFFCF2'}}>
                    <a href="/signin" style={{color: location.pathname==='/signin' ? '#FFFCF2' : '#ACA8A2'}}>Sign-in</a> &nbsp; &nbsp;
                    <a href="/signup" style={{color: location.pathname==='/signup' ? '#FFFCF2' : '#ACA8A2'}}>Sign-up</a>
                </div>
            </div>

            <div className="content">
                
            <h1 className='name'>Sign-in</h1>
            <fieldset>
                <legend>Email</legend>
                <input type="email" placeholder="Enter Email" />
            </fieldset>
            <br />
            <fieldset>
                <legend>Password</legend>
                <input type="password" placeholder="Enter Password" />
            </fieldset>
            <div className="fp">Forgot Password?</div>

            <button className="signin-button">Sign-in</button>

            </div>
        </div>
    )
}