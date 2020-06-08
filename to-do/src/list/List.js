import React from 'react';
import Card from './Card';
const List = () => {
    let listItems = [
        {
            title: 'Clean Litter Box',
            description: 'No Fun!'
        },
        {
            title: 'Do Dishes',
            description: 'Must do'
        },
        {
            title: 'Mop Floors',
            description: 'Slippery When Wet'
        },
        {
            title: 'Walk Guinea Pigs',
            description: 'Piggycise!'
        }
    ]

    const mappedList = listItems.map( (item) => {
        return(
            <Card
                title={item.title}
                description={item.description}
            />
        )
    })
    return (
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <h1>To Do List </h1>
            {mappedList}
        </div>
    
    )
}









export default List;