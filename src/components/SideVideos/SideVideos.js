export default function SideVideos(props){
    //console.log(props)
    return(
        
        <section className='sidevideo__list'>
            <h4 className='sidevideo--header'>Next Video</h4>
                {props.videoList.map((thumbnail)=>{
                //  write the conditional statement
                    return (
                    <section key={thumbnail.id} className='sidevideo'>
                    <div className='sidevideo__data'>
                    <img className='video__thumbnail' src={thumbnail.image} alt='side videos'></img>
                    <div className='video__details'>
                        <ul>
                            <li className='sidevideo--title'>{thumbnail.title}</li>
                            <li className='sidevideo--channel'>{thumbnail.channel}</li>
                        </ul>
                    </div>
                    </div>
                    </section>
                    )   
                
                
                })}

            </section>    
              
    )
}