
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Clock, HandHelping, Heart, ArrowLeft, User, Mail, Phone, AlertCircle } from "lucide-react";

// Sample request data - in a real app, fetch this based on the ID
const requests = [
  {
    id: "1",
    title: "Need warm clothes for family of 4",
    category: "clothing",
    location: "Chicago, IL",
    description: "We are a family with two children (ages 5 and 7) who need warm winter clothes. The recent drop in temperature has made it difficult as we don't have adequate winter clothing. Any help would be appreciated.\n\nSpecifically, we're looking for:\n- Winter coats for 2 adults (sizes M and L)\n- Winter coats for children (sizes 5T and 7/8)\n- Gloves, hats, and scarves\n- Warm socks",
    datePosted: "Apr 2, 2025",
    deadline: "Apr 15, 2025",
    user: {
      name: "Maria Garcia",
      role: "Person in Need",
      joinDate: "Feb 2025",
      responseRate: "95%",
    },
    responses: 3,
  },
  {
    id: "2",
    title: "Food assistance for elderly couple",
    category: "food",
    location: "Boston, MA",
    description: "My parents are an elderly couple who are having difficulty getting groceries this month due to unexpected medical expenses. They need basic food supplies and maybe some prepared meals.\n\nThey live in the Dorchester area of Boston and are in their 70s. Any assistance with groceries or prepared meals would be greatly appreciated. They have some dietary restrictions (low sodium).",
    datePosted: "Apr 5, 2025",
    user: {
      name: "James Wilson",
      role: "Person in Need",
      joinDate: "Jan 2024",
      responseRate: "88%",
    },
    responses: 5,
  },
];

const getCategoryName = (categoryId: string) => {
  const categories: Record<string, string> = {
    food: "Food & Groceries",
    clothing: "Clothing & Essentials",
    shelter: "Shelter & Housing",
    medical: "Medical Assistance",
    education: "Education Support",
    other: "Other",
  };
  
  return categories[categoryId] || "Other";
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    food: "bg-green-100 text-green-800",
    clothing: "bg-blue-100 text-blue-800",
    shelter: "bg-purple-100 text-purple-800",
    medical: "bg-red-100 text-red-800",
    education: "bg-yellow-100 text-yellow-800",
    other: "bg-gray-100 text-gray-800",
  };
  
  return colors[category] || colors.other;
};

const RequestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [isResponding, setIsResponding] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  
  // Find the request based on the ID
  const request = requests.find((req) => req.id === id);
  
  if (!request) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-28 container mx-auto px-4 text-center">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Request Not Found</h1>
          <p className="mb-8">The help request you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/browse")}>
            <ArrowLeft size={16} className="mr-2" />
            Back to Browse
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleRespond = () => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message to the requester",
        variant: "destructive",
      });
      return;
    }
    
    setIsResponding(true);
    
    // Simulate sending a response (would connect to backend in real app)
    setTimeout(() => {
      setIsResponding(false);
      toast({
        title: "Response Sent",
        description: "Your offer to help has been sent successfully!",
      });
      setMessage("");
      setShowContactInfo(true);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="outline" onClick={() => navigate(-1)} className="mb-4 gap-1">
                <ArrowLeft size={16} />
                Back
              </Button>
              
              <div className="flex flex-wrap gap-2 justify-between items-start">
                <Badge className={`${getCategoryColor(request.category)}`}>
                  {getCategoryName(request.category)}
                </Badge>
                
                <div className="flex gap-2">
                  <Badge variant="outline" className="flex gap-1 items-center">
                    <MapPin size={12} /> {request.location}
                  </Badge>
                  <Badge variant="outline" className="flex gap-1 items-center">
                    <Calendar size={12} /> Posted {request.datePosted}
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mt-2">{request.title}</h1>
              
              {request.deadline && (
                <div className="flex items-center mt-2 text-amber-600 font-medium">
                  <Clock size={16} className="mr-1" /> Needed by: {request.deadline}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none text-gray-700">
                      {request.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Posted By</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <User size={24} className="text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{request.user.name}</h3>
                        <p className="text-sm text-gray-500">{request.user.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Member since:</span>
                        <span>{request.user.joinDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Response rate:</span>
                        <span>{request.user.responseRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Responses:</span>
                        <span>{request.responses}</span>
                      </div>
                    </div>
                    
                    {showContactInfo && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold mb-2">Contact Information</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail size={14} className="text-gray-500" />
                            <span className="text-sm">user@example.com</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-gray-500" />
                            <span className="text-sm">(555) 123-4567</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Offer to Help</CardTitle>
                <CardDescription>
                  Let {request.user.name} know how you can help with this request
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe how you can help with this request..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-gray-500 text-sm w-full sm:w-auto">
                  Your response will be sent directly to the requester.
                </div>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex gap-1 flex-1">
                        <Heart size={16} />
                        Donate Money
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Monetary Donation</DialogTitle>
                        <DialogDescription>
                          Thank you for your generosity! This feature is coming soon.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button 
                          onClick={() => {
                            toast({
                              title: "Coming Soon",
                              description: "This feature will be available in the next update!",
                            });
                          }}
                        >
                          Continue
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    className="bg-helphand-primary hover:bg-helphand-secondary flex gap-1 flex-1"
                    onClick={handleRespond}
                    disabled={isResponding}
                  >
                    <HandHelping size={16} />
                    {isResponding ? "Sending..." : "Send Response"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestDetail;
