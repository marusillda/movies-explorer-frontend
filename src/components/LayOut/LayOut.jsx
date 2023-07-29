import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function LayOut({ isLoggedIn, showHeader, showFooter }) {
    return (<>
        {showHeader && <Header isLoggedIn={isLoggedIn} />}
        <main>
            <Outlet />
        </main>
        {showFooter && <Footer />}
    </>);
}