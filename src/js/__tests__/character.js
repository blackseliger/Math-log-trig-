import Daemon from '../Daemon';
import Magician from '../Magican';


describe('check work class character', () => {
  test('class daemon return 18', () => {
    const daemon = new Daemon(20, 1);
    const expected = 20;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class daemon return 18', () => {
    const daemon = new Daemon(20, 2);
    const expected = 18;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class daemon return 18', () => {
    const daemon = new Daemon(20, 3);
    const expected = 16;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class daemon return 18', () => {
    const daemon = new Daemon(20, 4);
    const expected = 14;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class daemon return 18', () => {
    const daemon = new Daemon(20, 5);
    const expected = 12;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class daemon return 13 if stoned', () => {
    const daemon = new Daemon(20, 2, true);
    const expected = 13;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class daemon return 8 if stoned', () => {
    const daemon = new Daemon(20, 3, true);
    const expected = 8;
    const received = daemon.attack;
    expect(received).toEqual(expected);
  });
  test('class magician return 9', () => {
    const magician = new Magician(10, 2);
    const expected = 9;
    const received = magician.attack;
    expect(received).toEqual(expected);
  });
  test('class magician return 4 if stoned', () => {
    const magician = new Magician(10, 2, true);
    const expected = 4;
    const received = magician.attack;
    expect(received).toEqual(expected);
  });
});
