
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  HandHelping, UserCheck, Heart, Calendar, PlusCircle, ListChecks,
  BarChart, Activity, CheckCircle2, Clock, AlertCircle, Trophy
} from "lucide-react";
import RequestCard, { RequestCardProps } from "@/components/RequestCard";

// Sample data for demo purposes
const myRequests: RequestCardProps[] = [
  {
    id: "7",
    title: "Need tutoring help for high school math",
    category: "education",
    location: "Online / Remote",
    description: "Looking for a tutor who can help my child with advanced high school math (calculus) twice a week for the next month to prepare for finals.",
    datePosted: "Mar 28, 2025",
    deadline: "Apr 25, 2025",
    user: {
      name: "Your Name",
      role: "Person in Need",
    },
  },
  {
    id: "8",
    title: "Help with grocery delivery for this week",
    category: "food",
    location: "Your Location",
    description: "I'm temporarily unable to go shopping due to an injury. Would appreciate help with grocery shopping and delivery this week.",
    datePosted: "Apr 1, 2025",
    user: {
      name: "Your Name",
      role: "Person in Need",
    },
  },
];

const helpProvided = [
  {
    id: "9",
    requestId: "2",
    title: "Food assistance for elderly couple",
    category: "food",
    helpType: "Donation",
    date: "Apr 6, 2025",
    status: "completed",
    recipient: "James Wilson",
  },
  {
    id: "10",
    requestId: "4",
    title: "School supplies for underprivileged children",
    category: "education",
    helpType: "Volunteer",
    date: "Apr 5, 2025",
    status: "in-progress",
    recipient: "Community Outreach Center",
  },
];

const statusColors: Record<string, string> = {
  "pending": "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  "completed": "bg-green-100 text-green-800",
  "cancelled": "bg-red-100 text-red-800",
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Your Dashboard</h2>
          <p className="text-gray-500 mt-2">Track your impact and activity on HelpHand</p>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview" className="flex gap-1 items-center">
              <BarChart size={16} />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="my-requests" className="flex gap-1 items-center">
              <ListChecks size={16} />
              <span className="hidden sm:inline">My Requests</span>
            </TabsTrigger>
            <TabsTrigger value="help-provided" className="flex gap-1 items-center">
              <Heart size={16} />
              <span className="hidden sm:inline">Help Provided</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">{myRequests.length}</div>
                    <div className="p-2 bg-helphand-softpurple rounded-full">
                      <HandHelping size={24} className="text-helphand-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">2 active, 0 completed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Help Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">{helpProvided.length}</div>
                    <div className="p-2 bg-helphand-softgreen rounded-full">
                      <Heart size={24} className="text-green-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">1 active, 1 completed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Impact Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">42</div>
                    <div className="p-2 bg-helphand-softyellow rounded-full">
                      <Trophy size={24} className="text-amber-600" />
                    </div>
                  </div>
                  <Progress value={42} className="h-2 mt-2" />
                  <p className="text-xs text-gray-500 mt-1">Keep helping to increase your score!</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
                  <CardDescription>Your recent interactions on the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-helphand-softpurple rounded-full">
                        <UserCheck size={16} className="text-helphand-primary" />
                      </div>
                      <div>
                        <p className="font-medium">You responded to: School supplies for underprivileged children</p>
                        <p className="text-sm text-gray-500">Apr 5, 2025 at 2:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-helphand-softgreen rounded-full">
                        <HandHelping size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">You posted: Help with grocery delivery for this week</p>
                        <p className="text-sm text-gray-500">Apr 1, 2025 at 10:15 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-helphand-softblue rounded-full">
                        <Activity size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">You donated to: Food assistance for elderly couple</p>
                        <p className="text-sm text-gray-500">Mar 30, 2025 at 4:45 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-helphand-softpeach rounded-full">
                        <HandHelping size={16} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">You posted: Need tutoring help for high school math</p>
                        <p className="text-sm text-gray-500">Mar 28, 2025 at 6:20 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
                  <CardDescription>Requests with upcoming deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-red-100 rounded-full">
                        <AlertCircle size={16} className="text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Need tutoring help for high school math</p>
                        <div className="flex items-center mt-1">
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <p className="text-sm text-gray-500">Due: Apr 25, 2025 (in 16 days)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-amber-100 rounded-full">
                        <Clock size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">School supplies for underprivileged children</p>
                        <div className="flex items-center mt-1">
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <p className="text-sm text-gray-500">Due: May 1, 2025 (in 22 days)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-center">
                      <Link to="/browse">
                        <Button variant="outline" className="flex items-center gap-1">
                          <Calendar size={16} />
                          View All Deadlines
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* My Requests Tab */}
          <TabsContent value="my-requests">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Your Posted Requests</h3>
              <Link to="/request">
                <Button className="bg-helphand-primary hover:bg-helphand-secondary flex items-center gap-1">
                  <PlusCircle size={16} />
                  Post New Request
                </Button>
              </Link>
            </div>
            
            {myRequests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myRequests.map((request) => (
                  <RequestCard key={request.id} {...request} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-gray-500 mb-4">You haven't posted any help requests yet.</p>
                  <Link to="/request">
                    <Button className="bg-helphand-primary hover:bg-helphand-secondary">
                      Post Your First Request
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          {/* Help Provided Tab */}
          <TabsContent value="help-provided">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Help You've Provided</h3>
              <Link to="/browse">
                <Button className="bg-helphand-primary hover:bg-helphand-secondary flex items-center gap-1">
                  <Heart size={16} />
                  Find More Ways to Help
                </Button>
              </Link>
            </div>
            
            {helpProvided.length > 0 ? (
              <div className="space-y-4">
                {helpProvided.map((help) => (
                  <Card key={help.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-4 md:p-6 flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                            <Link to={`/request/${help.requestId}`}>
                              <h4 className="text-lg font-semibold hover:text-helphand-primary transition-colors">
                                {help.title}
                              </h4>
                            </Link>
                            <Badge className={statusColors[help.status]}>
                              {help.status === "completed" && <CheckCircle2 size={12} className="mr-1" />}
                              {help.status === "in-progress" && <Clock size={12} className="mr-1" />}
                              {help.status === "pending" && <Clock size={12} className="mr-1" />}
                              {help.status === "cancelled" && <AlertCircle size={12} className="mr-1" />}
                              {help.status.charAt(0).toUpperCase() + help.status.slice(1).replace("-", " ")}
                            </Badge>
                          </div>
                          
                          <div className="md:flex md:justify-between">
                            <div>
                              <Label className="text-sm text-gray-500">Help Type</Label>
                              <p className="font-medium">{help.helpType}</p>
                            </div>
                            
                            <div className="mt-2 md:mt-0">
                              <Label className="text-sm text-gray-500">Date</Label>
                              <p>{help.date}</p>
                            </div>
                            
                            <div className="mt-2 md:mt-0">
                              <Label className="text-sm text-gray-500">Recipient</Label>
                              <p>{help.recipient}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-gray-500 mb-4">You haven't provided any help yet.</p>
                  <Link to="/browse">
                    <Button className="bg-helphand-primary hover:bg-helphand-secondary">
                      Browse Requests to Help
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
