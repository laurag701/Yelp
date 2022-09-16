import "./FriendsList.css";
import React from 'react'

const Friends = (props) => {
    const {img,name,job,desrip} = props.person;
    const url =
    `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
    return (
    <div className="person">
        <img src={url} alt="" />
        <div>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <h4>{desrip}</h4>
            <button>Add Friend</button>
        </div>
    </div>
    )}

const FriendsList = () => {
    const people = [
        {
            img: 23, 
            name: 'Susan', 
            job: 'Software Developer',
            desrip: 'love to code, and try new resteraunts!'
        },
        {
            img: 21, 
            name: 'Emma', 
            job: 'Engineer',
            desrip: 'Likes to code and read'
        },
        {
            img: 24, 
            name: 'Maria', 
            job: 'Artist',
            desrip: 'Artist working at Lorem Gallery, check out my work'
        }

    ]
  return (
    <div>
        <section>
            <Friends person={people[0]} />
            <Friends person={people[1]}/>
            <Friends person={people[2]}/>
        </section>
    </div>
  )
}

export default FriendsList;