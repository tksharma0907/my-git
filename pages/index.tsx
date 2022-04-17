import React from "react";
import Header from "@components/Header";
import Body from "@components/Body";
import Card from "@components/Card";

// import { Header, Main, Cards, Footer } from "@components/css";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "#0C1116",
            }}
        >
            <Header />
            <Card />
            {/* <Body /> */}
            {/* <Main />
            <Cards />
            <Footer /> */}
        </div>
    );
};

export default Home;
