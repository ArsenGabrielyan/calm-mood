import { locales } from '@/i18n/config';
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: locales.map(val=>`./i18n/${val}.json`)
  }
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);