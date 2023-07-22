const fn_1 = () => {
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
}

const fn_2 = () => {
  // #1
  let tri_base = Number.parseFloat(prompt('Enter base:'));
  let tri_height = Number.parseFloat(prompt('Enter height:'));
  tri_base = Number.isNaN(tri_base) ? 0 : tri_base;
  tri_height = Number.isNaN(tri_height) ? 0 : tri_height;

  if (tri_base && tri_height) {
    console.log(`三角形底：${tri_base} 高：${tri_height}`);
    console.log(`三角形的面积是： ${0.5 * tri_base * tri_height}`);
  } else {
    console.log('数据缺失');
  }

  // #2
  let tri_a = Number.parseFloat(prompt('Enter side a of the triangle:'));
  let tri_b = Number.parseFloat(prompt('Enter side b of the triangle:'));
  let tri_c = Number.parseFloat(prompt('Enter side c of the triangle:'));
  tri_a = Number.isNaN(tri_a) ? 0 : tri_a;
  tri_b = Number.isNaN(tri_b) ? 0 : tri_b;
  tri_c = Number.isNaN(tri_c) ? 0 : tri_c;

  if (tri_a && tri_b && tri_c) {
    console.log(`三角形的三边长：${tri_a} ${tri_b} ${tri_c}`);
    console.log(`三角形的周长是： ${tri_a + tri_b + tri_c}`);
  } else {
    console.log('数据缺失');
  }

  // #3
  let rect_w = Number.parseFloat(prompt('Enter width of the rectangle:'));
  let rect_h = Number.parseFloat(prompt('Enter height of the rectangle:'));
  rect_w = Number.isNaN(rect_w) ? 0 : rect_w;
  rect_h = Number.isNaN(rect_h) ? 0 : rect_h;

  if (rect_w && rect_h) {
    console.log(`矩形的 长：${rect_w} 宽：${rect_h}`);
    console.log(`矩形的周长是： ${2 * (rect_w + rect_h)}`);
  } else {
    console.log('数据缺失');
  }

  // #4
  let radius = Number.parseFloat(prompt('Enter radius of the cirlce:'));
  radius = Number.isNaN(radius) ? 0 : radius;
  const PI = 3.14;

  if (radius) {
    console.log(`圆的半径是： ${radius}`);
    console.log(`圆的面积是： ${PI * radius * radius}`);
    console.log(`圆的周长是： ${2 * PI * radius}`);
  } else {
    console.log('数据缺失');
  }

  // #5
  let x;
  let slope_5 = 2;
  let y = slope_5 * x - 2;
  console.log(`y = 2 * x - 2 的斜率是：${slope_5}`);
  console.log(`y = 2 * x - 2 的 x 轴截距是：${(0 + 2) / slope_5}`);
  console.log(`y = 2 * x - 2 的 y 轴截距是：${slope_5 * 0 - 2}`);

  // #6
  let slope_6 = (10 - 2) / (6 - 2);
  console.log(`点 (2, 2) 和 (6, 10) 之间的斜率: ${slope_6}`)

  // #7
  if (slope_5 > slope_6) {
    console.log('问题 5 的斜率 大于 问题 6 的斜率');
  } else if (slope_5 < slope_6) {
    console.log('问题 5 的斜率 小于 问题 6 的斜率');
  } else {
    console.log('问题 5 的斜率 等于 问题 6 的斜率');
  }

  // #8
  let x_8 = 0;
  let y_8 = x_8 * x_8 + 6 * x_8 + 9;
  console.log(`x = ${x_8} y = ${y_8}`);

  x_8 = 4;
  y_8 = x_8 * x_8 + 6 * x_8 + 9;
  console.log(`x = ${x_8} y = ${y_8}`);

  x_8 = -10;
  y_8 = x_8 * x_8 + 6 * x_8 + 9;
  console.log(`x = ${x_8} y = ${y_8}`);

  x_8 = -3;
  y_8 = x_8 * x_8 + 6 * x_8 + 9;
  console.log(`x = ${x_8} y = ${y_8}`);

  // #9
  let hours = Number.parseFloat(prompt('Enter hours:'));
  let rate_per_hour = Number.parseFloat(prompt('Enter rate per hour:'));
  hours = Number.isNaN(hours) ? 0 : hours;
  rate_per_hour = Number.isNaN(rate_per_hour) ? 0 : rate_per_hour;

  if (hours && rate_per_hour) {
    console.log(`工时：${hours} 时薪：${rate_per_hour}`);
    console.log(`日薪是： ${hours * rate_per_hour}`);
  } else {
    console.log('数据缺失');
  }

  // #10
  let name = 'MarkTwin';
  let leng_name = name.length;
  if (leng_name > 7) {
    console.log('your name is long');
  } else {
    console.log('your name is short');
  }

  // #11
  let firstName = 'Asabeneh';
  let lastName = 'Yetayeh';
  if (firstName.length >= lastName.length) {
    console.log('firstName is longer then lastName');
  } else {
    console.log('lastName is shorter then firstName');
  }

  // #12
  let myAge = 250;
  let yourAge = 25;
  if (myAge > yourAge) {
    console.log(`我是 ${myAge} 岁，比你大。`);
  } else if (myAge < yourAge) {
    console.log(`我是 ${myAge} 岁，比你小。`);
  } else {
    console.log(`我是 ${myAge} 岁，跟你一样大小。`);
  }

  // #13
  let birth_year = Number.parseFloat(prompt('Enter birth year:'));
  birth_year = Number.isNaN(birth_year) ? 0 : birth_year;
  const CURRENT_YEAR = 2020;
  let birth_age = CURRENT_YEAR - birth_year;

  if (birth_age >= 18) {
    console.log(`你 ${birth_age} 岁，可以开车`);
  } else if (birth_age > 0) {
    console.log(`你 ${birth_age} 岁，要过 ${18 - birth_age} 年才能被允许开车`);
  } else {
    console.log('数据缺失');
  }

  // #14
  let n_live = Number.parseFloat(prompt('Enter number of years you live:'));
  n_live = Number.isNaN(n_live) ? 0 : n_live;
  const DAY_OF_YEAR = 365;
  const SECOND_OF_DAY = 24 * 60 * 60;

  if (n_live) {
    console.log(`你已经活了： ${n_live * DAY_OF_YEAR * SECOND_OF_DAY} 秒`);
  } else {
    console.log('数据缺失');
  }

  // #15
  let date = new Date();
  let year_15 = String(date.getFullYear());
  let month_15 = String(date.getMonth() + 1);
  let day_15 = String(date.getDate());
  let hour_15 = String(date.getHours());
  let minute_15 = String(date.getMinutes());

  month_15 = month_15.length === 2 ? month_15 : '0' + month_15;
  day_15 = day_15.length === 2 ? day_15 : '0' + day_15;
  hour_15 = hour_15.length === 2 ? hour_15 : '0' + hour_15;
  minute_15 = minute_15.length === 2 ? minute_15 : '0' + minute_15;
  let format_date_1 = `${year_15}-${month_15}-${day_15} ${hour_15}:${minute_15}`;
  let format_date_2 = `${day_15}-${month_15}-${year_15} ${hour_15}:${minute_15}`;
  let format_date_3 = `${day_15}/${month_15}/${year_15} ${hour_15}:${minute_15}`;

  console.log(format_date_1);
  console.log(format_date_2);
  console.log(format_date_3);

}

const fn_3 = () => {
  // #1
  // 解答同 fn_2 #15
}

fn_1()
fn_2()
