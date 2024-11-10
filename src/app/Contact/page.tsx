import '../Style/Contact.css';

export default function Contact() {
  return (
    <div className='container'>
      <h3>Get in Touch</h3>
      <h1>Contact me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form className='form'>
        <div className='inputGroup'>
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className='inputGroup'>
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone number" required />
        </div>
        <div className='inputGroup'>
          <select required>
            <option value="">Choose a topic</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <textarea placeholder="Type your message..." rows={5} required></textarea>
        <div className='checkboxGroup'>
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I accept the terms</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
