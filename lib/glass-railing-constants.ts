export const GLASS_RAILING_HEIGHTS = [
  { value: "30", label: "30 cm", pricePerMeter: 3000 },
  { value: "50", label: "50 cm", pricePerMeter: 3200 },
  { value: "100", label: "100 cm", pricePerMeter: 4000 },
];

export type GlassRailingHeight = (typeof GLASS_RAILING_HEIGHTS)[number];
