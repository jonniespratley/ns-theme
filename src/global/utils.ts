export const loadFromSession = (itemKeyToLoad: any = 'state', returns = {}) => {
  try {
    const serializedSessionItem = sessionStorage.getItem(itemKeyToLoad);
    if (serializedSessionItem === null) {
      return returns;
    }
    return JSON.parse(serializedSessionItem);
  } catch (err) {
    return returns;
  }
};

export const saveToSession = (item: any, key: any = 'state') => {
  try {
    const serializedSessionItem = JSON.stringify(item);
    sessionStorage.setItem(key, serializedSessionItem);
  } catch (err) {
    // Ignore write errors
  }
};
