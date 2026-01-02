
export interface Testimonial {
  name: string;
  age: number;
  text: string;
  id: string;
}

export interface PricingOption {
  id: string;
  name: string;
  sessions: number;
  exVatFull: number;
  incVatFull: number;
  exVatInstallment?: number;
  incVatInstallment?: number;
  installments?: number;
  fullStripeLink: string;
  installmentStripeLink?: string;
  mostPopular?: boolean;
}

export enum PackageId {
  S12 = '12-sessions',
  S24 = '24-sessions',
  S36 = '36-sessions'
}
