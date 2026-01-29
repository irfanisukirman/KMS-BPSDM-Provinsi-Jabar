import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-lg font-semibold text-foreground">
                BPSDM Knowledge Hub
              </span>
            </div>
            <p className="text-sm text-center">
              Badan Pengembangan Sumber Daya Manusia
              <br />
              Provinsi Jawa Barat
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-headline font-semibold text-foreground mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm inline-block text-left">
              <li><Link href="/about" className="hover:text-primary">Tentang KMS</Link></li>
              <li><Link href="/knowledge" className="hover:text-primary">Knowledge Base</Link></li>
              <li><Link href="/discussion" className="hover:text-primary">Forum Diskusi</Link></li>
              <li><Link href="/learning-resources" className="hover:text-primary">Sumber Belajar</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-headline font-semibold text-foreground mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm inline-block text-left">
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
          <div className="text-center">
            <h3 className="font-headline font-semibold text-foreground mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4 justify-center">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
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
