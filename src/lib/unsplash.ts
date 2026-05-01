/**
 * Unsplash image URLs — IDs verified HTTP 200.
 * Swap for client-owned assets when available.
 */
export function unsplashUrl(photoId: string, width = 1200) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;
}

/** Curated for HVAC / home / trades — use across marquee, grids, and sections */
export const STOCK_PHOTOS = [
  {
    id: "photo-1621905251918-48416bd8575a",
    alt: "HVAC technician servicing equipment",
  },
  {
    id: "photo-1616046229478-9901c5536a45",
    alt: "Climate control and mechanical detail",
  },
  {
    id: "photo-1600585154340-be6161a56a0c",
    alt: "Modern residential home exterior",
  },
  {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Technician reviewing indoor HVAC unit",
  },
  {
    id: "photo-1503387762-592deb58ef4e",
    alt: "Architectural planning and blueprints",
  },
  {
    id: "photo-1600047509358-9dc75507daeb",
    alt: "Bright contemporary living space",
  },
  {
    id: "photo-1581092160562-40aa08e78837",
    alt: "Tools and professional workmanship",
  },
  {
    id: "photo-1558618666-fcd25c85cd64",
    alt: "Ceiling fan and comfortable room",
  },
  {
    id: "photo-1484154218962-a197022b5858",
    alt: "Suburban family home",
  },
  {
    id: "photo-1621905252507-b35492cc74b4",
    alt: "Smart thermostat on wall",
  },
  {
    id: "photo-1600607687939-ce8a6c25118c",
    alt: "Sunlit modern interior",
  },
  {
    id: "photo-1564013799919-ab600027ffc6",
    alt: "Beautiful home facade at golden hour",
  },
  {
    id: "photo-1600596542815-ffad4c1539a9",
    alt: "Modern open-plan living area",
  },
  {
    id: "photo-1600585154363-67eb9e2e2099",
    alt: "Minimal living room with large windows",
  },
  {
    id: "photo-1556912173-3bb406ef7e77",
    alt: "Kitchen and home interior",
  },
  {
    id: "photo-1502672260266-1c1ef2d93688",
    alt: "Apartment living space with sofa",
  },
] as const;
