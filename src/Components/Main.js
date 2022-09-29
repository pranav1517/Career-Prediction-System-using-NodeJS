
import {AiOutlineHome} from 'react-icons/ai'
import {TbMessageCircle2} from 'react-icons/tb'
import {VscAccount} from 'react-icons/vsc'
import a from "../Image/profile_back.png"
import b from "../Image/profile.jpg"
import "../Components/Main.css"

export default function Main(){
    return(
        <div className="main"> 
            <div className="nav">
                <div className="nav--upper">
                <AiOutlineHome/>
                </div>
                <div className="nav--lower">
                    <div className="nav--lower--icon1">
                    <TbMessageCircle2/>  
                    </div>
                    <div className="nav--lower--icon2">
                    <VscAccount/>    
                    </div>
                 
                </div>
                
            </div>
            
            <div className="content">

                <img src={a} className="image-background" alt=''></img>
                <img src={b} className="image" alt=''/>
                <h1 className='content--name'>Pranav Savani</h1>
                <span className='content--mail'>20dce110@charusat.edu.in</span>
                <hr></hr>
                <button className="btn-editProfile">Edit Profile</button>
                
            </div>
        </div>
    )
}