/**
 * Simple and clean animation system for the landing page
 * Easy to understand and use across all components
 */

// The smooth easing curve used everywhere - creates natural, buttery movement
export const smooth = [0.25, 0.46, 0.45, 0.94];

/**
 * fadeUp - Most common animation for individual elements
 * Usage: Apply to single elements that should slide up while fading in
 * Example: <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smooth },
  },
};

/**
 * fadeIn - Simple fade without movement
 * Usage: For elements that should only fade in (no sliding)
 * Example: Background overlays, modals, or subtle content reveals
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: smooth },
  },
};

/**
 * stagger - Creates a waterfall effect for multiple children
 * Usage: Apply to PARENT container, children will animate one after another
 * Example: Card grids, list items, feature sections
 *
 * How it works:
 * - staggerChildren: 0.15s delay between each child animation
 * - delayChildren: 0.1s delay before first child starts
 * - Each child needs variants={fadeUp} or variants={fadeIn}
 */
export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each child animation
      delayChildren: 0.1, // Delay before first child starts
    },
  },
};
