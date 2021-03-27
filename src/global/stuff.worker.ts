export const sum = async (a: number, b: number) => {
  return a + b;
};

export const expensiveTask = async (buffer: ArrayBuffer) => {
  for (let i = 0; i < buffer.byteLength; i++) {
    // do a lot of processing
    console.log('doe it', i);
  }
  return buffer;
};
