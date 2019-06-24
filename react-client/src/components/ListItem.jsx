import React from 'react';
// import TaskCard from './TaskCard.jsx'
// import { PromiseProvider } from 'mongoose';

const containerStyle = {
  padding: '2px 16px',
}
const cardStyle = {
  'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
  'transition': '0.3s',
  'width': '40%',
}

let importancePhrases = [
  'Not Important At All',
  'Minimally Important',
  'Nice to Have',
  'Somewhat Important',
  'Very Important',
  'Extremely Important',
]

const ListItem = (props) => {
  return (
    <div class="card" style = {cardStyle}>
      <img src={props.src} alt="Avatar" style={{'width': "100%"}}></img>
      <div class="container">
        <h3><b>{props.item.name.toUpperCase()}</b></h3> 
        <p>{props.item.description}</p> 
        <p>{props.item.importance ? importancePhrases[props.item.importance] : null}</p>
      </div>
    </div>
  )
}

export default ListItem;