/**
 * level 1
 */

const fn_level_1 = () => {
  // #1
  let ary = [];

  // #2
  let ary_2 = [1, 2, 3, 4, 5, 6];

  // #3
  console.log(ary_2.length);

  // #4
  console.log(`the first: ${ary_2[0]}`);
  console.log(`the middle: ${ary_2[Math.floor(ary_2 / 2)]}`);
  console.log(`the last: ${ary_2[ary_2.length - 1]}`);

  // #5
  let miexdDateTypes = [1, '2', [3], { 'name': 'mark', 'age': 18 }, false, new Date()];

  // #6
  let itCompanies = ['Facebook', 'Google', 'Micosoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

  // #7
  console.log(miexdDateTypes);

  // #8
  console.log(itCompanies.length);

  // #9
  console.log(`the first: ${itCompanies[0]}`);
  console.log(`the middle: ${itCompanies[Math.floor(itCompanies / 2)]}`);
  console.log(`the last: ${itCompanies[itCompanies.length - 1]}`);

  // #10
  for (const value of itCompanies) {
    console.log(value);
  }

  // #11
  for (let value of itCompanies) {
    value = value.toUpperCase();
    console.log(value);
  }

  // #12
  let str_12 = itCompanies.slice(0, -2).join(', ') + itCompanies.slice(-2).join(' and ') + ' are big IT companies.';
  console.log(str_12);

  // #13
  // if (itCompanies.includes('IBM')) {
  //   return 'IBM';
  // } else {
  //   return 'IBM is not found';
  // }

  // #14
  let r_14 = [];
  itCompanies.forEach(item => {
    if (item.includes('o')) {
      r_14.push(item);
    }
  })
  console.log(r_14);

  // #15
  console.log(itCompanies.sort());

  // #16
  console.log(itCompanies.reverse());

  // #17
  console.log(itCompanies.slice(0, 4));

  // #18
  console.log(itCompanies.slice(-3));

  // #19
  if (itCompanies.length % 2 !== 0) {
    let mid = Math.floor(itCompanies / 2);
    console.log(itCompanies.slice(mid, mid + 1));
  } else {
    let mid = itCompanies / 2;
    console.log(itCompanies.slice(mid - 1, mid + 1));
  }

  // #20
  console.log(itCompanies.shift());
  console.log(itCompanies);

  // #21
  if (itCompanies.length % 2 !== 0) {
    let mid = Math.floor(itCompanies / 2);
    console.log(itCompanies.splice(mid, 1));
    console.log(itCompanies);
  } else {
    let mid = itCompanies / 2;
    console.log(itCompanies.splice(mid - 1, 2));
    console.log(itCompanies);
  }

  // #22
  console.log(itCompanies.pop());
  console.log(itCompanies);

  // #23
  itCompanies = [];
}

fn_level_1();
