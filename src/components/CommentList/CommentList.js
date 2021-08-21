
export default function CommentList(props){
    //console.log(props)
    return(
        
        <section className='show__comment'>
                {props.comment.comments.map((post)=>{
                    return (
                    <section key={post.id} className='post__area'>
                    <div className='comment--mainDiv'>    
                    <div>
                        <img className='imgPlaceholder' alt=''/>
                    </div>
                    <div className='comment__data'>               
                       <h3 className='comment__username'>{post.name}</h3>
                       <div>
                       <p className='post__date'>{post.timestamp}</p>
                    </div>    
                    </div>
                    <div>
                    <p className='comment__Paragraph'>{post.comment}</p>
                    </div>
                    </div>
                    </section>
                    )   
                
                
                })}

            </section>    
              
    )
}