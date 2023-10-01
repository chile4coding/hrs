import { NextResponse } from "next/server";

export default function middleware(req, res) {
  // console.log(req.cookies)
  const verify = req.cookies.get("token");
  const url = req.url;
  const checkUr =
    url.includes("/specialists") ||
    url.includes("/home") ||
    url.includes("/hospitals") ||
    url.includes("/facilities") ||
    url.includes("/recommendation") ||
    url.includes("/appointment") ||
    url.includes("/home");

  if (!verify && checkUr) {
    return NextResponse.redirect("https://hrs-chile4coding.vercel.app/login");
  }
}
