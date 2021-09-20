import React from 'react';
import DATA from './pick3';

const Pick = () => {
  const numbers = [];

  function getNextUniqueRecords(noOfUniqueRecords) {
    const uniqueNumbers = [...new Set(DATA.map((a) => a.Numbers))];
    return uniqueNumbers.slice(0, noOfUniqueRecords).map(getAndRemove);
  }

  function getAndRemove(num) {
    const foundData = DATA.find((a) => a.Numbers === num);
    DATA = DATA.filter(
      (item) => JSON.stringify(item) != JSON.stringify(foundData)
    );
    return foundData;
  }

  // const result = Array.from(new Set(DATA.map((a) => a.Numbers))).map(
  //   (Numbers) => {
  //     return DATA.find((a) => a.Numbers === Numbers);
  //   }
  // );

  // console.log(result);
  // for (let i = 0; i < 80; i++) {
  //   numbers.push(result[i]);
  // }
  // console.log(numbers);

  // let i = 0;
  // let j = 0;

  // while (j < 80) {
  //   if (!numbers.includes(DATA[i].Numbers)) {
  //     numbers.push(DATA[i].Numbers);
  //     j++;
  //   }
  //   i++;
  // }
  // console.log(numbers);

  return <div></div>;
};

export default Pick;
