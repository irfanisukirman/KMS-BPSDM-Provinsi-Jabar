
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Logo } from '@/components/icons/Logo';
import { User, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <div className="hidden bg-primary text-primary-foreground lg:flex flex-col justify-between p-8">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Logo className="h-10 w-10 text-white" />
          <div className="font-headline flex flex-col -space-y-1">
            <span className="text-xl font-bold leading-tight tracking-tight">KMS BPSDM</span>
            <span className="text-sm font-normal leading-tight">Provinsi Jawa Barat</span>
          </div>
        </Link>
        <div className="mb-24">
          <h1 className="text-4xl font-bold font-headline">Selamat Datang Kembali</h1>
          <p className="mt-2 text-lg text-primary-foreground/80">Masuk untuk mengakses knowledge base dan forum diskusi.</p>
        </div>
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} KMS BPSDM Provinsi Jawa Barat
        </p>
      </div>

      <div className="relative flex items-center justify-center py-12 px-4 h-full">
        <Image
          src="/images/img_bpsdm.jpg"
          alt="Gedung BPSDM"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <Card className="mx-auto w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold font-headline">Masuk ke Akun Anda</CardTitle>
            <CardDescription>Pilih tipe akun Anda dan masukkan kredensial.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="asn" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="asn">ASN Jabar</TabsTrigger>
                <TabsTrigger value="non-asn">Non-ASN</TabsTrigger>
              </TabsList>
              <TabsContent value="asn">
                <div className="grid gap-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nip">NIP</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="nip" placeholder="Masukkan NIP Anda" required className="pl-9"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-asn">Kata Sandi</Label>
                     <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="password-asn" type="password" placeholder="********" required className="pl-9"/>
                    </div>
                  </div>
                  <Button asChild type="submit" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/dashboard">Masuk</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="non-asn">
                <div className="grid gap-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                     <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="nama@contoh.com" required className="pl-9"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-non-asn">Kata Sandi</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="password-non-asn" type="password" placeholder="********" required className="pl-9"/>
                    </div>
                  </div>
                  <Button asChild type="submit" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                     <Link href="/dashboard">Masuk</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-6 text-center text-sm">
              Belum punya akun?{' '}
              <Link href="#" className="underline text-primary hover:text-primary/80">
                Daftar
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
