"use server";

export async function submitDemo(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  // We use formsubmit.co to send the email without exposing the address on the frontend.
  // We use the generated hash so the email address is completely hidden.
  
  try {
    const response = await fetch("https://formsubmit.co/ajax/1baa3c2e098bd453a8464c117612e983", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://vedaganitham.com',
        'Referer': 'https://vedaganitham.com/'
      },
      body: JSON.stringify({
        ...data,
        _subject: "New Demo Class Booking! - VedaGanitham",
        _template: "table" // Beautiful email template
      })
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Failed to submit. Please try again." };
  }
}
