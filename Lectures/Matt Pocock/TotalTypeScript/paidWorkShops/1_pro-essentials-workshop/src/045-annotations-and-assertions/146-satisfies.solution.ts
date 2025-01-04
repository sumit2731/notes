type Color =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

/**
 * how would we say config needs to satisfy a certain criteria while still being inferred as what's being
 * passed to it.
 *
 * staisfies lets tell that this value need to satisfy a criteria but do not let it chnage how you infer it
 */
const config = {
  foreground: { r: 255, g: 255, b: 255 },
  background: { r: 0, g: 0, b: 0 },
  border: "transparent",
} satisfies Record<string, Color>;

config.border.toUpperCase();

console.log(config.foreground.r);

// @ts-expect-error
config.primary;

// @ts-expect-error
config.secondary;
