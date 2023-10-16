import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";
import { TrykutnykHome } from "./TrykutnykHome";

export const Trykutnyk = () => {
    return(
        <div>
            <Header type="trykutnyk"/>
                <Outlet />
            <Footer />
        </div>
    );
}