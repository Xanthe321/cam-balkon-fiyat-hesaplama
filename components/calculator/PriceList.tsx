import { PRICES_PER_SQM } from "@/lib/constants";

export function PriceList() {
  return (
    <div className="rounded-lg bg-muted p-4">
      <p className="mb-3 text-sm font-medium">Birim Fiyatlar</p>
      <div className="space-y-2 text-sm">
        {Object.values(PRICES_PER_SQM).map((item) => (
          <div key={item.name} className="flex justify-between">
            <span>{item.name}</span>
            <span className="font-medium">
              {item.price.toLocaleString("tr-TR")} ₺/m²
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
