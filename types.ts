
// Fix: Import React to provide the React namespace for React.ReactNode usage
import React from 'react';

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}
