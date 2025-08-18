"use client"
type ContactFormFields = {
  fullName: string;
  email: string;
};
 export async function handleSubmit(formData: FormData) {
    const data: ContactFormFields = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
    };
    console.log("Form submitted:", data);
  }