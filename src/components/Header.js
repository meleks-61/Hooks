import React from 'react'
import styled from 'styled-components'
import cw from "../assets/cw_logo.png"

const Container=styled.div`
display:flex;
flex-direction: column;
align-items:center;`;
const Image=styled.img`
margin: "1rem";
max-height: 200px;
`;




const Header = React.memo(({img}) => {
    //memo sayesinde Headerin içinde birşey değişmedikçe App.js içine ne değişirse değişsin header render olmaz.
    //eğer bir component React.memo ile çağırılırsa, React bu componenti render eder ve bu componente gönderilen props değerlerini saklar/kaydeder(memoized)
    //Bir sonraki render durumunda bu componente gönderilen props değerleri bir önceki render edildiğindeki props değerleri ile aynıysa component tekrar render edilmez.
    console.log("header rendering")//returnden önce consol atılır.
  return (
  <Container>
    
     
      <Image src= {img ? img :cw}/>
      
    </Container>
  )
})

export default Header
