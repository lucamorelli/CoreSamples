// Generated by typings
// Source: node_modules/aurelia-path/dist/commonjs/aurelia-path.d.ts
declare module 'aurelia-path' {
  
  /**
  * Calculates a path relative to a file.
  *
  * @param name The relative path.
  * @param file The file path.
  * @return The calculated path.
  */
  export function relativeToFile(name: string, file: string): string;
  
  /**
  * Joins two paths.
  *
  * @param path1 The first path.
  * @param path2 The second path.
  * @return The joined path.
  */
  export function join(path1: string, path2: string): string;
  
  /**
  * Generate a query string from an object.
  *
  * @param params Object containing the keys and values to be used.
  * @returns The generated query string, excluding leading '?'.
  */
  export function buildQueryString(params: Object): string;
  
  /**
  * Parse a query string.
  *
  * @param queryString The query string to parse.
  * @returns Object with keys and values mapped from the query string.
  */
  export function parseQueryString(queryString: string): Object;
}