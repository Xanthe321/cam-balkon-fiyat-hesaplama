"use client";

import { useState } from "react";
import { CalculatorCard, PriceCard } from "@/components/calculator";

export default function Home() {
  const [widths, setWidths] = useState<string[]>([""]);
  const [length, setLength] = useState<string>("");
  const [hasLeverSystem, setHasLeverSystem] = useState<boolean>(false);
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

  const calculateSquareMeters = () => {
    const lengthCm = parseFloat(length);
    if (isNaN(lengthCm) || totalWidth === 0) return 0;
    return (totalWidth * lengthCm) / 10000;
  };

  const squareMeters = calculateSquareMeters();

  return (
    <div className="min-h-screen bg-zinc-50 p-4 font-sans dark:bg-black md:flex md:items-center md:justify-center">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:flex-row md:items-start">
        <CalculatorCard
          widths={widths}
          length={length}
          totalWidth={totalWidth}
          squareMeters={squareMeters}
          hasLeverSystem={hasLeverSystem}
          onAddWidth={addWidth}
          onRemoveWidth={removeWidth}
          onUpdateWidth={updateWidth}
          onLengthChange={setLength}
          onLeverSystemChange={setHasLeverSystem}
        />

        <PriceCard
          squareMeters={squareMeters}
          hasLeverSystem={hasLeverSystem}
          includeVat={includeVat}
          onVatChange={setIncludeVat}
        />
      </div>
    </div>
  );
}
