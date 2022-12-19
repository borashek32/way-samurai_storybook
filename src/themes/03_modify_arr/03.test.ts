import {StudentType} from "../02_types/02";
import {addSkill, city} from "./03";
import {beActiveOrNot} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        name: "Nat",
        age: 34,
        isActive: false,
        address: {
            city: {
                country: "Turkey",
                cityName: "Alanya",
            },
            street: "260 sokak"
        },
        technologies: [
            {
                id: 1,
                title: "html"
            },
            {
                id: 2,
                title: "css"
            },
            {
                id: 3,
                title: "js"
            },
            {
                id: 4,
                title: "React"
            }
        ]
    };
})

test("student should have a skill Vue", () => {
    expect(student.technologies.length).toBe(4);

    addSkill(student, "Vue");

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("Vue");
    expect(student.technologies[4].id).toBeDefined();
});

test("student should be active", () => {
    beActiveOrNot(student);
    expect(student.isActive).toBe(true);
});

test("student should live in Moscow", () => {
    expect(student.address.city.cityName).toBe("Alanya");
    city(student, "Moscow");
    expect(student.address.city.cityName).toBe("Moscow");
});