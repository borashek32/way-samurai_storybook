import {ManType} from "./05";

// test("should return a greeting", () => {
//     const greetedStudents = ppl.map(man => greeting(man))
//
//     expect(greetedStudents[0]).toBe("Hello, our great student, Igor!")
// });

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Masha Zueva", age: 23},
        {name: "Kolya Zuev", age: 60},
        {name: "Vera Zueva", age: 28}
    ]
});

test("should get array of greeting message", () => {
    const messages = people.map(man => `Hello, our great student, ${man.name.split(" ")[0]}!`);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello, our great student, Masha!");
});