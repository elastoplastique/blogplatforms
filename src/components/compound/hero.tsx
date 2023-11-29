import { Container, Flex, Grid, Heading, Text, Separator } from '@/components/ui';

export type HeroProps = {
  title: string;
  subtitle?: string;
  htmlSubtitle?: string;
  cta?: string;
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

export const _Hero = ({ title, subtitle, htmlSubtitle, cta }: HeroProps) => {
  return (
    <div>
      <section className="relative pb-12 bg-white">


        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">{title}</h1>
            {htmlSubtitle ? (
              <p
                className="max-w-xl mx-auto mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl"
                dangerouslySetInnerHTML={{ __html: htmlSubtitle }}
              ></p>
            ) : (
              <p className="max-w-xl mx-auto mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">{subtitle}</p>
            )}
            {/* <p className="max-w-xl mx-auto mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">{subtitle}</p>
            <div className="flex flex-col items-center gap-5 mt-8">
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
