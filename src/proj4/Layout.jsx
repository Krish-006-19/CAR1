import '../App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
function Layout(){
return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
);
}
export default Layout;