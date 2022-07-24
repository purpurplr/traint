export const consecutiveId = (() => {
  let count = 0;

  return () => {
    count += 1;
    return String(count);
  };
})();
