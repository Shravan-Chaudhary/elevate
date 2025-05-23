"use client";

import AIAvatar from "@/components/interview/ai-avatar";
import SoundWave from "@/components/interview/sound-wave";
import UserAvatar from "@/components/interview/user-avatar";
import { Mic, MicOff, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function InterviewInterface() {
  const [callActive, setCallActive] = useState(false);
  const [speaking, setSpeaking] = useState<"user" | "ai" | null>(null);
  const [muted, setMuted] = useState(false);
  const [activeSubtitle, setActiveSubtitle] = useState("");
  const [subtitleHistory, setSubtitleHistory] = useState<string[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Removed simulation-specific state: dialogIndex, intervalRef

  // Add global styles for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes soundBarPulse {
        0% { transform: scaleY(0.2); }
        100% { transform: scaleY(1); }
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      @keyframes floatSlow {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-10px) scale(1.05); }
        100% { transform: translateY(0) scale(1); }
      }

      @keyframes bounceSubtle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }

      @keyframes bounceRight {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(-8px); }
      }

      @keyframes floatSide {
        0% { transform: translateX(0) scale(1); }
        50% { transform: translateX(5px) scale(1.03); }
        100% { transform: translateX(0) scale(1); }
      }

      .animate-bounce-subtle {
        animation: bounceSubtle 1.5s ease-in-out infinite;
      }

      .animate-bounce-right {
        animation: bounceRight 1.5s ease-in-out infinite;
      }

      .animate-float-slow {
        animation: floatSlow 2.5s ease-in-out infinite;
      }

      .animate-float-side {
        animation: floatSide 2.5s ease-in-out infinite;
      }

      /* Add other necessary animations from hero.tsx if needed */
       @keyframes animate-pulse-slow {
           0%, 100% { opacity: 0.1; transform: scale(1); }
           50% { opacity: 0.3; transform: scale(1.05); }
       }
       .animate-pulse-slow {
           animation: animate-pulse-slow 4s ease-in-out infinite;
       }
       @keyframes animate-loop-x {
           0% { transform: translateX(100%); }
           100% { transform: translateX(-100%); }
       }
       .animate-loop-x {
           animation: animate-loop-x 15s linear infinite;
       }

    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Removed interview simulation useEffect
  // useEffect(() => { ... }, [callActive, dialogIndex])

  // Effect to scroll to latest message when subtitle changes
  useEffect(() => {
    if (activeSubtitle || subtitleHistory.length > 0) {
      if (subtitleRef.current) {
        subtitleRef.current.scrollTop = subtitleRef.current.scrollHeight;
      }
    }
  }, [activeSubtitle, subtitleHistory]);

  const toggleCall = async () => {
    if (callActive) {
      // End the call
      setCallActive(false);
      setSpeaking(null);
      setActiveSubtitle("");

      // TODO: Implement API call to end the interview session
      console.log("Ending interview via API...");
      try {
        // Example: await api.endInterview();
        // Handle successful end (e.g., get final feedback if applicable)
      } catch (error) {
        console.error("Error ending interview:", error);
        // Handle error (e.g., show error message)
      }

      // TODO: Clean up any active API connections or processes
    } else {
      // Start a new call
      setCallActive(true);
      setActiveSubtitle("");
      setSubtitleHistory([]);
      setMuted(false);
      setIsTyping(true); // Indicate initial AI response is coming

      // TODO: Implement API call to start a new interview session
      // The API should return the initial question/prompt from the AI
      console.log("Starting new interview via API...");
      try {
        // Example: const initialResponse = await api.startInterview();
        // Example: processApiResponse(initialResponse);
        // The processApiResponse function would update speaking, activeSubtitle, etc.
        // Mock API response processing for structure:
        /*
        const mockInitialResponse = {
          speaker: 'ai',
          text: 'Hello! Let's begin the interview. Tell me about yourself.'
        };
        setSpeaking(mockInitialResponse.speaker as 'ai' | 'user');
        // Simulate typing effect for the initial response
        simulateTyping(mockInitialResponse.text, mockInitialResponse.speaker as 'ai' | 'user');
        */
      } catch (error) {
        console.error("Error starting interview:", error);
        // Handle error (e.g., show error message, revert callActive state)
        setCallActive(false);
        setIsTyping(false);
      }
    }
  };

  // TODO: Implement a function to process API responses
  // This function will receive data from the API (e.g., new text from AI or confirmation of user speech)
  // It should update the state variables like speaking, activeSubtitle, subtitleHistory, isTyping
  /*
  const processApiResponse = (response: { speaker: 'ai' | 'user', text: string, isTyping?: boolean }) => {
    setSpeaking(response.speaker);
    if (response.isTyping) {
      setIsTyping(true);
      // Optionally simulate typing or just set the full text
       simulateTyping(response.text, response.speaker);
    } else {
      setIsTyping(false);
      setActiveSubtitle(''); // Clear active subtitle once typing/speaking finishes
      setSubtitleHistory(prev => [
        ...prev,
        `${response.speaker === 'ai' ? 'Elevate: ' : 'You: '}${response.text}`
      ]);
    }
    // Ensure scroll to bottom after processing
     setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.scrollTop = subtitleRef.current.scrollHeight
        }
      }, 10);
  };
  */

  // TODO: Implement a function to handle user speech input
  // This function would be triggered by a speech-to-text mechanism
  // It should send the user's text to the API and update the UI (e.g., show user's text as activeSubtitle temporarily)
  /*
  const handleUserSpeech = async (userText: string) => {
     setSpeaking('user');
     setActiveSubtitle(`You: ${userText}`); // Show user input temporarily
     setIsTyping(false); // User is speaking, not typing simulation
     console.log('Sending user text to API:', userText);
     try {
        // Example: const apiResponse = await api.sendUserText(userText);
        // Example: processApiResponse(apiResponse); // API responds with AI's turn or confirmation
     } catch (error) {
        console.error('Error sending user text:', error);
        // Handle error
        setActiveSubtitle('Error sending message.'); // Indicate error to user
        setSpeaking(null);
     }
  };
  */

  // TODO: Implement typing simulation if desired (optional, can just display full text from API)
  /*
   const simulateTyping = (text: string, speaker: 'ai' | 'user') => {
       let displayText = '';
       const words = text.split(' ');
       let wordIndex = 0;

       const typeWord = () => {
           if (wordIndex < words.length) {
               displayText += (wordIndex > 0 ? ' ' : '') + words[wordIndex];
               setActiveSubtitle(`${speaker === 'ai' ? 'Elevate: ' : 'You: '}${displayText}`);
               wordIndex++;
               setTimeout(typeWord, 70 + Math.random() * 50);
           } else {
               setIsTyping(false);
           }
            // Scroll to latest message during typing
            if (subtitleRef.current) {
              subtitleRef.current.scrollTop = subtitleRef.current.scrollHeight
            }
       };
       typeWord();
   };
  */

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 bg-[#F8FAFC]">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-[50%] -translate-y-[10%] [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-50" />
        </div>
        <div className="absolute -right-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-green-200/20 blur-3xl"></div>
        <div className="absolute -left-[5%] top-[60%] h-[250px] w-[250px] rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className='absolute -z-10 inset-0 bg-[url("/grid-pattern.svg")] bg-center opacity-10'></div>
        {/* Removed bottom gradient specific to hero section */}
      </div>

      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        {/* Central Interview Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white border border-gray-200 shadow-2xl">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <Mic className="h-4 w-4 text-green-700" />
              </div>
              <span className="ml-2 font-medium text-gray-900">
                Elevate Interview Session
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`px-2 py-1 rounded-full text-xs ${
                  callActive
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                } flex items-center`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    callActive ? "bg-green-500 animate-pulse" : "bg-gray-400"
                  } mr-1.5`}
                ></span>
                {callActive ? "Interview in progress" : "Ready to start"}
              </div>
            </div>
          </div>

          {/* Call interface */}
          <div className="p-6 md:p-10 bg-[#F8FAFC] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-green-50/10 backdrop-blur-3xl"></div>

            {/* Hidden circles for animation */}
            <div
              className={`${
                callActive ? "animate-pulse-slow" : "opacity-0"
              } absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-green-400/10 blur-2xl transition-opacity duration-1000`}
            ></div>
            <div
              className={`${
                callActive ? "animate-pulse-slow" : "opacity-0"
              } absolute bottom-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-opacity duration-1000`}
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative grid md:grid-cols-2 gap-4 md:gap-8">
              {/* AI participant */}
              <div
                className={`aspect-video bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border ${
                  speaking === "ai"
                    ? "border-green-500 ring-2 ring-green-200"
                    : "border-gray-200"
                } transition-all duration-500 relative group hover:shadow-lg`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-gray-50/80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <AIAvatar speaking={speaking === "ai"} />

                  <div className="mt-4 w-3/4 flex justify-center">
                    <SoundWave
                      isActive={speaking === "ai"}
                      color="bg-green-500"
                    />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-green-100/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium text-green-800 flex items-center">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      speaking === "ai" ? "bg-green-500" : "bg-gray-400"
                    } mr-1.5`}
                  ></div>
                  Elevate AI
                </div>

                <div className="absolute top-3 right-3 bg-black/5 backdrop-blur-sm rounded-md px-2 py-0.5 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Software Engineer Interview
                </div>
              </div>

              {/* User participant */}
              <div
                className={`aspect-video bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border ${
                  speaking === "user"
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200"
                } transition-all duration-500 relative group hover:shadow-lg`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-gray-50/80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <UserAvatar speaking={speaking === "user"} />

                  <div className="mt-4 w-3/4 flex justify-center">
                    <SoundWave
                      isActive={speaking === "user"}
                      color="bg-blue-500"
                    />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-blue-100/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium text-blue-800 flex items-center">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      speaking === "user" ? "bg-blue-500" : "bg-gray-400"
                    } mr-1.5`}
                  ></div>
                  You
                </div>

                <div className="absolute top-3 right-3 bg-black/10 backdrop-blur-sm rounded-full p-1.5 transition-all duration-300 hover:bg-black/20">
                  {muted ? (
                    <MicOff className="h-4 w-4 text-white" />
                  ) : (
                    <Mic className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>
            </div>

            {/* Subtitles area */}
            <div className="mt-8 rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Interview Transcript
                </span>
                <div className="flex space-x-1 items-center">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      speaking ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  <span className="text-xs text-gray-500">
                    {speaking ? "Recording" : callActive ? "Standby" : "Ready"}
                  </span>
                </div>
              </div>

              <div
                ref={subtitleRef}
                className="p-4 max-h-[160px] overflow-y-auto relative scroll-smooth" // Increased max-height slightly
                style={{ scrollBehavior: "smooth" }}
              >
                {subtitleHistory.length > 0 && (
                  <div className="space-y-3 mb-3">
                    {subtitleHistory.map((text, i) => (
                      <div key={i} className="flex items-start">
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                            text.startsWith("Elevate:")
                              ? "bg-green-50 text-green-800 self-start"
                              : "bg-blue-50 text-blue-800 self-end ml-auto"
                          }`}
                        >
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeSubtitle && (
                  <div
                    className={`flex items-start ${
                      speaking === "ai" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        speaking === "ai"
                          ? "bg-green-50 text-green-800"
                          : "bg-blue-50 text-blue-800"
                      }`}
                    >
                      {/* Display the active subtitle */}
                      {activeSubtitle}
                      {/* Indicate typing if isTyping is true */}
                      {isTyping && (
                        <span className="inline-block w-1.5 h-4 ml-0.5 bg-current animate-blink"></span>
                      )}
                      {/* TODO: Potentially add a mechanism here to show AI is processing user input if needed */}
                    </div>
                  </div>
                )}

                {!activeSubtitle && !subtitleHistory.length && (
                  <div className="text-center text-gray-400 py-4">
                    {
                      callActive
                        ? "Waiting for the AI to start the interview..."
                        : 'Press "Start Interview" to begin your practice session.' // Initial state message
                    }
                    {/* TODO: Potentially add a loading indicator here when starting the interview */}
                  </div>
                )}
              </div>
            </div>

            {/* Call controls */}
            <div className="mt-8 flex justify-center space-x-4 items-center relative">
              <button
                onClick={() => setMuted(!muted)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  muted
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
                disabled={!callActive} // Disable mute button if call is not active
              >
                {muted ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
                <span className="sr-only">
                  {muted ? "Unmute microphone" : "Mute microphone"}
                </span>
              </button>

              <div className="relative">
                <button
                  id="call-toggle-button"
                  onClick={toggleCall}
                  className={`px-8 py-3 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    callActive
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-green-600 text-white hover:bg-green-700"
                  } shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] group relative`}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {callActive
                      ? "End the current interview session"
                      : "Begin a new interview practice session"}
                  </div>

                  {callActive ? (
                    <>
                      <Phone className="h-5 w-5 mr-2 rotate-135" />
                      End Interview
                    </>
                  ) : (
                    <>
                      <Phone className="h-5 w-5 mr-2" />
                      Start Interview
                    </>
                  )}
                </button>
              </div>
              {/* TODO: Add microphone input indicator/button here when integrating speech-to-text */}
            </div>
            {/* TODO: Add section for interview feedback/analysis after the call ends */}
            {/* Example: */}
            {/*
              {!callActive && subtitleHistory.length > 0 && (
                <div className='mt-8 p-4 bg-white rounded-xl shadow'>
                   <h2 className='text-lg font-bold mb-4'>Interview Summary & Feedback</h2>
                   // Display feedback received from API after interview ends
                   <p>Analysis: ...</p>
                   <p>Suggestions: ...</p>
                </div>
              )}
             */}
          </div>
        </div>
      </div>
    </div>
  );
}
