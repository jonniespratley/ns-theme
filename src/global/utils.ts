export const loadFromSession = (itemKeyToLoad: any = 'state') => {
  try {
    const serializedSessionItem = sessionStorage.getItem(itemKeyToLoad);
    if (serializedSessionItem === null) {
      return;
    }
    return JSON.parse(serializedSessionItem);
  } catch (err) {
    return {};
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
