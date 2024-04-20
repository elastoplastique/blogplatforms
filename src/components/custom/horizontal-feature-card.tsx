import { Text, Card, Flex, Heading } from '@/components/ui';
import { InfoTooltip } from '@/components/compound/info-tooltip';
import { StoryIcon } from '@/components/icons/bold-icons';
import { FEATURE_ICONS, FEATURE_COLORS } from '@/constants/features';
import Link from 'next/link';

type Props = {
  platformFeature?: PlatformFeatureNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  header?: string;
  link?: string;
  rest?: any;
};

export const HorizontalFeatureCard = ({ title, description, link, icon, header, ...rest }: Props) => {
  const FeatureIcon = FEATURE_ICONS[title as keyof typeof FEATURE_ICONS] || icon || StoryIcon;
  const featureColor = FEATURE_COLORS[title as keyof typeof FEATURE_COLORS] || 'teal';
  // 329 100 96
  return (
    <Card variant="surface" my={'0'} style={{ backgroundColor: `var(--${featureColor}-a2)` }} className="horizontal-feature-card" {...rest}>
      <Flex direction="column" className="flex w-full rounded-xl" p="2">
        <Flex direction="row" align="center" className="w-full flex flex-row items-center mb-4">
          <FeatureIcon color={`var(--${featureColor}-9)`} width={32} height={32} />

          <Heading as="h3" size="4" ml="4" mb="0" weight="bold" className="text-white !mb-0">
            {link ? <Link href={link}>{title}</Link> : title}
          </Heading>
          {/* {description && <InfoTooltip size={20} text={description || ''} color={`var(--${featureColor}-12)`} />} */}
        </Flex>
        <Flex className="min-h-[80px] relative">
          {description && link ? (
            <>
              <Link href={link} className="absolute top-0 left-0 right-0 bottom-0 z-0" title={header}></Link>
              <div className="text-text-low-contrast z-10 !text-xs" dangerouslySetInnerHTML={{ __html: description }} />
            </>
          ) : (
            <div className="text-text-low-contrast !text-xs" dangerouslySetInnerHTML={{ __html: description! }} />
          )}
        </Flex>
        {/* <p className="ml-5 text-sm font-normal leading-4 tracking-wide text-gray-600">{platformFeature.feature.description}</p> */}
      </Flex>
    </Card>
  );
};

const DefaultIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16">
    <path
      fill="white"
      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
    />
  </svg>
);
