export const transform = value => {
  let objectToArray = [];
  if (value !== null) {
    const keys = Object.keys(value);
    objectToArray = keys.map(k => ({ id: k, text: value[k].text }));
  }
  return objectToArray;
};
