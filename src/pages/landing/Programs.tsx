
const Programs = () => {
  const programs = [
    "Faith, Family, and Motherhood",
    "Sex Education",
    "Career Guidance",
    "Community Service and Humanitarian Experiences",
    "Gospel of Jesus Christ",
    "Business Skills",
    "Hands-on Training",
    "Mental Health Awareness and Well-being",
  ];

  return (
    <>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">Our Programs</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <li key={i} className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="font-semibold text-pink-700">{program}</h3>
              <p className="text-gray-600 mt-2">Empowering participants through workshops, mentorship, and practical engagement.</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Programs;
