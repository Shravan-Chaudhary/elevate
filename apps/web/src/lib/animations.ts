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

/**
 * Enhanced animation variants for sophisticated interactions
 */

/**
 * slideInFromLeft - Elegant slide in from the left
 * Usage: For elements that should slide in from the left side
 */
export const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smooth },
  },
};

/**
 * slideInFromRight - Elegant slide in from the right
 * Usage: For elements that should slide in from the right side
 */
export const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smooth },
  },
};

/**
 * scaleUp - Gentle scale animation
 * Usage: For elements that should grow into view
 */
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smooth },
  },
};

/**
 * floatIn - Combines multiple effects for premium feel
 * Usage: For hero elements and key focal points
 */
export const floatIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: smooth,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
