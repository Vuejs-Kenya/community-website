export default function readingTime(content: any) {
  let minutes = 0;
  const contentAsString = JSON.stringify(content);
  const words = contentAsString.split(" ").length;
  const wordsPerMinute = 200;

  minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}
