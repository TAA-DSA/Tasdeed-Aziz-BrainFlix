
export default function CommentList(props){
    console.log(props)
    return(
        
        <section className='show__comment'>
                {props.comment.comments.map((post)=>{
                    return (
                    <section key={post.id}>
                    <div>
                        <img className='imgPlaceholder' alt=''/>
                    </div>
                    <div className='comment__data'>               
                       <h3 className='comment__username'>{post.name}</h3>
                    </div>
                    <div>
                       <text className='post__date'>{post.timestamp}</text>
                    </div> 
                    <div>
                    <p className='comment__Paragraph'>{post.comment}</p>
                    </div>
                    </section>
                    )   
                
                
                })}

            </section>    
              
    )
}