import { NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken";
export function getUserIdFromToken(req: NextRequest) {
    try{
        const token = req.cookies.get("token")?.value || '';
        if (!token) {
            return NextResponse.json({ error: "No token provided" }, { status: 401 });
        }
        const decoded:any = jwt.verify(token, process.env.JWT_SECRET!);
        return decoded.id;
    } catch (error:any) {
        throw new Error(error.message || "Invalid token");
    }
}