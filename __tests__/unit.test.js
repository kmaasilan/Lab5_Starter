// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber +1 (949) 582-8811', () => {
  expect(isPhoneNumber("+1 (949) 582-8811")).toBe(true);
});
test('isPhoneNumber +1 (959) 420-8811', () => {
  expect(isPhoneNumber("+1 (959) 420-8811")).toBe(true);
});
test('isPhoneNumber noooo', () => {
  expect(isPhoneNumber("noooo")).toBe(false);
});
test('isPhoneNumber hi', () => {
  expect(isPhoneNumber("hi")).toBe(false);
});

test('isEmail noooo@gmail.com', () => {
  expect(isEmail("noooo@gmail.com")).toBe(true);
});
test('isEmail hi@gmail.com', () => {
  expect(isEmail("hi@gmail.com")).toBe(true);
});
test('isEmail noooo', () => {
  expect(isEmail("noooo")).toBe(false);
});
test('isEmail hi', () => {
  expect(isEmail("hi")).toBe(false);
});

test('isStrongPassword trueeee', () => {
  expect(isStrongPassword("trueeee")).toBe(true);
});
test('isStrongPassword noooo', () => {
  expect(isStrongPassword("noooo")).toBe(true);
});
test('isStrongPassword no', () => {
  expect(isStrongPassword("no")).toBe(false);
});
test('isStrongPassword hi', () => {
  expect(isStrongPassword("hi")).toBe(false);
});

test('isDate 1/2/1234', () => {
  expect(isDate("1/2/1234")).toBe(true);
});
test('isDate 3/2/1987', () => {
  expect(isDate("3/2/1987")).toBe(true);
});
test('isDate 1', () => {
  expect(isDate("1")).toBe(false);
});
test('isDate 3rd of March, 1967', () => {
  expect(isDate("3rd of March, 1967")).toBe(false);
});

test('isHexColor 3rd of March, 1967', () => {
  expect(isHexColor("3rd of March, 1967")).toBe(false);
});
test('isHexColor 1', () => {
  expect(isHexColor("1")).toBe(false);
});
test('isHexColor #107a40', () => {
  expect(isHexColor("#107a40")).toBe(true);
});
test('isHexColor #12db9d', () => {
  expect(isHexColor("#12db9d")).toBe(true);
});


