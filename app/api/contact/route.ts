export async function POST(req: Request) {
  const body = await req.json()
  const message = `Pesan dari *${body.username}*%0A${body.email}%0A%0A"${body.message}"`

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_DHANS_CHAT_ID}&text=${message}&parse_mode=markdown`
    )

    return new Response("OK", { status: 200 })
  } catch {
    return new Response("Failed send data", { status: 400 })
  }
}
