// Q1. make a string out of an array
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(', and');
console.log(result);

// Q2. make an array out of a string
const fruitsa = 'strawberry, kiwi, banana, apple';
const a = fruitsa.split(',', 3);
console.log(a);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const b = array.reverse();
console.log(b);
console.log(array);

// Q4. make new array without the first two elements
const arraya = [1, 2, 3, 4, 5];
const c = arraya.slice(2,5); // 배열에서 원하는 부분만 가져옴, splice: 배열 자체를 바꿈
console.log(c);
console.log(arraya);

//console.clear();
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
const d = students.find((student) => student.score === 90); // callback 함수를 arrow function으로 전달해줌.
console.log(d);

// Q6. make an array of enrolled students
const e = students.filter((student) => student.enrolled);
console.log(e);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

const f = students.map((student) => student.score);
console.log(f);

// Q8. check if there is a student with the score lower than 50
const g = students.some((student) => student.score < 50);
console.log(g);

const g2 = !students.every((student) => student.score >= 50);
console.log(g2);

// Q9. compute students' average score
{
    const h = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(h / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const result2 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
console.log(result2);

// Q11. do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const result3 = students
    .map((student) => student.score)
    .sort((a, b) => b - a) // descending order
    .join();
console.log(result3);