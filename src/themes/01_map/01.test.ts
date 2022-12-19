import {sum} from './01';
import {multiply} from './01';
import {splitIntoWords} from './01'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test("sum should be correct", () => {
    // test start data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    // action with data
    const result = sum(a, b);
    b = 100;
    const result1 = sum(b, c);

    // expected result
    expect(result).toBe(3);
    expect(result1).toBe(103);
});

test("multiply should be correct", () => {
    // test start data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    // action with data
    const result = multiply(a, b);
    const result1 = multiply(b, c);

    // expected result
    expect(result).toBe(2);
    expect(result1).toBe(6);
});

test("splitting into words should be correct", () => {
    const sent1 = "Hello my friends!";
    const sent2 = "Js - the best  programming language.";

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
});