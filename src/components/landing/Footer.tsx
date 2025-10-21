const Footer = () => {
  return (
    <footer className="bg-pink-700 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2 font-semibold">
          © {new Date().getFullYear()} Women Empowering Girls
        </p>
        <p className="text-sm">Empowering women and girls through faith, education, and service.</p>
      </div>
    </footer>
  );
};

export default Footer;
