"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { LEVER_SYSTEM_PRICE } from "@/lib/constants";

interface LeverSystemCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function LeverSystemCheckbox({
  checked,
  onCheckedChange,
}: LeverSystemCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="leverSystem"
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
      />
      <Label htmlFor="leverSystem" className="cursor-pointer">
        Kol Sistemi (+{LEVER_SYSTEM_PRICE.toLocaleString("tr-TR")} ₺)
      </Label>
    </div>
  );
}
