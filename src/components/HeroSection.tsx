
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, HandHelping, PlusCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-helphand-primary to-helphand-softpurple opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 sm:pt-20 lg:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connecting <span className="text-helphand-primary">Kindness</span> with <span className="text-helphand-secondary">Needs</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            HelpHand brings together those in need with individuals and organizations who want to help.
            Join our community and make a difference today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/signup">
              <Button className="rounded-full bg-helphand-primary hover:bg-helphand-secondary px-6 py-6 h-auto text-base">
                <PlusCircle className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </Link>
            <Link to="/browse" className="text-base font-semibold leading-6 text-gray-900 flex items-center hover:text-helphand-primary transition-colors">
              <Heart className="mr-2 h-5 w-5" />
              Browse Requests <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Community helping each other"
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-helphand-secondary to-helphand-softpink opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
