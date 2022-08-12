export interface Order {
  orderId: string | null;
  amount: number | null;
  isEmi: boolean;
  totalEmi:number;
}