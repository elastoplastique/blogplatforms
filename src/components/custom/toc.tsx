/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { renderToStaticMarkup } from 'react-dom/server';
import { Link, Card} from '@radix-ui/themes';

import { slugify } from '@/lib/utils/slugify';

export function TOC({ body: data, maxHeadingLevel = 4 }) {
  const extractHeadings = (nodes) => {
    const headingGroups = [];
    let currentList = [];
    let currentLevel = 0;

    nodes.forEach((node) => {
      if (node.type === 'HEADING') {
        const headingLevel = node.headingData.level;

        // Limit heading level
        if (headingLevel > maxHeadingLevel) return;

        // Create the list item
        const nodeId = slugify(node.nodes.map((i) => i.textData.text).join('-'));
        const content = node.nodes.map((i) => i.textData.text);

        currentList.push(
          renderToStaticMarkup(
            <li key={nodeId} data-heading-level={headingLevel}>
              <Link id={node.id} href={`#${nodeId}`}>
                {content}
              </Link>
            </li>
          )
        );
      }
    });

    headingGroups.push(currentList.join(' '));

    return headingGroups;
  };

  const headingsMarkup = extractHeadings(data.nodes);

  return (
    <Card id="toc-box">
      <div id="toc-title">Table of Contents</div>
      <div id="toc-body">
        {headingsMarkup.map((group, index) => (
          // We'll render the group as a single <ul>
          <ul dangerouslySetInnerHTML={{ __html: group }} key={`toc-h-${index}`} />
        ))}
      </div>
    </Card>
  );
}
