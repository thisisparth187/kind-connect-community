
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";

const SignUp = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <AuthForm type="signup" />
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
