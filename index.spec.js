const { isOverlap } = require(".");

describe("isOverlap fn", () => {
  test("should not overlap", () => {
    const newItem = { id: 5, x: 492, y: 166, width: 100, height: 100 };

    const existItems = [
      { id: 1, x: 381, y: 165, width: 100, height: 100 },
      { id: 2, x: 267, y: 165, width: 100, height: 100 },
      { id: 3, x: 381, y: 53, width: 100, height: 100 },
      { id: 4, x: 381, y: 276, width: 100, height: 100 },
    ];

    expect(isOverlap(existItems, newItem)).toBeFalsy();
  });

  test("should not overlap case same `x axis`", () => {
    const newItem = {
      id: 2,
      x: 325,
      y: 107,
      width: 100,
      height: 100,
    };
    const existItems = [{ id: 1, x: 325, y: 210, width: 100, height: 100 }];

    expect(isOverlap(existItems, newItem)).toBeFalsy();
  });

  test("should not overlap case `stack so many on x axis`", () => {
    const newItem = { id: 5, x: 419, y: 8, width: 65, height: 65 };

    const existItems = [
      { id: 1, x: 325, y: 210, width: 100, height: 100 },
      { id: 2, x: 420, y: 76, width: 100, height: 100 },
      { id: 3, x: 421, y: 288, width: 100, height: 100 },
      { id: 4, x: 421, y: 396, width: 39, height: 39 },
    ];

    expect(isOverlap(existItems, newItem)).toBeFalsy();
  });

  test("should not overlap case separate but no overlap", () => {
    const newItem = { id: 6, x: 96, y: 57, width: 100, height: 100 };

    const existItems = [
      { id: 1, x: 325, y: 210, width: 100, height: 100 },
      { id: 2, x: 922, y: 147, width: 100, height: 100 },
      { id: 3, x: 582, y: 86, width: 100, height: 100 },
      { id: 4, x: 60, y: 312, width: 100, height: 100 },
      { id: 5, x: 954, y: 314, width: 132, height: 132 },
    ];

    expect(isOverlap(existItems, newItem)).toBeFalsy();
  });

  test("overlap case 1", () => {
    const newItem = { id: 1, x: 325, y: 210, width: 100, height: 100 };

    const existItems = [{ id: 1, x: 322, y: 141, width: 100, height: 100 }];

    expect(isOverlap(existItems, newItem)).toBeTruthy();
  });

  test("overlap case 2", () => {
    const newItem = { id: 3, x: 393, y: 190, width: 106, height: 106 };
    const existItems = [
      { id: 1, x: 325, y: 210, width: 100, height: 100 },
      { id: 2, x: 288, y: 232, width: 61, height: 61 },
      { id: 3, x: 393, y: 190, width: 106, height: 106 },
    ];

    expect(isOverlap(existItems, newItem)).toBeTruthy();
  });

  test("overlap case 3 new-item overlap 2 previous item", () => {
    const newItem = { id: 7, x: 370, y: 173, width: 74, height: 74 };
    const existItems = [
      { id: 1, x: 295, y: 157, width: 100, height: 100 },
      { id: 2, x: 222, y: 175, width: 68, height: 68 },
      { id: 3, x: 295, y: 54, width: 100, height: 100 },
      { id: 4, x: 325, y: 210, width: 100, height: 100 },
      { id: 5, x: 956, y: 136, width: 100, height: 100 },
      { id: 6, x: 415, y: 166, width: 100, height: 100 },
    ];

    expect(isOverlap(existItems, newItem)).toBeTruthy();
  });

  test("overlap case 4 separate but 1 is overlap", () => {
    const newItem = { id: 5, x: 1079, y: 220, width: 56, height: 56 };
    const existItems = [
      { id: 1, x: 253, y: 113, width: 100, height: 100 },
      { id: 2, x: 573, y: 160, width: 100, height: 100 },
      { id: 3, x: 79, y: 267, width: 100, height: 100 },
      { id: 4, x: 1016, y: 208, width: 100, height: 100 },
    ];

    expect(isOverlap(existItems, newItem)).toBeTruthy();
  });
});
