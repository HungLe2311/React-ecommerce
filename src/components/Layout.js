import Header from "./Header";
import Footer from "./Footer";
import { Outlet} from "react-router-dom"

function Layout(props) {
  return (
    <>
      <Header onHandleSearchChange={props.onHandleSearchChange} /> 
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;