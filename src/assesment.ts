// Problem 1: Description: Create a function that takes a string and an optional boolean.
function formatString(input: string, toUpper?: boolean = true): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

const test1 = formatString("Hello"); // Output: "HELLO"
const test2 = formatString("Hello", true); // Output: "HELLO"
const test3 = formatString("Hello", false); // Output: "hello"
// console.log({ test1, test2, test3 });

// Problem 2:
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterBooks = filterByRating(books);
// console.log(filterBooks);

