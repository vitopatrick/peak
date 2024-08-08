export const formalDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
