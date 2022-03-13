const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const copyToClipboard = (text) => navigator.clipboard.writeText && navigator.clipboard.writeText(text);

const getUnique = (arr) => [...new Set(arr)];
console.log(getUnique([1, 1, 2, 3, 3, 4, 4, 5, 5]));

const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isDarkMode());

const scrollToTop = (element) => element.scrollIntoView({
  behavior: "smooth",
  block: "start"
});
const scrollToBottom = (element) => element.scrollIntoView({
  behavior: "smooth",
  block: "end"
});

const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;