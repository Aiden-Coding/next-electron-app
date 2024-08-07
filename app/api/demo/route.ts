import db from "@/lib/db";
interface User {
  id: number;
  name: string;
  email: string;
}
export async function GET(request: Request) {
  const stmt = db.prepare("SELECT * FROM users");
  const users = stmt.all();
  return Response.json(users);
}

export async function POST(req: Request) {
  const { name, email } = await req.json();
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  stmt.run(name, email);
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
