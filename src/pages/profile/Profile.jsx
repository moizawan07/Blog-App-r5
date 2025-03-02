import { useState } from 'react';
import { toast } from 'react-toastify';
import './profile.css'
// firebase
import { signOut } from 'firebase/auth';
import {auth} from  '../../services/firebase'
import { db } from '../../services/firebase';
import { addDoc , collection , getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Profile({userlogin}) {
  let navigate = useNavigate(null)
 const [modal , setModal] = useState(false)                    // New Blog Modal
 const [userPostValue , setUserPostValue] = useState({         // User Values Store
    title : '',
    description : '',
    role : '',
    imageSrc : ''
  })

 if(userlogin){     // Descturing here 
    var {fullName, email , country, city , gender, phone} = userlogin; 
}
// console.log(userPostValue);
 
 // Onchane Function Jo Input ki Value State Variable ma set Kr rha
let name,value;
const formValueSet =  (e) => {                   
     name = e.target.name
     value = e.target.value.toLocaleLowerCase()
  setUserPostValue({...userPostValue, [name] : value})     // Set Input value In this state
}


// This OnSubmit Function  Set USER POST in FIREBASE DATABASE & Print THIS POST
const postSucessFullUpload = (event) =>{
  event.preventDefault()
  let imgSrcRegex = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg)(\?.*)?$/i;

  let {title, description, role, imageSrc } = userPostValue;      // Descturing Here

  if(title && description && role && imageSrc){        // Check all values ha Ya nhi
       
    // First Check Title
     if(title.length >= 10){                               // Check title ki lenght 10 se Choti to  yahi
        
         // Second Check Img Url
       if(imgSrcRegex.test(imageSrc)){                      // Check IMGSRC VALID OR NOT
           console.log(imageSrc)
         // Third Check Description
          if(description.length >=20){                       // Check Descriptiom ki lenght 20 se Choti to  yahi  
            
           // Fourth Check Role
           if(role.length >= 5){                            // Check Role ki lenght 5 se Choti to  yahi
                 setModal(false)      // Modal off
                 setUserPostValue({   // UserPostValue State Input EMPTY KR RHA
                       imageSrc : '',
                       title : '',
                       description : '',
                       role : ''
                 })
                 toast.success("SucessFully Post", {       // POPUP
                  position: "top-right",
                  autoClose: 3000, // 3 seconds
                  hideProgressBar: false,
                  closeOnClick: true,
                  });

               // IN This Function I Set the BLOG POST IN DATABASE
                 storedAndgetPostInFB()

} 
           else{                                           // Role Else
            toast.error("Role Must Than a 5 Chracter atleast!", {
              position: "top-right",
              autoClose: 3000, // 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
            });
          }
          }
          else{                                              // Description Else
          toast.error("Description Must Than a 20 Chracter!", {
            position: "top-right",
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
          });
          }
        }
        else{                                              // IMG SRC  Else
          toast.error("HTTPS || PNG || JPG  Support", {
            position: "top-right",
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
          });
        }  
     }
     else{                                                 // Title Else
      toast.error("Title Must Than a 10 Charcter!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
      });
     }
  }
  else{                                        // Check All Values Else
    toast.error("FILL ALL THE FIELDS", {
      position: "top-center",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  }
}


// THIS FUNCTION IS IMPORTANT WHEN USER FILL THE FORM CORRETTY THIS FUNCTION I CALL IN THIS
// FUNCTION I SET THE USER BLOG DATA IN THE FIREBASE DATABASE 
const storedAndgetPostInFB =  async () => {

  // ADD THE BLOG POST IN  Firebase DataBase
  let postId ;
  try {                                     //DB name / Object jo store kra rha  
    let setData = await addDoc(collection(db, 'UsersPost'),userPostValue)
    console.log('Succesfully upload' , setData.id);
    postId = setData.id
  } 
  catch (error) {
    console.error(error);
  }

 // GET IT  Data by Firebase DataBase

 try {
  let dataStored = await getDoc(doc(db, 'UsersPost', postId))
  let finaldataOj = dataStored.data() 
  console.log("datastored Data",dataStored);
  console.log(" final data obj Data",finaldataOj);

  //  State Changed taka New Post render ho dom ma
 } 
 catch (error) {
   console.error(error);
   
 }
}
//  COMPLETE THE FUNCTION HERE ----!


// This Function LogOut The Current User
 const logOutTheUser = () => {
  const userBackUp = signOut(auth)
        .then((d) => {console.log('signoUt Then' , d)})
        .catch((error) => {console.log('signoUt catch' , error)})

     // After logout Home page pa redirecr kr rha
    navigate('/')    
 } 

  


  return (
  <>

   {/* Blog Modal On Button */}

   {/*  Modaal State Varaibel ki Value true hogi tbhi Show Hoga Other Wise Nhi */}
    {modal &&(                          
      <div className="modal-overlay">
         {/* Modaal Main */}
         <div className="modal">

         {/* Close Button */}
         <button 
        className="close-btn" 
          onClick={() => {
             setModal(false)                       /// MODAL STATE UPDATE TO OFF /
             setUserPostValue({                   // Input State Update to Empty
              title : '',
              description : '',
              role : '',
              imageSrc : ''
            })
            }}>
           ✕
        </button>

         {/* Modal Title */}
         <h2 className="modal-title">Create a Post</h2>

         <form className="modal-form" onSubmit={postSucessFullUpload}>
           {/* Image Upload */}
           <div className="image-upload">
           <div className="image-preview">
               <span>Enter Image address</span>
             </div>
           </div>

           {/* Title Input */}
           <input
            type="text"
            placeholder="Title" 
            className="input-field" 
            name='title'
            value={userPostValue.title}
            onChange={formValueSet} 
             />

           {/* Image Input */}
           <input
            type="text"
            placeholder="Image Adress" 
            className="input-field" 
            name='imageSrc'
            value={userPostValue.imageSrc}
            onChange={formValueSet} 
             />

           {/* Description Input */}
           <textarea
            placeholder="Description" 
            className="input-field textarea"
            name='description'
            value={userPostValue.description}
            onChange={formValueSet}>  
            </textarea>

           {/* Role Input */}
           <input
            type="text" 
            placeholder="Role (e.g., Developer, Blogger)" 
            className="input-field" 
            name='role'
            value={userPostValue.role}
            onChange={formValueSet} 
            />

           {/* Submit Button */}
           <button 
           className="submit-btn">
            Post
           </button>
        </form>
        </div>

      </div>
    )}


        {/* Here UI OF PROFILE  Jsx  */}
    <div className='Profile_Container'>
      <div className="nav">
      <i class="fa fa-list" aria-hidden="true"></i>
      </div>
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
       <button onClick={logOutTheUser} class="button-64" role="button"><span class="text">LogOut</span></button>
       </div>

      </div>
      <div className="P-Right_main">
           <div className="PR_First_Box">
              <p>WELCOME TO YOUR PROFILE 🚀</p>
           </div>
           <div className='PR_Second_Box'>
               <div className='PR_Create_Post' onClick={() => setModal(true)}>
                   <p>Create a Post</p>
               </div>
           </div>
      </div>
    </div>
  </>  
  )
}

export default Profile;