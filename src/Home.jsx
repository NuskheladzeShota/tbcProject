import './App.css';
import "./Header.css";
import "./Content.css"
import "./Footer.css";
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
export default function Home() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}