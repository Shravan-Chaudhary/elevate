import AIAvatar from "@/components/interview/ai-avatar";
import SoundWave from "@/components/interview/sound-wave";
import UserAvatar from "@/components/interview/user-avatar";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mic, MicOff, Phone } from "lucide-react";

// Predefined interview dialog (assuming this is needed in the demo)
const INTERVIEW_DIALOG = [
  {
    speaker: "ai",
    text: "Tell me about your experience with backend technologies and frameworks.",
    duration: 4000,
  },
  {
    speaker: "user",
    text: "I have 4 years of experience with Node.js, Express, and NestJS. I recently built a microservices architecture using Docker and Kubernetes.",
    duration: 5000,
  },
  {
    speaker: "ai",
    text: "That's impressive. How do you handle database transactions in a microservices architecture?",
    duration: 4000,
  },
  {
    speaker: "user",
    text: "I implement the Saga pattern with distributed transactions, using event sourcing to maintain data consistency across services.",
    duration: 5000,
  },
  {
    speaker: "ai",
    text: "Great approach. What monitoring tools have you used for your backend services?",
    duration: 4000,
  },
  {
    speaker: "user",
    text: "I use Prometheus for metrics collection, Grafana for visualization, and the ELK stack for centralized logging.",
    duration: 5000,
  },
];

