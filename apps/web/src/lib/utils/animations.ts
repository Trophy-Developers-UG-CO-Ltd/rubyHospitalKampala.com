/**
 * Utility to fade up motion animation with reduced motion support
 * Used throughout homepage components
 */
import type { HTMLMotionProps } from "framer-motion";

type FadeUpMotionProps = Pick<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
>;

type FadeUpOptions = {
  amount?: number;
  distance?: number;
  duration?: number;
  reducedDuration?: number;
};

export function fadeUp(delay = 0, reduced = false, options: FadeUpOptions = {}): FadeUpMotionProps {
  const amount = options.amount ?? 0.2;
  const distance = options.distance ?? 24;
  const duration = options.duration ?? 0.55;
  const reducedDuration = options.reducedDuration;

  if (reduced) {
    const motionState: FadeUpMotionProps = {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount },
    };

    if (reducedDuration !== undefined) {
      motionState.transition = { duration: reducedDuration };
    }

    return motionState;
  }

  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: { duration, ease: [0.22, 1, 0.36, 1] as const, delay },
  };
}
