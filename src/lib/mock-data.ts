import type { User, Article, Comment, Discussion, LearningResource, Stats } from '@/types';
import { placeholderImages } from './placeholder-images';

const users: User[] = [
  { id: 'user-1', name: 'Asep Sunandar', avatarId: 'user-avatar-1', jobTitle: 'Analis Kebijakan Ahli Madya' },
  { id: 'user-2', name: 'Siti Nurbaya', avatarId: 'user-avatar-2', jobTitle: 'Widyaiswara Ahli Utama' },
  { id: 'user-3', name: 'Budi Santoso', avatarId: 'user-avatar-3', jobTitle: 'Perencana Ahli Muda' },
  { id: 'user-4', name: 'Dewi Lestari', avatarId: 'user-avatar-4', jobTitle: 'Auditor Ahli Pertama' },
];

const comments: Comment[] = [
  {
    id: 'comment-1',
    author: users[1],
    date: '2024-05-20T10:30:00Z',
    content: 'Artikel yang sangat mencerahkan! Terima kasih sudah berbagi.',
    likes: 15,
    replies: [
      {
        id: 'reply-1-1',
        author: users[0],
        date: '2024-05-20T11:00:00Z',
        content: 'Sama-sama, Bu Siti. Senang bisa bermanfaat.',
        likes: 5,
      },
      {
        id: 'reply-1-2',
        author: users[2],
        date: '2024-05-20T12:15:00Z',
        content: 'Saya setuju, penjelasannya mudah dipahami.',
        likes: 3,
        replies: [
            {
                id: 'reply-1-2-1',
                author: users[1],
                date: '2024-05-20T13:00:00Z',
                content: 'Betul, Pak Budi. Contoh kasusnya juga relevan.',
                likes: 2,
            }
        ]
      },
    ],
  },
  {
    id: 'comment-2',
    author: users[3],
    date: '2024-05-21T09:00:00Z',
    content: 'Apakah ada data pendukung lain yang bisa dibagikan terkait topik ini?',
    likes: 8,
  },
];

