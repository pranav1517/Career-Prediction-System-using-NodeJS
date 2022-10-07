import "./Pc.css"
import Profile_blank from './profile_blank.png'
import {AiOutlineHome} from 'react-icons/ai'
import {TbMessageCircle2} from 'react-icons/tb'
import {VscAccount} from 'react-icons/vsc'
export default function Main() {
    const previewFile = () =>  {
        var preview = document.querySelector('#BImage');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
    
        reader.onloadend = function () {
            preview.src = reader.result;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    return (
        <div className='main'>
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
            <div className='content' style={{display:'flex'}}>
                
                <div style={{width:'90%'}}>
                     <h2>Profile </h2>  <hr style={{margin:'5px', width:'82%'}}/>  
                    <table>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" className="p" placeholder="Username"/></td>
                        </tr>
                        <tr>
                            <td>Profile Photo</td>
                            <td style={{display:'flex'}}> 
                                <img id='BImage' src={Profile_blank}  alt="Preview Image..." style={{borderRadius: '5px', width:'140px', height: '140px'}} /> 
                                <input type="file" className="uploadF p" style={{width:'181px', height:'33px', marginLeft:'15px', color:'white', padding:'10px 15px', border:'none', backgroundColor:'#EB5E28'}} accept="image/*" onChange={previewFile}/>
                            </td>
                        </tr>
                    </table> <br />
                    <h2>Reset Password</h2> <hr style={{margin:'5px', width:'83%'}}/>
                    <table>
                        <tr>
                            <td>Old Password</td>
                            <td><input type="password" placeholder='Password' className="p" /></td>
                        </tr>
                        <tr>
                            <td>New Password</td>
                            <td><input type="password" placeholder='Password'  className="p"/></td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td><input type="password" placeholder='Password' className="p"/> 
                            <button style={{padding:'9px', marginLeft:'30px', width:'300px', borderRadius:'10px'}}>Save Changes</button> </td>
                        </tr>
                    </table>
                </div>

                <div style={{width:'10%'}}>
                    <button style={{width:'210px', height:'48px',borderRadius:'10px', position:'absolute', right:'86px', top:'50px', color:'white', padding:'10px 15px', border:'none', backgroundColor:'#EB5E28'}}>View Profile</button>
                </div>

            </div>
        </div>
    )
}