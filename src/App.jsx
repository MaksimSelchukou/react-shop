import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { Context } from "./context";

function App() {
    return (
        <>
            <Header />
            <Context>
                <Shop />
            </Context>
            <Footer />
        </>
    );
}

export default App;