export function InteractiveDemo() {
  const [speaking, setSpeaking] = useState<"user" | "ai" | null>(null);
  const [activeSubtitle, setActiveSubtitle] = useState("");
  const [callActive, setCallActive] = useState(true);
  const [muted, setMuted] = useState(false);
  const [subtitleHistory, setSubtitleHistory] = useState<string[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [showButtonHint, setShowButtonHint] = useState(true);
  const hasInteractedRef = useRef(false);

  // Hide button hint only after user interacts with the call button
  useEffect(() => {
    const handleButtonClick = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        setShowButtonHint(false);
      }
    };

    const callButton = document.getElementById("call-toggle-button");
    if (callButton) {
      callButton.addEventListener("click", handleButtonClick);
    }

    return () => {
      if (callButton) {
        callButton.removeEventListener("click", handleButtonClick);
      }
    };
  }, []);

  // Add global styles for animations (These should ideally be global CSS, but including here for completeness if they aren't)
  // You might want to check if these animations are already defined globally
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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Continuous interview simulation
  useEffect(() => {
    if (!callActive) {
      setSpeaking(null);
      setActiveSubtitle("");
      // Clear any running timeouts when call is inactive
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    let timeout: NodeJS.Timeout;

    const simulateDialogue = () => {
      const currentLine = INTERVIEW_DIALOG[dialogIndex];
      if (!currentLine) {
        if (intervalRef.current) {
          clearTimeout(intervalRef.current);
        }
        setSpeaking(null);
        setActiveSubtitle("");
        setIsTyping(false);
        return;
      }
      setSpeaking(currentLine.speaker as "user" | "ai");
      setIsTyping(true);

      // Simulate typing
      let displayText = "";
      const words = currentLine.text.split(" ");
      let wordIndex = 0;

      const typeWord = () => {
        if (wordIndex < words.length) {
          displayText += (wordIndex > 0 ? " " : "") + words[wordIndex];
          setActiveSubtitle(displayText);
          wordIndex++;
          timeout = setTimeout(typeWord, 70 + Math.random() * 50);

          // Scroll to latest message
          if (subtitleRef.current) {
            subtitleRef.current.scrollTop = subtitleRef.current.scrollHeight;
          }
        } else {
          setIsTyping(false);
        }
      };

      typeWord();

      // Move to next dialog line
      timeout = setTimeout(() => {
        setSpeaking(null);
        setActiveSubtitle("");
        clearTimeout(timeout);

        // Keep recent history
        setSubtitleHistory((prev) => {
          const newHistory = [
            ...prev,
            `${currentLine.speaker === "ai" ? "Elevate: " : "You: "}${
              currentLine.text
            }`,
          ];
          return newHistory.slice(-5);
        });

        // Scroll to latest message after updating history
        setTimeout(() => {
          if (subtitleRef.current) {
            subtitleRef.current.scrollTop = subtitleRef.current.scrollHeight;
          }
        }, 10);

        // Move to next dialog line
        setDialogIndex(
          (prevIndex) => (prevIndex + 1) % INTERVIEW_DIALOG.length,
        );

        // Pause between turns
        intervalRef.current = setTimeout(simulateDialogue, 1000);
      }, currentLine.duration);
    };

    // Start the simulation after a short delay
    timeout = setTimeout(simulateDialogue, 500);
    intervalRef.current = timeout;

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [callActive, dialogIndex]);

  // Effect to scroll to latest message when subtitle changes
  useEffect(() => {
    if (activeSubtitle || subtitleHistory.length > 0) {
      if (subtitleRef.current) {
        subtitleRef.current.scrollTop = subtitleRef.current.scrollHeight;
      }
    }
  }, [activeSubtitle, subtitleHistory]);

  const toggleCall = () => {
    if (callActive) {
      // End the call
      setCallActive(false);
      setSpeaking(null);
      setActiveSubtitle("");

      // Keep the history when ending the call
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      // Start a new call
      setCallActive(true);
      setSpeaking(null);
      setActiveSubtitle("");
      setSubtitleHistory([]);
      setDialogIndex(0);
      setMuted(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <div className="relative rounded-2xl overflow-hidden">
        {/* Mockup Browser Frame */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between relative">
          <div className="hidden sm:flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center justify-center w-auto">
            <div className="px-4 py-1 bg-gray-100 rounded-full text-xs text-gray-600 max-w-[220px] mx-auto overflow-hidden">
              <div className="animate-loop-x whitespace-nowrap">
                elevate.ai/interview-session
              </div>
            </div>
          </div>
          <div className="w-16"></div>
        </div>

        {/* Header */}
        <div className="bg-white px-6 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              <Mic className="h-4 w-4 text-green-700" />
            </div>
            <span className="ml-2 font-medium text-gray-900 text-xs md:text-base hidden xs:inline md:inline">
              Elevate Interview Session
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "px-2 py-1 rounded-full text-xs",
                callActive
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500",
                "flex items-center",
              )}
            >
              <span
                className={cn(
                  "inline-block h-1.5 w-1.5 rounded-full",
                  callActive ? "bg-green-500 animate-pulse" : "bg-gray-400",
                  "mr-1.5",
                )}
              ></span>
              {callActive ? "Interview in progress" : "Ready to start"}
            </div>
          </div>
        </div>

        {/* Call interface */}
        <div className="p-6 md:p-10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-green-50/10 backdrop-blur-3xl"></div>

          {/* Hidden circles for animation */}
          <div
            className={cn(
              callActive ? "animate-pulse-slow" : "opacity-0",
              "absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-green-400/10 blur-2xl transition-opacity duration-1000",
            )}
          ></div>
          <div
            className={cn(
              callActive ? "animate-pulse-slow" : "opacity-0",
              "absolute bottom-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-opacity duration-1000",
            )}
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative grid md:grid-cols-2 gap-4 md:gap-8">
            {/* AI participant */}
            <div
              className={cn(
                "aspect-video bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border",
                speaking === "ai"
                  ? "border-green-500 ring-2 ring-green-200"
                  : "border-gray-200",
                "transition-all duration-500 relative group hover:shadow-lg",
              )}
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
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    speaking === "ai" ? "bg-green-500" : "bg-gray-400",
                    "mr-1.5",
                  )}
                ></div>
                Elevate AI
              </div>

              <div className="absolute top-3 right-3 bg-black/5 backdrop-blur-sm rounded-md px-2 py-0.5 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Software Engineer Interview
              </div>
            </div>

            {/* User participant */}
            <div
              className={cn(
                "aspect-video bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border",
                speaking === "user"
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200",
                "transition-all duration-500 relative group hover:shadow-lg",
              )}
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
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    speaking === "user" ? "bg-blue-500" : "bg-gray-400",
                    "mr-1.5",
                  )}
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
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    speaking ? "bg-green-500" : "bg-gray-300",
                  )}
                ></div>
                <span className="text-xs text-gray-500">
                  {speaking ? "Recording" : callActive ? "Standby" : "Ready"}
                </span>
              </div>
            </div>

            <div
              ref={subtitleRef}
              className="p-4 max-h-[140px] overflow-y-auto relative scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {subtitleHistory.length > 0 && (
                <div className="space-y-3 mb-3">
                  {subtitleHistory.map((text, i) => (
                    <div key={i} className="flex items-start">
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                          text.startsWith("Elevate:")
                            ? "bg-green-50 text-green-800 self-start"
                            : "bg-blue-50 text-blue-800 self-end ml-auto",
                        )}
                      >
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSubtitle && (
                <div
                  className={cn(
                    "flex items-start",
                    speaking === "ai" ? "justify-start" : "justify-end",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      speaking === "ai"
                        ? "bg-green-50 text-green-800"
                        : "bg-blue-50 text-blue-800",
                    )}
                  >
                    {activeSubtitle}
                    {isTyping && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-current animate-blink"></span>
                    )}
                  </div>
                </div>
              )}

              {!activeSubtitle && !subtitleHistory.length && (
                <div className="text-center text-gray-400 py-4">
                  {callActive
                    ? "Starting the interview simulation..."
                    : 'Press "Start Interview" to begin your practice session.'}
                </div>
              )}
            </div>
          </div>

          {/* Call controls */}
          <div className="mt-12 flex justify-center space-x-4 items-center relative">
            <button
              onClick={() => setMuted(!muted)}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                muted
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200",
              )}
              disabled={!callActive}
            >
              {muted ? (
                <MicOff className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
              <span className="sr-only">{muted ? "Unmute" : "Mute"}</span>
            </button>

            <div className="relative">
              {/* Button hint arrow - more compact design for all screens */}
              {showButtonHint && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
                  <div className="transform text-amber-700 bg-amber-50 px-3 py-1 rounded-full shadow-sm border border-amber-200 text-xs font-medium whitespace-nowrap animate-float-slow">
                    Try it!
                  </div>
                </div>
              )}

              <button
                id="call-toggle-button"
                onClick={toggleCall}
                className={cn(
                  "px-8 py-3 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                  callActive
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-green-600 text-white hover:bg-green-700",
                  "shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-[1px]",
                  showButtonHint
                    ? "ring-2 ring-amber-400 ring-offset-2 animate-pulse"
                    : "",
                  "group relative",
                )}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveDemo;
