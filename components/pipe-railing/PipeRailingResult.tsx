import { PIPE_RAILING_HEIGHTS } from "@/lib/pipe-railing-constants";

interface PipeRailingResultProps {
  totalWidthCm: number;
  selectedHeight: string;
  includeVat: boolean;
}

export function PipeRailingResult({
  totalWidthCm,
  selectedHeight,
  includeVat,
}: PipeRailingResultProps) {
  const selectedHeightData = PIPE_RAILING_HEIGHTS.find(
    (h) => h.value === selectedHeight
  );

  const totalWidthMeters = totalWidthCm / 100;
  const basePrice = selectedHeightData
    ? totalWidthMeters * selectedHeightData.pricePerMeter
    : 0;

  // Apply VAT logic: if not included, divide by 1.20
  const totalPrice = includeVat ? basePrice : basePrice / 1.20;

  return (
    <div className="space-y-4">
      {/* Total Width Display */}
      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm font-medium text-muted-foreground">Toplam Genişlik</p>
        <p className="text-2xl font-bold tabular-nums">
          {totalWidthMeters.toFixed(2)} m
        </p>
        <p className="text-xs text-muted-foreground">{totalWidthCm.toFixed(0)} cm</p>
      </div>

      {/* Price Display */}
      <div className="rounded-lg bg-primary p-4 text-center text-primary-foreground">
        <p className="text-sm font-medium">
          Toplam Fiyat
          {!includeVat && <span className="ml-1 text-xs">(KDV Hariç)</span>}
        </p>
        <p className="text-3xl font-bold tabular-nums">
          {totalPrice.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          ₺
        </p>
        {selectedHeightData && totalWidthMeters > 0 && (
          <p className="mt-1 text-xs opacity-80">
            {totalWidthMeters.toFixed(2)} m × {selectedHeightData.pricePerMeter.toLocaleString("tr-TR")} ₺/m
          </p>
        )}
      </div>
    </div>
  );
}
