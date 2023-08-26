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
};

fn_level_3();
