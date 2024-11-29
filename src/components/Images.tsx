import { memo } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image = memo(({ src, alt, className = '' }: ImageProps) => (
  <img
    src={src}
    alt={alt}
    className={`object-cover ${className}`}
    loading="lazy"
  />
));

// Simple image object for direct access
export const images = {
  logo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=200&h=200",
  hero: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070",
  edmonton: "https://images.unsplash.com/photo-1598979072643-19d5e6b68905?auto=format&fit=crop&q=80&w=2070",
  refrigerator: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=1000",
  washer: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=1000",
  dryer: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=1000",
  dishwasher: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
  stove: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=1000",
  technician: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
  workshop: "https://images.unsplash.com/photo-1581092160757-c9dd0fc00fc7?auto=format&fit=crop&q=80&w=1000",
  downtown: "https://images.unsplash.com/photo-1598979072643-19d5e6b68905?auto=format&fit=crop&q=80&w=1000",
  westEdmonton: "https://images.unsplash.com/photo-1598979072643-19d5e6b68905?auto=format&fit=crop&q=80&w=1000",
  southEdmonton: "https://images.unsplash.com/photo-1598979072643-19d5e6b68905?auto=format&fit=crop&q=80&w=1000",
  winterMaintenance: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070",
  energyEfficiency: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070",
  troubleshooting: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070"
};

// Image metadata for SEO
export const imageMetadata = {
  logo: {
    alt: "Edmonton Appliance Repair - Professional Appliance Service"
  },
  hero: {
    alt: "Professional appliance repair service in Edmonton - Expert technicians"
  },
  edmonton: {
    alt: "Edmonton city skyline - Serving the greater Edmonton area"
  },
  refrigerator: {
    alt: "Refrigerator repair services - All major brands serviced"
  },
  washer: {
    alt: "Washing machine repair - Expert washer repair service"
  },
  dryer: {
    alt: "Dryer repair services - Professional dryer maintenance"
  },
  dishwasher: {
    alt: "Dishwasher repair - Complete dishwasher service"
  },
  stove: {
    alt: "Stove and oven repair - Electric and gas appliance service"
  },
  technician: {
    alt: "Licensed appliance repair technician - Professional service"
  },
  workshop: {
    alt: "Edmonton Appliance Repair workshop - Professional repair facility"
  }
};