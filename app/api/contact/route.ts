import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Set the SendGrid API Key from the .env file
sgMail.setApiKey(process.env.TWILIO_SEND_GRID || "");

export async function POST(request: Request): Promise<Response> {
  try {
    // Extract JSON content from the request body
    const requestData = await request.json();

    console.log(requestData);

    if (!requestData.email || !requestData.firstName || !requestData.lastName) {
      throw new Error("Missing required fields: email, name, or message");
    }

    // Prepare the email data
    const recipient: sgMail.MailDataRequired = {
      to: requestData.email,
      from: "him@dominiccobb.ai",
      templateId: process.env.EMAIL_TEMPLATE_ID,
      subject: "Hello from Dominic!",
      // @ts-expect-error: idk why
      dynamic_template_data: {
        firstName: requestData.firstName,
        lastName: requestData.lastName,
        email: requestData.email,
      },
    };

    const selfReciept: sgMail.MailDataRequired = {
      to: "him@dominiccobb.ai", // Your own email address
      from: "him@dominiccobb.ai", // Your verified sender email
      subject: "New Contact Form Submission",
      text: `
        You received a new contact form submission:
    
        First Name: ${requestData.firstName}
        Last Name: ${requestData.lastName}
        Email: ${requestData.email}
        Service: ${requestData.service}
        Message: ${requestData.message || "No message provided"}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>First Name:</strong> ${requestData.firstName}</p>
        <p><strong>Last Name:</strong> ${requestData.lastName}</p>
        <p><strong>Email:</strong> ${requestData.email}</p>
        <p><strong>Message:</strong> ${
          requestData.message || "No message provided"
        }</p>
      `,
    };

    // Send the email
    await sgMail.send(recipient);
    await sgMail.send(selfReciept);

    // Return a successful response
    return NextResponse.json(
      {
        response: "Email sent successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error processing request:", JSON.stringify(error, null, 2));

    // Return an error response
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 400,
      }
    );
  }
}
