import { Section } from '@/components/layout/section';
import { Separator, Heading } from '@/components/ui';
import { PLATFORM_PAGE } from '@/constants/content';
import { RichContent } from '@/lib/wix/cms/components/rich-content';

type Props = {
  platformResourceLinks: Wix.LinkPreview[];
};

export const PlatformResources = ({ body, platformTitle }: { platformTitle: string, body: { nodes: Wix.BodyItemUnion[]; metadata: Wix.BodyMetadata } }) => {
  return (
    <Section>
      <Heading as="h2" size="6" className="font-medium capitalize">
        {platformTitle} {PLATFORM_PAGE.platformResources}
      </Heading>
      <Separator />

      {<RichContent body={body} />}
    </Section>
  );
};
