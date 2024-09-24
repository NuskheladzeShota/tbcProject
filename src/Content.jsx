import dog1 from "./dog1.jpg"
import dog2 from "./dog2.jpg"
import dog3 from "./dog3.jpeg"
export default function Content() {
    return (
        <div>
            <h1>Welcome to TBC Project</h1>
            <div className="info">
                <p>This is a simple React project with basic setup.</p>
                <p>Author: <a href="https://github.com/NuskheladzeShota">Shota Nuskheladze</a></p>
                <p>Version: 1.0.0</p>
            </div>
            <div>
                <div className="dog-content">
                    <p className="highlight">you can see my dogs pictures</p>
                </div>
                <div className="dog-images">
                    <img src={dog1} alt="Dog" />
                    <img src={dog2} alt="Dog" />
                    <img src={dog3} alt="Dog" />
                </div>
            </div>
        </div>
    )
}