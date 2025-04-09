
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const UserDashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboard;
