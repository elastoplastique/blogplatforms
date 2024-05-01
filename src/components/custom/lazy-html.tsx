export function WixHtmlData({ node }: { node: Wix.HTML }) {
  if (node.htmlData?.url) {
    return <iframe src={node.htmlData?.url} width="100%" height="800px" />;
  }
  return <div className="cms-rc cms-html" dangerouslySetInnerHTML={{ __html: node.htmlData.html }} />;
}
