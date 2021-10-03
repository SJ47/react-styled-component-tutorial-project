import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container.styles";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import GlobalStyles from "./components/Global";
import Content from "./content";
import Footer from "./components/footer/Footer";

const lightTheme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        text: "hsl(192, 100%, 9%)",
        footer: "#ebfbff",
    },
    mobile: "768px",
};

const darkTheme = {
    colors: {
        header: "#003333",
        body: "#003333",
        footer: "#003333",
        text: "#ebfbff",
        card: "#0c4b4b",
    },
    mobile: "768px",
};

const cards = Content.map((card) => {
    return <Card key={card.id} card={card} />;
});

function App() {
    const [icon, setIcon] = useState("🌞");
    const [theme, setTheme] = useState(lightTheme);

    const handleThemeSwitch = () => {
        setIcon(icon === "🌞" ? "🌜" : "🌞");
        setTheme(icon === "🌞" ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header handleThemeSwitch={handleThemeSwitch} icon={icon} />
            <Container>{cards}</Container>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
