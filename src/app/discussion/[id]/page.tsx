import { getDiscussionById } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

type DiscussionThreadPageProps = {
  params: {
    id: string;
  };
};

function PostItem({ post }: { post: NonNullable<ReturnType<typeof getDiscussionById>>['posts'][0] }) {
  return (
    <Card className="overflow-hidden">
        <CardContent className="p-6 flex items-start space-x-4">
            <Avatar className="h-10 w-10 border">
              {post.author.avatarUrl && <AvatarImage src={post.author.avatarUrl} alt={post.author.name} data-ai-hint="person portrait"/>}
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
                </p>
                </div>
                <p className="mt-2 text-foreground/90 whitespace-pre-wrap">{post.content}</p>
            </div>
        </CardContent>
    </Card>
  );
}


export default function DiscussionThreadPage({ params }: DiscussionThreadPageProps) {
  const discussion = getDiscussionById(params.id);

  if (!discussion) {
    notFound();
  }
  
  const [originalPost, ...replies] = discussion.posts;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
            <Link href="/discussion"><ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Forum</Link>
        </Button>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          {discussion.title}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
            Dimulai oleh <span className="font-semibold text-foreground">{discussion.author.name}</span>
        </p>
      </header>

      <div className="space-y-6">
        {originalPost && <PostItem post={originalPost} />}

        {replies.length > 0 && (
            <>
                <h2 className="font-headline text-2xl font-bold pt-8">Balasan ({replies.length})</h2>
                {replies.map(reply => (
                    <PostItem key={reply.id} post={reply} />
                ))}
            </>
        )}

        <div className="pt-8">
             <h2 className="font-headline text-2xl font-bold mb-4">Balas Topik</h2>
             <Card>
                <CardContent className="p-4 space-y-4">
                    <Textarea placeholder="Tulis balasan Anda..." rows={5} />
                    <div className="flex justify-end">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                           <MessageSquare className="mr-2 h-4 w-4" /> Kirim Balasan
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
