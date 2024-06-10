// src/pages/api/context/route.ts
import { getContext } from '../../../utils/getContext';

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages.length > 1 ? messages[messages.length - 1] : messages[0];
    const context = await getContext(lastMessage.content, "", 10000, 0.7, false);
    return NextResponse.json({ context });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
