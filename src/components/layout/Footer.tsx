import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-1.1-6.47-3.02-1.6-1.9-2.2-4.32-1.88-6.65.34-2.43 1.9-4.5 4.02-5.65 2.13-1.15 4.54-1.3 6.66-.42.27.11.53.25.79.4V8.5c-1.31-.9-2.86-1.2-4.35-1.02-1.89.23-3.61 1.1-4.66 2.65-1.05 1.54-1.41 3.4-1.04 5.21.36 1.8 1.48 3.32 3.1 4.19 2.05 1.09 4.5.83 6.27-.61.34-.28.63-.61.88-1 .31-.47.53-1 .66-1.54.04-.15.06-.3.06-.45.02-2.88.01-5.76.01-8.64-.01-1.37-.1-2.73-.35-4.07-.36-1.9-1.24-3.6-2.58-4.9-1.33-1.29-2.95-2.1-4.7-2.31-.05 0-.1.01-.15.02Z"/>
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
