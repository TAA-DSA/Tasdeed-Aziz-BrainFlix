import userImg from '../../assets/Images/Mohan-muruge.jpg';
const number = 3
const header = 'JOIN THE CONVERSATION'


export default function Comment(props){
    return(
        <section className='comment__section'>
            <div>
                <h2>{number} Comments</h2>
                <div className='comForm__container'>
                <img className='user__img--muruge' src={userImg} alt='user' />
                <div>
                <h2 className='comment__header'>{header}</h2>
                <textarea className='form__input' placeholder= 'Write a comment here' /> 
                <div className='commentBtn'>
                    <button className='comment__submit'>COMMENT</button>
                </div>
                </div>
                </div>
            </div>
        
                 
        </section>
        
    )
}