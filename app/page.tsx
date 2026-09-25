'use client'

import { useState } from 'react'
import {
  Archive,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileArchive,
  FileCheck2,
  FileOutput,
  Files,
  FolderOpen,
  Grid2X2,
  History,
  Landmark,
  LockKeyhole,
  Menu,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  PenLine,
  ScanText,
  Scissors,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Stamp,
  Upload,
  UserRound,
  X,
} from 'lucide-react'

const tools = [
  { title: 'Gabungkan PDF', description: 'Satukan beberapa berkas menjadi satu dokumen.', icon: Files, tone: 'coral', tag: 'Sering digunakan' },
  { title: 'Pisahkan PDF', description: 'Ambil halaman tertentu dari dokumen PDF.', icon: Scissors, tone: 'amber', tag: 'Praktis' },
  { title: 'Kompres PDF', description: 'Kurangi ukuran berkas tanpa mengurangi kualitas.', icon: Archive, tone: 'violet', tag: 'Efisien' },
  { title: 'PDF ke Word', description: 'Ubah dokumen PDF menjadi format yang dapat diedit.', icon: FileOutput, tone: 'blue', tag: 'Konversi' },
  { title: 'Word ke PDF', description: 'Simpan dokumen Word sebagai PDF yang siap dibagikan.', icon: FileCheck2, tone: 'teal', tag: 'Konversi' },
  { title: 'Tanda Tangan PDF', description: 'Tambahkan tanda tangan secara lokal dan aman.', icon: PenLine, tone: 'pink', tag: 'Privasi tinggi' },
  { title: 'Pindai ke PDF', description: 'Ubah gambar hasil pemindaian menjadi PDF.', icon: ScanText, tone: 'indigo', tag: 'Dokumen' },
  { title: 'Beri Watermark', description: 'Lindungi dokumen dengan watermark instansi.', icon: Stamp, tone: 'slate', tag: 'Perlindungan' },
]

const recentFiles = [
  { name: 'Putusan_0123_Pdt.G_2026.pdf', action: 'Dikompres', size: '2.4 MB → 1.1 MB', time: 'Hari ini, 09.42', type: 'PDF' },
  { name: 'Surat_Panggilan_Tergugat.docx', action: 'Diubah ke PDF', size: '486 KB', time: 'Kemarin, 15.18', type: 'DOCX' },
  { name: 'Bukti_Surat_Tambahan.pdf', action: 'Digabung', size: '8 halaman', time: 'Kemarin, 11.06', type: 'PDF' },
]

