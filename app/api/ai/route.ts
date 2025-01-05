import { llm } from "./llm";

export async function POST(request: Request): Promise<Response> {
  try {
    // Extract JSON content from the request body
    const requestData = await request.json();
    console.log("Request Data:", requestData);

    if (!requestData || !requestData.prompt) throw new Error();

    const response = await llm.invoke(requestData.prompt);

    // Return a response
    return new Response(
      JSON.stringify({
        response: response?.content,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error parsing request JSON:", error);

    // Return an error response if parsing fails
    return new Response(
      JSON.stringify({
        error: "Invalid JSON in request body",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400, // Bad Request
      }
    );
  }
}
