import { slugify } from './slugify';
export function keyifier(text: string, index?: number) {
  const slugified = slugify(text);
  const indexifier = index ? `_${index}` : '';
  return slugified + indexifier;
}
