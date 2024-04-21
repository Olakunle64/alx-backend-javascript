interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
}
interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits  {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits  {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    }
}

let subject1: MajorCredits = {credits: 5, brand: "MajorCredits"}
let subject2: MajorCredits = {credits: 6, brand: "MajorCredits"}
console.log(sumMajorCredits(subject1, subject2))
let subject11: MinorCredits = {credits: 3, brand: "MinorCredits"}
const subject22: MinorCredits = {credits: 6, brand: "MinorCredits"}
console.log(sumMinorCredits(subject11, subject22))
