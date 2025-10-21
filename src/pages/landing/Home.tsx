
const Home = () => {
  return (
    <>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/images/womenempoeringgirlshero.jpg')",
        }}
      >
        <div className="relative z-10 text-white px-6 bottom-0">
          <a
            href="/get-involved"
            className="bg-white text-pink-700 font-semibold px-6 py-3 rounded-lg hover:bg-pink-700 hover:text-white transition bottom-0"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">
          Our Mission & Vision
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          <strong>Mission:</strong> To empower young girls and women by
          providing mentorship, education, and life skills that foster
          confidence and resilience in all aspects of life.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          <strong>Vision:</strong> A world where every girl and woman has the
          knowledge, strength, and opportunities to achieve their full potential
          and contribute positively to society.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">
          Be Part of the Change
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Join our mission to uplift women and girls through mentorship,
          training, and community support. Every effort counts.
        </p>
        <a
          href="/get-involved"
          className="bg-pink-700 text-white px-8 py-3 rounded-lg hover:bg-pink-800 transition"
        >
          Join Us
        </a>
      </section>
    </>
  );
};

export default Home;
