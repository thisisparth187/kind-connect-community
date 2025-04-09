
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useToast } from "@/hooks/use-toast";

type FormType = "login" | "signup";

const roles = [
  { id: "donor", name: "Donor" },
  { id: "volunteer", name: "Volunteer" },
  { id: "needy", name: "Person in Need" },
];

const AuthForm = ({ type }: { type: FormType }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [role, setRole] = useState("donor");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (type === "signup") {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Please fill out all fields",
          variant: "destructive",
        });
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        toast({
          title: "Error",
          description: "Please enter both email and password",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Simulate authentication (would connect to backend in real app)
    toast({
      title: "Success",
      description: type === "login" ? "You have successfully logged in!" : "Your account has been created!",
    });
    
    // In a real app, you'd store the token/user info in localStorage or auth context
    // For demo purposes, we'll just navigate to the dashboard
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] py-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {type === "login" ? "Welcome Back" : "Create an Account"}
          </CardTitle>
          <CardDescription className="text-center">
            {type === "login" 
              ? "Sign in to your HelpHand account" 
              : "Join the HelpHand community today"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {type === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            {type === "signup" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>I am joining as a:</Label>
                  <RadioGroup defaultValue="donor" value={role} onValueChange={setRole} className="flex flex-col space-y-2">
                    {roles.map((roleOption) => (
                      <div key={roleOption.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={roleOption.id} id={roleOption.id} />
                        <Label htmlFor={roleOption.id} className="cursor-pointer">{roleOption.name}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </>
            )}
            
            <Button type="submit" className="w-full bg-helphand-primary hover:bg-helphand-secondary">
              {type === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center">
            {type === "login" ? (
              <>
                Don't have an account?{" "}
                <Link to="/signup" className="text-helphand-primary hover:underline">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-helphand-primary hover:underline">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
