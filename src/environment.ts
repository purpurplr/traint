interface Environment {
  api: {
    roadmap: string;
  };
}

export const env: Environment = {
  api: {
    roadmap: import.meta.env.VITE_API_ROADMAP,
  },
};
