/**
 * level 1
 */
const fn_level_1 = () => {
  // #1
  let str = '30 Days Of JavaScript';
  let str_long = 'You cannot end a sentence with because because because is a conjunction'

  // #2
  console.log(str);

  // #3
  console.log(str.length);

  // #4
  console.log(str.toLocaleUpperCase());

  // #5
  console.log(str.toLocaleLowerCase());

  // #6
  console.log(str.substring(0, 1));

  // #7
  console.log(str.substring(3));

  // #8
  console.log(str.includes('Script'));

  // #9
  console.log(str.split());

  // #10
  console.log(str.split(' '));

  // #11
  console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split());

  // #12
  console.log(str.replace('JavaScript', 'Python'));

  // #13
  console.log(str.charAt(15));

  // #14
  for (let i = 0; i < str.length; i++) {
    console.log(`${str[i]} code is ${str.charCodeAt(i)}`);
  }

  // #15
  console.log(str.includes('a'));

  // #16
  console.log(str.lastIndexOf('a'));

  // #17
  console.log(str_long.indexOf('because'));

  // #18
  console.log(str_long.lastIndexOf('because'));

  // #19
  console.log(str_long.search('because'));

  // #20
  console.log(' 30 Days Of JavaScript '.trim());

  // #21
  console.log(str.startsWith('3'));

  // #22
  console.log(str.endsWith('t'));

  // #23
  console.log(str.match(/a/gi));

  // #24
  console.log('30 Days of'.concat(' ', 'JavaScript'));

  // #25
  console.log(str.repeat(2));
};

fn_level_1();
