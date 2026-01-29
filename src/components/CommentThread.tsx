import type { Comment } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from './ui/card';

type CommentItemProps = {
  comment: Comment & { author: { avatarUrl?: string } };
  isReply?: boolean;
};

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <Avatar>
        {comment.author.avatarUrl && <AvatarImage src={comment.author.avatarUrl} alt={comment.author.name} data-ai-hint="person portrait" />}
        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{comment.author.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(comment.date).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
          </p>
        </div>
        <p className="mt-1 text-muted-foreground">{comment.content}</p>
        <div className="mt-2 flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
            <ThumbsUp className="h-4 w-4" />
            <span>{comment.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>Reply</span>
          </Button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4">
            {comment.replies.map(reply => (
              <CommentItem key={reply.id} comment={reply as any} isReply={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type CommentThreadProps = {
  comments: (Comment & { author: { avatarUrl?: string } })[];
};

export default function CommentThread({ comments }: CommentThreadProps) {
  return (
    <div className="space-y-8">
        <Card className="shadow-lg">
            <CardContent className="p-4 space-y-4">
                <Textarea placeholder="Tulis komentar Anda..." />
                <div className="flex justify-end">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Kirim Komentar</Button>
                </div>
            </CardContent>
        </Card>

      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
