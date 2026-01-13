export const LEVER_SYSTEM_PRICE = 1500;
export const VAT_RATE = 0.20; // 20% KDV

export const PRICES_PER_SQM = {
  singleGlass: { name: "Tek Cam Füme", price: 4500 },
  doubleGlass: { name: "Tek Cam Şeffaf", price: 4400 },
  insulatedGlass: { name: "Isıcamlı Füme", price: 5500 },
  transparent: { name: "Isıcamlı Şeffaf", price: 5400 },
};

export type GlassType = keyof typeof PRICES_PER_SQM;