const articles: Article[] = [
  {
    id: 'article-1',
    slug: 'transformasi-digital-di-sektor-publik',
    title: 'Transformasi Digital di Sektor Publik',
    summary: 'Membahas pentingnya adaptasi teknologi untuk meningkatkan pelayanan publik dan efisiensi birokrasi.',
    content: `<p>Transformasi digital telah menjadi sebuah keniscayaan, tidak terkecuali di sektor publik. Pemerintah di seluruh dunia, termasuk di Indonesia, didorong untuk mengadopsi teknologi digital guna meningkatkan kualitas pelayanan publik, efisiensi birokrasi, dan transparansi pemerintahan.</p><h3 class="font-headline text-xl font-semibold mt-6 mb-3">Mengapa Transformasi Digital Penting?</h3><p>Ada beberapa alasan mengapa transformasi digital menjadi sangat krusial bagi sektor publik:</p><ul class="list-disc pl-6 space-y-2 my-4"><li><strong>Peningkatan Efisiensi:</strong> Otomatisasi proses bisnis dapat mengurangi waktu dan biaya operasional secara signifikan.</li><li><strong>Peningkatan Kualitas Layanan:</strong> Layanan publik dapat diakses kapan saja dan di mana saja, tanpa terikat oleh jam kerja kantor.</li><li><strong>Transparansi dan Akuntabilitas:</strong> Data yang terdigitalisasi memudahkan pengawasan dan pelacakan, mengurangi potensi korupsi.</li><li><strong>Pengambilan Keputusan Berbasis Data:</strong> Kebijakan dapat dirumuskan berdasarkan analisis data yang akurat dan real-time.</li></ul><h3 class="font-headline text-xl font-semibold mt-6 mb-3">Tantangan yang Dihadapi</h3><p>Meskipun memiliki banyak manfaat, proses transformasi digital juga dihadapkan pada berbagai tantangan, seperti:</p><ol class="list-decimal pl-6 space-y-2 my-4"><li>Perubahan Kultur dan Mindset ASN.</li><li>Keterbatasan Anggaran dan Infrastruktur.</li><li>Masalah Keamanan Siber.</li><li>Kesenjangan Kompetensi Digital.</li></ol>`,
    author: users[0],
    date: '2024-05-20',
    category: 'Teknologi',
    tags: ['Digitalisasi', 'Pemerintahan', 'Inovasi'],
    imageId: 'article-1',
    isPopular: true,
    comments: comments,
    views: 2451,
    likes: 312,
  },
  {
    id: 'article-2',
    slug: 'manajemen-kinerja-asn-berbasis-hasil',
    title: 'Manajemen Kinerja ASN Berbasis Hasil',
    summary: 'Panduan praktis untuk menerapkan sistem manajemen kinerja yang fokus pada output dan outcome.',
    content: '<p>Konten detail tentang manajemen kinerja...</p>',
    author: users[1],
    date: '2024-05-18',
    category: 'SDM',
    tags: ['Kinerja', 'ASN', 'Manajemen'],
    imageId: 'article-2',
    isPopular: true,
    comments: [],
    views: 1876,
    likes: 254,
  },
  {
    id: 'article-3',
    slug: 'kepemimpinan-adaptif-di-era-vuca',
    title: 'Kepemimpinan Adaptif di Era VUCA',
    summary: 'Strategi menjadi pemimpin yang tangguh dan adaptif dalam menghadapi dunia yang Volatile, Uncertain, Complex, and Ambiguous.',
    content: '<p>Konten detail tentang kepemimpinan adaptif...</p>',
    author: users[2],
    date: '2024-05-15',
    category: 'Kepemimpinan',
    tags: ['Leadership', 'VUCA'],
    imageId: 'article-3',
    isPopular: false,
    comments: [],
    views: 980,
    likes: 102,
  },
  {
    id: 'article-4',
    slug: 'membangun-budaya-inovasi-di-instansi',
    title: 'Membangun Budaya Inovasi di Instansi',
    summary: 'Langkah-langkah konkret untuk menumbuhkan lingkungan kerja yang mendorong inovasi dan kreativitas.',
    content: '<p>Konten detail tentang budaya inovasi...</p>',
    author: users[3],
    date: '2024-05-12',
    category: 'Inovasi',
    tags: ['Budaya Kerja', 'Kreativitas'],
    imageId: 'article-4',
    isPopular: true,
    comments: [],
    views: 3102,
    likes: 489,
  },
  {
    id: 'article-5',
    slug: 'komunikasi-efektif-untuk-pelayanan-prima',
    title: 'Komunikasi Efektif untuk Pelayanan Prima',
    summary: 'Kunci dan teknik komunikasi yang efektif dalam memberikan pelayanan terbaik kepada masyarakat.',
    content: '<p>Konten detail tentang komunikasi efektif...</p>',
    author: users[0],
    date: '2024-05-10',
    category: 'Komunikasi',
    tags: ['Pelayanan Publik', 'Soft Skills'],
    imageId: 'article-5',
    isPopular: false,
    comments: [],
    views: 753,
    likes: 98,
  },
];

const discussions: Discussion[] = [
    {
        id: 'discussion-1',
        title: 'Bagaimana cara efektif untuk WFH?',
        author: users[0],
        date: '2024-05-19',
        lastActivity: '2024-05-21',
        participants: [users[0], users[1], users[2]],
        posts: [
            {
                id: 'post-1-1',
                author: users[0],
                date: '2024-05-19T08:00:00Z',
                content: 'Rekan-rekan, saya ingin membuka diskusi tentang praktik terbaik selama Work From Home (WFH). Apa saja tips dan trik yang sudah rekan-rekan terapkan agar tetap produktif dan tidak burnout? Mari berbagi di sini.'
            },
            {
                id: 'post-1-2',
                author: users[1],
                date: '2024-05-19T09:15:00Z',
                content: 'Pengalaman saya, penting sekali untuk punya ruang kerja khusus dan disiplin dengan jam kerja. Saya biasanya mulai dan selesai kerja di jam yang sama setiap hari, seolah-olah sedang di kantor.'
            },
            {
                id: 'post-1-3',
                author: users[2],
                date: '2024-05-20T11:00:00Z',
                content: 'Setuju dengan Bu Siti. Selain itu, saya menggunakan teknik Pomodoro (25 menit kerja, 5 menit istirahat) untuk menjaga fokus. Sangat membantu!'
            }
        ]
    },
    {
        id: 'discussion-2',
        title: 'Usulan Pelatihan untuk Tahun Depan',
        author: users[3],
        date: '2024-05-17',
        lastActivity: '2024-05-18',
        participants: [users[3], users[2]],
        posts: [
             {
                id: 'post-2-1',
                author: users[3],
                date: '2024-05-17T14:00:00Z',
                content: 'Saya ingin mengumpulkan usulan pelatihan yang relevan untuk pengembangan kompetensi kita di tahun depan. Ada ide pelatihan apa yang paling kita butuhkan saat ini?'
            },
             {
                id: 'post-2-2',
                author: users[2],
                date: '2024-05-18T10:00:00Z',
                content: 'Pelatihan tentang Analisis Data dengan Power BI atau Tableau sepertinya sangat relevan, Pak. Banyak data yang bisa kita olah untuk mendukung kebijakan.'
            }
        ]
    }
];

