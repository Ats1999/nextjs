import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const path = body.path;

  if (path) {
    revalidatePath(path);
    return Response.json({
      revalidated: true,
      now: new Date().toTimeString(),
      path,
    });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
