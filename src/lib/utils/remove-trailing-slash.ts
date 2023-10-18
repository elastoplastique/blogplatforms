export function removeTrailing(text: string, char = '/') {
  if (text.endsWith(char)) {
    return text.slice(0, -1);
  }
  return text;
}
