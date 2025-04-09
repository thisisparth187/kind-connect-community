
import Navbar from "@/components/Navbar";
import BrowseRequests from "@/components/BrowseRequests";
import Footer from "@/components/Footer";

const Browse = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <BrowseRequests />
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
