import "./Signup.css"

export default function Main() {
    return (
        <div className="main">
            <div className="nav">
                <div className="nav--upper">
                    <a href="/signin">Sign-in</a> &nbsp; &nbsp;
                    <a href="/signup" style={{color:'#FFFCF2'}}>Sign-up</a>
                </div>
            </div>

            <div className="content">
            <div className="info">
                <h1 className='name'>Information</h1>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" placeholder="Enter First name" />
                </fieldset> <br />
                <fieldset>
                    <legend>Surname</legend>
                    <input type="text" placeholder="Enter Last name" />
                </fieldset>
                <br /> <br /> <br />
                <a href="/signup/dob">
                    <button className="button" >Next</button>
                </a>
            </div>
            </div>
        </div>
    )
}
