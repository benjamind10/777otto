import React from 'react';
import DATA from './pick3';

const Pick = () => {
  let numbers = DATA;
  let results = [];
  let finalNumbers = [];

  function getNextUniqueRecords(noOfUniqueRecords) {
    const uniqueNumbers = [...new Set(DATA.map((a) => a.Numbers))];
    return uniqueNumbers.slice(0, noOfUniqueRecords).map(getAndRemove);
  }

  function getAndRemove(num) {
    const foundData = DATA.find((a) => a.Numbers === num);
    numbers = numbers.filter(
      (item) => JSON.stringify(item) != JSON.stringify(foundData)
    );
    return foundData;
  }

  finalNumbers = getNextUniqueRecords(80);
  console.log(finalNumbers);

  for (let i = 0; i < finalNumbers.length; i++) {
    results.push(finalNumbers[i].Numbers);
  }
  console.log(results.sort());

  // console.log(getNextUniqueRecords(80));
  // console.log('Remaining Data : ', numbers);
  return <div></div>;
};

export default Pick;
