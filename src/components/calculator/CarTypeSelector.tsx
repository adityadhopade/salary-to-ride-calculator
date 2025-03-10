
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CarType } from '@/models/car';

interface CarTypeSelectorProps {
  selectedCarType: CarType;
  onCarTypeChange: (type: CarType) => void;
}

const CarTypeSelector = ({ selectedCarType, onCarTypeChange }: CarTypeSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Car Type</Label>
      <div className="grid grid-cols-3 gap-2">
        {Object.values(CarType).map((type) => (
          <Button
            key={type}
            type="button"
            variant={selectedCarType === type ? "default" : "outline"}
            onClick={() => onCarTypeChange(type)}
            className={`transition-all ${selectedCarType === type ? 'shadow-md' : ''}`}
          >
            {type}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CarTypeSelector;
