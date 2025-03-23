import About from "./components/About";
import Gallery from "./components/Gallery";
import PortfolioLinks from "./components/PortfolioLinks";
import DownloadPDF from "./components/DownloadPDF";
import "./styles.css";

function App() {
    return (
        <div className="container">
            <header>
                <h1>Hi, I am Debarghya Pramanik.</h1>
            </header>
            <About />
            <PortfolioLinks />
            <Gallery />
            <DownloadPDF />
        </div>
    );
}

export default App;
