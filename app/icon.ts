
// Next.js expects a default export returning a Response for /app/icon.ts
export default async function Icon() {
  const res = await fetch("https://serv.husky.nz/logo/default.png");
  const imageBuffer = Buffer.from(await res.arrayBuffer());
  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/png"
    }
  });
}
