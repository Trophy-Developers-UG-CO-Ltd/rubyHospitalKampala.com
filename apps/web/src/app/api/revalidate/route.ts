import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Revalidate specific paths or tags as needed
    // await revalidatePath(`/${body.lang}`);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { revalidated: false, error: "Error revalidating" },
      { status: 500 }
    );
  }
}
