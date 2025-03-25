export function convertStringDashToSpace(str: string): string {
  return str.replace(/-/g, ' ');
}

export function convertStringSpaceToDash(str: string): string {
  return str.replace(/ /g, '-');
}
