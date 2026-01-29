import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/placeholder-images';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Calendar, Eye, ThumbsUp } from 'lucide-react';

type ArticleCardProps = {
  article: Article & { imageUrl?: string; author: { avatarUrl?: string } };
};

export function ArticleCard({ article }: ArticleCardProps) {
  const authorImage = placeholderImages.find(p => p.id === article.author.avatarId);

  return (
    <Card className="shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card">
      <Link href={`/knowledge/${article.slug}`} className="flex flex-col h-full">
        <CardHeader className="flex-grow pb-4">
          <Badge className="w-fit border-transparent bg-info/10 text-info font-bold">
            {article.category}
          </Badge>
          <CardTitle className="font-headline text-lg leading-snug pt-2">{article.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-3">{article.summary}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4 mt-auto pt-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              {authorImage && <AvatarImage src={authorImage.imageUrl} alt={article.author.name} data-ai-hint="person portrait"/>}
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{article.author.name}</p>
              <p className="text-xs text-muted-foreground">{article.author.jobTitle}</p>
            </div>
          </div>
          
          <Separator />

          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span>{article.views.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ThumbsUp className="h-4 w-4" />
                <span>{article.likes.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
