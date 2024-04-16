import { Card, Flex, Inset, Box, Text } from '@/components/ui';

import Image from 'next/image';

type Props = {
  platformResourceLink: Wix.LinkPreview;
};

export const ResourceLinkCard = ({ platformResourceLink }: Props) => (
  <Card size="3" my="4" variant="surface" style={{ backgroundColor: 'var(--indigo-a2)' }}>
    <Flex width="100%" justify="start">
      <Inset side="left" mr="5">
        <Flex align="center" justify="center" style={{ background: '#24292F', height: '100%' }}>
          <Image src={platformResourceLink?.linkPreviewData.thumbnailUrl} alt="decorative" width={160} height={90} />
        </Flex>
      </Inset>
      <Flex gap="1" direction="column" style={{ maxWidth: 500, minHeight: 72 }}>
        <Text as="div" mb="1" size="4" weight="bold">
          {platformResourceLink.linkPreviewData.title}
        </Text>
        <Text size="3">{platformResourceLink.linkPreviewData.description}</Text>
      </Flex>
    </Flex>
    <a href={platformResourceLink.linkPreviewData.link.url} className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"></a>
  </Card>
);
