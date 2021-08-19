const text = 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.'

export default function Bio(){
    return(
        <section className='bio__page'>
           <p className='bio__paragraph'>{text}</p>
        </section>
    )
}
