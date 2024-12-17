import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { Name, Email, Comments, LastName, Phone, LookingFor } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "idris@aventurestud.io", // Replace with process.env.EMAIL for production
        pass: "uzam xobg qgqs aewa", // Replace with process.env.PASSWORD for production
      },
    });

    const mailOptions = {
      from: Email,
      to: "hello@aventurestud.io,jt@aventurestud.io,idris@aventurestud.io", // Replace with process.env.RECIPIENT_EMAIL for production
      subject: ` AVS Contact form submission  from ${Name}`,
      text: `Name: ${Name}\nLast Name: ${LastName}\nEmail: ${Email}\nPhone: ${Phone}\nLooking For: ${LookingFor}\nComments: ${Comments}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Message sent successfully! We will contact you soon ",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
