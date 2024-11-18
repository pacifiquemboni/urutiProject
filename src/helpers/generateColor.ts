export const generateColor = () => {
  let randomColorString = "#";
  const arrayOfColorFunctions = "0123456789abcdef";
  for (let x = 0; x < 6; x++) {
    const index = Math.floor(Math.random() * 16);
    const value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  return randomColorString;
};
