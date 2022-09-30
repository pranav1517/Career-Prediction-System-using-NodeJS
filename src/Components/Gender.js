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
            <div className="gender">
                <h1 className='name'>Gender</h1>
                <input type="radio" name="gender" id="" style={{width:'20px'}}/> Female <br />
                <input type="radio" name="gender" id="" style={{width:'20px'}}/> Male <br />
                <input type="radio" name="gender" id="" style={{width:'20px'}}/> Other <br />
                <input type="radio" name="gender" id="" style={{width:'20px'}}/> Don't want to mention
                <br /> <br /> <br />
                <a href="/done">
                <button className="button" >Next</button>
                </a>
            </div>
            </div>
        </div>
    )
}
