export function generateFAQ(qas: RichData.RawQA[]):RichData.FAQPage {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: qas.map((qa) => ({
            '@type': 'Question',
            name: qa[0],
            acceptedAnswer: {
                '@type': 'Answer',
                text: qa[1],
            }
        }))
    }
}