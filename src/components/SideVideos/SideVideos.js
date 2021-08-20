export default function SideVideos(props){
    return(
        <section className='side__video--list'>
         <h3>NEXT VIDEO</h3>   
         <div className='sidevideo__container'>
         <img src={props.videoList.image} alt='title'></img>
         </div>
        <div className='hero__container'>
         <h4 className='video__title'>{props.videoList.title}</h4>
        </div>
       
    </section>
    )
}