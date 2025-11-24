"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WidthInputs } from "./WidthInputs";
import { LengthInput } from "./LengthInput";
import { LeverSystemCheckbox } from "./LeverSystemCheckbox";
import { AreaResult } from "./AreaResult";

interface CalculatorCardProps {
  widths: string[];
  length: string;
  totalWidth: number;
  squareMeters: number;
  hasLeverSystem: boolean;
  onAddWidth: () => void;
  onRemoveWidth: (index: number) => void;
  onUpdateWidth: (index: number, value: string) => void;
  onLengthChange: (value: string) => void;
  onLeverSystemChange: (checked: boolean) => void;
}

export function CalculatorCard({
  widths,
  length,
  totalWidth,
  squareMeters,
  hasLeverSystem,
  onAddWidth,
  onRemoveWidth,
  onUpdateWidth,
  onLengthChange,
  onLeverSystemChange,
}: CalculatorCardProps) {
  const showBreakdown =
    widths.length > 1 && totalWidth > 0 && parseFloat(length) > 0;

  return (
    <Card className="w-full md:max-w-md">
      <CardHeader>
        <CardTitle>Cam Balkon Hesaplama</CardTitle>
        <CardDescription>
          Genişlik ve uzunluk değerlerini girerek metrekare hesaplayın
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <WidthInputs
          widths={widths}
          totalWidth={totalWidth}
          onAddWidth={onAddWidth}
          onRemoveWidth={onRemoveWidth}
          onUpdateWidth={onUpdateWidth}
        />

        <LengthInput length={length} onLengthChange={onLengthChange} />

        <LeverSystemCheckbox
          checked={hasLeverSystem}
          onCheckedChange={onLeverSystemChange}
        />

        <AreaResult
          squareMeters={squareMeters}
          totalWidth={totalWidth}
          length={length}
          showBreakdown={showBreakdown}
        />
      </CardContent>
    </Card>
  );
}
