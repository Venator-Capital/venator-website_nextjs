import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_PATHS: RegExp[] = [
  /^\/maintenance(?:\/.*)?$/,
  /^\/api(?:\/.*)?$/,
  /^\/favicon\.ico$/,
  /^\/site\.webmanifest$/,
  /^\/robots\.txt$/,
  /^\/sitemap\.xml$/,
  /^\/\_next(?:\/.*)?$/,
  /^\/public(?:\/.*)?$/,
];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const maintenance = process.env.MAINTENANCE_MODE === "1" || process.env.MAINTENANCE_MODE === "true";

  if (!maintenance) return NextResponse.next();

  const pathname = url.pathname;
  const bypass = BYPASS_PATHS.some((re) => re.test(pathname));
  if (bypass) return NextResponse.next();

  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/:path*",
};


