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
    const msg: sgMail.MailDataRequired = {
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

    // Send the email
    await sgMail.send(msg);

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
