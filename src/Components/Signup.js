import "./Signup.css"
import { Link, useLocation} from 'react-router-dom'

export default function Main() {
    let location = useLocation();
    return (
        <div className="main">
            <div className="nav2">
                <div className="nav2--upper">
                    <a href="/signin" style={{color: location.pathname==='/signin' ? '#FFFCF2' : '#ACA8A2'}}>Sign-in</a> &nbsp; &nbsp;
                    <a href="/signup" style={{color: location.pathname==='/signup' ? '#FFFCF2' : '#ACA8A2'}}>Sign-up</a>
                </div>
            </div>

            <div className="content">
                <div className="email">

                    <h1 className='name'>Sign-up</h1>

                    <fieldset>
                        <legend>Email</legend>
                        <input type="email" className="s" placeholder="Enter Email" />
                    </fieldset>

                    <div style={{width:'283px'}}>
                    <fieldset >
                        <legend>Name</legend>
                        <input type="text" className="s" placeholder="Enter First name" />
                    </fieldset> 
                    </div>
                    
                    <fieldset>
                        <legend>Surname</legend>
                        <input type="text" className="s" placeholder="Enter Last name" />
                    </fieldset>

                    <fieldset>
                        <legend>DOB</legend>
                        <input type="date" className="s" name="" id="" />
                    </fieldset> 

                    <div className="gen">
                    <fieldset>
                        <legend>Gender</legend>
                        <select>
                            <option value="Female">Female</option>
                            <option value="Female">male</option>
                            <option value="Other">Other</option>
                            <option value="Dont">Don't want to mention</option>
                        </select>
                    </fieldset> <br />
                        </div>

                    <a href="/done">
                    <button className="button" >Sign-Up</button>
                    </a>
                </div>

            </div>
        </div>
    )
}