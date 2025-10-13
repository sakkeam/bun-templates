import { expect, test } from "vitest";

test("not not true is true", () => {
	expect(!!true).toBe(true);
});
