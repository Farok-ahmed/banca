"use client";

import { useFormStatus } from "react-dom";

const FormSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="theme-btn theme-btn-lg w-100">
      {pending ? "Submitting..." : "Submit Now"}
    </button>
  );
};

export default FormSubmitButton;
