
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Search, FilterX, MapPin } from "lucide-react";
import RequestCard, { RequestCardProps } from "@/components/RequestCard";

// Sample data for demo purposes
const sampleRequests: RequestCardProps[] = [
  {
    id: "1",
    title: "Need warm clothes for family of 4",
    category: "clothing",
    location: "Chicago, IL",
    description: "We are a family with two children (ages 5 and 7) who need warm winter clothes. The recent drop in temperature has made it difficult as we don't have adequate winter clothing. Any help would be appreciated.",
    datePosted: "Apr 2, 2025",
    deadline: "Apr 15, 2025",
    user: {
      name: "Maria Garcia",
      role: "Person in Need",
    },
  },
  {
    id: "2",
    title: "Food assistance for elderly couple",
    category: "food",
    location: "Boston, MA",
    description: "My parents are an elderly couple who are having difficulty getting groceries this month due to unexpected medical expenses. They need basic food supplies and maybe some prepared meals.",
    datePosted: "Apr 5, 2025",
    user: {
      name: "James Wilson",
      role: "Person in Need",
    },
  },
  {
    id: "3",
    title: "Temporary housing needed for 2 weeks",
    category: "shelter",
    location: "Denver, CO",
    description: "I recently lost my apartment due to a fire in the building. Looking for temporary housing for myself for about 2 weeks while I sort out a new permanent living situation. I'm employed and can contribute partially to costs.",
    datePosted: "Apr 3, 2025",
    deadline: "Apr 10, 2025",
    user: {
      name: "Robert Johnson",
      role: "Person in Need",
    },
  },
  {
    id: "4",
    title: "School supplies for underprivileged children",
    category: "education",
    location: "Atlanta, GA",
    description: "Our community center works with underprivileged children who need basic school supplies for the upcoming school year. We're looking for donations of notebooks, pencils, backpacks, and other essential school items.",
    datePosted: "Apr 4, 2025",
    deadline: "May 1, 2025",
    user: {
      name: "Community Outreach Center",
      role: "Organization",
    },
  },
  {
    id: "5",
    title: "Assistance with medical bills",
    category: "medical",
    location: "Seattle, WA",
    description: "Recently diagnosed with a chronic condition and struggling with the mounting medical bills. Any assistance would help me continue my treatment without falling into debt.",
    datePosted: "Apr 1, 2025",
    user: {
      name: "Thomas Lee",
      role: "Person in Need",
    },
  },
  {
    id: "6",
    title: "Help with transportation to job interviews",
    category: "other",
    location: "Phoenix, AZ",
    description: "I'm actively job hunting but struggling with transportation to interviews. Looking for someone who might be able to give me rides to job interviews in the Phoenix area for the next few weeks.",
    datePosted: "Apr 6, 2025",
    user: {
      name: "Carlos Martinez",
      role: "Person in Need",
    },
  },
];

const locations = [
  { id: "all", name: "All Locations" },
  { id: "chicago", name: "Chicago, IL" },
  { id: "boston", name: "Boston, MA" },
  { id: "denver", name: "Denver, CO" },
  { id: "atlanta", name: "Atlanta, GA" },
  { id: "seattle", name: "Seattle, WA" },
  { id: "phoenix", name: "Phoenix, AZ" },
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "food", name: "Food & Groceries" },
  { id: "clothing", name: "Clothing & Essentials" },
  { id: "shelter", name: "Shelter & Housing" },
  { id: "medical", name: "Medical Assistance" },
  { id: "education", name: "Education Support" },
  { id: "other", name: "Other" },
];

const BrowseRequests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [distance, setDistance] = useState([25]); // Default 25 miles
  
  // Filter requests based on selected filters
  const filteredRequests = sampleRequests.filter((request) => {
    const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         request.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || request.category === selectedCategory;
    
    const matchesLocation = selectedLocation === "all" || 
                           request.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });
  
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLocation("all");
    setDistance([25]);
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Browse Help Requests</h2>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search requests..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
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
              
              <div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.id} value={location.id}>
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="flex-1">
                <Label htmlFor="distance-slider" className="flex items-center gap-1 mb-2">
                  <MapPin size={14} className="text-gray-400" />
                  Distance: {distance[0]} miles
                </Label>
                <Slider
                  id="distance-slider"
                  value={distance}
                  onValueChange={setDistance}
                  min={5}
                  max={100}
                  step={5}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetFilters}
                  className="flex gap-1"
                >
                  <FilterX size={14} />
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <RequestCard key={request.id} {...request} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 mb-2">No requests found matching your filters.</p>
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="flex gap-1 mx-auto"
              >
                <FilterX size={14} />
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseRequests;
