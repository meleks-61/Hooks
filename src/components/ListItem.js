import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin: 9px;
width:40%;
`;
const Image=styled.img``;

const ListItem =React.memo( ({students}) => {
    console.log("ListItem is rendering")
  return (
    <Container>
        <Image
        src={`https://avatars.dicebear.com/v2/avataaars/${students.id}.svg`}

         alt="students picture"
        />
        <p>{students.name}</p>
      
    </Container>
  )
})

export default ListItem;
