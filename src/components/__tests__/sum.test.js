import { sum } from "../sum";

test("SUm function", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
