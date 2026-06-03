const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter

const newNums = myNums.filter((num) => num > 4);

// this will print empty array coz we are using {} but we are not returning anything

const newNums0 = myNums.filter((num) => {
  num > 4;
});

const newNums1 = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums);
console.log(newNums0);
console.log(newNums1);

// we can do the same above thing using forEach

const newNum2 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNum2.push(num);
  }
});

console.log(newNum2);







const books = [
  {
    title: "The Hobbit",
    genre: "Fantasy",
    edition: "3rd",
    publishYear: 1937,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    edition: "2nd",
    publishYear: 1960,
  },
  {
    title: "1984",
    genre: "Dystopian",
    edition: "1st",
    publishYear: 1949,
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    edition: "5th",
    publishYear: 1925,
  },
  {
    title: "The Alchemist",
    genre: "Adventure",
    edition: "4th",
    publishYear: 1988,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    edition: "7th",
    publishYear: 1997,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    edition: "2nd",
    publishYear: 2003,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    edition: "6th",
    publishYear: 1813,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    edition: "3rd",
    publishYear: 1951,
  },
  {
    title: "Dune",
    genre: "Science Fiction",
    edition: "1st",
    publishYear: 1965,
  },
];

const book_after_1981 = books.filter( (book) => book.publishYear > 1981 )

const fiction_book = books.filter( (book) => book.genre == "Fiction" )

console.log(book_after_1981);
console.log(fiction_book);


