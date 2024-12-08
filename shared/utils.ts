import * as fs from 'fs';

export function getFileByLinesSync(filePath: string): string[] {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n');
}

/**
 * Returned grid will be accessed (y, x) as y is the number of lines and x is the length of those lines; 0, 0 is top left of screen
 */
export function create2DGridFromLines(lines: string[], separator: string): string[][] {
  return lines.map((line) => line.split(separator));
}

/**
 *
 * Takes yxMap and returns an xyMap; requires a sqaure map as written
 */
export function invert2DGrid(yxMap: string[][]): string[][] {
  const xyMap: string[][] = [];
  for (let x = 0; x < yxMap[0].length; x++) {
    xyMap.push([]);
    for (let y = 0; y < yxMap.length; y++) {
      xyMap[x].push(yxMap[y][x]);
    }
  }

  return xyMap;
}

export function sumArray(numArray: number[]): number {
  return numArray.reduce((prev, curr) => prev + curr);
}

export function throwErrorOnAssertion(assertedValue: boolean, assertedCondition = ''): void {
  if (!assertedValue) {
    throw new Error(`Assertion failed: ${assertedCondition}`);
  }
}

export function parseIntUpToChar(stringToParse: string, characterToStopAt: string): number {
  if (characterToStopAt === '') {
    return parseInt(stringToParse);
  }
  const indexOfChar = stringToParse.indexOf(characterToStopAt);
  return parseInt(stringToParse.substring(0, indexOfChar));
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface ThreeDCoordinate {
  x: number;
  y: number;
  z: number;
}
