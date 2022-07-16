import "./Contact.css";

function Contact() {
  return (
    <div className="contact_form">
      <h1> Contact us </h1>
      <p>
        Want to connect? My inbox is always open! Don't hesitate to contact me
        using below form either.
      </p>
      <form action="https://formspree.io/f/xrgjnzrw" method="POST">
        <label>
          Your Name:
          <input type="string" name="name" required />
        </label>
        <label>
          Your email:
          <input type="email" name="email" required />
        </label>
        <label>
          Your message:
          <textarea name="message" required></textarea>
        </label>
        {/* <!-- your other form fields go here --> */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
