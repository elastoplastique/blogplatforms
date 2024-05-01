import { Section } from '@/components/layout/section';
import { Separator } from '@radix-ui/themes';
import { Text, Heading } from '@/components/ui/typography';

import { PLATFORM_PAGE } from '@/constants/content';
import { RichContent } from '@//components/custom/rich-content';

type Props = {
  platformResourceLinks: Wix.LinkPreview[];
};

export const PlatformResources = ({
  body,
  platformTitle,
  slug,
}: {
  platformTitle: string;
  body: { nodes: Wix.BodyItemUnion[]; metadata: Wix.BodyMetadata };
  slug: string;
}) => {
  return (
    <Section>
      <Heading as="h2" size="6" className="font-medium capitalize">
        {platformTitle} {PLATFORM_PAGE.platformResources}
      </Heading>
      <Separator />

      {<RichContent body={body} contentId={slug} />}
    </Section>
  );
};
