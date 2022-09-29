import { AiOutlineHome } from 'react-icons/ai'
import { TbMessageCircle2 } from 'react-icons/tb'
import { VscAccount } from 'react-icons/vsc'
import { FaUser } from 'react-icons/fa'

import "../Components/Profile.css"

export default function Main() {
    return (
        <div className="main">
            <div className="nav">
                <div className="nav--upper">
                    <AiOutlineHome />
                </div>
                <div className="nav--lower">
                    <div className="nav--lower--icon1">
                        <TbMessageCircle2 />
                    </div>
                    <div className="nav--lower--icon2">
                        <VscAccount />
                    </div>

                </div>

            </div>

            <div className="content">
                <div className="content--Profile">
                    <span>Profile</span>
                    <button>View Profile</button>
                    <hr></hr>
                    <div>Username
                        <input type="text" placeholder="Pranav Savani">
                        </input>
                    </div>
                    <div>Profile Photo
                        <span><FaUser /></span>
                        <button>Upload Photo</button>
                    </div>

                    <span>Reset Password</span>
                    <hr></hr>
                    <div>Old Password
                        <input type="text" placeholder="Password">
                        </input>
                    </div>
                    <div>New Password
                        <input type="text" placeholder="Password">
                        </input>
                    </div>
                    <div>Confirm Password
                        <input type="text" placeholder="Password">
                        </input>
                    </div>
                    <button type="btn">Save Changes</button>


                </div>


            </div>
        </div>
    )
}