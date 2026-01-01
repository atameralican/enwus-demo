# ENWUS Demo 🚀

🌐 **Live Demo:** https://enwus-demo.vercel.app/  
📦 **Repository:** https://github.com/atameralican/enwus-demo

ENWUS Demo, modern frontend ihtiyaçlarını hedefleyen;  
**harita, PDF görüntüleme, carousel, lazy loading ve merkezi routing mimarisi** vb. teknolojileri içeren bir React projesidir.

---

## 🛠️ Teknoloji Stack

### ⚙️ Core
- **React 19**
- **React Router DOM v7**
- **Vite**
- **JavaScript (ES6+)**

### 🎨 UI & UX
- **Bootstrap 5**
- **React Bootstrap**
- **React Icons**
- **React Slick / Slick Carousel**

### 🗺️ Map & Media
- **Leaflet**
- **React Leaflet**
- **@react-pdf-viewer/core**
- **pdfjs-dist**

### 🔍 Code Quality
- **ESLint**
- **React Hooks linting**
- **Modern module-based yapı (ESM)**

### ☁️ Deployment
- **Vercel**

---

## 🧱 Mimari & Teknik Yaklaşım

### 🔹 Routing Mimarisi
- Route’lar merkezi bir `routes` konfigürasyonu üzerinden yönetilir
- Dinamik ve genişletilebilir route yapısı
- 404 yönlendirmeleri ve default route kontrolü

### 🔹 Layout Pattern
- Tüm sayfalar ortak bir **CoreLayout** ile sarılmıştır
- Route bazlı:
  - Banner görseli
  - Başlık
  - Açıklama metni
  - Küçük başlık (subtitle) desteği

### 🔹 Performans
- `React.lazy` + `Suspense` ile **sayfa bazlı lazy loading**
- Özel loading ekranı (Bootstrap spinner’ları ile)
- Code splitting

### 🔹 UX İyileştirmeleri
- Route değişimlerinde otomatik scroll reset
- Responsive tasarım
- Harita ve PDF gibi ağır bileşenlerin kontrollü yüklenmesi

---

## 🚀 Local Çalıştırma

```bash
git clone https://github.com/atameralican/enwus-demo.git
cd enwus-demo
npm install
npm run dev

👤 Geliştirici

Alican Atamer
Frontend Developer

GitHub: https://github.com/atameralican

Linkedin: https://www.linkedin.com/in/alican-atamer/

