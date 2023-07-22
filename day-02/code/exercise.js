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

}

/**
 * level 2
 */
let fn_level_2 = () => {
  // #1
  console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
  console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

  // #2
  console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

  // #3
  console.log(typeof '10');
  console.log('10' === 10);
  console.log(Number('10') === 10);

  // #4
  console.log(typeof '9.8');
  console.log(parseFloat('9.8') === 10);
  console.log(Math.ceil(parseFloat('9.8')) === 10);

  // #5
  console.log('python'.includes('on') && 'jargon'.includes('on'));

  // #6
  console.log('I hope this course is not full of jargon'.includes('jargon'));

  // #7
  console.log(Math.floor(Math.random() * 101));

  // #8
  console.log(Math.floor(Math.random() * 51) + 50);

  // #9
  console.log(Math.floor(Math.random() * 256));

  // #10
  console.log('JavaScript'[Math.floor(Math.random() * 10)]);

  // #11
  console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
  console.log();
  console.log(`
  1 1 1 1 1
  2 1 2 4 8
  3 1 3 9 27
  4 1 4 16 64
  5 1 5 25 125
  `);

  // #12
  console.log('You cannot end a sentence with because because because is a conjunction'.substr(31, 23));
  console.log('You cannot end a sentence with because because because is a conjunction'.substring(31, 54));
}

/**
 * level 3
 */
let fn_level_3 = () => {
  // #1
  let str_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
  let count_1 = str_1.match(/love/gi)

  console.log(`number of word love: ${Array.isArray(count_1) ? count_1.length : 0}`);

  // #2
  let str_2 = 'You cannot end a sentence with because because because is a conjunction';
  let count_2 = str_2.match(/because/gi)

  console.log(`number of word because: ${Array.isArray(count_2) ? count_2.length : 0}`);

  // #3
  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
  let str_3 = sentence.replace(/[^a-zA-Z ]+/g, '');
  ary_3 = str_3.split(' ');
  let obj_3 = []

  for (let i = 0; i < ary_3.length; i++) {
    if (obj_3.hasOwnProperty(ary_3[i])) {
      obj_3[ary_3[i]]++;
    } else {
      obj_3[ary_3[i]] = 1;
    }
  }
  console.log(obj_3);
  max_n = 1;
  max_txt = ''
  for (const [key, value] of Object.entries(obj_3)) {
    if (value > max_n) {
      max_n = value;
    }
  }
  for (const [key, value] of Object.entries(obj_3)) {
    if (value == max_n) {
      max_txt += ' ' + key;
    }
  }

  console.log(`the most frequent word: ${max_txt.trim().replace(/ /g, ' and ')}`);

  // #4
  let str_4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
  let ary_4 = str_4.match(/\d+/g);
  console.log(ary_4);
  console.log(`the total annual income of the person: ${(Number(ary_4[0]) + Number(ary_4[2])) * 12 + Number(ary_4[1])}`);

}

fn_level_1()
fn_level_2()
fn_level_3()
