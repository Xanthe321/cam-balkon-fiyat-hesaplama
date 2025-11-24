"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LengthInputProps {
  length: string;
  onLengthChange: (value: string) => void;
}

export function LengthInput({ length, onLengthChange }: LengthInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="length">Uzunluk (cm)</Label>
      <Input
        id="length"
        type="number"
        placeholder="Uzunluk (min. 160)"
        value={length}
        onChange={(e) => onLengthChange(e.target.value)}
        step="0.01"
        min="160"
      />
    </div>
  );
}
