
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const [showAsnPassword, setShowAsnPassword] = useState(false);
  const [showAsnConfirmPassword, setShowAsnConfirmPassword] = useState(false);
  const [showNonAsnPassword, setShowNonAsnPassword] = useState(false);
  const [showNonAsnConfirmPassword, setShowNonAsnConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-[3fr_7fr]">
      <div 
        className="hidden text-foreground lg:flex flex-col p-8 bg-cover bg-center"
        style={{
            backgroundImage: "url('/images/img_bg_texture.webp')"
        }}
      >
        <div>
          <Link href="/dashboard">
            <Image
              src="/images/img_bpsdm_jabar_master.png"
              alt="Logo BPSDM Provinsi Jawa Barat"
              width={240}
              height={60}
              priority
            />
          </Link>
        </div>

        <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-4xl font-bold font-headline">Selamat datang di Jabar Corporate University</h1>
            <p className="mt-2 text-lg text-muted-foreground">Knowledge Management System BPSDM Provinsi Jawa Barat.</p>
        </div>
        
        <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KMS BPSDM Provinsi Jawa Barat
            </p>
        </div>
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
            <CardTitle className="text-2xl font-bold font-headline">Buat Akun Baru</CardTitle>
            <CardDescription>Pilih tipe akun dan isi formulir pendaftaran.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="asn" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="asn" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">ASN Jabar</TabsTrigger>
                <TabsTrigger value="non-asn" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Non-ASN</TabsTrigger>
              </TabsList>
              <TabsContent value="asn">
                <div className="grid gap-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nama-asn">Nama Lengkap</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="nama-asn" placeholder="Masukkan Nama Lengkap" required className="pl-9"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="nip">NIP</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="nip" placeholder="Masukkan NIP Anda" required className="pl-9"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-asn">Kata Sandi</Label>
                    <div className="relative flex items-center">
                      <Lock className="absolute left-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password-asn" type={showAsnPassword ? 'text' : 'password'} placeholder="********" required className="pl-9 pr-10"/>
                      <button type="button" onClick={() => setShowAsnPassword(!showAsnPassword)} className="absolute right-3 text-muted-foreground" aria-label="Toggle password visibility">
                        {showAsnPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password-asn">Konfirmasi Kata Sandi</Label>
                    <div className="relative flex items-center">
                      <Lock className="absolute left-3 h-4 w-4 text-muted-foreground" />
                      <Input id="confirm-password-asn" type={showAsnConfirmPassword ? 'text' : 'password'} placeholder="********" required className="pl-9 pr-10"/>
                      <button type="button" onClick={() => setShowAsnConfirmPassword(!showAsnConfirmPassword)} className="absolute right-3 text-muted-foreground" aria-label="Toggle password confirmation visibility">
                        {showAsnConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <Button asChild type="submit" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/dashboard">Daftar</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="non-asn">
                <div className="grid gap-4 pt-4">
                   <div className="grid gap-2">
                    <Label htmlFor="nama-non-asn">Nama Lengkap</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="nama-non-asn" placeholder="Masukkan Nama Lengkap" required className="pl-9"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                     <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="nama@contoh.com" required className="pl-9"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-non-asn">Kata Sandi</Label>
                    <div className="relative flex items-center">
                      <Lock className="absolute left-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password-non-asn" type={showNonAsnPassword ? 'text' : 'password'} placeholder="********" required className="pl-9 pr-10"/>
                       <button type="button" onClick={() => setShowNonAsnPassword(!showNonAsnPassword)} className="absolute right-3 text-muted-foreground" aria-label="Toggle password visibility">
                        {showNonAsnPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                   <div className="grid gap-2">
                    <Label htmlFor="confirm-password-non-asn">Konfirmasi Kata Sandi</Label>
                    <div className="relative flex items-center">
                      <Lock className="absolute left-3 h-4 w-4 text-muted-foreground" />
                      <Input id="confirm-password-non-asn" type={showNonAsnConfirmPassword ? 'text' : 'password'} placeholder="********" required className="pl-9 pr-10"/>
                       <button type="button" onClick={() => setShowNonAsnConfirmPassword(!showNonAsnConfirmPassword)} className="absolute right-3 text-muted-foreground" aria-label="Toggle password confirmation visibility">
                        {showNonAsnConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <Button asChild type="submit" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                     <Link href="/dashboard">Daftar</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-6 text-center text-sm">
              Sudah punya akun?{' '}
              <Link href="/" className="underline text-info hover:text-info/90">
                Masuk
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
