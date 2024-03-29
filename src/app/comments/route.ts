import { comments } from "./data";


export async function GET(): Promise<Response> {
  return Response.json(comments);
}
