import React from 'react';
import styled from "styled-components";
import ListItem from './ListItem';


const Container=styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content: center;
margin-top: 5px;

width: 100vh;
background-color:orange;`;



const List = React.memo(({studentList}) => {
    console.log("List is rendering")
  return (
    <Container>
        {studentList?.map((students)=>(
            
        <ListItem key={students.id} students={students}/>
        
        
        ) )}
      
    </Container>
  )
})

export default List
