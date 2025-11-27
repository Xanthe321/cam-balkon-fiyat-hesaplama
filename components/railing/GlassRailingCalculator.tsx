"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WidthInputs } from "@/components/calculator/WidthInputs";
import { GLASS_RAILING_HEIGHTS } from "@/lib/glass-railing-constants";
import { VAT_RATE } from "@/lib/constants";

export function GlassRailingCalculator() {
  const [widths, setWidths] = useState<string[]>([""]);
  const [selectedHeight, setSelectedHeight] = useState<string>("90");
  const [includeVat, setIncludeVat] = useState<boolean>(true);

  const addWidth = () => {
    setWidths([...widths, ""]);
  };

  const removeWidth = (index: number) => {
    if (widths.length > 1) {
      setWidths(widths.filter((_, i) => i !== index));
    }
  };

  const updateWidth = (index: number, value: string) => {
    const newWidths = [...widths];
    newWidths[index] = value;
    setWidths(newWidths);
  };

  const totalWidth = widths.reduce((sum, w) => {
    const num = parseFloat(w);
    return sum + (isNaN(num) ? 0 : num);
  }, 0);

  const selectedHeightData = GLASS_RAILING_HEIGHTS.find(
    (h) => h.value === selectedHeight
  );

  const totalWidthMeters = totalWidth / 100;
  const basePrice = selectedHeightData
    ? totalWidthMeters * selectedHeightData.pricePerMeter
    : 0;

  const totalPrice = includeVat ? basePrice : basePrice / (1 + VAT_RATE);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start">
      {/* Input Card */}
      <Card className="w-full md:max-w-md">
        <CardHeader>
          <CardTitle>Cam Korkuluk Hesaplama</CardTitle>
          <CardDescription>
            Genişlik ve yükseklik seçerek fiyat hesaplayın
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <WidthInputs
            widths={widths}
            totalWidth={totalWidth}
            onAddWidth={addWidth}
            onRemoveWidth={removeWidth}
            onUpdateWidth={updateWidth}
          />

          <div className="space-y-2">
            <Label htmlFor="glass-height">Yükseklik</Label>
            <Select value={selectedHeight} onValueChange={setSelectedHeight}>
              <SelectTrigger id="glass-height">
                <SelectValue placeholder="Yükseklik seçin" />
              </SelectTrigger>
              <SelectContent>
                {GLASS_RAILING_HEIGHTS.map((height) => (
                  <SelectItem key={height.value} value={height.value}>
                    {height.label} -{" "}
                    {height.pricePerMeter.toLocaleString("tr-TR")} ₺/m
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">
                Toplam Genişlik
              </p>
              <p className="text-2xl font-bold tabular-nums">
                {totalWidthMeters.toFixed(2)} m
              </p>
              <p className="text-xs text-muted-foreground">
                {totalWidth.toFixed(0)} cm
              </p>
            </div>

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
                  {totalWidthMeters.toFixed(2)} m ×{" "}
                  {selectedHeightData.pricePerMeter.toLocaleString("tr-TR")} ₺/m
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* VAT Info Card */}
      <Card className="w-full md:max-w-md">
        <CardHeader>
          <CardTitle>Fiyat Bilgisi</CardTitle>
          <CardDescription>KDV ve fiyat detayları</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="glassRailingVat"
              checked={includeVat}
              onCheckedChange={(checked) => setIncludeVat(checked === true)}
            />
            <Label htmlFor="glassRailingVat" className="cursor-pointer">
              KDV Dahil (%{(VAT_RATE * 100).toFixed(0)})
            </Label>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <p className="mb-2 text-sm font-medium">Bilgi</p>
            <p className="text-sm text-muted-foreground">
              Cam korkuluk fiyatları seçilen yüksekliğe göre metre başına
              hesaplanır. Toplam genişlik metreye çevrilerek fiyat ile çarpılır.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
