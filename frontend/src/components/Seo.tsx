import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
  lang?: string;
  schema?: object;
}

const SITE_NAME = 'Hoverla Plzeň';
const DEFAULT_DESC = 'Волейбольна команда Hoverla Plzeň — розклад матчів, склад, новини.';

export default function Seo({ title, description, ogImage, url, lang = 'uk', schema }: Props) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description || DEFAULT_DESC;
  const image = ogImage || '/og-default.jpg';

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={image} />
        {url && <link rel="canonical" href={url} />}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
    </>
  );
}
