
export default function CommentList(props){
    return(
        
  <section className='show__comment'>
      {props.comment.comments.map((post)=>{
          return (
        <section key={post.id} className='post__area'>
          <div className='comment__container'>
          <div>
              <img className='imgPlaceholder' alt=''/>
          </div>
          <div className = 'comment__details'>
              <div>
                    <h3 className='comment__username'>{post.name}</h3>
              </div>
              <div>
                  <p className='post__date'>{props.date(post.timestamp)}</p>
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