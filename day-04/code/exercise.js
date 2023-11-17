/**
 * level 1
 */
const fn_level_1 = () => {
  // #1
  let age = Number.parseFloat(prompt("Enter your age:"));
  age = Number.isNaN(age) ? 0 : age;

  if (age >= 18) {
    console.log('你可以开车了');
  } else {
    console.log(`你还有${18 - age}年才可以开车`);
  }

  // #2
  let myAge = 18;
  let yourAge = Number.parseFloat(prompt("Enter your age:"));
  yourAge = Number.isNaN(yourAge) ? 0 : yourAge;

  if (yourAge >= myAge) {
    console.log(`你比我大${yourAge - myAge}岁`);
  } else {
    console.log(`我比你大${myAge - yourAge}岁`);
  }

  // #3
  let a = 4;
  let b = 3;
  // if...else
  if (a > b) {
    console.log('a 大于 b');
  } else {
    console.log('a 小于 b');
  }
  // 三元运算符
  let str = a > b ? 'a 大于 b' : 'a 小于 b';
  console.log(str);

  // #4
  let num = Number.parseFloat(prompt("Enter a number:"));
  // % 取余
  if (num % 2 === 0) {
    console.log(`数 ${num} 是偶数`);
  } else {
    console.log(`数 ${num} 不是偶数`);
  }

  //
  if (Number(num / 2) === Number.parseFloat(num / 2)) {
    console.log(`数 ${num} 是偶数`);
  } else {
    console.log(`数 ${num} 不是偶数`);
  }
}

fn_level_1();
