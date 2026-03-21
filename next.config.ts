import { locales, messages } from '@/i18n/config';
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const messagePaths = locales.flatMap(locale=>messages.map(msg=>
  `./i18n/${locale}/${msg}.json`
))

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: messagePaths
  }
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);