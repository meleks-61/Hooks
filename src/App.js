import {useState,useEffect,useMemo,useCallback} from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Reset from './components/Reset'
import List from './components/List'
import aws from "./assets/aws.png"
import fs from "./assets/fs.png"
import axios from 'axios'


const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const Counter=styled.p``;
const Wrapper=styled.div`
display:flex;`;


const App = () => {
  const [search,setSearch]=useState("")
  const[text,setText]=useState("")
  const[img,setImg]=useState()
  const[counter,setCounter]=useState(0)
  const[studentList,setStudentList]=useState([])
  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res=>setStudentList(res.data))
 
  



},[])
const handleSearch=()=>{
  setSearch(text)

}


const handleChange=(e)=>{
  setText(e.target.value)


}
const add=()=>{
  setStudentList([
    ...studentList,
    {id:studentList.length+1, name:`${text}`}
  ])
}
const filteredStudents=useMemo(()=>studentList.filter((students)=> students.name.toLowerCase().includes(search.toLocaleLowerCase())),[studentList,search])
//studentListi taradı ve yazılan text i içerenleri filtreleyip filteredList adlı listeye attı

//input alanına bir  girdiğimiz her bir karakterde handlehange methodu tetikleniyor.Bu yüzden her karakter için App.js render ediliyor ve filteredStudents arrayi yeniden oluşuyor.
//FilteredStudents tekrardan oluştuğu için List componentine göndermiş olduğumuz studentList her seferinde farklı bir adrse sahip olduğundanList componenti tekrar render ediliyor.
//Bu durumu useMemo ile engelleyebiliriz.useMemo bir değeri hafızaya alır(filteredStudents)
const reset=useCallback(()=>{
  setSearch("");
  setText("");
},[studentList])//useCallback useMemo ile aynı işlemi yapar,aralarındaki fark useMemo bir değer hafızaya alırken useCallback bir fonksiyon hafızay alır.








  return (
    <Container>
      <Header  img={img}/>
      <Counter>counter:{counter}</Counter>
      <Wrapper>
      <button onClick={()=>setCounter(counter+1)}>İncrease</button>
      <button onClick={()=>setImg(fs)}>FS</button>
      <button onClick={()=>setImg(aws)}>AWS</button>
      
      
      </Wrapper>
      <hr/>
    <Wrapper>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={add}>Add</button>
      <button onClick={handleSearch}>Search</button>
     
      </Wrapper>
      <Reset reset={reset}/>

      
      {/* <List studentList={studentList}/> */}
      <List studentList={filteredStudents}/>
      </Container>
  )
}

export default App
