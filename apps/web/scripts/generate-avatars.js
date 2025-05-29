const fs = require("fs");
const path = require("path");

// Create testimonials directory if it doesn't exist
const testimonialsDir = path.join(__dirname, "..", "public", "testimonials");
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

// Avatar data with colors and initials
const avatars = [
  { name: "Alex Johnson", initials: "AJ", color: "#3B82F6" }, // blue
  { name: "Sarah Chen", initials: "SC", color: "#10B981" }, // emerald
  { name: "Miguel Rodriguez", initials: "MR", color: "#8B5CF6" }, // violet
  { name: "Priya Patel", initials: "PP", color: "#F59E0B" }, // amber
  { name: "David Kim", initials: "DK", color: "#EF4444" }, // red
  { name: "Emma Watson", initials: "EW", color: "#06B6D4" }, // cyan
];

// Generate SVG avatars
avatars.forEach((avatar, index) => {
  const svgContent = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${avatar.color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${avatar.color};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#gradient${index})" />
  <text x="50" y="50" text-anchor="middle" dominant-baseline="central" 
        font-family="Arial, sans-serif" font-size="28" font-weight="600" fill="white">
    ${avatar.initials}
  </text>
</svg>`;

  const filename = `avatar-${index + 1}.svg`;
  const filePath = path.join(testimonialsDir, filename);

  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated ${filename}`);
});

console.log("All avatar images generated successfully!");
