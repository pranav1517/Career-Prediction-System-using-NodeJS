import "./Signup.css"
import { Link, useLocation} from 'react-router-dom'

export default function Main() {
    let location = useLocation();
    return (
        <div className="main">
            <div className="nav">
                <div className="nav--upper">
                    <a href="/signin" style={{color: location.pathname==='/signin' ? '#FFFCF2' : '#ACA8A2'}}>Sign-in</a> &nbsp; &nbsp;
                    <a href="/signup" style={{color: location.pathname==='/signup' ? '#FFFCF2' : '#ACA8A2'}}>Sign-up</a>
                </div>
            </div>

            <div className="content">
            <div className="email">
                <h1 className='name'>Sign-up</h1>
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" placeholder="Enter Email" />
                </fieldset>
                <br /> <br /> <br />
                <a href="/signup/info">
                    <button className="button" >Next</button>
                </a>
            </div>
            </div>
        </div>
    )
}