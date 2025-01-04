export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello from Dominic's API!",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
