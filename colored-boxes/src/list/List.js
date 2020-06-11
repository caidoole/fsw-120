import React from 'react';
import Card from './Card';

const List = () => {

    let listItems = [
        {
            title: 'Animal',
            subtitle: 'Panda',
            information: 'A Panda can only care for one baby at a time so multiples are rotated at zoos',
            background: 'white'
        },
        {
            title: 'Anatomy',
            subtitle: 'Blood',
            information: 'Blood is a dark blue/purple until it is exposed to air. ',
            background:'purple'
        }, 
        {
            title: 'IVF',
            subtitle: '62 days',
            information: 'During IVF treatments 1.5 inch long needles (gauge 22) are used for progesteron shots. The hormone is mixed with olive oil. It can take up to two minutes to fully inject into the lower back. If done too fast it will result in a "lava lamp" like effect encapsulating red blood cells and forcing them back out the injection site. ',
            background: 'lemonchiffon'
        }, 
        {
            title: 'Code',
            subtitle: 'FSW-120',
            information: 'React is complicated and difficult albeit easier that DOM since the shared information is more complete',
            background:'blue'
        }, 
        {
            title: 'Plants',
            subtitle: 'Grass',
            information: 'The scent you smell before rain is actually oils produced by grass',
            background:'green'
        },  
        {
            title: 'Mail',
            subtitle: 'Deadly Viruses',
            information: 'Most government mail is passed under radiation to kill strains of viruses',
            background:'orchid'
        },  
        {
            title: 'Physical Fitness',
            subtitle: 'Bad Cardio',
            information: 'Jogging is very damaging to the cartilage in the knees, water based exercise is better for you joints and uses more muscle groups',
            background:'pink'
        },  
        {
            title: 'Dyslexia',
            subtitle: 'Me',
            information: 'I struggle to spell and acronyms are extra challenging.. API is not the same as AIP- I looked it up',
            background:'maroon'
        },  
        {
            title: 'Sensory',
            subtitle: 'Smell',
            information: 'Olfactory memories are the strongest because they bypass the thalamus, going directly to the olfactory bulb',
            background:'orange'
        }, 
        {
            title: 'Police',
            subtitle: 'Eye Witnesses',
            information: 'Eye Witness testimony is the most unreliable type of testimony there is, the human brain makes up information to fill in blank spots and everything is passed into personal filters',
            background:'gray'
        },
    ]
const mappedList = listItems.map( (item) => {
    return(
    <div>
    <Card 
       title = {item.title}
       subtitle = {item.subtitle}
       information = {item.information}
       background = {item.background}
       /> 
 
   </div>
    )

})

return (
    <div>
    {mappedList}
    </div>
 )
}
 export default List; 
 
