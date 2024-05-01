import { motion } from 'framer-motion';
import {  Flex, Separator } from '@radix-ui/themes';
import { Text, Heading } from '@/components/ui/typography';

import { Table } from '@/components/compound/table';
import { Section } from '@/components/layout/section';

type ProsConsProps = {
  platform: PlatformNode;
  id?: string;
};

export const ProsCons = ({ platform, id }: ProsConsProps) => {
  const hasPros = platform.pros;
  const hasCons = platform.cons;
  const hasProsCons = hasPros || hasCons;
  if (!hasProsCons) return <></>;
  else
    return (
      <Section id={id || 'platform-pros-cons'}>
        <Heading as="h2" size="6" className="font-medium">
          The pros and cons of {platform.title}
        </Heading>
        <Separator />
        <Flex width="100%" direction="column" align="start" justify="start">
          {platform.pros && <div className="pros-cons p-2" id="platform-pros" dangerouslySetInnerHTML={{ __html: platform.pros }} />}
          {platform.cons && <div className="pros-cons p-2" id="platform-cons" dangerouslySetInnerHTML={{ __html: platform.cons }} />}

          {/* {hasPros && <div title="PROS" dangerouslySetInnerHTML={{ __html: platform.pros! }} color="var(--cyan-a2)" />}
          {hasCons && <div title="CONS" dangerouslySetInnerHTML={{ __html: platform.cons! }} color="var(--pink-a1)" />} */}
        </Flex>
      </Section>
    );
};
