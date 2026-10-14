import { siteConfig } from '@/client/config/site.config'
import type { Metadata } from 'next'
export const metadata: Metadata = siteConfig.store.enabled ? {} : { robots: { index: false, follow: false } }
import { requireStoreEnabled } from '@/core/lib/store-server'
import { CartProvider } from '@/core/context/CartContext'
import CategoriasMenu from "@/core/components/CategoriasMenu";

export default function LojaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  requireStoreEnabled()
  return (
    <CartProvider><div>
      <CategoriasMenu />
      {children}
    </div></CartProvider>
  );
}
