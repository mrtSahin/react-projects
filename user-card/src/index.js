import React from "react";
import ReactDOM from "react-dom/client";
import profilResim from "./images/profil.png"
import "./index.css"
const rootElement= ReactDOM.createRoot(document.getElementById('root'))

const PersonPlace=({
  person:{
    author,
    img,
    unvan,
    country
  }
})=>{
  
  return(
    <div className="person-wrapper">
      <div className="img-wrapper">
        <img src={img} alt="murat"/>
      </div>
      <h2>{author.firstName+' '+author.lastName}</h2>
      <p>{unvan+', '+country}</p>
    </div>
  )
}

const SkillsPlace=(props)=>{
  const skillBox=props.skills.map((skill)=>{return <li key={skill}>{skill}</li>})
  return(
    <div>
      <div className="skill-text">
        <h1>SKILLS</h1>
      </div>
      
      <div className="skill-wrapper">
      
      <ul>
        {skillBox}
      </ul>
    </div>
    </div>
    
  )

}

const DatePlace=(props)=>{ 
  const date=props.date
  return(
    <div className="date-wrapper">{date}</div>
  )
}


const App=()=>{
  const person={
    author:{
      firstName:"Murat",
      lastName:"Şahin"
    },
    img:profilResim,
    unvan:"Senior Developer",
    country:"Turkiye",
    skills:["HTML","CSS","JS","REACT","JAVA","C++","PYTHON","SASS","KOTLIN","MSSQL","POSTGRE SQL"]
  }

  const months=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dateObject=new Date()
  const monthNumber=dateObject.getMonth()
  const dayNumber=dateObject.getDay()
  const year=dateObject.getFullYear()

  const fullDate=`${months[monthNumber]} ${dayNumber} ${year}`

  return(
    <div className="app">
    <PersonPlace person={person}/>
    <SkillsPlace skills={person.skills}></SkillsPlace>
    <DatePlace date={fullDate}/>
    </div>
    
  )
}



rootElement.render(<App/>)