declare module "color-hash" {
  declare type options = $Exact<{
    hash: (str: string) => number,
    lightness: number | Array<number>,
    saturation: number | Array<number>
  }>;

  declare class ColorHash {
    constructor(options: options): void;
    hsl(str: string): Array<number>;
    rgb(str: string): Array<number>;
    hex(str: string): string;
  }

  declare module.exports: Class<ColorHash>;
}
