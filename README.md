# Trendmax E-Ticaret Çözümleri

Yeni nesil e-ticaret altyapısı için modern web uygulaması.

## Projeyi Çalıştırma

**Gereksinimler:** Node.js

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. PayTR ayarları için örnek ortam dosyasını kopyalayın:
   ```bash
   cp .env.example .env
   ```

3. `.env` içindeki `PAYTR_*` alanlarını mağaza bilgilerinizle doldurun.

4. Geliştirme sunucularını başlatın:
   ```bash
   npm run dev
   ```

5. Tarayıcınızda `http://localhost:3000` adresini açın

## PayTR Entegrasyon Akışı

- `Paketler` sayfasındaki `Satın Al` butonları `/odeme` sayfasına yönlendirir.
- `server/index.mjs`, seçilen pakete göre PayTR token üretir (`POST /api/paytr/token`).
- Frontend, gelen token ile PayTR iFrame ekranını açar.
- PayTR callback'i `POST /api/paytr/callback` endpoint'ine düşer; hash doğrulanır ve işlem kalıcı sipariş kaydına işlenir.
- Başarılı/başarısız dönüş sayfası URL parametresine güvenmez; sipariş sonucunu sunucu üzerinden doğrular.
- PayTR Mağaza Paneli'ndeki **Bildirim URL** canlı HTTPS adresindeki `/api/paytr/callback` olarak tanımlanmalıdır.
- Canlı ortamda `PAYTR_ALLOWED_ORIGINS`, `PAYTR_OK_URL` ve `PAYTR_FAIL_URL` gerçek alan adıyla güncellenmelidir.
- Varsayılan dosya tabanlı sipariş deposu tek sunucu içindir. Birden fazla sunucu örneğinde ortak ve kalıcı bir veri tabanı kullanılmalıdır.

## Build

Production build oluşturmak için:
```bash
npm run build
```

Build sırasında `sitemap.xml` güncellenir ve indekslenebilir rotalar için sayfa bazlı SEO başlıkları oluşturulur. Uygulama temiz URL kullandığı için barındırma katmanının bilinmeyen uygulama rotalarını `index.html` dosyasına yönlendirmesi gerekir. Bu proje Netlify/Cloudflare Pages uyumlu `_redirects` dosyasını içerir; aynı sunucuda yayın için build sonrasında `npm start` kullanılabilir.

Tip ve ödeme güvenliği kontrolleri için:
```bash
npm run typecheck
npm test
```

Preview için:
```bash
npm run preview
```
