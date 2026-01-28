import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/placeholder-images';

type ArticleCardProps = {
  article: Article & { imageUrl?: string; author: { avatarUrl?: string } };
};

export function ArticleCard({ article }: ArticleCardProps) {
  const authorImage = placeholderImages.find(p => p.id === article.author.avatarId);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={`/knowledge/${article.slug}`} className="flex flex-col h-full">
        <div className="relative w-full h-40">
          {article.imageUrl && (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="article photo"
            />
          )}
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="font-headline text-lg leading-snug">{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{article.summary}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-3 mt-auto pt-4 border-t">
          <Avatar className="h-8 w-8">
            {authorImage && <AvatarImage src={authorImage.imageUrl} alt={article.author.name} data-ai-hint="person portrait"/>}
            <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{article.author.name}</p>
            <p className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
