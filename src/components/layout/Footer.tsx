import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 12.31 10v6.23a2.42 2.42 0 0 1-2.42 2.42c-2.42 0-4.32-2.31-4.32-4.83s1.9-4.83 4.32-4.83a2.42 2.42 0 0 1 2.42 2.42v0A4.28 4.28 0 0 0 17.1 5.82Z" />
    </svg>
  );

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <div className="font-headline flex flex-col -space-y-1">
                <span className="text-xl font-bold leading-tight tracking-tight text-foreground">
                  KMS BPSDM
                </span>
                <span className="text-sm font-normal leading-tight">
                  Provinsi Jawa Barat
                </span>
              </div>
            </div>
            <p className="text-sm">
              Badan Pengembangan Sumber Daya Manusia
              <br />
              Provinsi Jawa Barat
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">Tentang KMS</Link></li>
              <li><Link href="/knowledge" className="hover:text-primary">Knowledge Base</Link></li>
              <li><Link href="/discussion" className="hover:text-primary">Forum Diskusi</Link></li>
              <li><Link href="/learning-resources" className="hover:text-primary">Sumber Belajar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                <span>Jl. Kolonel Masturi No.11, Cipageran, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40511</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+62226652451" className="hover:text-primary">(022) 6652451</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@bpsdm.jabarprov.go.id" className="hover:text-primary">info@bpsdm.jabarprov.go.id</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <TikTokIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BPSDM Provinsi Jawa Barat. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
