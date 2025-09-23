// Define type for ReplyForm
"use server";
type ReplyFormData = {
  name: string;
  email: string;
  website?: string;
  comment: string;
  saveInfo: boolean;
};
export async function handleReply(formData: FormData): Promise<void> {
  const data: ReplyFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    website: formData.get("website") as string | undefined,
    comment: formData.get("comment") as string,
    saveInfo: formData.get("saveInfo") === "on",
  };

  console.log("Reply submitted:", data);
}
export async function subscribeEmail(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  console.log("Subscribed email:", email);
}