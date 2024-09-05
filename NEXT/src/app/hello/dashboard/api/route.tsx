import { headers, cookies } from "next/headers"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers()

    cookies().set('token', '123abc')
    const theme = cookies().get('theme')

    console.log(requestHeaders.get('Authorization'))
    console.log(headerList.get('Authorization'))

    console.log(theme)
    console.log(cookies().get('token'))

    return new Response('<h1>Dashboard route</h1>', {
        headers: {
            'Content-Type': 'text/html',
            "Set-Cookie": "theme=dark"
        }
    })
}