function ToolWorkspace({ tool, onClose }: { tool: string; onClose: () => void }) {
  const isMerge = tool === 'Gabungkan PDF'
  const isSplit = tool === 'Pisahkan PDF'
  const isCompress = tool === 'Kompres PDF'
  const isSign = tool === 'Tanda Tangan PDF'
  const isWatermark = tool === 'Beri Watermark'
  const descriptions: Record<string, string> = {
    'Gabungkan PDF': 'Satukan beberapa dokumen PDF menjadi satu berkas.',
    'Pisahkan PDF': 'Pilih halaman yang ingin dipisahkan dari dokumen PDF.',
    'Kompres PDF': 'Kurangi ukuran dokumen agar lebih mudah disimpan dan dibagikan.',
    'PDF ke Word': 'Konversikan dokumen PDF menjadi dokumen Word yang dapat diedit.',
    'Word ke PDF': 'Ubah dokumen Word menjadi PDF secara lokal di perangkat Anda.',
    'Tanda Tangan PDF': 'Tambahkan tanda tangan ke dokumen tanpa mengunggahnya ke cloud.',
    'Pindai ke PDF': 'Gabungkan gambar hasil pemindaian menjadi dokumen PDF.',
    'Beri Watermark': 'Tambahkan watermark instansi untuk melindungi dokumen.',
    'Unggah dokumen': 'Pilih alat dokumen, lalu mulai memproses berkas secara lokal.',
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12202a]/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="tool-title">
      <div className="w-full max-w-[720px] overflow-hidden rounded-[26px] bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-[#edf0f2] px-7 py-6">
          <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1f6b45]">Mode lokal aktif</p><h2 id="tool-title" className="text-[24px] font-bold tracking-[-0.04em] text-[#162733]">{tool}</h2><p className="mt-2 text-[13px] text-[#7b8790]">{descriptions[tool] ?? 'Bekerja dengan dokumen Anda secara aman.'}</p></div>
          <button onClick={onClose} className="rounded-xl p-2 text-[#89939b] hover:bg-[#f2f6f4] hover:text-[#1f6b45]" aria-label="Tutup alat"><X /></button>
        </div>
        <div className="px-7 py-7">
            <label className="flex min-h-[190px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#b9d8c8] bg-[#f7fbf8] px-6 text-center transition hover:border-[#1f6b45] hover:bg-[#eef8f2]">
            <input type="file" className="sr-only" multiple={isMerge || isCompress} accept={isSign || isWatermark ? '.pdf' : undefined} />
            <span className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#e1f1e7] text-[#1f6b45]"><Upload /></span>
            <span className="text-[14px] font-bold text-[#30414b]">Tarik dan lepas berkas di sini</span><span className="mt-1 text-[12px] text-[#89959d]">atau klik untuk memilih dari perangkat</span><span className="mt-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#1f6b45] shadow-sm">Berkas tidak keluar dari komputer Anda</span>
          </label>
          {isSign && <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl border border-[#dfe6e2] bg-white p-4 transition hover:border-[#1f6b45]"><span className="flex size-10 items-center justify-center rounded-lg bg-[#e8f3ed] text-[#1f6b45]"><PenLine /></span><span className="flex-1"><span className="block text-[12px] font-bold text-[#30414b]">Unggah gambar tanda tangan</span><span className="mt-1 block text-[10px] text-[#89959d]">PNG transparan atau JPG · diproses lokal</span></span><Upload className="text-[#1f6b45]" /><input type="file" className="sr-only" accept="image/png,image/jpeg" /></label>}
          {(isSplit || isSign || isWatermark) && <div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-[11px] font-bold text-[#53636c]">{isSplit ? 'Halaman yang diambil' : isSign ? 'Posisi tanda tangan' : 'Teks watermark'}<input placeholder={isSplit ? 'Contoh: 1-3, 7' : isSign ? 'Pilih setelah berkas dimuat' : 'Pengadilan Agama ...'} className="h-11 rounded-xl border border-[#dfe6e2] bg-white px-3 text-[12px] font-medium outline-none focus:border-[#1f6b45]" /></label><div className="flex flex-col justify-end"><button className="h-11 rounded-xl bg-[#1f6b45] text-[12px] font-bold text-white transition hover:bg-[#155239]">{isSplit ? 'Pisahkan halaman' : isSign ? 'Tambahkan tanda tangan' : 'Terapkan watermark'}</button></div></div>}
          {isCompress && <div className="mt-5 flex items-center justify-between rounded-xl bg-[#f4f8f5] px-4 py-3 text-[12px] text-[#5f7068]"><span className="font-bold">Tingkat kompresi</span><select className="rounded-lg border border-[#dfe6e2] bg-white px-3 py-2 text-[12px] font-semibold text-[#1f6b45]"><option>Seimbang</option><option>Ukuran terkecil</option><option>Kualitas terbaik</option></select></div>}
        </div>
        <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#fbfcfc] px-7 py-4"><p className="flex items-center gap-2 text-[11px] font-semibold text-[#6f7f78]"><ShieldCheck className="text-[#1f6b45]" /> Pemrosesan offline dan aman</p><button onClick={onClose} className="rounded-xl border border-[#dfe6e2] px-4 py-2 text-[12px] font-bold text-[#52635b] hover:bg-white">Batal</button></div>
      </div>
    </div>
  )
}

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('beranda')

  const goToSection = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#15232f]">
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-[#1d6547] bg-[#155239] text-white transition-all lg:static lg:translate-x-0 ${sidebarCollapsed ? 'w-[78px]' : 'w-[260px]'} ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className={`relative flex h-[78px] items-center overflow-hidden border-b border-[#1d6547] ${sidebarCollapsed ? 'justify-center px-3' : 'justify-between px-6'}`}>
            <Landmark aria-hidden="true" className="pointer-events-none absolute -right-3 -bottom-5 size-24 text-white/[0.06]" />
            <div className="pointer-events-none absolute -right-1 top-2 size-14 rounded-full border border-white/[0.08]" aria-hidden="true" />
            <div className="relative flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1f6b45] text-white shadow-sm"><Landmark /></div>
              {!sidebarCollapsed && <div><p className="text-[15px] font-bold tracking-[-0.02em]">RuangBerkas</p><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b9d8c8]">Pengadilan Agama</p></div>}
            </div>
            <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-1 text-[#89939d] lg:hidden" aria-label="Tutup menu"><X /></button>
          </div>
          <nav className={`flex-1 py-6 ${sidebarCollapsed ? 'px-3' : 'px-4'}`} aria-label="Navigasi utama">
            {!sidebarCollapsed && <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b9d8c8]">Workspace</p>}
            <div className="flex flex-col gap-1">
              <button onClick={() => goToSection('beranda')} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-bold transition ${activeSection === 'beranda' ? 'bg-[#e8f3ed] text-[#1f6b45]' : 'text-[#d0e5d9] hover:bg-[#1b6545]'} ${sidebarCollapsed ? 'justify-center' : ''}`}><Grid2X2 /> {!sidebarCollapsed && 'Beranda'}</button>
              <button onClick={() => goToSection('alat')} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition ${activeSection === 'alat' ? 'bg-[#e8f3ed] text-[#1f6b45]' : 'text-[#d0e5d9] hover:bg-[#1b6545]'} ${sidebarCollapsed ? 'justify-center' : ''}`}><Sparkles /> {!sidebarCollapsed && 'Semua alat PDF'}</button>
              <button onClick={() => goToSection('riwayat')} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition ${activeSection === 'riwayat' ? 'bg-[#e8f3ed] text-[#1f6b45]' : 'text-[#d0e5d9] hover:bg-[#1b6545]'} ${sidebarCollapsed ? 'justify-center' : ''}`}><History /> {!sidebarCollapsed && 'Riwayat pekerjaan'}</button>
            </div>
            {!sidebarCollapsed && <p className="px-3 pb-3 pt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b9d8c8]">Instansi</p>}
            <div className="flex flex-col gap-1">
              <button onClick={() => goToSection('template')} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition ${activeSection === 'template' ? 'bg-[#e8f3ed] text-[#1f6b45]' : 'text-[#d0e5d9] hover:bg-[#1b6545]'} ${sidebarCollapsed ? 'justify-center' : ''}`}><FolderOpen /> {!sidebarCollapsed && 'Template dokumen'}</button>
              <button onClick={() => goToSection('pengaturan')} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition ${activeSection === 'pengaturan' ? 'bg-[#e8f3ed] text-[#1f6b45]' : 'text-[#d0e5d9] hover:bg-[#1b6545]'} ${sidebarCollapsed ? 'justify-center' : ''}`}><Settings2 /> {!sidebarCollapsed && 'Pengaturan'}</button>
            </div>
          </nav>
          {!sidebarCollapsed && <div className="m-4 rounded-2xl bg-[#f4f7f8] p-4">
            <div className="mb-3 flex items-center gap-2 text-[#277b72]"><ShieldCheck /><span className="text-[12px] font-bold">Mode lokal aktif</span></div>
            <p className="text-[11px] leading-relaxed text-[#74808a]">Berkas diproses di perangkat ini. Tidak ada dokumen yang diunggah ke internet.</p>
          </div>}
          <div className={`flex items-center gap-3 border-t border-[#1d6547] py-4 ${sidebarCollapsed ? 'justify-center px-3' : 'px-5'}`}><div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e7f2eb] text-[#1f6b45]"><UserRound /></div>{!sidebarCollapsed && <div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold text-white">Admin Kepaniteraan</p><p className="text-[10px] text-[#b9d8c8]">Pengadilan Agama</p></div>}{!sidebarCollapsed && <ChevronDown className="text-[#b9d8c8]" />}</div>
        </aside>
        {sidebarOpen && <button className="fixed inset-0 z-30 bg-[#12202a]/20 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Tutup navigasi" />}

        <section className="min-w-0 flex-1">
          <header className="flex h-[78px] items-center justify-between border-b border-[#e5e8ec] bg-white/90 px-5 backdrop-blur md:px-9">
            <div className="flex items-center gap-2"><button onClick={() => setSidebarOpen(true)} className="rounded-lg p-2 text-[#6d7882] lg:hidden" aria-label="Buka menu"><Menu /></button><button onClick={() => setSidebarCollapsed((collapsed) => !collapsed)} className="hidden rounded-lg p-2 text-[#6d7882] hover:bg-[#e8f3ed] hover:text-[#1f6b45] lg:flex" aria-label={sidebarCollapsed ? 'Perlebar navigasi' : 'Ciutkan navigasi'} title={sidebarCollapsed ? 'Perlebar navigasi' : 'Ciutkan navigasi'}>{sidebarCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}</button></div>
            <div className="relative hidden w-full max-w-[340px] md:block"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa3ab]" /><input aria-label="Cari alat atau dokumen" placeholder="Cari alat atau dokumen..." className="h-10 w-full rounded-xl border border-[#e4e8eb] bg-[#fafbfc] pl-10 pr-4 text-[12px] outline-none placeholder:text-[#a4adb5] focus:border-[#1f6b45]" /></div>
            <div className="flex items-center gap-3"><span className="hidden items-center gap-2 rounded-full bg-[#eff8f5] px-3 py-2 text-[11px] font-bold text-[#277b72] sm:flex"><span className="size-2 rounded-full bg-[#48ae91]" /> Aman & lokal</span><button className="flex size-9 items-center justify-center rounded-full bg-[#e8f3ed] text-[#1f6b45]" aria-label="Profil pengguna"><UserRound /></button></div>
          </header>

          <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-9 lg:py-10">
            <div id="beranda" className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1f6b45]">Selamat pagi, Admin</p><h1 className="text-[30px] font-bold tracking-[-0.04em] text-[#162733] md:text-[36px]">Apa yang ingin Anda kerjakan?</h1><p className="mt-2 text-[14px] text-[#7b8790]">Kelola dokumen perkara dengan aman, langsung dari perangkat Anda.</p></div><button onClick={() => setActiveTool('Unggah dokumen')} className="flex items-center justify-center gap-2 rounded-xl bg-[#1f6b45] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(31,107,69,0.2)] transition hover:bg-[#155239]"><Upload /> Unggah dokumen</button></div>

            <div className="mb-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
              <div className="relative overflow-hidden rounded-[22px] bg-[#183c48] p-7 text-white md:p-9"><div className="relative z-10 max-w-[430px]"><div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white/10"><LockKeyhole /></div><h2 className="text-[25px] font-bold leading-tight tracking-[-0.03em] md:text-[29px]">Dokumen Anda tetap<br /><span className="text-[#b8e4d8]">di ruang Anda.</span></h2><p className="mt-4 max-w-[380px] text-[13px] leading-relaxed text-[#b3c8cb]">RuangBerkas memproses file secara lokal di komputer kantor. Tidak ada data sensitif yang meninggalkan jaringan Anda.</p><button onClick={() => setActiveTool('Pelajari keamanan')} className="mt-6 flex items-center gap-2 text-[12px] font-bold text-[#b8e4d8]">Pelajari cara kerjanya <ArrowRight /></button></div><div className="absolute -right-10 -top-20 size-64 rounded-full border-[32px] border-white/[0.04]" /><div className="absolute -bottom-28 right-20 size-64 rounded-full border-[32px] border-white/[0.04]" /></div>
              <div className="rounded-[22px] border border-[#e8ebed] bg-white p-7"><div className="mb-6 flex items-center justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#929ba2]">Aktivitas bulan ini</p><p className="mt-2 text-[29px] font-bold tracking-[-0.04em]">128 <span className="text-[12px] font-medium text-[#48a388]">+18%</span></p></div><div className="flex size-11 items-center justify-center rounded-2xl bg-[#e8f3ed] text-[#1f6b45]"><FileCheck2 /></div></div><div className="flex h-[72px] items-end gap-2">{[32,44,38,55,47,68,52,78,61,85,74,92,68,88].map((height, index) => <div key={index} className={`flex-1 rounded-t-md ${index === 13 ? 'bg-[#1f6b45]' : 'bg-[#8fc9ab]'}`} style={{ height: `${height}%` }} />)}</div><p className="mt-4 text-[11px] text-[#9aa3aa]">Pekerjaan selesai tanpa unggah data ke cloud</p></div>
            </div>

            <div id="alat" className="mb-10"><div className="mb-5 flex items-end justify-between"><div><h2 className="text-[20px] font-bold tracking-[-0.03em]">Alat dokumen</h2><p className="mt-1 text-[12px] text-[#89939b]">Pilih alat untuk mulai bekerja dengan dokumen Anda.</p></div><button className="hidden items-center gap-1 text-[12px] font-bold text-[#1f6b45] sm:flex">Lihat semua <ArrowRight /></button></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{tools.map((tool) => { const Icon = tool.icon; return <button key={tool.title} onClick={() => setActiveTool(tool.title)} className="group flex min-h-[156px] flex-col rounded-2xl border border-[#e6eaed] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[#1f6b45]/40 hover:shadow-[0_10px_25px_rgba(35,56,67,0.07)]"><div className="mb-5 flex items-start justify-between"><span className={`tool-icon ${tool.tone}`}><Icon /></span><span className="rounded-md bg-[#f6f7f8] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#98a1a8]">{tool.tag}</span></div><p className="text-[14px] font-bold text-[#243642]">{tool.title}</p><p className="mt-1 text-[11px] leading-relaxed text-[#8a959d]">{tool.description}</p></button> })}</div></div>

            <div id="riwayat" className="rounded-[22px] border border-[#e6eaed] bg-white"><div className="flex items-center justify-between border-b border-[#edf0f2] px-6 py-5"><div><h2 className="text-[18px] font-bold tracking-[-0.03em]">Pekerjaan terbaru</h2><p className="mt-1 text-[11px] text-[#909aa2]">Dokumen yang baru saja diproses di perangkat ini.</p></div><button className="hidden items-center gap-1 text-[12px] font-bold text-[#1f6b45] sm:flex">Lihat riwayat <ArrowRight /></button></div><div className="divide-y divide-[#f0f2f3]">{recentFiles.map((file) => <div key={file.name} className="flex items-center gap-4 px-6 py-4"><div className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-[9px] font-bold ${file.type === 'PDF' ? 'bg-[#fff0ef] text-[#1f6b45]' : 'bg-[#eef5ff] text-[#5284d0]'}`}>{file.type}</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold text-[#30414b]">{file.name}</p><p className="mt-1 text-[10px] text-[#9ba4aa]">{file.action} · {file.size}</p></div><div className="hidden text-right sm:block"><p className="text-[10px] text-[#8f999f]">{file.time}</p><div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-bold text-[#4a9b7d]"><CheckCircle2 /> Selesai</div></div><button className="rounded-lg p-2 text-[#a0a9ae] hover:bg-[#f7f8f9]" aria-label={`Opsi ${file.name}`}><MoreHorizontal /></button></div>)}</div></div>
            <div id="template" className="mt-10 rounded-[22px] border border-[#e6eaed] bg-white p-6"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-[20px] font-bold tracking-[-0.03em]">Template dokumen</h2><p className="mt-1 text-[12px] text-[#89939b]">Simpan format surat yang sering digunakan kantor.</p></div><button onClick={() => setActiveTool('Unggah dokumen')} className="flex items-center gap-2 rounded-xl bg-[#1f6b45] px-4 py-2.5 text-[11px] font-bold text-white"><Upload /> Tambah template</button></div><div className="grid gap-3 md:grid-cols-3"><div className="rounded-xl border border-dashed border-[#b9d8c8] bg-[#f7fbf8] p-5"><p className="text-[13px] font-bold text-[#30414b]">Surat Panggilan</p><p className="mt-1 text-[11px] text-[#89939b]">Template DOCX · terakhir diperbarui hari ini</p></div><div className="rounded-xl border border-dashed border-[#b9d8c8] bg-[#f7fbf8] p-5"><p className="text-[13px] font-bold text-[#30414b]">Penetapan Majelis</p><p className="mt-1 text-[11px] text-[#89939b]">Template DOCX · terakhir diperbarui kemarin</p></div><div className="rounded-xl border border-dashed border-[#b9d8c8] bg-[#f7fbf8] p-5"><p className="text-[13px] font-bold text-[#30414b]">Putusan Perkara</p><p className="mt-1 text-[11px] text-[#89939b]">Template DOCX · terakhir diperbarui 2 hari lalu</p></div></div></div>
            <div id="pengaturan" className="mt-10 rounded-[22px] border border-[#e6eaed] bg-white p-6"><div className="mb-6"><h2 className="text-[20px] font-bold tracking-[-0.03em]">Pengaturan</h2><p className="mt-1 text-[12px] text-[#89939b]">Sesuaikan ruang kerja lokal untuk kebutuhan instansi.</p></div><div className="grid gap-4 md:grid-cols-2"><label className="flex flex-col gap-2 text-[11px] font-bold text-[#53636c]">Nama instansi<input defaultValue="Pengadilan Agama" className="h-11 rounded-xl border border-[#dfe6e2] px-3 text-[12px] outline-none focus:border-[#1f6b45]" /></label><label className="flex flex-col gap-2 text-[11px] font-bold text-[#53636c]">Folder keluaran<input defaultValue="Dokumen/RuangBerkas" className="h-11 rounded-xl border border-[#dfe6e2] px-3 text-[12px] outline-none focus:border-[#1f6b45]" /></label></div><button className="mt-5 rounded-xl bg-[#1f6b45] px-4 py-2.5 text-[11px] font-bold text-white">Simpan pengaturan</button></div>
          </div>
        </section>
      </div>
      {activeTool && <ToolWorkspace tool={activeTool} onClose={() => setActiveTool(null)} />}
    </main>
  )
}
