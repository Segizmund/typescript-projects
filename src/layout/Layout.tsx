import {Link, Outlet} from "react-router-dom";
import Header from "../header/header";

const Layout = () =>{
    return(
        <>
            <Header />
            <section className={'container mx-auto text-[#FF7600]'}>
                <Outlet />
            </section>
        </>
    )
}
export default Layout