
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "food", name: "Food & Groceries" },
  { id: "clothing", name: "Clothing & Essentials" },
  { id: "shelter", name: "Shelter & Housing" },
  { id: "medical", name: "Medical Assistance" },
  { id: "education", name: "Education Support" },
  { id: "other", name: "Other" },
];

const RequestForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    deadline: "",
    contactMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.title || !formData.category || !formData.location || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate request submission
    toast({
      title: "Success",
      description: "Your request has been submitted successfully!",
    });
    
    // Navigate to the dashboard after submission
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Post a Help Request</CardTitle>
          <CardDescription>
            Fill out the form below to let others know what kind of help you need.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Request Title*</Label>
              <Input
                id="title"
                name="title"
                placeholder="E.g., Need winter clothes for family of 4"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category*</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location*</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="E.g., Downtown Chicago"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description*</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe what you need, when you need it, and any other relevant details..."
                rows={5}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="deadline">Request Deadline (Optional)</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactMethod">Preferred Contact Method*</Label>
                <Select value={formData.contactMethod} onValueChange={(value) => handleSelectChange("contactMethod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How should helpers contact you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platform">HelpHand Platform Messages</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-helphand-primary hover:bg-helphand-secondary">
              Submit Request
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-gray-500 flex justify-center">
          <p>Note: Fields marked with * are required</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RequestForm;
