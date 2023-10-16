import { Children } from "react";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";
import { Outlet } from "react-router-dom";

export const LifeRoot = () => {
    return(
        <div>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
}