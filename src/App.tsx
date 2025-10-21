import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import Programs from "./pages/landing/Programs";
import GetInvolved from "./pages/landing/GetInvolved";
import NewsEvents from "./pages/landing/NewsEvents";
import Contact from "./pages/landing/Contact";

// Future imports (commented out)
// import ProtectedRoute from "./components/common/ProtectedRoute";
// import OwnerLayout from "./components/layout/OwnerLayout";
// import ManagerLayout from "./components/layout/ManagerLayout";
// import EmployeeLayout from "./components/layout/EmployeeLayout";
// import CustomerLayout from "./components/layout/CustomerLayout";

function App() {
  return (
    <Router>
      {/* Full-page flex layout */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar always on top */}
        <Navbar />

        {/* Main content grows */}
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/contact" element={<Contact />} />

            {/* Future Private Routes (commented out for now) */}
            {/*
            <Route path="/owner/*" element={<ProtectedRoute role="owner"><OwnerLayout /></ProtectedRoute>} />
            <Route path="/manager/*" element={<ProtectedRoute role="manager"><ManagerLayout /></ProtectedRoute>} />
            <Route path="/employee/*" element={<ProtectedRoute role="employee"><EmployeeLayout /></ProtectedRoute>} />
            <Route path="/customer/*" element={<ProtectedRoute role="customer"><CustomerLayout /></ProtectedRoute>} />
            */}
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
