
import { Heart, HandHelping, Users, Globe, Shield } from "lucide-react";

const features = [
  {
    name: "Post Help Requests",
    description: "Easily create requests specifying what kind of help you need, whether it's food, clothing, shelter, or other necessities.",
    icon: HandHelping,
  },
  {
    name: "Browse & Respond",
    description: "Browse through requests in your area or filter by category. Respond directly to offer your support.",
    icon: Heart,
  },
  {
    name: "Multiple Roles",
    description: "Join as someone in need, a donor, or a volunteer - everyone has an important part to play in our community.",
    icon: Users,
  },
  {
    name: "Local Impact",
    description: "Focus on helping those in your local community or expand your reach - you decide how far your kindness extends.",
    icon: Globe,
  },
  {
    name: "Safe & Secure",
    description: "We prioritize the safety and privacy of all our users with secure authentication and data protection.",
    icon: Shield,
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-helphand-primary">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to make a difference
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            HelpHand provides all the tools necessary to connect those who want to help with those who need it most.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-helphand-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
