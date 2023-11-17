/**
 * level 3
 */
import countries from "./countries.js"

const fn_level_3 = () => {
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

fn_level_3();
