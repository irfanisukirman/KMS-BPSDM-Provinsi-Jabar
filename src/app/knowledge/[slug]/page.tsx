import { getArticleBySlug } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag } from 'lucide-react';
import CommentThread from '@/components/CommentThread';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="relative h-64 md:h-96 w-full">
        {article.imageUrl && (
            <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
                data-ai-hint="article photo"
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto -mt-32 relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <article>
            <header className="mb-8">
              <Badge variant="secondary" className="mb-4">{article.category}</Badge>
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
                {article.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {article.author.avatarUrl && <AvatarImage src={article.author.avatarUrl} alt={article.author.name} data-ai-hint="person portrait"/>}
                    <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{article.author.name}</span>
                </div>
                <span className="hidden md:block">|</span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </header>

            <div
              className="prose dark:prose-invert max-w-none lg:prose-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <footer className="mt-12">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-muted-foreground" />
                {article.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </footer>
          </article>
          
          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-6">Diskusi ({article.comments.length} Komentar)</h2>
            <CommentThread comments={article.comments} />
          </div>

        </div>
      </div>
    </div>
  );
}
