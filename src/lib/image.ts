export const IMAGE_WIDTHS = [384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

export function imageUrl(src: string, width: number): string {
  return `/image?url=${encodeURIComponent(src)}&w=${width}`;
}

export function imageSrcSet(src: string): string {
  return IMAGE_WIDTHS.map((width) => `${imageUrl(src, width)} ${width}w`).join(
    ", ",
  );
}
