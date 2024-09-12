
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from './components/Sidebar/SideBar';
import DashMain from './components/dashMain/DashMain';
import Footer from './components/Footer/Footer';
import GoTtop from './components/Footer/GoTtop';
import SignUp from './SignUp';
import Login from './Login';
import Controller from './Controller';

function App() {
  return (
    <>
    <Controller></Controller>
  
    {/* <SignUp></SignUp> */}
    {/* <Header></Header>
    <SideBar></SideBar>
    <DashMain></DashMain>
    <Footer></Footer>
    <GoTtop></GoTtop> */}
    </>
  );
}

export default App;
