import React from "react";

export function MicrophoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2a5 5 0 00-5 5v6a5 5 0 0010 0V7a5 5 0 00-5-5z" />
      <path d="M19 10c0 3.53-2.61 6.43-6 6.92V21h3v2H8v-2h3v-4.08c-3.39-.49-6-3.39-6-6.92h2a4.002 4.002 0 014 4c.27 0 .53-.02.79-.06A5.009 5.009 0 0017 11V7a5 5 0 00-5-5 4.987 4.987 0 00-3.25 1.14l1.49 1.49A3.001 3.001 0 0112 4a3 3 0 013 3v6a3 3 0 01-6 0V7a3 3 0 013-3.01V2.02z" />
    </svg>
  );
}
