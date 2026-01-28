import Link from "next/link";
import { getDiscussions } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, PlusCircle } from "lucide-react";

export default function DiscussionPage() {
  const discussions = getDiscussions();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Forum Diskusi</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Ruang untuk berbagi ide, bertanya, dan berkolaborasi dengan sesama pegawai.
            </p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          Mulai Diskusi Baru
        </Button>
      </header>

      <div className="space-y-6">
        {discussions.map((discussion) => (
          <Card key={discussion.id} className="transition-shadow hover:shadow-md">
            <Link href={`/discussion/${discussion.id}`} className="block">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <Avatar className="h-10 w-10 border">
                    {discussion.author.avatarUrl && <AvatarImage src={discussion.author.avatarUrl} alt={discussion.author.name} data-ai-hint="person portrait" />}
                    <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="font-headline text-xl hover:text-primary">{discussion.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dimulai oleh <span className="font-semibold text-foreground">{discussion.author.name}</span> pada {new Date(discussion.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
              </CardHeader>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4"/>
                    <span>{discussion.posts.length} Post</span>
                </div>
                <div className="flex items-center">
                    <span>Partisipan:</span>
                    <div className="flex -space-x-2 ml-2">
                        {discussion.participants.slice(0, 3).map(p => (
                            <Avatar key={p.id} className="h-6 w-6 border-2 border-background">
                                {p.avatarUrl && <AvatarImage src={p.avatarUrl} alt={p.name} data-ai-hint="person portrait" />}
                                <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                     {discussion.participants.length > 3 && (
                        <span className="text-xs font-semibold ml-2">+{discussion.participants.length - 3}</span>
                    )}
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
