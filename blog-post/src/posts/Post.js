import React from "react";
import Card from './Card';
import './card-style.css'

const Post = () => {
    let postItems = [
        {
            id: 1,
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2019"
        },
        {
            id: 2,
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subTitle: "",
            author: "Start Bootstrap",
            date: "September 18, 2019"
        },
        {
            id: 3,
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2019"
        },
        {
            id: 4,
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap",
            date: "July 8, 2019"
        }
    ]

    const mappedList = postItems.map((item) => {
        return (
            <Card
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                author={item.author}
                date={item.date}
            />
        )
    })
    return (
        <div>
            <div className='header'>
                <div className='titlebar'>
                    <div className='logo'>
                        Start Boostrap
                    </div>
                    <div className='nav' id='nav'>
                        <a href="#nav">HOME</a>
                        <a href="#nav">ABOUT</a>
                        <a href="#nav">SAMPLE POST</a>
                        <a href="#nav">CONTACT</a>
                    </div>
                </div>
                <div className='header-text' style={{ color: "white", padding: "150px" }}>
                    <h1 style={{ margin: 10, fontFamily: "Helvetica Neue", fontSize: 80 }}>Clean Blog</h1>
                    <p style={{ margin: 10, fontFamily: "Helvetica Neue", fontSize: 28 }}>A Blog Theme by Bootstrap</p>
                </div>
            </div>
            <div className="cards">
                {mappedList}
            </div>
            <div className="button">
                <button style={{ color: "white", backgroundColor: "teal", padding: 15, marginRight: 450 }}>OLDER POSTS</button>
            </div>
            <div className="icons">
                <i class="fa fa-twitter" style={{ margin: 10 }}></i>
                <i class="fa fa-facebook" style={{ margin: 10 }}></i>
                <i class="fa fa-github" style={{ margin: 10 }}></i>
            </div>
            <div className="footer">
                Copyright © Your Website 2019
            </div>
        </div>
    )
}
export default Post;