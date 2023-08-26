/**
 * level 1
 */
const fn_level_1 = () => {
  // #1
  let firstName = 'Mark';
  let lastName = 'Twin';
  let country = 'American';
  let city = 'Florida';
  let age = 41;
  let isMarried = true;
  let year = '1876';

  console.log(typeof firstName);
  console.log(typeof lastName);
  console.log(typeof country);
  console.log(typeof city);
  console.log(typeof age);
  console.log(typeof isMarried);
  console.log(typeof year);

  // #2
  console.log('10' == 10);
  console.log('10' === 10);

  // #3
  console.log(parseInt(9.8) == 10);

  // #4
  console.log(1 > 0);
  console.log(2 > 1);
  console.log(3 > 2);
  console.log(1 < 0);
  console.log(2 < 1);
  console.log(3 < 2);

  // #5
  console.log(4 > 3);     // true
  console.log(4 >= 3);    // true
  console.log(4 < 3);     // false
  console.log(4 <= 3);    // false
  console.log(4 == 4);    // true
  console.log(4 === 4);   // true
  console.log(4 != 4);    // false
  console.log(4 !== 4);   // false
  console.log(4 != '4');  // false
  console.log(4 == '4');  // true
  console.log(4 === '4'); // false

  let leng_python = 'python'.length;
  let leng_jargon = 'jargon'.length;

  console.log(leng_jargon !== leng_python);

  // #6
  console.log(4 > 3 && 10 < 12);    // true
  console.log(4 > 3 && 10 > 12);    // false
  console.log(4 > 3 || 10 < 12);    // true
  console.log(4 > 3 || 10 > 12);    // true
  console.log(!(4 > 3));            // false
  console.log(!(4 < 3));            // true
  console.log(!(false));            // true
  console.log(!(4 > 3 && 10 < 12)); // false
  console.log(!(4 > 3 && 10 > 12)); // true
  console.log(!(4 === '4'));        // true
  console.log(!'python'.includes('on') && !'jargon'.includes('on')); // false

  // #7
  let now = new Date();

  console.log(now.getFullYear());
  console.log(now.getMonth() + 1);
  console.log(now.getDate());
  console.log(now.getDay() + 1);
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(now.getTime());
};

fn_level_1();
