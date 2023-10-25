import { Flex, Heading, Text, Separator, Section, Card } from '@/components/ui';
import { Progress } from '../ui/progress';
import { PPROGRESS_FEATURE_VALUES, PROGRESS_MAX, PROGRESS_BEST, PROGRESS_FEATURE_ICONS } from '@/constants/progress-features';
import { PLATFORM_PAGE } from '@/constants/content';
import { RadarIcon } from '@/components/icons/bold-icons';

type Props = {
  platformComparativeFeatures: PlatformComparativeFeatureNode[];
  platformName: string;
};

export const ProgressFeatures = ({ platformComparativeFeatures, platformName }: Props) => {
  return (
    <Section>
      <Heading as="h2" size="6" className="font-medium uppercase">
        {platformName} {PLATFORM_PAGE.platformRatings}
      </Heading>
      <Separator />
      {platformComparativeFeatures.map((ppf, index) => (
        <ProgressFeature platformComparativeFeature={ppf} key={`pf-${ppf._id}-${index}`} />
      ))}
    </Section>
  );
};

export const ProgressFeature = ({ platformComparativeFeature }: { platformComparativeFeature: PlatformComparativeFeatureNode }) => {
  // @ts-ignore
  const progressValue = PPROGRESS_FEATURE_VALUES[platformComparativeFeature.rating];
  const Icon = PROGRESS_FEATURE_ICONS[platformComparativeFeature?.feature?.title as keyof typeof PROGRESS_FEATURE_ICONS] || RadarIcon;
  return (
    <Card style={{ backgroundColor: `var(--subtle-bg)` }} my="4">
      <Flex direction="row" className="flex w-full rounded-xl" p="2" align="center">
        <Flex className="!rounded-full w-14 h-14 mr-6" direction="column" justify="center" align="center">
          <Icon width={36} height={36} color={`var(--violet-9)`} />
        </Flex>

        <Flex direction="column" grow="1">
          <Heading as="h3" size="5" mr="4" weight="bold" className="text-white">
            {platformComparativeFeature.feature.title}
          </Heading>

          <Text as="p" size="2" my="2">
            {platformComparativeFeature.feature.description}
          </Text>

          <Progress value={progressValue} max={PROGRESS_MAX} getValueLabel={getValueLabel} />
        </Flex>
      </Flex>
    </Card>
  );
};

function getValueLabel(value: number, max: number) {
  if (value === PPROGRESS_FEATURE_VALUES[PROGRESS_BEST]) {
    return 'Best';
  }
  return `${value} / ${max}`;
}
