import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { wixClient } from '@/lib/wix/provider/client-provider';
import { WIX_AUTH_TOKENS } from '@/lib/wix/constants';

 
export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    handleTokens(request, response)
  return response
}



type Tokens = {
    accessToken?: {
      value: string | null,
      expiresAt: number | null
    },
    refreshToken?: {
      value: string | null,
    }
  }


async function handleTokens(request: NextRequest, response: NextResponse): Promise<void> {
    const existingTokens = getTokens(request);
    let myTokens;
    if (existingTokens) {
        myTokens = await wixClient.auth.generateVisitorTokens(existingTokens);
    } else {
        myTokens = await wixClient.auth.generateVisitorTokens();
    }
    if (myTokens) {
        setTokens(response, myTokens);
    }
}

function getTokens(request: NextRequest): any{
    // console.log("getting tokens...")
    if (request.cookies.has(WIX_AUTH_TOKENS)) {
        const tokens = request.cookies.get(WIX_AUTH_TOKENS)?.value; // Access the 'value' property
        // console.log("token found: ", tokens)
        return tokens ? JSON.parse(tokens) : null;
    }
    return null;
}

function setTokens(response: NextResponse, tokens: Tokens): void {
    response.cookies.set({
        name: WIX_AUTH_TOKENS,
        value: JSON.stringify(tokens),
    });
    let anyTokens = tokens as any;
    // console.log("setting rokens with wixClient: ", anyTokens);
    wixClient.auth.setTokens(anyTokens);
}

export const config = {
    runtime: 'experimental-edge', // for Edge API Routes only
    unstable_allowDynamic: [
        '/node_modules/.pnpm/lodash*/**',
        '/node_modules/.pnpm/@wix*/**',
        '/node_modules/lodash*/**',
        '/node_modules/@wix*/**',
        'node_modules/.pnpm/lodash*/**',
        'node_modules/.pnpm/@wix*/**',
        'node_modules/lodash*/**',
        'node_modules/@wix*/**'
    ],
  };