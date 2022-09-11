export const rightAnimation = {
  hidden: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const middleAnimation = {
  hidden: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

export const leftAnimation = {
  hidden: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
    },
  },
};

export const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
  ok: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};
