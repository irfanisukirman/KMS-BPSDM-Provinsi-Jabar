import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const goals = [
    "Menampilkan knowledge organisasi secara terstruktur",
    "Memfasilitasi diskusi dan saling balas (reply)",
    "Menjadi pusat sumber belajar (learning resources)",
    "Memberikan gambaran UI/UX final sebelum integrasi API",
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Tentang Knowledge Hub</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mengenal lebih jauh BPSDM Knowledge Hub Provinsi Jawa Barat.
        </p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Misi Kami</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            BPSDM Knowledge Hub dirancang sebagai platform terpusat untuk mengelola, berbagi, dan mengembangkan pengetahuan di lingkungan Badan Pengembangan Sumber Daya Manusia (BPSDM) Provinsi Jawa Barat. Kami percaya bahwa pengetahuan adalah aset paling berharga, dan dengan memfasilitasi pertukarannya, kita dapat mendorong inovasi, meningkatkan kompetensi, dan mencapai kinerja unggul.
          </p>
          <p>
            Website ini berfungsi sebagai media untuk berbagi pengetahuan dan pembelajaran antar pegawai, dilengkapi dengan fitur diskusi interaktif dan pusat sumber belajar yang komprehensif.
          </p>
        </CardContent>
      </Card>

      <div className="mt-12">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">Tujuan Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <Card key={index} className="bg-secondary/50">
              <CardContent className="p-6 flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="font-medium">{goal}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