const learningResources: LearningResource[] = [
    { id: 'res-1', title: 'Panduan E-Government', description: 'Dokumen lengkap mengenai implementasi e-government di Indonesia.', type: 'PDF', url: '#' },
    { id: 'res-2', title: 'Dasar-dasar Project Management', description: 'Video series dari expert tentang bagaimana mengelola proyek dengan efektif.', type: 'Video', url: '#' },
    { id: 'res-3', title: 'Portal Satu Data Indonesia', description: 'Link ke portal resmi Satu Data Indonesia untuk referensi data.', type: 'Link', url: '#' },
    { id: 'res-4', title: 'Manajemen Risiko Sektor Publik', description: 'Modul pelatihan komprehensif tentang manajemen risiko.', type: 'PDF', url: '#' },
    { id: 'res-5', title: 'Tutorial Public Speaking', description: 'Pelajari cara berbicara di depan umum dengan percaya diri melalui video ini.', type: 'Video', url: '#' },
    { id: 'res-6', title: 'Peraturan Kepegawaian Terbaru', description: 'Kumpulan peraturan terbaru seputar ASN.', type: 'Link', url: '#' },
];


export function getArticles() {
  return articles.map(a => ({...a, author: {...a.author, avatarUrl: placeholderImages.find(p => p.id === a.author.avatarId)?.imageUrl}, imageUrl: placeholderImages.find(p => p.id === a.imageId)?.imageUrl }));
}

export function getArticleBySlug(slug: string) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return null;

    const populatedComments = (comments: Comment[]): Comment[] => {
        return comments.map(c => ({
            ...c,
            author: {...c.author, avatarUrl: placeholderImages.find(p => p.id === c.author.avatarId)?.imageUrl},
            replies: c.replies ? populatedComments(c.replies) : []
        }))
    }

    return {
      ...article, 
      author: {...article.author, avatarUrl: placeholderImages.find(p => p.id === article.author.avatarId)?.imageUrl}, 
      imageUrl: placeholderImages.find(p => p.id === article.imageId)?.imageUrl,
      comments: populatedComments(article.comments)
    };
}


export function getNewestArticles(limit: number = 4) {
  return getArticles().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}

export function getPopularArticles(limit: number = 4) {
    return getArticles().filter(a => a.isPopular).slice(0, limit);
}

export function getDiscussions() {
    return discussions.map(d => ({
        ...d,
        author: {...d.author, avatarUrl: placeholderImages.find(p => p.id === d.author.avatarId)?.imageUrl },
        participants: d.participants.map(user => ({...user, avatarUrl: placeholderImages.find(p => p.id === user.avatarId)?.imageUrl})),
    }));
}

export function getDiscussionById(id: string) {
    const discussion = discussions.find(d => d.id === id);
    if (!discussion) return null;
    return {
        ...discussion,
        author: {...discussion.author, avatarUrl: placeholderImages.find(p => p.id === discussion.author.avatarId)?.imageUrl },
        posts: discussion.posts.map(post => ({...post, author: {...post.author, avatarUrl: placeholderImages.find(p => p.id === post.author.avatarId)?.imageUrl}}))
    }
}

export function getLearningResources() {
    return learningResources;
}

export function getStats(): Stats {
    return {
        articles: articles.length,
        discussions: discussions.length,
        resources: learningResources.length,
        users: users.length,
    }
}
