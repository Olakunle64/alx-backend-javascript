export default function iterateThroughObject(reportWithIterator) {
    let separatedNames = "";
    let i = 0
    while (i < reportWithIterator.length) {
        separatedNames += reportWithIterator[i];
        if (i < reportWithIterator.length - 1) {
            separatedNames += " | ";
        }
        i++;
    }
    return separatedNames;
}