import { Badge, Box, Flex, Heading, Text, Separator } from '@/components/ui';
import { Section } from '@/components/layout/section';
import { COLORS } from '@/constants/colors';
import type { Color } from '../../../types/colors';

const colors = {
  Artist: 'jade',
  Authors: 'teal',
  'Business & Marketers': 'cyan',
  'Content Creators': 'blue',
  Designers: 'indigo',
  Developers: 'iris',
  'Educational / E-Learning providers': 'violet',
  General: 'purple',
  'News Publishers / Journalists': 'plum',
  'Photo Bloggers': 'pink',
  'Personal Bloggers': 'crimson',
  Storytellers: 'ruby',
};

function getAudienceColor(audience: string, defaultColor: string = 'indigo'): Color | string {
  const trimmedAudience = audience.trim();
  const colorKeys = Object.keys(colors);
  if (colorKeys.includes(trimmedAudience)) {
    return colors[trimmedAudience as keyof typeof colors];
  }
  return defaultColor;
}
/// @ts-ignore
export const Audience = (props: { title: string; audience_text: string }) => (
  <Section>
    <Heading as="h2" size="6" className="font-medium">
      {props.title} is best blog platform for
    </Heading>
    <Separator />

    <Flex direction="column" justify="start" width="100%" mt="4" mb="8">
      <Flex direction="row" wrap="wrap" width="100%">
        {props.audience_text
          .split(',')
          .filter((t) => t.length > 0)
          .sort()
          .map((item: string, index: number) => (
            <Badge
              size="2"
              key={`target-audience-${index}`}
              id={`target-audience-${index}`}
              /// @ts-ignore
              color={getAudienceColor(item)}
              className="mr-2 mb-2"
              variant="soft"
            >
              {item}
            </Badge>
          ))}
      </Flex>
    </Flex>
  </Section>
);
