import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NavBar2 from './Components/NavBar2';
import LoginCaterier1 from './Components/LoginCaterier1';
import Profile from './Components/Profile';
import EditMenu from './Components/EditMenu';
import RegisterCharity1 from './Components/RegisterCharity1';
import RegisterCustomer from './Components/RegisterCustomer';
import LoginAdmin1 from './Components/LoginAdmin1';
import AddMenu from './Components/AddMenu';
function App() {
  return (
    <div className="App">
        <NavBar2/>
      {/* <LoginCustomer/> */}
         {/* <LoginAdmin1/>  */}
      {/* <Home /> */}
      {/* <Register/> */}
      {/* <LoginCaterier1/> */}
      {/* <RegisterCharity1/> */}
      {/* <RegisterCustomer/> */}
      {/* <Profile/> */}
      {/* <AddMenu/> */}
      <EditMenu/>
      {/* <LoginCustomer1/> */}
        <Footer/>  
      
      
    </div>
  );
}

export default App;
