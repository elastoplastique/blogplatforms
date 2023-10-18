import { createClient, ApiKeyStrategy } from '@wix/api-client';
import { items } from '@wix/data';

export async function getWixClient() {
  const wixClient = createClient({
    modules: { items },
    auth: ApiKeyStrategy({
      apiKey: process.env.WIX_ADMIN_API_KEY!,
      siteId: process.env.WIX_SITE_ID!,
      accountId: process.env.WIX_ACCOUNT_ID!,
    }),
  });
  // const tokens = await wixClient.auth.generateVisitorTokens();
  // wixClient.auth.setTokens(tokens);
  return wixClient;
}
