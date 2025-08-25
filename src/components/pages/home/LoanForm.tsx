"use client";
import React, { useActionState } from "react";
import FormSelect from "@/components/common-section/FormSelect";
import { OptionType } from "@/components/common-section/type";
import { LoanActionState, LoanFormData } from "@/types";
// import types

const options: OptionType[] = [
  { value: "Debt-Financing", label: "Debt Loan" },
  { value: "Equity-Finance", label: "Installment Loan" },
];

// form action
async function applyLoan(
  prevState: LoanActionState,
  formData: FormData
): Promise<LoanActionState> {
  const data: LoanFormData = {
    loanType: (formData.get("loanType") as string) || "",
    amount: Number(formData.get("amount")) || 0,
    duration: Number(formData.get("duration")) || 0,
    repayment: Number(formData.get("repayment")) || 0,
  };

  // fake API call
  await new Promise((res) => setTimeout(res, 1000));

  return {
    success: true,
    message: `Loan submitted ✅ 
    Type: ${data.loanType}, 
    Amount: $${data.amount}, 
    Duration: ${data.duration} days, 
    Repayment: $${data.repayment}`,
  };
}

const LoanForm = () => {
  const [state, formAction, isPending] = useActionState<LoanActionState, FormData>(
    applyLoan,
    null
  );

  return (
    <form action={formAction} className="d-flex flex-column">
      {/* Loan Type */}
      <div className="mb-3">
        <label className="label" htmlFor="loanType">
          Type of Loan
        </label>
        <FormSelect options={options} name="loanType" />
      </div>

      {/* Amount */}
      <div className="mb-3">
        <label className="label" htmlFor="amount">
          Amount of money
        </label>
        <div className="input-field d-flex align-items-center">
          <span>$</span>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            className="form-control"
          />
        </div>
      </div>

      {/* Duration */}
      <div className="mb-3">
        <label className="label" htmlFor="duration">
          For how long (days)
        </label>
        <div className="input-field">
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="For how long (days)"
            className="form-control"
          />
        </div>
      </div>

      {/* Repayment */}
      <div className="mb-4">
        <label className="label" htmlFor="repayment">
          Repayments
        </label>
        <div className="input-field d-flex align-items-center">
          <span>$</span>
          <input
            type="number"
            id="repayment"
            name="repayment"
            placeholder="Enter repayment amount"
            className="form-control"
          />
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className="theme-btn w-100" disabled={isPending}>
        {isPending ? "Submitting..." : "Apply for Loan"}
      </button>

      {/* Show response */}
      {state?.message && (
        <div className="alert alert-success mt-3">{state.message}</div>
      )}
    </form>
  );
};

export default LoanForm;
