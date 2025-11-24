import { PRICES_PER_SQM, LEVER_SYSTEM_PRICE, VAT_RATE } from "@/lib/constants";

interface PriceCalculationProps {
  squareMeters: number;
  hasLeverSystem: boolean;
  includeVat: boolean;
}

export function PriceCalculation({
  squareMeters,
  hasLeverSystem,
  includeVat,
}: PriceCalculationProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">
        Toplam Fiyatlar (
        <span className="tabular-nums">{squareMeters.toFixed(2)}</span> m²)
        {!includeVat && <span className="text-muted-foreground"> - KDV Hariç</span>}
      </p>
      <div className="space-y-2">
        {Object.values(PRICES_PER_SQM).map((item) => {
          const basePrice = squareMeters * item.price;
          const priceWithLever = hasLeverSystem
            ? basePrice + LEVER_SYSTEM_PRICE
            : basePrice;
          // If VAT is not included, remove 20% from the price
          const totalPrice = includeVat
            ? priceWithLever
            : priceWithLever / (1 + VAT_RATE);
          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-lg font-bold text-primary tabular-nums min-w-[120px] text-right">
                {totalPrice.toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                ₺
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
