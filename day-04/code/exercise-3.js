/**
 * level 3
 */
const fn_level_3 = () => {
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

fn_level_3();
