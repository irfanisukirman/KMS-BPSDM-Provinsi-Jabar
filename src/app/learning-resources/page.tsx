import { getLearningResources } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, Grid, Link as LinkIcon, FileText, Video } from "lucide-react";

const typeConfig = {
    'PDF': { icon: FileText, color: "bg-red-500" },
    'Video': { icon: Video, color: "bg-blue-500" },
    'Link': { icon: LinkIcon, color: "bg-green-500" }
}

export default function LearningResourcesPage() {
  const resources = getLearningResources();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Sumber Belajar</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Tingkatkan kompetensi Anda dengan berbagai modul, dokumen, dan tautan bermanfaat.
        </p>
      </header>

      <Tabs defaultValue="grid" className="w-full">
        <div className="flex justify-end mb-4">
            <TabsList>
                <TabsTrigger value="grid"><Grid className="h-4 w-4 mr-2"/>Grid</TabsTrigger>
                <TabsTrigger value="list"><List className="h-4 w-4 mr-2"/>List</TabsTrigger>
            </TabsList>
        </div>
        <TabsContent value="grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = typeConfig[resource.type].icon;
              return (
              <Card key={resource.id} className="flex flex-col hover:shadow-lg transition-shadow">
                 <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="font-headline text-lg">{resource.title}</CardTitle>
                        <Badge className="bg-accent text-accent-foreground shrink-0 ml-4">{resource.type}</Badge>
                    </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                 </a>
              </Card>
            )})}
          </div>
        </TabsContent>
        <TabsContent value="list">
          <div className="space-y-4">
             {resources.map((resource) => {
                const Icon = typeConfig[resource.type].icon;
                return (
                 <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className={`p-3 rounded-md bg-accent/20 text-accent`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-headline font-semibold">{resource.title}</h3>
                                <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                            <Badge variant="outline" className="hidden sm:inline-flex">{resource.type}</Badge>
                        </CardContent>
                    </Card>
                 </a>
             )})}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
