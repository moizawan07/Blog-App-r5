// import { useState , useEffect } from 'react'
// import './NewBlog.css'
// import { toast } from 'react-toastify'
// import Card from '../card/Card'
// // Firebase
// import {db} from '../../services/firebase'
// import {addDoc, collection,  getDoc, doc, getDocs} from 'firebase/firestore';

// // console.log(app);


// function BlogModaal() {
//   let date = new Date();           // date  Set
//  date = date.toDateString();
//  let mStored = date.slice(3,7)
//  let yStored = date.slice(10)
//  let finaldate = date.slice(8,10) +  mStored + yStored

  

 
//  const [modal , setModal] =  useState(false)       // Show And Hide Modaal State 
 
//  const [userPostValue , setUserPostValue] = useState({     // User Values Store
//   title : '',
//   description : '',
//   role : '',
//   imgSrc : '',
//   date : finaldate
// })
//  const [newPost , setNewPost] = useState([])    // User ki Post Details Stored Here 

//  console.log('po', newPost);
 

// useEffect(() => {
 
//   getDocs(collection(db, 'Users'))
//   .then((data) => {
//    data.forEach((item) => {
//     console.log(item.data());
    
//      setNewPost((prviousState) => [...prviousState, item.data()])
//   })
    
// })
//   .catch((error) => console.log(error))

// }, [])  




// // This Onchange Function  Set User Input Value In The State Varaiable

// let name,value;   // name variable ma input ki name value stored hogi aur value ma uski value
//   const formValueSet = (e) => {
//    name = e.target.name              
//    value = e.target.value.toLocaleLowerCase()

//    setUserPostValue({...userPostValue, [name] : value})  //Set User State

//   //  console.log(userPostValue);
//   }
  



//  // This OnSubmit Function  Set USER POST in FIREBASE DATABASE & Print THIS POST
//  const postSucessFullUpload = (event) => {
//   event.preventDefault()

//   console.log(userPostValue.imgSrc);
  
 
//   let {title, description, role} = userPostValue;      // Descturing Here

//   if(title && description && role){        // Check all values ha Ya nhi
       
//     // First Check Title
//      if(title.length >= 10){                               // Check title ki lenght 10 se Choti to  yahi
         
//         // Second Check Description
//         if(description.length >=20){                       // Check Descriptiom ki lenght 20 se Choti to  yahi  
            
//            // Third Check Role
//            if(role.length >= 5){                            // Check Role ki lenght 5 se Choti to  yahi
            
//     // this function ma post ka data set horha firebase ma and get horha
//         storedAndgetPostInFB() 

//         setModal(false)      // Modal off
//         setUserPostValue({   // UserPostValue State Input EMPTY KR RHA
//               imgSrc : '',
//               date : finaldate,
//               title : '',
//               description : '',
//               role : ''
//         })
// } 
//            else{                                           // Role Else
//             toast.error("Role Must Than a 5 Chracter atleast!", {
//               position: "top-right",
//               autoClose: 3000, // 3 seconds
//               hideProgressBar: false,
//               closeOnClick: true,
//             });
//           }
//         }
//         else{                                              // Description Else
//           toast.error("Description Must Than a 20 Chracter!", {
//             position: "top-right",
//             autoClose: 3000, // 3 seconds
//             hideProgressBar: false,
//             closeOnClick: true,
//           });
//         }
//      }
//      else{                                                 // Title Else
//       toast.error("Title Must Than a 10 Charcter!", {
//         position: "top-right",
//         autoClose: 3000, // 3 seconds
//         hideProgressBar: false,
//         closeOnClick: true,
//       });
//      }
//   }
//   else{                                        // Check All Values Else
//     toast.error("FILL ALL THE FIELDS", {
//       position: "top-center",
//       autoClose: 3000, // 3 seconds
//       hideProgressBar: false,
//       closeOnClick: true,
//       theme: "light",
//     });
//   }
//  }
 
 
// const storedAndgetPostInFB =  async () => {

  
//   // ADD IT  Firebase DataBase
//   let postId ;
//   try {                                     //DB name / Object jo store kra rha  
//     let setData = await addDoc(collection(db, 'Users'),userPostValue)
//     console.log('Tryy' , setData.id);
//     postId = setData.id
//   } 
//   catch (error) {
//     console.error(error);
//   }

 
  
//  // GET ITT by Firebase DataBase

//  try {
//   let dataStored = await getDoc(doc(db, 'Users', postId))
//   let finaldataOj = dataStored.data() 
//   console.log("datastored Data",dataStored);
//   console.log(" final data obj Data",finaldataOj);

//   //  State Changed taka New Post render ho dom ma

//   setNewPost([...newPost, finaldataOj])  // Har baar naye data ke saath old data bhi rahega
   
//  } 
//  catch (error) {
//    console.error(error);
   
//  }
// }


   

//   return (
//     <>

//       {/* NEW BLOG POST SHOW HERE  */}
    
//     {newPost.length && (
//       newPost.map((item) =>  {
//         console.log(item);
        
//       return  <Card
//         role={item.role}
//         date={item.date}
//         title={item.title} 
//         desc={item.description} 
//      />
//       })
//     )}




//   {/* Blog Modal On Button */}
//     <button
//      className='ModalOnButton' onClick={() => setModal(true)}>
//      Create a Post
//     </button>

//   {/*  Modaal State Varaibel ki Value true hogi tbhi Show Hoga Other Wise Nhi */}
//     {modal &&(                          
//       <div className="modal-overlay">
//          {/* Modaal Main */}
//          <div className="modal">
//          {/* Close Button */}
//          <button 
//         className="close-btn" onClick={() => setModal(false)}>
//            ✕
//         </button>

//          {/* Modal Title */}
//          <h2 className="modal-title">Create a Post</h2>

//          <form className="modal-form" onSubmit={postSucessFullUpload}>
//            {/* Image Upload */}
//            <div className="image-upload">
//            <div className="image-preview">
//                <span>Upload Image</span>
//              </div>
//              <input
//               type="file" 
//               className="file-input"
//               name='imgSrc'
//               onChange={formValueSet} 
//               />
//            </div>

//            {/* Title Input */}
//            <input
//             type="text"
//             placeholder="Title" 
//             className="input-field" 
//             name='title'
//             value={userPostValue.title}
//             onChange={formValueSet} 
//              />

//            {/* Description Input */}
//            <textarea
//             placeholder="Description" 
//             className="input-field textarea"
//             name='description'
//             value={userPostValue.description}
//             onChange={formValueSet}>  
//             </textarea>

//            {/* Role Input */}
//            <input
//             type="text" 
//             placeholder="Role (e.g., Developer, Blogger)" 
//             className="input-field" 
//             name='role'
//             value={userPostValue.role}
//             onChange={formValueSet} 
//             />

//            {/* Submit Button */}
//            <button 
//            className="submit-btn">
//             Post
//            </button>
//         </form>
//         </div>

//       </div>
//      )}

//    </>
//   )                                // Return Close Braacket
// }                                  // Component Close Brancket


// export default BlogModaal