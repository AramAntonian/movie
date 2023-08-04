import { Route,  Routes } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Info from "./components/Info";
import Login from "./components/Login";

function App() {
  return (
    <>


      <Routes>
        <Route path = '/' element = {<Header />}>
          <Route index element = {<Category />} />
          <Route path = '/BlackDemon' element = {<Info />} />
        </Route>
        <Route path = '/login' element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
