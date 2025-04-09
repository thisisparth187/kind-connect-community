
import { useState, useEffect } from "react";

const testimonials = [
  {
    content: "HelpHand connected me with a family who needed winter clothes for their children. Being able to help directly made the experience so rewarding.",
    author: "Sarah Johnson",
    role: "Donor",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    content: "After losing my job, I didn't know how I would feed my family. HelpHand connected me with kind people who provided groceries while I got back on my feet.",
    author: "Michael Rodriguez",
    role: "Received Help",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content: "I volunteer my time helping with deliveries for elderly people in my neighborhood. The platform makes it simple to find opportunities to help.",
    author: "Emily Chen",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    content: "Our shelter uses HelpHand to post specific needs. The response from the community has been incredible and much faster than traditional channels.",
    author: "James Wilson",
    role: "NGO Coordinator",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-helphand-softpurple py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stories from Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from those who are making a difference and those whose lives have been changed.
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="relative h-[350px] sm:h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <figure className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <blockquote className="text-gray-900 text-lg sm:text-xl italic">
                    "{testimonial.content}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === activeIndex ? "bg-helphand-primary" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
