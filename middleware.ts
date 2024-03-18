import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
    const { pathname, origin } = req.nextUrl;
    const session = await getToken({
        req,
        secret: process.env.JWT_SECRET,
        secureCookie: process.env.NODE_ENV === "production",
    });

    if (pathname.startsWith("/admin") && !session) {
        return NextResponse.redirect(`${origin}`);
    }
};

export default middleware;
