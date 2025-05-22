"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownToLine,
  CheckCircle,
  FileText,
  Share2,
  Video,
} from "lucide-react";

interface InterviewResultsProps {
  interviewId?: string;
}

// This is a dummy component with mock data
export function InterviewResults({ interviewId }: InterviewResultsProps) {
  const [activeTab, setActiveTab] = useState("summary");

  // Mock interview data
  const interviewData = {
    id: interviewId || "int-12345",
    title: "Frontend Developer Interview Practice",
    date: new Date().toLocaleDateString(),
    duration: "28 minutes",
    overallScore: 85,
    feedback: {
      strengths: [
        "Strong technical knowledge of React and JavaScript",
        "Clear communication of complex concepts",
        "Structured problem-solving approach",
        "Good examples from past experience",
      ],
      improvements: [
        "Provide more specific metrics in accomplishments",
        "Elaborate more on teamwork experiences",
        "Add more context when describing technical solutions",
      ],
    },
    skillScores: [
      { name: "Technical Knowledge", score: 90 },
      { name: "Communication", score: 82 },
      { name: "Problem Solving", score: 88 },
      { name: "Cultural Fit", score: 85 },
      { name: "Experience Relevance", score: 79 },
    ],
    questions: [
      {
        question: "Can you explain your experience with React hooks?",
        answer:
          "I've been using React hooks extensively for the past 3 years. I've implemented custom hooks for shared functionality across components, such as form validation, data fetching, and authentication state. For example, in my last project, I created a useDataFetching hook that handled loading states, error handling, and caching for API calls, which significantly reduced code duplication across our application.",
        feedback:
          "Strong technical explanation with good specific examples. Consider adding measurable impacts of your custom hooks implementation.",
        score: 88,
      },
      {
        question: "Describe a challenging project you worked on recently.",
        answer:
          "I recently led the front-end development of an e-commerce platform redesign. The main challenge was improving performance while adding new features. I implemented code splitting, lazy loading, and optimized rendering with React.memo and useMemo to reduce unnecessary re-renders. I also set up a comprehensive component library to ensure consistency across the application.",
        feedback:
          "Good structure and technical details. Would benefit from mentioning specific metrics of performance improvement and team collaboration aspects.",
        score: 85,
      },
      {
        question:
          "How do you stay updated with the latest front-end technologies?",
        answer:
          "I regularly follow industry blogs like CSS-Tricks and Smashing Magazine, and I'm active in several developer communities on Discord and Reddit. I also dedicate time each week to experiment with new technologies through small projects. Recently, I've been learning about the Signals API and exploring build tools like Vite and Turbopack.",
        feedback:
          "Excellent answer showing proactive learning and specific examples of technologies you're exploring.",
        score: 92,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {interviewData.title}
          </h1>
          <p className="text-muted-foreground">
            {interviewData.date} · {interviewData.duration}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Video className="mr-2 h-4 w-4" />
            New Interview
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Overall Performance</CardTitle>
            <Badge
              variant={interviewData.overallScore >= 80 ? "default" : "outline"}
              className="bg-green-100 text-green-800 hover:bg-green-100"
            >
              {interviewData.overallScore}%
            </Badge>
          </div>
          <CardDescription>
            Your interview performance was analyzed across multiple dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {interviewData.skillScores.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.score}%
                  </span>
                </div>
                <Progress value={skill.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs
        defaultValue="summary"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="questions">Questions & Answers</TabsTrigger>
          <TabsTrigger value="transcript">Full Transcript</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interviewData.feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 rounded-full bg-green-100 p-1 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDownToLine className="h-5 w-5 text-amber-500 mr-2" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interviewData.feedback.improvements.map(
                  (improvement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 rounded-full bg-amber-100 p-1 text-amber-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <path d="M7 20l5-5 5 5"></path>
                          <path d="M7 4l5 5 5-5"></path>
                        </svg>
                      </div>
                      <span>{improvement}</span>
                    </li>
                  ),
                )}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-6">
          {interviewData.questions.map((qa, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Q{index + 1}: {qa.question}
                  </CardTitle>
                  <Badge className="bg-background border border-muted text-muted-foreground">
                    {qa.score}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Your Answer:</h4>
                  <p className="text-muted-foreground">{qa.answer}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Feedback:</h4>
                  <p className="text-muted-foreground">{qa.feedback}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="transcript" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interview Transcript</CardTitle>
              <CardDescription>
                Complete record of the interview conversation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground italic">
                This is a placeholder for the full interview transcript. In a
                real application, this would contain the complete text of the
                interview conversation with timestamps and speaker
                identification.
              </p>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Download Transcript
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
