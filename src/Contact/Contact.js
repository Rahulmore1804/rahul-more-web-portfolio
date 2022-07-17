import "./Contact.css";

function Contact() {
  return (
    <div className="contact_form">
      <h1> Contact us </h1>
      <p className="b3">
        Want to connect? My inbox is always open! Don't hesitate to contact me
        using below form either.
      </p>
      <form className="A12" action="https://formspree.io/f/xrgjnzrw" method="POST">
        <label className="b2">
          Your Name  :
          <input type="string" name="name" required />
        </label>
        <br/>
        <label className="b2">
          Your email  :
          <input type="email" name="email" required />
        </label>
        <br/>
        <label className="b2">
          Your message  :
          <textarea name="message" required></textarea>
        </label>
        <br/>
       
        <button  type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
