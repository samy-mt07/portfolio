type ClassValue = string | number | false | null | undefined;

/** Minimal clsx replacement — no extra dependency needed. */
export default function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
