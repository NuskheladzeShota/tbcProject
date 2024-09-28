import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Information</h1>
            <p className="contact-info">Hello, this is the contact page.</p>
            <p className="contact-info">My name is <strong>Shota Nuskheladze</strong>.</p>
            <p className="contact-info">My email is <a href="mailto:shota@gmail.com">shota@gmail.com</a>.</p>
            <p className="contact-info">My phone number is <strong>0555555555</strong>.</p>
            <p className="contact-info">My address is <strong>123 Street, City, Country</strong>.</p>
        </div>
    );
}
