import { Facebook, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-lg font-semibold text-foreground">
                BPSDM Knowledge Hub
              </span>
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
            <h3 className="font-headline font-semibold text-foreground mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
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
