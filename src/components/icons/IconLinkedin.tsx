/**
 * Hand-drawn in place of Tabler's brand-linkedin(-filled) icon: that glyph's
 * "in" lettering relies on fine sub-pixel curve corrections that turn to
 * mush at chip-icon sizes (16-18px). This simpler path holds up at small
 * sizes because it has far less curve detail to anti-alias.
 */
export function IconLinkedin({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="shrink-0"
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zM8.34 18.5v-8.5h-2.67v8.5zM7 8.6a1.53 1.53 0 1 0 0 -3.06a1.53 1.53 0 0 0 0 3.06zM18.5 18.5v-4.7c0 -2.5 -1.33 -3.67 -3.1 -3.67c-1.43 0 -2.06 .79 -2.42 1.34v-1.15h-2.68c.03 .7 0 8.5 0 8.5h2.68v-4.75c0 -.25 .02 -.5 .1 -.68c.2 -.5 .66 -1.03 1.44 -1.03c1.02 0 1.43 .78 1.43 1.92v4.54z" />
    </svg>
  )
}
