import React from 'react'
// import styled from 'styled-components'

const src = 'http://static1.squarespace.com/static/539088b5e4b056260cc4edf2/54b323c1e4b0c6ceb95dea12/54b323c2e4b0c6ceb95dea13/1421026243253/10698637_10152856502435407_2745670946384291701_n.jpg?format=1500w'
const containerStyle = {
  padding: '2px 16px',
}
const cardStyle = {
  'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
  'transition': '0.3s',
  'width': '40%',
}
const TaskCard = (props) => {
  return (
    <div class="card" style = {cardStyle}>
      <img src={src} alt="Avatar" style={{'width': "100%"}}></img>
      <div class="container">
        <h4><b>{props.item.name}</b></h4> 
        <p>{props.item.description}</p> 
        <p>Importance: {props.item.importance}</p>
      </div>
    </div>
  )
}


export default TaskCard;