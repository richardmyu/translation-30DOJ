const fn_1 = () => {
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

const fn_2 = () => {
  // #1
  let score = Number.parseFloat(prompt("Enter a score(0-100):"));
  score = Number.isNaN(score) ? 0 : score;

  if (score <= 100 && score >= 80) {
    console.log('A');
  } else if (score < 80 && score >= 70) {
    console.log('B');
  } else if (score < 70 && score >= 60) {
    console.log('C');
  } else if (score < 60 && score >= 50) {
    console.log('D');
  } else {
    console.log('F');
  }

  // #2 case 1
  let month = prompt("Enter a month(January...):");
  month = month.toLowerCase();

  if (month === 'september' || month === 'october' || month === 'november') {
    console.log('Autumn');
  } else if (month === 'december' || month === 'january' || month === 'february') {
    console.log('Winter');
  } else if (month === 'march' || month === 'april' || month === 'may') {
    console.log('Spring');
  } else if (month === 'june' || month === 'july' || month === 'august') {
    console.log('Summer');
  } else {
    console.log('输入数据有误');
  }

  // #2 case 2
  switch (month) {
    case 'september':
    case 'october':
    case 'november':
      console.log('Autumn');
      break;
    case 'december':
    case 'january':
    case 'february':
      console.log('Winter');
      break;
    case 'march':
    case 'april':
    case 'may':
      console.log('Spring');
      break;
    case 'june':
    case 'july':
    case 'august':
      console.log('Summer');
      break;
  }

  //  #2 case 3
  let season_obj = {
    'autumn': ['september', 'october', 'november'],
    'winter': ['december', 'january', 'february'],
    'spring': ['march', 'april', 'may'],
    'summer': ['june', 'july', 'august'],
  }

  for (const [key, value] of Object.entries(season_obj)) {
    if (value.includes(month) || value.includes(month.toLowerCase())) {
      console.log(key.slice(0, 1).toUpperCase() + key.slice(1));
    }
  }

  // #3
  let wday = prompt("Enter a day of week(Saturday...):");
  wday = wday.toLowerCase();

  switch (wday) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log('working day');
      break;
    case 'saturday':
    case 'sunday':
      console.log('weekend');
      break;
  }
}

const fn_3 = () => {
  // #1
  let month = prompt("Enter a month(January...):");
  month = month ? month.toLowerCase() : '';

  switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      console.log('31 天');
      break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      console.log('30 天');
      break;
    case 'february':
      console.log('28 天');
  }

  // #2

  // let month_2 = prompt("Enter a month(January...):");
  // month_2 = month_2.toLowerCase();

  // 闰年处理
  if (month === 'february') {
    let year = Number(prompt("Enter a year(yyyy):"));

    if (Number.isNaN(year)) {
      console.log('输入年份有误');
      return;
    }

    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      console.log('29 天');
    } else {
      console.log('28 天');
    }

  } else {
    switch (month) {
      case 'january':
      case 'march':
      case 'may':
      case 'july':
      case 'august':
      case 'october':
      case 'december':
        console.log('31 天');
        break;
      case 'april':
      case 'june':
      case 'september':
      case 'november':
        console.log('30 天');
        break;
    }
  }
}

fn_1();
fn_2();
fn_3();
