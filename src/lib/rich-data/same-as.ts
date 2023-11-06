export function generateSameAsFromAccounts(platformAccounts: Wix.AccountsNode): Array<RichData.SameAsType> {
  return [
    platformAccounts?.wikidata && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.wikidata },
    platformAccounts?.wikipedia && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.wikipedia },
    platformAccounts?.facebook && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.facebook },
    platformAccounts?.discord && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.discord },
    platformAccounts?.github && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.github },
    platformAccounts?.instagram && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.instagram },
    platformAccounts?.linkedin && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.linkedin },
    platformAccounts?.mastodon && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.mastodon },
    platformAccounts?.pinterest && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.pinterest },
    platformAccounts?.reddit && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.reddit },
    platformAccounts?.spotify && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.spotify },
    platformAccounts?.telegram && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.telegram },
    platformAccounts?.threads && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.threads },
    platformAccounts?.tiktok && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.tiktok },
    platformAccounts?.x && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.x },
    platformAccounts?.youtube && { type: 'Organization', name: platformAccounts?.platform.title!, sameAs: platformAccounts?.youtube },
  ].filter(Boolean) as Array<RichData.SameAsType>;
}
