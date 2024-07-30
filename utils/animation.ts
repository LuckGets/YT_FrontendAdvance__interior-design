interface Transition {
  type: string;
  duration: number;
  delay?: number;
}

interface AnimationKeyVariant {
  [key: string]: {
    opacity: number;
    y: number;
    transition?: Transition;
  };
}

export const containerVariants = (delay = 0): AnimationKeyVariant => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "",
      duration: 2,
      delay,
    },
  },
});

export const tagVariants: AnimationKeyVariant = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.8,
      delay: 0.4,
    },
  },
};

export const titleVariants: AnimationKeyVariant = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};

export const desVariants: AnimationKeyVariant = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.6,
      delay: 0.2,
    },
  },
};
