"use client"
import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="theme-btn mt-10" disabled={pending}>
      {pending ? "Submitting..." : children}
    </button>
  );
}
