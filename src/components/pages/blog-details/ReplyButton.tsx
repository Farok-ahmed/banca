"use client"
import React from "react";
import { useFormStatus } from "react-dom";

const ReplyButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button className="theme-btn mt-35" type="submit" disabled={pending}>
        {pending ? "Posting..." : "Post Comment"}
      </button>
    </>
  );
};

export default ReplyButton;
