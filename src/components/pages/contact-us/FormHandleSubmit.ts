 "use server";
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export async function handleSubmit(formData: FormData) {
   
  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  console.log("Form submitted:", data);
  
}
