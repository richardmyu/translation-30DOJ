/**
 * level 1
 */
import countries from "./countries.js"
import webTechs from "./web_techs.js"

const fn_level_2 = () => {
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


fn_level_2();
