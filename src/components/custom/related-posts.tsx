import { motion } from 'framer-motion';
import { Heading, Text, Flex, Grid, Card, Container, Separator } from '@/components/ui';
import { PostCardLessVerbose } from '@/components/custom/post-card';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';

export const RelatedPosts = ({ posts }: { posts: Wix.PostNode[] }) => {
  return (
    <aside>
      <motion.div className="relative min-w-full rounded-3xl flex flex-col min-h-32 !mt-20 content-auto">
        <Heading as="h3" size="4" className="tracking-tight !font-semi-bold text-inherit pt-2">
          <span className="text-4xl sm:text-2xl block !tracking-tighter">Related articles</span>
        </Heading>
      </motion.div>
      <hr className="mb-8 opacity-60" />
      <Flex direction="column" align="stretch" gap="1" id="list-box">
        <Grid
          width="100%"
          columns={{
            initial: '1',
            sm: '2',
            md: '2',
            lg: '2',
          }}
          p="1"
          asChild
        >
          <ul>
            {posts.map((p: Wix.PostNode, ix: number) => (
              <li key={`related-post-${p.slug}-${ix}`} id={`related-post-${p.slug}-${ix}`} className="p-2">
                <PostCardLessVerbose
                  image={createWixStaticUrl(p.cover!)}
                  title={p.title}
                  description={p.description}
                  href={`/blog/${p.slug}`}
                />
              </li>
            ))}
          </ul>
        </Grid>
      </Flex>
    </aside>
  );
};
