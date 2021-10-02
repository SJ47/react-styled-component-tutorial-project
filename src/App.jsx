import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container.styles";
import Header from "./components/header/Header";
import GlobalStyles from "./components/Global";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Container>
                <h1>Hello World!</h1>
            </Container>
        </ThemeProvider>
    );
}

export default App;
