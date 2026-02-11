// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy2 = [...items];

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };


const arr = Array.prototype.slice.call(arrLike);

const arr2 = Array.from(arrLike);

[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

[1, 2, 3].map((x) => x + 1);


[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
