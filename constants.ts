
import { PackageId, PricingOption, Testimonial } from './types';

export const INTAKE_CLOSE_DATE = "Jan 15, 2026";
export const DEMO_MODE = true; 

// --- REPLACE THESE LINKS WITH YOUR GOOGLE DRIVE/HOSTED LINKS ---
export const ASSETS = {
  // The main VSL (Video Sales Letter). Must be a direct .mp4 link or similar.
  HERO_VIDEO_URL: "", // e.g., "https://yoursite.com/video.mp4"
  HERO_VIDEO_POSTER: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
  
  // Bonus Images
  BONUS_NUTRITION: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
  BONUS_SCAN: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=400",
  BONUS_TRAVEL: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400",

  // Transformation Grid (Add as many as you want)
  TRANSFORMATIONS: [
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=300&q=80"
  ]
};

export const STRIPE_LINKS = {
  S12_FULL: "https://buy.stripe.com/dRm14n6338s53cQbiE7ok0u",
  S24_FULL: "https://buy.stripe.com/28E3cvbnn6jX4gU0E07ok0v",
  S24_2PAY: "https://buy.stripe.com/3cI4gz9ffcIl4gUdqM7ok0y",
  S36_FULL: "https://buy.stripe.com/aFa6oHcrrfUx28M9aw7ok0w",
  S36_3PAY: "https://buy.stripe.com/cNi8wP3UVbEh7t6fyU7ok0x"
};

export const DUBAI_LOCATIONS = [
  "Palm Jumeirah", "Emirates Hills", "Downtown Dubai", "Dubai Marina", "Jumeirah Golf Estates", "Arabian Ranches", "Business Bay"
];

export const PRICING_DATA: PricingOption[] = [
  {
    id: PackageId.S12,
    name: "New Year Kickstart",
    sessions: 12,
    exVatFull: 4908,
    incVatFull: 5153.40,
    fullStripeLink: STRIPE_LINKS.S12_FULL
  },
  {
    id: PackageId.S24,
    name: "Superhuman Shift",
    sessions: 24,
    exVatFull: 9000,
    incVatFull: 9450,
    exVatInstallment: 4500,
    incVatInstallment: 4725,
    installments: 2,
    fullStripeLink: STRIPE_LINKS.S24_FULL,
    installmentStripeLink: STRIPE_LINKS.S24_2PAY,
    mostPopular: true
  },
  {
    id: PackageId.S36,
    name: "Ultimate Mastery",
    sessions: 36,
    exVatFull: 12276,
    incVatFull: 12889.80,
    exVatInstallment: 4092,
    incVatInstallment: 4296.60,
    installments: 3,
    fullStripeLink: STRIPE_LINKS.S36_FULL,
    installmentStripeLink: STRIPE_LINKS.S36_3PAY
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Priya Diddee', age: 54, text: 'Lost 20kg, ended joint pain, and feels stronger at 54 in just 6 months.' },
  { id: '2', name: 'Maurice Parets', age: 52, text: 'Dropped 10kg, got his six-pack, all while traveling every other week.' },
  { id: '3', name: 'Greg Hucker', age: 51, text: 'Broke the snacking habit, lost belly fat, and feels confident in the gym in just 3 months.' },
  { id: '4', name: 'Ilija Vlahovic', age: 46, text: 'Lost 7.5kg fat, hit 8% body fat, and boosted energy in weeks without starving.' },
  { id: '5', name: 'Kamran Hayat', age: 52, text: 'Dropped 10kg, lost 6 inches off his waist, and rebuilt confidence at 52.' },
  { id: '6', name: 'Maliha Jafri', age: 47, text: 'Lost 25kg, got off diabetes meds, and reclaimed her best shape since her teens.' }
];

export const trackEvent = (location: string, pkgId?: string, payment?: string) => {
  const eventData = {
    event: "cta_click",
    cta_location: location,
    package: pkgId,
    payment_option: payment,
    timestamp: new Date().toISOString()
  };
  console.log("Analytics Pulse:", eventData);
  // @ts-ignore
  if (window.dataLayer) {
    // @ts-ignore
    window.dataLayer.push(eventData);
  }
};
