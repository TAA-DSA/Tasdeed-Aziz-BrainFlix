import likes from '../assets/Logo/Icon-likes.svg'; 
import views from '../assets/Logo/Icon-views.svg';


export default function Video(props){
   return( 
    <section className='main__video'>
        <video className = "video__bmx" poster= {props.video.image}></video>
      <div className='hero__container'>
         <h1 className='video__title'>{props.video.title}</h1>
      <div className='channel__section'>
         <h2 className='video__channel'>By {props.video.channel}</h2>
         <div className='icon__section'>
          <img className= 'views__icon' src={views} alt='eye' />
          <p className='number__views'>1,001,023</p>
          <img className='icon__like' src={likes} alt='heart' />
          <p className='likes__given'>110,985</p>
         </div>
      </div>
       

      </div> 
       
    </section>
   )
}






