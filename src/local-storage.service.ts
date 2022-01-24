export const localStorageService = {
  setItem: (key: string, value: string | object): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getItem(key: string): string | object | null {
    // TODO error handling
    const value: string | null = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
};
