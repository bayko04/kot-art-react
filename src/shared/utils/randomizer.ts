const rondomizer = (array: any) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomData = array[randomIndex];

  return randomData;
};

export default rondomizer;
