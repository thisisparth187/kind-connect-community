
import Navbar from "@/components/Navbar";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

const PostRequest = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Post a Help Request</h1>
        </div>
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default PostRequest;
