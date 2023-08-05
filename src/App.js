import { Route,  Routes } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Info from "./components/Info";
import Login from "./components/Login";
import { useEffect, useState } from "react";

function App() {
  const [width,setWidth] = useState([window.innerWidth,window.innerHeight])

  useEffect(()=>{
      console.log(width );
      window.addEventListener('resize',()=>setWidth([window.innerWidth,window.innerHeight]))

      return () =>{
          window.removeEventListener('resize',()=>setWidth([window.innerWidth,window.innerHeight]))
      }
  },[])
  return (
    <>


      <Routes>
        <Route path = '/' element = {<Header width={width[0]} />}>
          <Route index element = {<Category  width = {width[0]}/>} />
          <Route path = '/BlackDemon' element = {<Info height = {width[1]}/>} />
        </Route>
        <Route path = '/login' element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
