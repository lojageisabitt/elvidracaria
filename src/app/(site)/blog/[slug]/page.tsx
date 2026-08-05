// src/app/(site)/blog/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

import { prisma } from "@/core/lib/prisma";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function normalizeImageUrl(imageUrl: string | null): string | null {
  if (!imageUrl) {
    return null;
  }

  const trimmedUrl = imageUrl.trim();

  if (!trimmedUrl) {
    return null;
  }

  if (
    trimmedUrl.startsWith("http://") ||
    trimmedUrl.startsWith("https://") ||
    trimmedUrl.startsWith("/")
  ) {
    return trimmedUrl;
  }

  return `/${trimmedUrl}`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await prisma.post.findFirst({
    where: {
      slug,
      published: true,
    },
    select: {
      title: true,
      excerpt: true,
      coverImage: true,
      seo: {
        select: {
          metaTitle: true,
          metaDesc: true,
          keywords: true,
        },
      },
    },
  });

  if (!post) {
    return {
      title: "Post não encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.seo?.metaTitle?.trim() || post.title;
  const description =
    post.seo?.metaDesc?.trim() || post.excerpt?.trim() || "";

  const coverImage = normalizeImageUrl(post.coverImage);

  return {
    title,
    description,

    keywords: post.seo?.keywords
      ? post.seo.keywords
          .split(",")
          .map((keyword) => keyword.trim())
          .filter(Boolean)
      : undefined,

    openGraph: {
      title,
      description,
      type: "article",
      images: coverImage
        ? [
            {
              url: coverImage,
              alt: post.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: coverImage ? [coverImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await prisma.post.findFirst({
    where: {
      slug,
      published: true,
    },
    select: {
      id: true,
      title: true,
      content: true,
      coverImage: true,
      createdAt: true,
      excerpt: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!post) {
    notFound();
  }

  const coverImage = normalizeImageUrl(post.coverImage);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-3 font-semibold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-bg-hover)]"
        >
          <ArrowLeft
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          />

          Voltar para o blog
        </Link>

        {coverImage ? (
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            {/*
              Usamos a tag img para aceitar imediatamente imagens locais e
              URLs externas, sem depender de remotePatterns no next.config.
            */}
            <img
              src={coverImage}
              alt={`Imagem de capa do artigo ${post.title}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        ) : null}

        <header className="mb-10">
          {post.category ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {post.category.name}
            </p>
          ) : null}

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>

          {post.excerpt ? (
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              {post.excerpt}
            </p>
          ) : null}

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <CalendarDays
              className="h-4 w-4"
              aria-hidden="true"
            />

            {new Date(post.createdAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>

        <div
          className="
            max-w-none
            whitespace-pre-line
            text-lg
            leading-8
            text-[var(--color-text-secondary)]
          "
        >
          {post.content}
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-3 font-semibold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-bg-hover)]"
          >
            <ArrowLeft
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            />

            Voltar para todos os artigos
          </Link>
        </div>
      </article>
    </div>
  );
}