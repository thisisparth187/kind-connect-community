
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, HandHelping } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface RequestCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  datePosted: string;
  deadline?: string;
  user: {
    name: string;
    role: string;
  };
}

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

const RequestCard = ({
  id,
  title,
  category,
  location,
  description,
  datePosted,
  deadline,
  user,
}: RequestCardProps) => {
  const { toast } = useToast();
  const [isResponding, setIsResponding] = useState(false);
  
  const handleRespond = () => {
    setIsResponding(true);
    
    // Simulate sending a response (would connect to backend in real app)
    setTimeout(() => {
      setIsResponding(false);
      toast({
        title: "Response Sent",
        description: "Your offer to help has been sent successfully!",
      });
    }, 1500);
  };
  
  // Truncate description for the card view
  const truncatedDescription = description.length > 120 
    ? `${description.substring(0, 120)}...` 
    : description;
  
  return (
    <Card className="overflow-hidden h-full border border-gray-200 transition-shadow hover:shadow-md">
      <CardHeader className="pb-2 pt-4">
        <div className="flex justify-between items-start">
          <Badge className={`${getCategoryColor(category)}`}>
            {getCategoryName(category)}
          </Badge>
          <Badge variant="outline" className="flex gap-1 items-center">
            <MapPin size={12} /> {location}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">
          <Link to={`/request/${id}`} className="hover:text-helphand-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-1 mt-1">
          <Calendar size={14} className="text-gray-400" /> Posted on {datePosted}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{truncatedDescription}</p>
        
        {deadline && (
          <div className="flex items-center mt-4 text-sm text-amber-600">
            <Clock size={14} className="mr-1" /> Needed by: {deadline}
          </div>
        )}
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">Posted by: <span className="font-medium">{user.name}</span> ({user.role})</p>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 pt-3 pb-3">
        <div className="w-full flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            asChild
          >
            <Link to={`/request/${id}`}>View Details</Link>
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-helphand-primary hover:bg-helphand-secondary"
            onClick={handleRespond}
            disabled={isResponding}
          >
            <HandHelping size={14} className="mr-1" />
            {isResponding ? "Sending..." : "I'll Help"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;
