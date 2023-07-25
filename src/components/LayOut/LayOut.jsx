import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function LayOut({ showHeader, showFooter }) {
    return (<>
        {showHeader && <Header />}
        <main>
            <Outlet />
        </main>
        {showFooter && <Footer />}
    </>);
}