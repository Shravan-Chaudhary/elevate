import { SignInCard } from "@/components/auth/sign-in-card";

const SignInPage = () => {
  return (
    <div className="container max-w-6xl mx-auto px-2 md:px-6 relative flex items-center justify-center min-h-[calc(100vh-10rem)] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-br from-green-100/30 to-blue-100/30">
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-green-300/20 blur-3xl top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 animate-very-slow-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-3xl bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 animate-very-slow-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <svg
          className="absolute top-10 right-10 w-32 h-32 text-green-500/10 rotate-12"
          fill="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.8 134.8c28.5 27.8 68.2 24.6 94.4 9.4 26.2-15.2 46.4-41.5 49.6-69.8 3.2-28.3-10.5-57.6-34-77.1-23.5-19.5-55.1-29.3-85.5-25.7-30.4 3.6-59.2 21.5-77.5 46-18.3 24.5-27 55.7-24.4 87.1 2.6 31.4 18.6 62.3 44.8 86.5"
            fill="currentColor"
          />
        </svg>

        <svg
          className="absolute bottom-10 left-10 w-60 h-60 text-blue-500/60 -rotate-12"
          fill="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeWidth="6"
            opacity="1"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="currentColor"
            strokeWidth="6"
            opacity="1"
          />
        </svg>

        <svg
          className="absolute top-[30%] left-[20%] w-36 h-36 text-emerald-600/30 rotate-6"
          fill="currentColor"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 20c-44.183 0-80 31.34-80 70s35.817 70 80 70c11.025 0 21.418-2.18 30.933-6.068l25.834 10.934c2.32 0.98 4.983 0.087 5.84-2.155l9.702-25.086C185.99 130.18 190 115.484 190 100c0-38.66-35.817-70-80-70z" />
        </svg>

        {/* Abstract radiating lines SVG */}
        <svg
          className="absolute top-[28%] left-[22%] w-32 h-32 text-gray-100/01 -rotate-2"
          fill="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeWidth="0.25"
            opacity="0.3"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="currentColor"
            strokeWidth="0.25"
            opacity="0.15"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="currentColor"
            strokeWidth="0.25"
            opacity="0.03"
          />
        </svg>

        {/* Scattered micro-dots SVG */}
        <svg
          className="absolute bottom-[22%] right-[18%] w-40 h-40 text-gray-100/01 rotate-2"
          fill="currentColor"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="30" r="0.5" />
          <circle cx="80" cy="60" r="0.5" />
          <circle cx="150" cy="40" r="0.5" />
          <circle cx="50" cy="120" r="0.5" />
          <circle cx="110" cy="150" r="0.5" />
          <circle cx="180" cy="100" r="0.5" />
          <circle cx="40" cy="170" r="0.5" />
          <circle cx="160" cy="180" r="0.5" />
          <circle cx="10" cy="80" r="0.5" />
          <circle cx="190" cy="150" r="0.5" />
        </svg>

        {/* Extremely subtle scattered minimal elements SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* A few tiny dots */}
          <circle cx="50" cy="50" r="0.1" fill="rgba(255, 255, 255, 0.003)" />
          <circle cx="150" cy="150" r="0.1" fill="rgba(255, 255, 255, 0.003)" />
          <circle cx="70" cy="130" r="0.1" fill="rgba(255, 255, 255, 0.003)" />

          {/* A few short lines */}
          <path
            d="M20 80 L 30 80"
            stroke="rgba(255, 255, 255, 0.003)"
            strokeWidth="0.1"
          />
          <path
            d="M170 120 L 180 120"
            stroke="rgba(255, 255, 255, 0.003)"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <SignInCard />
    </div>
  );
};

export default SignInPage;
