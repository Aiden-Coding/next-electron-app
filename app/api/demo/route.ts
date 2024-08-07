import db from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  stmt.run(name, email);
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}

export async function POST(req: Request) {
  const { name, email } = await req.json();
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  stmt.run(name, email);
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
