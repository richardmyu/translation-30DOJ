/**
 * level 2
 */
const fn_level_2 = () => {
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

fn_level_2();
