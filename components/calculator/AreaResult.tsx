interface AreaResultProps {
  squareMeters: number;
  totalWidth: number;
  length: string;
  showBreakdown: boolean;
}

export function AreaResult({
  squareMeters,
  totalWidth,
  length,
  showBreakdown,
}: AreaResultProps) {
  return (
    <div className="rounded-lg bg-primary p-4 text-center text-primary-foreground">
      <p className="text-sm font-medium">Toplam Alan</p>
      <p className="text-3xl font-bold tabular-nums">{squareMeters.toFixed(2)} m²</p>
      <p
        className={`mt-1 text-xs opacity-80 h-4 ${
          showBreakdown ? "visible" : "invisible"
        }`}
      >
        ({totalWidth.toFixed(0)} cm × {parseFloat(length).toFixed(0)} cm)
      </p>
    </div>
  );
}
