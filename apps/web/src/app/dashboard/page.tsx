"use client";

import { InterviewResults } from "@/components/interview/interview-results";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Calendar,
  Clock,
  ListFilter,
  Search,
  Video,
} from "lucide-react";
import { useState } from "react";

interface Interview {
  id: string;
  title: string;
  date: string;
  duration: string;
  score: number;
  category: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedInterview, setSelectedInterview] = useState<string | null>(
    null,
  );

  // Mock data
  const recentInterviews: Interview[] = [
    {
      id: "int-1",
      title: "Frontend Developer Interview",
      date: "May 15, 2025",
      duration: "28 min",
      score: 85,
      category: "Technical",
    },
    {
      id: "int-2",
      title: "UX Designer Position",
      date: "May 12, 2025",
      duration: "32 min",
      score: 78,
      category: "Design",
    },
    {
      id: "int-3",
      title: "Product Manager Interview",
      date: "May 8, 2025",
      duration: "35 min",
      score: 92,
      category: "Product",
    },
    {
      id: "int-4",
      title: "React Developer Mock Interview",
      date: "May 5, 2025",
      duration: "25 min",
      score: 88,
      category: "Technical",
    },
  ];

  const stats = [
    {
      title: "Total Interviews",
      value: "12",
      icon: <Video className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Average Score",
      value: "86%",
      icon: <BarChart3 className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Practice Time",
      value: "5.8 hrs",
      icon: <Clock className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Next Scheduled",
      value: "May 22",
      icon: <Calendar className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  // Handle interview selection
  const handleInterviewSelect = (interviewId: string) => {
    if (selectedInterview === interviewId) {
      setSelectedInterview(null);
    } else {
      setSelectedInterview(interviewId);
      setActiveTab("interview");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Track your interview progress and performance
              </p>
            </div>
            <Button size="sm">
              <Video className="mr-2 h-4 w-4" />
              New Interview
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="interview" disabled={!selectedInterview}>
                Interview Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Interviews</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Search className="h-4 w-4" />
                        Search
                      </Button>
                    </div>
                  </div>
                  <CardDescription>
                    Review and analyze your past interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentInterviews.map((interview) => (
                      <div
                        key={interview.id}
                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedInterview === interview.id
                            ? "bg-muted border-primary"
                            : "hover:bg-muted/50"
                        }`}
                        onClick={() => handleInterviewSelect(interview.id)}
                      >
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-green-100 text-green-800">
                              {interview.title.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{interview.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{interview.date}</span>
                              <span>•</span>
                              <span>{interview.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-muted-foreground/20 text-foreground hover:bg-muted-foreground/20">
                            {interview.category}
                          </Badge>
                          <Badge
                            className={`${
                              interview.score >= 85
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : interview.score >= 70
                                  ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                            }`}
                          >
                            {interview.score}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Analysis</CardTitle>
                    <CardDescription>
                      Performance across different skill categories
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-muted-foreground text-sm">
                        Skills chart visualization would be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Over Time</CardTitle>
                    <CardDescription>
                      Your interview performance progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-muted-foreground text-sm">
                        Progress chart visualization would be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="interview">
              {selectedInterview && (
                <InterviewResults interviewId={selectedInterview} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
