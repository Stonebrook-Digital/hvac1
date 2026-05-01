/** Client assets in `/public` (paths from repo root). */

export const CONQUER_LOGO_SRC = "/crop-0-0-1080-1080-0-ConquerLOGO-HVACWhite.png";

/** Spaces → %20 for reliable `next/image` resolution */
const screen = (name: string) => encodeURI(`/${name}`);

export const LOCAL_PHOTOS = [
  {
    src: "/lance-asper-Pf3dOkgOWd8-unsplash.jpg",
    alt: "Downtown skyline at golden hour",
  },
  {
    src: "/prasopchok-lw2RgPJg9CI-unsplash.jpg",
    alt: "Industrial ventilation ducts on building exterior",
  },
  {
    src: "/kettenreaktion-l_Vn4HlFQVw-unsplash.jpg",
    alt: "Rooftop commercial HVAC equipment",
  },
  {
    src: screen("Screenshot from 2026-05-01 01-09-10.png"),
    alt: "HVAC tools and service work",
  },
  {
    src: screen("Screenshot from 2026-05-01 01-09-30.png"),
    alt: "HVAC manifold gauges and equipment",
  },
] as const;

/** Enough slides for smooth marquee loops */
export const MARQUEE_LOCAL_A = [
  ...LOCAL_PHOTOS,
  ...LOCAL_PHOTOS,
  ...LOCAL_PHOTOS,
  ...LOCAL_PHOTOS,
];
