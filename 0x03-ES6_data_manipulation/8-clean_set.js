export default function cleanSet(set, startString) {
  const suffixArray = [];
  if (startString) {
    set.forEach((element) => {
      if (element.startsWith(startString)) {
        suffixArray.push(element.slice(startString.length, element.length + 1));
      }
    });
  }
  return suffixArray.join('-');
}
