import { Container, Flex, Grid, Heading, Text, Separator } from '@/components/ui';

export type HeroProps = {
  title: string;
  subtitle?: string;
  htmlSubtitle?: string;
};

export const Hero = ({ title, subtitle, htmlSubtitle }: HeroProps) => (
  <>
    <Flex width="100%" direction="column" justify="center" align="center" className="!z-[1] relative">
      <Heading size="9" className="pb-4" align="center">
        {title}
      </Heading>
      {subtitle && (
        <Text size="4" className="mb-8 max-w-[90%]" align="center">
          {subtitle}
        </Text>
      )}
      {htmlSubtitle && (
        <Text size="4" className="mb-8 max-w-[60ch]" align="center" dangerouslySetInnerHTML={{ __html: htmlSubtitle }}></Text>
      )}
    </Flex>
    <Separator className="my-8" size="4" />
  </>
);
