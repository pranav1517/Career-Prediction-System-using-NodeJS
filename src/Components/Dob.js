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
            <div className="dob">
                <h1 className='name'>Date of birth</h1>
                <fieldset>
                    <legend>DOB</legend>
                    <input type="date" name="" id="" />
                </fieldset> 
                <br /> <br /> <br />
                <a href="/signup/gender">
                    <button className="button" >Next</button>
                </a>
            </div>
            </div>
        </div>
    )
}
