import {addSkills, addSkillsMap, nameToUpperCase, HumanType} from "./02";

let girls: Array<HumanType>

beforeEach(() => {
  girls = [
    {id: 1, name: "nat", skills: ["sitting"]}, // 0
    {id: 2, name: "kate", skills: ["cooking"]} // 1
  ];
})

// ADD SKILLS FOR
test('addSkillsFor', () => {
  addSkills(girls, "knitting");
  expect(girls[0].skills[1]).toBe("knitting");
});
// ADD SKILLS MAP
test('addSkillsMap', () => {
  addSkillsMap(girls, "knitting");
  expect(girls[0].skills[1]).toBe("knitting");
});
// TO UPPERCASE
test("toUppercase", () => {
  nameToUpperCase(girls)
  expect(girls[0].name).toBe("NAT")
})