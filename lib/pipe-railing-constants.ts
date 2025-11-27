export const PIPE_RAILING_HEIGHTS = [
  { value: "30", label: "30 cm", pricePerMeter: 1800 },
  { value: "50", label: "50 cm", pricePerMeter: 2100 },
  { value: "100", label: "100 cm", pricePerMeter: 2500 },
];

export type PipeRailingHeight = (typeof PIPE_RAILING_HEIGHTS)[number];
