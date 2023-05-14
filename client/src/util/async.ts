const sleep = async (milliSeconds: number): Promise<void> => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliSeconds);
  });
};

const leastWait = async <T>(work: Promise<T>, delay: number): Promise<T> => {
  const results = await Promise.all([work, sleep(delay)]);
  return results[0];
};

export { sleep, leastWait };
