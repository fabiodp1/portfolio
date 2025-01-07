import {
  Flex,
  Grid,
  Heading,
  Logo,
  RevealFx,
  Text,
} from "@/once-ui/components";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { technical } = renderContent(t);

  const title = technical.title;
  const description = technical.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/technical`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Technical({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { technical, person } = renderContent(t);
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: technical.title,
            description: technical.description,
            url: `https://${baseURL}/technical`,
            image: technical.images?.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      <Flex
        fillWidth
        direction="column"
        paddingY="l"
        gap="m"
        alignItems="center"
      >
        <Flex direction="column" fillWidth maxWidth="s">
          <RevealFx
            as="div"
            translateY="4"
            fillWidth
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {technical.description}
            </Text>
          </RevealFx>
          <RevealFx
            as="div"
            translateY="8"
            delay={0.2}
            fillWidth
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Grid columns="repeat(3, 1fr)" gap="40" padding="8" mobileColumns="1col">
              {technical.skills.map((skill) => (
                <Flex>
                  <Logo
                    size="xl"
                    wordmark={false}
                    icon
                    iconSrc={skill.image.src}
                    href={skill.url}
                  />
                  <Heading marginLeft="12">{skill.title}</Heading>
                </Flex>
              ))}
            </Grid>
            </RevealFx>
        </Flex>
      </Flex>
    </Flex>
  );
}
