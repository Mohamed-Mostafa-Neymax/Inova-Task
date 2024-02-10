import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";

export default function RootLayout() {
    return (
        <main className="d-flex flex-column justify-content-between h-100">
            <section>
                <Nav />
                <Outlet />
            </section>
            <Footer />
        </main>
    )
}