"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

interface WidthInputsProps {
  widths: string[];
  totalWidth: number;
  onAddWidth: () => void;
  onRemoveWidth: (index: number) => void;
  onUpdateWidth: (index: number, value: string) => void;
}

export function WidthInputs({
  widths,
  totalWidth,
  onAddWidth,
  onRemoveWidth,
  onUpdateWidth,
}: WidthInputsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>Genişlik (cm)</Label>
        <Button variant="outline" size="sm" onClick={onAddWidth}>
          <Plus className="mr-1 h-4 w-4" />
          Genişlik Ekle
        </Button>
      </div>
      <div className="space-y-2">
        {widths.map((width, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              type="number"
              placeholder={`Genişlik ${index + 1}`}
              value={width}
              onChange={(e) => onUpdateWidth(index, e.target.value)}
              step="0.01"
              min="0"
            />
            {widths.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemoveWidth(index)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
      <p
        className={`text-sm text-muted-foreground h-5 ${
          widths.length > 1 ? "visible" : "invisible"
        }`}
      >
        Toplam Genişlik: {totalWidth.toFixed(0)} cm
      </p>
    </div>
  );
}
