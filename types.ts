
// Fix: Import React to provide the React namespace for ReactNode type
import React from 'react';

export interface NavItem {
  title: string;
  path: string;
  items?: {
    title: string;
    description?: string;
    path: string;
    icon?: React.ReactNode;
  }[];
}

export interface PageContent {
  id: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits?: {
    title: string;
    content: string;
  }[];
}