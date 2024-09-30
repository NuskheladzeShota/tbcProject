import '../Styles/App.css';
import "../Styles/Header.css";
import "../Styles/Content.css"
import "../Styles/Footer.css";
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer'
export default function Home() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}