const useCustomNumber = (min = 1, max = 10) => {
  return setInterval(() => Math.floor(Math.random() * (max - min) + min), 10000);
};
export default useCustomNumber;
