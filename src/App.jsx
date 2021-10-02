import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container.styles";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import GlobalStyles from "./components/Global";
import Content from "./content";
import Footer from "./components/footer/Footer";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
};

const cards = Content.map((card) => {
    return <Card key={card.id} card={card} />;
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Container>{cards}</Container>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
