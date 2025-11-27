"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PIPE_RAILING_HEIGHTS } from "@/lib/pipe-railing-constants";

interface HeightSelectorProps {
  selectedHeight: string;
  onHeightChange: (value: string) => void;
}

export function HeightSelector({
  selectedHeight,
  onHeightChange,
}: HeightSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="height">Yükseklik</Label>
      <Select value={selectedHeight} onValueChange={onHeightChange}>
        <SelectTrigger id="height">
          <SelectValue placeholder="Yükseklik seçin" />
        </SelectTrigger>
        <SelectContent>
          {PIPE_RAILING_HEIGHTS.map((height) => (
            <SelectItem key={height.value} value={height.value}>
              {height.label} - {height.pricePerMeter.toLocaleString("tr-TR")} ₺/m
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
