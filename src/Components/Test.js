import "./Test.css"
import { useHistory } from 'react-router-dom'

export default function Main() {

    // let history = useHistory();
    // const handleSubmit = async (e) =>{
    //     history.push("/signin");
    //     console.log(history);
    // }

    return (
        
        <div className="main" style={{height:'100vh'}}>
            <div className="nav">
                <div className="nav--upper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                </div>

                <div className="nav--lower">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>

                </div>
            </div>

            <div className="content">
                <div className="name">Career Prediction Test</div>

                <form action="/signin"  onsubmit="window.location.href = 'localhost:3000/signin';" >

                <div className="testForm">
                    percentage in Operating Systems  <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Algorithm <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Programming Concepts <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Software Engineering  <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Computer Networks <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Electronics Subjects <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Computer Architecture <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Mathematics <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Enter Percentage in Communication skills <br />
                    <input type="number" className="in" min="0" max="100" required/> <br /> <br />

                    Hours working per day  <br />
                    <input type="number" className="in" min="0" max="24" required/> <br /> <br />

                    Logical quotient rating hackathons <br />
                    <input type="number" className="in" min="0" max="" required/> <br /> <br />

                    coding skills rating <br />
                    <input type="number" className="in" min="0" max="10" required/> <br /> <br />

                    public speaking points  <br />
                    <input type="number" className="in" min="0" max="10" required/> <br /> <br />

                    can work long time before system? <br />
                    <input type="radio" name="time" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="time" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                    self-learning capability? <br />
                    <input type="radio" name="Capacity" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="Capacity" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                    certifications <br />
                    <select name="" className="dropdown" required>
                        <option value="1">shell programming</option>
                        <option value="2">machine learning</option>
                        <option value="3">app development</option>
                        <option value="4">python</option>
                        <option value="5">r programming</option>
                        <option value="6">information security</option>
                        <option value="7">hadoop</option>
                        <option value="8">distro making</option>
                        <option value="9">full stack</option>
                    </select> <br /> <br />

                    talenttests taken? <br />
                    <input type="radio" name="talent" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="talent" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                    reading and writing skills  <br />
                    <select name="" className="dropdown" required>
                        <option value="1">excellent</option>
                        <option value="2">poor</option>
                        <option value="3">medium</option>
                    </select> <br /> <br />

                    memory capability score <br />
                    <select name="" className="dropdown" required>
                    <option value="1">excellent</option>
                        <option value="2">poor</option>
                        <option value="3">medium</option>
                    </select> <br /> <br />
                    
                    Interested subjects <br />
                    <select name="" className="dropdown" required>
                        <option value="1">cloud computing</option>
                        <option value="2">networks</option>
                        <option value="3">hacking</option>
                        <option value="4">Computer Architecture</option>
                        <option value="5">programming</option>
                        <option value="6">parallel computing</option>
                        <option value="7">IOT</option>
                        <option value="8">data engineering</option>
                        <option value="9">Software Engineering</option>
                        <option value="10">Management</option>
                    </select> <br /> <br />

                    interested career area <br />
                    <select name="" className="dropdown" required>
                        <option value="1">system developer</option>
                        <option value="2">Business process analyst</option>
                        <option value="3">developer</option>
                        <option value="4">testing</option>
                        <option value="5">security</option>
                        <option value="6">cloud computing</option>
                    </select> <br /> <br />

                    Type of company want to settle in? <br />
                    <select name="" className="dropdown" required>
                        <option value="1">Web Services</option>
                        <option value="2">SAaS services</option>
                        <option value="3">Sales and Marketing</option>
                        <option value="4">Testing and Maintainance Services</option>
                        <option value="5">product development</option>
                        <option value="6">BPA</option>
                        <option value="7">Service Based</option>
                        <option value="8">Product Based</option>
                        <option value="9">Cloud Services</option>
                        <option value="10">Finance</option>
                    </select> <br /> <br />


                    Taken inputs from seniors or elders <br />
                    <input type="radio" name="iws" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="iws" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                    interested in games <br />
                    <input type="radio" name="iig" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="iig" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                    Interested Type of Books  <br />
                    <select name="" className="dropdown" required>
                        <option value="1">Prayer books</option>
                        <option value="2">Childrens</option>
                        <option value="3">Travel</option>
                        <option value="4">Romance</option>
                        <option value="5">Cookbooks</option>
                        <option value="6">Self help</option>
                        <option value="7">Drama</option>
                        <option value="8">Math</option>
                        <option value="9">Religion-Spirituality</option>
                        <option value="10">Anthology</option>
                        <option value="11">Trilogy</option>
                        <option value="12">Autobigraphics</option>
                        <option value="13">Mystery</option>
                        <option value="14">Diaries</option>
                        <option value="15">Journals</option>
                        <option value="16">History</option>
                        <option value="17">Art</option>
                        <option value="18">Dictionaries</option>
                        <option value="19">Horror</option>
                        <option value="20">Encyclopedias</option>
                        <option value="21">Action and Adventure</option>
                        <option value="22">Fantasy</option>
                        <option value="23">Comics</option>
                        <option value="24">Science fiction</option>
                        <option value="25">Series </option>
                        <option value="26">Guide </option>
                        <option value="27">Biographies</option>
                        <option value="28">Health</option>
                        <option value="29">Satire</option>
                        <option value="30">Science</option>
                        <option value="31">Poetry</option>
                    </select> <br /> <br />

                    Gentle or Tuff behaviour? <br />
                    <select name="" className="dropdown" required>
                        <option value="1">stubborn</option>
                        <option value="2">Gentle</option>
                    </select> <br /> <br />

                    Management or Technical <br />
                    <select name="" className="dropdown" required>
                        <option value="1">Management</option>
                        <option value="2">Technical</option>
                    </select> <br /> <br />

                    Hard/Smart worker <br />
                    <select name="" className="dropdown" required>
                        <option value="1">Hard worker</option>
                        <option value="2">smart worker</option>
                    </select> <br /> <br />

                    worked in teams ever? <br />
                    <input type="radio" name="workInTeam" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="workInTeam" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                    Introvert <br />
                    <input type="radio" name="introvert" className="radio2" style={{width:'30px'}} required/> Yes
                    <input type="radio" name="introvert" className="radio2" style={{width:'30px'}} required/> No <br /> <br />

                </div>

                <a href="/signin">
                    {/* <button href='/signin'>Submit</button> */}
                    <input type="submit" value="Submittt" />
                </a>
                </form>
            </div>
        </div>
    )
}