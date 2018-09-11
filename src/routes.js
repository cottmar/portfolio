const pushIntoSecond = (array) => {
  const secondArray = [];
  
  for(let i = 0; i < array.length; i++) {
      secondArray.push(array[i]);
    }

    return secondArray;
  }

  describe('Testing challenge 1', () => {
    test('It should push all of the elements from the first array into the second array', () => {
      expect(pushIntoSecond([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    });
  });