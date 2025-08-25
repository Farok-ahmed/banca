// Loan form type
export type LoanFormData = {
  loanType: string;
  amount: number;
  duration: number;
  repayment: number;
};

// Action state type
export type LoanActionState = {
  success: boolean;
  message: string;
} | null;
