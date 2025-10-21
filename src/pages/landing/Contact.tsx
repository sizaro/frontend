
const Contact = () => {
  return (
    <>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">We’d love to hear from you. Reach out for collaboration, partnership, or to learn more.</p>

        <form className="grid gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="Your Name" className="border rounded-lg p-3" />
          <input type="email" placeholder="Your Email" className="border rounded-lg p-3" />
          <textarea placeholder="Your Message" className="border rounded-lg p-3 h-32"></textarea>
          <button className="bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-800">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
