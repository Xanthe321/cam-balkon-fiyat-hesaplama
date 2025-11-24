"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PriceList } from "./PriceList";
import { PriceCalculation } from "./PriceCalculation";
import { VAT_RATE } from "@/lib/constants";

interface PriceCardProps {
  squareMeters: number;
  hasLeverSystem: boolean;
  includeVat: boolean;
  onVatChange: (checked: boolean) => void;
}

export function PriceCard({
  squareMeters,
  hasLeverSystem,
  includeVat,
  onVatChange,
}: PriceCardProps) {
  return (
    <Card className="w-full md:max-w-md">
      <CardHeader>
        <CardTitle>Fiyat Hesaplama</CardTitle>
        <CardDescription>Metrekare başına fiyatlar (₺/m²)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <PriceList />
        <PriceCalculation
          squareMeters={squareMeters}
          hasLeverSystem={hasLeverSystem}
          includeVat={includeVat}
        />

        {/* VAT Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="vatCheckbox"
            checked={includeVat}
            onCheckedChange={(checked) => onVatChange(checked === true)}
          />
          <Label htmlFor="vatCheckbox" className="cursor-pointer">
            KDV Dahil (%{(VAT_RATE * 100).toFixed(0)})
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}
