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
import { WidthInputs } from "@/components/calculator/WidthInputs";
import { HeightSelector } from "./HeightSelector";
import { PipeRailingResult } from "./PipeRailingResult";
import { VAT_RATE } from "@/lib/constants";

export function PipeRailingCalculator() {
  const [widths, setWidths] = useState<string[]>([""]);
  const [selectedHeight, setSelectedHeight] = useState<string>("30");
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

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start">
      {/* Input Card */}
      <Card className="w-full md:max-w-md">
        <CardHeader>
          <CardTitle>Boru Korkuluk Hesaplama</CardTitle>
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

          <HeightSelector
            selectedHeight={selectedHeight}
            onHeightChange={setSelectedHeight}
          />

          <PipeRailingResult
            totalWidthCm={totalWidth}
            selectedHeight={selectedHeight}
            includeVat={includeVat}
          />
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
              id="pipeVatCheckbox"
              checked={includeVat}
              onCheckedChange={(checked) => setIncludeVat(checked === true)}
            />
            <Label htmlFor="pipeVatCheckbox" className="cursor-pointer">
              KDV Dahil (%{(VAT_RATE * 100).toFixed(0)})
            </Label>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <p className="mb-2 text-sm font-medium">Bilgi</p>
            <p className="text-sm text-muted-foreground">
              Fiyatlar seçilen yüksekliğe göre metre başına hesaplanır. Toplam
              genişlik metreye çevrilerek fiyat ile çarpılır.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
