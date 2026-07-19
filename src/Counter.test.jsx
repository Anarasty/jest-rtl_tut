import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import { render } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
});
