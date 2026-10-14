/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { isStoreEnabled, isStorefrontPath } from '@/core/lib/store';

import { defaultCache } from "@serwist/turbopack/worker";
import type {
  PrecacheEntry,
  SerwistGlobalConfig,
} from "serwist";
import {
  NetworkOnly,
  Serwist,
} from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST:
      | Array<PrecacheEntry | string>
      | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const privateRoutePrefixes = [
  "/loja/pedido",
  "/loja/carrinho",
  "/loja/checkout",
  "/loja/meus-pedidos",
  "/admin",
  "/api",
  "/pedido",
  "/carrinho",
  "/checkout",
  "/login",
  "/cadastro",
];

function isPrivatePath(pathname: string): boolean {
  return (!isStoreEnabled() && isStorefrontPath(pathname)) || privateRoutePrefixes.some(
    (prefix) =>
      pathname === prefix ||
      pathname.startsWith(`${prefix}/`),
  );
}

function requestComesFromPrivatePage(
  request: Request,
): boolean {
  if (!request.referrer) {
    return false;
  }

  try {
    const referrerUrl = new URL(request.referrer);

    return (
      referrerUrl.origin === self.location.origin &&
      isPrivatePath(referrerUrl.pathname)
    );
  } catch {
    return false;
  }
}

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST?.filter(entry => {
    const url = new URL(typeof entry === 'string' ? entry : entry.url, self.location.origin);
    return isStoreEnabled() || !isStorefrontPath(url.pathname);
  }),

  precacheOptions: {
    cleanupOutdatedCaches: true,
  },

  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  disableDevLogs: true,

  cacheId: "upnode-pwa",

  runtimeCaching: [
    {
      matcher({ request, url }) {
        if (
          url.origin === self.location.origin &&
          isPrivatePath(url.pathname)
        ) {
          return true;
        }

        return requestComesFromPrivatePage(request);
      },

      handler: new NetworkOnly(),
    },

    ...defaultCache,
  ],

  fallbacks: {
    entries: [
      {
        url: "/offline",

        matcher({ request }) {
          return request.destination === "document" && (isStoreEnabled() || !isStorefrontPath(new URL(request.url).pathname));
        },
      },
    ],
  },
});

serwist.addEventListeners();
// Remove only cached commercial responses, preserving images and institutional content.
self.addEventListener('activate', event => {
  if (isStoreEnabled()) return;
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      const cache = await caches.open(name);
      for (const request of await cache.keys()) {
        const url = new URL(request.url);
        if (url.origin === self.location.origin && isStorefrontPath(url.pathname)) await cache.delete(request);
      }
    }
  })());
});
