function filter_list(list) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== 'string') {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

console.log(filter_list(['ava', 1, 2, 'a', 'b']));
