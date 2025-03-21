import './blog.css'
import Section1 from '../../components/section1/Section1'
import SingleLine from '../../components/singleLine/SigleLine'
import Card from '../../components/card/Card'
import Section4 from '../../components/section4/Section4'
import { useEffect , useState } from 'react'
import {db} from '../../services/firebase'
import { getDocs ,collection, query, orderBy } from 'firebase/firestore'



function Blog(){
    const [oldPostFb, setOldPostFb] = useState(null)
    const carddatablog = [
       {
          id : 7,
          imgSrc : '/assets/card7.png',
          role : 'Travel',
          date : '16 jan 2025',
          title : 'Who is the Best Singer on Char? KNow him?'
        },
        {
          id : 8,
          imgSrc : '/assets/card8.png',
          role : 'Development',
          date : '17 jan 2025',
          title : 'How to Start Import Buniess from Home'
        },
        {
          id : 9,
          imgSrc : '/assets/card9.png',
          role : 'Sports',
          date : '18 jan 2025',
          title : 'Make Some Drink With Chocaltes Chocaltes with Milk'
        },
      ]

      
    //   IN THIS USE EFFECT I GET USER OLD POST AND CHANGED THE STATE AND PRINT THAT
  useEffect(() => {
    const q = query(collection(db, "UsersPost"), orderBy("createdAt", "asc")); 
    let getitems = getDocs(q)
    .then((d) => {
      let data = d.docs;
      console.log('docs', data);
      
      const fullPostPrevous = data.map(item => item.data());    // Here stored all Post object in this
      console.log('Full ata arr', fullPostPrevous);
      
      // Here Update the State in this Array old Post get by FB
      setOldPostFb(fullPostPrevous)
      
    })
    .catch((error) => console.error(error))
  },[])  

     
      

    return(
        <>
        {/* Section 1 */}
          <Section1 
           mainClass= 'blog-section1-main-flex'
           leftClass= 'blog-section1-left'
           rightClass= 'blog-section1-right'
          />
          {/* Section 2 */}
           <div className="blog-section-2">
            <p className='b-s2para1'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
            </p> <br /> <br />
            <p className='b-s2para2'>
                We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate
            </p>
           </div>
           <div className='blog-section-3'>
            <i>"People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world."</i> <br />
            <strong>-Pedro domigos</strong>
           </div>
           <div className='blog-section-4'>
            <p>More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.</p>
           </div>
           <div className='blog-section-5'>
            <img src='/assets/blogimg1.png' alt="" />
           </div>
           <div className='blog-section-6'>
            <p>We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahea</p>
           </div>
           <div className='blog-section-7'>
             <SingleLine  heading= 'Popular Post'/>   
           </div>
           <div className='blog-section-8'>
            {
                carddatablog.map((item, index) => {
                   return (
                    <Card 
                    imgSrc = {item.imgSrc}
                    role=    {item.role}
                    date=    {item.date}
                    title=   {item.title}
                    />
                   )
                })
            }

            {/* New Blog Jsx */}
            {oldPostFb && (  
                oldPostFb.map((eachItem) => {
                  return (
                    <Card 
                    imgSrc = {eachItem.imageSrc}
                    role=    {eachItem.role}
                    desc=    {eachItem.description} 
                    title=   {eachItem.title}
                    date = {eachItem.date}
                    />
                   )
                }) 
            )}

          
           </div>

           <Section4 />           
        </>
    )
}
export default Blog;