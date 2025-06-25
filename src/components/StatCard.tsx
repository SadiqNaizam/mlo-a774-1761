import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, unit }) => {
  console.log(`StatCard loaded for: ${label}`);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-4xl md:text-5xl font-bold tracking-tighter">
          {value}
          {unit && (
            <span className="ml-1 text-xl md:text-2xl font-medium text-muted-foreground align-baseline">
              {unit}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;