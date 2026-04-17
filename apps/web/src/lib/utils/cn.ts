/**
 * Utility to merge class names conditionally
 * Replaces the inline cn() function used in the original component
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
