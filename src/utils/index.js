const addIndex = (data) => {
  return data?.map((y, index) => {
    return {
      ...y,
      index: index + 1,
    };
  });
};

export { addIndex };
