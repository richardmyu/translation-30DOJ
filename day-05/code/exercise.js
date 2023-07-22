import countries from "./countries.js"
import webTechs from "./web_techs.js"

const fn_1 = () => {
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

const fn_2 = () => {
  // #2
  let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
  text = text.replace(/[.,]+/, '');
  console.log(text);
  let text_ary = text.split(' ');
  console.log(text_ary);
  console.log(text_ary.length);

  // #3
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

  if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
  }
  console.log(shoppingCart);

  if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
  }
  console.log(shoppingCart);

  if (shoppingCart.includes('Sugar')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
  }
  console.log(shoppingCart);

  shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
  console.log(shoppingCart);

  // #4
  if (countries.includes('Ethiopia')) {
    console.log('Ethiopia'.toUpperCase());
  } else {
    countries.push('Ethiopia');
  }

  // #5
  if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    webTechs.push('Sass');
    console.log(webTechs);
  }

  // #6
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
  const backEnd = ['Node', 'Express', 'MongoDB'];
  const fullStack = frontEnd.concat(backEnd);
  console.log(fullStack);
}

const fn_3 = () => {
  // #1
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
  const leng = ages.length;
  const sort_ages = ages.sort((a, b) => a - b);
  const max_age = sort_ages[leng - 1];
  const min_age = sort_ages[0];
  console.log('Min age: ', min_age);
  console.log('Max age: ', max_age);

  if (leng % 2 === 0) {
    let mid = leng / 2;
    if (ages[mid - 1] === ages[mid]) {
      console.log('中间值：', ages[mid]);
    } else {
      console.log('中间值：', ages[mid - 1], ages[mid]);
    }
  } else {
    let mid = Math.floor(leng / 2);
    console.log('中间值：', ages[mid]);
  }

  const sum_ages = ages.reduce((a, c) => a + c, 0);
  const avg_ages = sum_ages / leng;
  console.log('平均值：', avg_ages);

  console.log('年龄的范围：', max_age - min_age);

  console.log(`(min - avg) (max - avg): ${Math.abs(min_age - avg_ages)} ${Math.abs(max_age - avg_ages)}`);

  // #2
  let leng_countries = countries.length;
  if (leng_countries % 2 === 0) {
    let mid = leng_countries / 2;
    if (countries[mid - 1] === countries[mid]) {
      countries.log('中间值：', countries[mid]);
    } else {
      countries.log('中间值：', countries[mid - 1], countries[mid]);
    }
  } else {
    let mid = Math.floor(leng_countries / 2);
    console.log('中间值：', countries[mid]);
  }

  // #3
  if (leng_countries % 2 === 0) {
    let mid = leng_countries / 2;
    const countries_1 = countries.slice(0, mid);
    const countries_2 = countries.slice(mid);
    console.log(countries_1, countries_2);
  } else {
    let mid = Math.floor(leng_countries / 2);
    const countries_1 = countries.slice(0, mid + 1);
    const countries_2 = countries.slice(mid + 1);
    console.log(countries_1, countries_2);
  }
}


fn_1();
fn_2();
fn_3();
