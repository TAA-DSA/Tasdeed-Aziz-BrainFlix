
export default function Bio(props){
    return(
        <section className='bio__page'>
           <p className='bio__paragraph'>{props.text.description}</p>
        </section>
    )
}
