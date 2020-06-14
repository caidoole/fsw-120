import React from 'react';
import Card from './Card';

const Destinations = () => {
    let listItems = [
        {
            id: 1,
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
        },
        {
            id: 2,
            place: "Lebanon, Oregon",
            price: 400,
            timeToGo: "Spring"
        },
        {
            id: 3,
            place: "Cancun, South-ish America",
            price: 900,
            timeToGo: "Winter"
        },
        {
            id: 4,
            place: "Russia, Euro/Asia",
            price: 1100,
            timeToGo: "Summer"
        }, {
            id: 5,
            place: "China, Asia/Euro",
            price: 1200,
            timeToGo: "Fall"
        }
    ]
    const mappedList = listItems.map((item) => {
        return (
            <Card key={item.id}
                place={item.place}
                price={item.price}
                timeToGo={item.timeToGo} 
            />
        )
    })
    return (
        <div>
            <div className='header'> Vacation Location Destination - for cheap cheap</div>
            {mappedList}
        </div>
    )
}
export default Destinations;
