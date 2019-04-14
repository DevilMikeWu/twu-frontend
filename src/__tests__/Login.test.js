import React from "react";
import ReactDOM from "react-dom";
import { checkAccountValidation, checkPasswordValidation } from "./../utils/login";

test('Account justin should be true', () => {
  expect(checkAccountValidation('justin')).toBe(true);
});

test('Account justin666 should be true', () => {
  expect(checkAccountValidation('justin666')).toBe(true);
});

test('Account JUSTIN666 should be true', () => {
  expect(checkAccountValidation('JUSTIN666')).toBe(true);
});

test('Account Ju6sTi6n should be true', () => {
  expect(checkAccountValidation('Ju6sTi6n')).toBe(true);
});

test('Account justin 666 should be false', () => {
  expect(checkAccountValidation('justin 666')).toBe(false);
});

test('Account justin_66 should be false', () => {
  expect(checkAccountValidation('justin_66')).toBe(false);
});

test('Account justin$%^* should be false', () => {
  expect(checkAccountValidation('justin$%^*')).toBe(false);
});

test('Account just$in&666* should be false', () => {
  expect(checkAccountValidation('just$in&666*')).toBe(false);
});

test('Account 123321123321 should be false', () => {
  expect(checkAccountValidation('123321123321')).toBe(false);
});

test('Account 1justin23 should be false', () => {
  expect(checkAccountValidation('1justin23')).toBe(false);
});

test('Account @#$%^&* should be false', () => {
  expect(checkAccountValidation('@#$%^&*')).toBe(false);
});

test('Account j should be false', () => {
  expect(checkAccountValidation('j')).toBe(false);
});

test('Account justin123123123123123123 should be false', () => {
  expect(checkAccountValidation('justin123123123123123123')).toBe(false);
});

test('Account ["justin"] should be false', () => {
  expect(checkAccountValidation(["justin"])).toBe(false);
});



test('Account abc$d1*234 should be true', () => {
  expect(checkPasswordValidation('abc$d1*234')).toBe(true);
});

test('Account aN1@z0wCg2D should be true', () => {
  expect(checkPasswordValidation('aN1@z0wCg2D')).toBe(true);
});

test('Account ABC1@A7BC2D should be true', () => {
  expect(checkPasswordValidation('ABC1@A7BC2D')).toBe(true);
});

test('Account abcd1234&*@# should be true', () => {
  expect(checkPasswordValidation('abcd1234&*@#')).toBe(true);
});

test('Account ABCD1234&*@# should be true', () => {
  expect(checkPasswordValidation('ABCD1234&*@#')).toBe(true);
});

test('Account a2b3*c@d14&*ke@# should be true', () => {
  expect(checkPasswordValidation('a2b3*c@d14&*ke@#')).toBe(true);
});

test('Account abcdabcd, should be false', () => {
  expect(checkPasswordValidation('abcdabcd,')).toBe(false);
});

test('Account abCdABcd, should be false', () => {
  expect(checkPasswordValidation('abCdABcd,')).toBe(false);
});

test('Account 12345678, should be false', () => {
  expect(checkPasswordValidation('12345678,')).toBe(false);
});

test('Account !@#$%^&*, should be false', () => {
  expect(checkPasswordValidation('!@#$%^&*,')).toBe(false);
});

test('Account a2b3*9, should be false', () => {
  expect(checkPasswordValidation('a2b3*9,')).toBe(false);
});

test('Account a2B3*9 should be false', () => {
  expect(checkPasswordValidation('a2B3*9')).toBe(false);
});

test('Account a2b3as1ok23 *9, should be false', () => {
  expect(checkPasswordValidation('a2b3as1ok23 *9')).toBe(false);
});

test('Account a2b3as1ok238ui123j^&*1HLJF2323*9, should be false', () => {
  expect(checkPasswordValidation('a2b3as1ok238ui123j^&*1HLJF2323*9')).toBe(false);
});

test('Account {name: "aN1@z0wCg2D"}, should be false', () => {
  expect(checkPasswordValidation({name: "aN1@z0wCg2D"})).toBe(false);
});
