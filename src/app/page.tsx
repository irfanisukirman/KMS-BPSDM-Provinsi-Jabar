import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Book, MessageSquare } from 'lucide-react';
import { getNewestArticles, getPopularArticles, getStats } from '@/lib/mock-data';
import { ArticleCard } from '@/components/ArticleCard';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';

export default function Home() {
  const stats = getStats();
  const newestArticles = getNewestArticles();
  const popularArticles = getPopularArticles();
  const heroImage = placeholderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            BPSDM Knowledge Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Media berbagi pengetahuan dan pembelajaran untuk meningkatkan kompetensi pegawai BPSDM Provinsi Jawa Barat.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/knowledge">
              Jelajahi Pengetahuan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <Book className="h-8 w-8 text-info" />
                <span className="font-headline">{stats.articles} Artikel</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Pengetahuan dan wawasan terbaru dari para ahli.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <MessageSquare className="h-8 w-8 text-info" />
                <span className="font-headline">{stats.discussions} Diskusi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ruang diskusi untuk bertukar pikiran dan ide.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <BarChart className="h-8 w-8 text-info" />
                <span className="font-headline">{stats.resources} Sumber Belajar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Materi pembelajaran untuk pengembangan diri.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold font-headline">Pengetahuan Terbaru</h2>
          <Button variant="link" asChild className="text-info hover:text-info/80">
            <Link href="/knowledge">Lihat Semua <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold font-headline">Paling Populer</h2>
          <Button variant="link" asChild className="text-info hover:text-info/80">
            <Link href="/knowledge">Lihat Semua <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
