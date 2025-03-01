import './profile.css'
// import { signOut } from 'firebase/auth';
// import {auth} from  '../../services/firebase'

function Profile({userlogin}) {
 console.log(userlogin);

 if(userlogin){    
    var {fullName, email , country, city , gender, phone} = userlogin; 
}
 
  // const logOutUser = async () => {
  //    let m = await signOut(auth)
  //    console.log(m);
     
  // }
  
  return (
    <div className='Profile_Container'>
      <div className="P-Left_main">
     
        <div className="PL_First_box">
           <i class="fa-solid fa-user"></i>
            <h1>{fullName}</h1>
            <p>{gender}</p>
        </div>
        <hr className='hr'/>

        <div className='PL_Second_Box'>
          <p>
            <span className='pl_icon'><i class="fa-solid fa-envelope"></i></span>
            <span className='pl_text'>{email}</span>
          </p>
          <p>
            <span className='pl_icon'><i class="fa-solid fa-phone-volume"></i></span>
            <span className='pl_text'>{phone}</span>
          </p>
          <p>
            <span className='pl_icon'><i class="fa-solid fa-globe"></i></span>
            <span className='pl_text'>{country}</span>
          </p>
          <p>
            <span className='pl_icon'><i class="fa-solid fa-city"></i></span>
            <span className='pl_text'>{city}</span>
          </p>
        </div>
       
       <div className="PL_Third_box">
       <button class="button-64" role="button"><span class="text">LogOut</span></button>
       </div>

      </div>
      <div className="P-Right_main">
           <div className="PR_First_Box">
              <p>WELCOME TO YOUR PROFILE 🚀</p>
           </div>
           <div className='PR_Second_Box'>
               <div className='PR_Create_Post'>
                   <p>Create a Post</p>
               </div>
           </div>
      </div>
    </div>
  )
}

export default Profile;