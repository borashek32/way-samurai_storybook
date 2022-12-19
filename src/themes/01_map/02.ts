export type HumanType = {
  id: number
  name: string
  skills: Array<string>
}
export type PplType = Array<HumanType>

const ppl: PplType = [
  {id: 1, name: "Polina", skills: ["css", "less", "sass"]},
  {id: 2, name: "Polina", skills: ["css", "less", "sass", "html"]},
  {id: 3, name: "Polina", skills: ["css", "less", "sass", "html"]},
  {id: 4, name: "Polina", skills: ["css", "less", "sass", "php", "react"]},
  {id: 5, name: "Polina", skills: ["css", "less", "sass", "php", "react"]},
  {id: 6, name: "Polina", skills: ["css", "less", "sass", "vue", "angular"]},
]

export const addSkills = (arr: Array<HumanType>, newSkill: string) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].skills.push(newSkill);
  }
};
export const addSkillsMap = (arr: Array<HumanType>, newSk: string) => {
  arr.map(human => human.skills.push(newSk));
}
export const nameToUpperCase = (arr: Array<HumanType>) => {
  arr.map(h => h.name.toUpperCase());
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i].name.toUpperCase();
  // }
}