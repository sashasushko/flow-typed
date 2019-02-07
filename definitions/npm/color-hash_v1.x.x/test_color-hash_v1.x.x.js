import ColorHash from "color-hash";
import { describe, it } from "flow-typed-test";

describe("color-hash", () => {
  describe("check options", () => {
    it("pass custom hash function", () => {
      new ColorHash({ hash: (str: string) => number });

      // $ExpectError
      new ColorHash({ hash: () => null });

      // $ExpectError
      new ColorHash({ hash: true });

      // $ExpectError
      new ColorHash({ hash: null });
    });

    it("pass lightness", () => {
      new ColorHash({ lightness: 0.5 });
      new ColorHash({ lightness: [0.35, 0.5, 0.65] });

      // $ExpectError
      new ColorHash({ lightness: "0.5" });

      // $ExpectError
      new ColorHash({ lightness: null });
    });

    it("pass saturation", () => {
      new ColorHash({ saturation: 0.5 });
      new ColorHash({ saturation: [0.35, 0.5, 0.65] });

      // $ExpectError
      new ColorHash({ saturation: "0.5" });

      // $ExpectError
      new ColorHash({ saturation: null });
    });
  });

  describe("check methods", () => {
    const colorHash = new ColorHash();

    it("return color in hsl", () => {
      colorHash.hsl("Hello, world");

      // $ExpectError
      colorHash.hsl();
    });

    it("return color in rgb", () => {
      colorHash.hsl("Hello, world");

      // $ExpectError
      colorHash.hsl();
    });

    it("return color in hex", () => {
      colorHash.hsl("Hello, world");

      // $ExpectError
      colorHash.hsl();
    });
  });
});
