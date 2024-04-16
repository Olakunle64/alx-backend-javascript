export default function cleanSet(set, startString) {
  if (!startString) return [].join('-');

  const suffixArray = [...set].filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length));

  return suffixArray.join('-');
}
