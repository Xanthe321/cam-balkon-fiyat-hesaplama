"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PipeRailingCalculator } from "@/components/pipe-railing/PipeRailingCalculator";
import { GlassRailingCalculator } from "./GlassRailingCalculator";

export function RailingCalculator() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="pipe-railing" className="w-full">
        <TabsList className="mb-4 inline-flex h-auto w-full justify-center gap-2 rounded-lg bg-background p-1 shadow-sm">
          <TabsTrigger
            value="glass-railing"
            className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Cam Korkuluk
          </TabsTrigger>
          <TabsTrigger
            value="pipe-railing"
            className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Boru Korkuluk
          </TabsTrigger>
        </TabsList>

        <TabsContent value="glass-railing">
          <GlassRailingCalculator />
        </TabsContent>

        <TabsContent value="pipe-railing">
          <PipeRailingCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
