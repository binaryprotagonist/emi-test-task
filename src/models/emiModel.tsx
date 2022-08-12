
export interface Emi {
     id: number;
     isPaid: boolean;
     date?: string | null;
     amount?: number | null;
     invoiceNumber?: string | null;
     poNumber?: string | null;
  }