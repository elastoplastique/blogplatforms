import { useMemo } from 'react';
import Image from 'next/image';
import { ACCOUNT_ICONS } from '@/constants/accounts';
import { ASSETS_DIRECTORY } from '@/constants/assets-directory';
import { motion } from 'framer-motion';
import { getSocialIcon } from '@/components/icons/social-icons';

type AccountProps = {
  accounts: AccountsNode;
  platformTitle: string;
};

export const SocialAccounts = (props: AccountProps) => {
  const socials = useMemo(() => {
    const accounts: { [key: string]: string } = {};
    Object.keys(ACCOUNT_ICONS).map((key: string) => {
      // @ts-ignore
      if (ACCOUNT_ICONS[key] !== null && props.accounts[key] !== undefined && props.accounts[key] !== null) {
        // @ts-ignore
        accounts[key] = props.accounts[key];
      }
    });
    return accounts;
  }, [props.accounts]);

  return (
    <section className="flex flex-row flex-wrap w-full justify-center mt-4">
      {Object.keys(socials).map((key: string, index: number) => (
        <SocialAccountLink
          key={`social-account-${socials[key]}-${index} }`}
          link={socials[key]!}
          title={`${props.platformTitle}'s ${key} account`}
          // @ts-ignore
          //icon={`${ASSETS_DIRECTORY.ICON_DIRECTORY}/${ACCOUNT_ICONS[key]}.svg`}
          icon={getSocialIcon(ACCOUNT_ICONS[key])}
        />
      ))}
    </section>
  );
};

type SocialLinkType = {
  link: string;
  title: string;
  icon: string;
};
const SocialAccountLink = ({ link, title, icon }: SocialLinkType) => (
  <motion.div className="p-0 social-account-link mx-1" whileHover={{ scale: 1.1 }}>
    <a
      href={link}
      target="_blank"
      rel="noopener nofollow"
      className="flex items-center justify-center w-10 h-10 rounded-full  transition-colors duration-300 ease-in-out"
    >
      <Image src={icon} alt={title} width={24} height={24} title={title} />
    </a>
    <span className="sr-only">{title}</span>
  </motion.div>
);
