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

- `Paketler` sayfasındaki `Satın Al` butonları `#/odeme` sayfasına yönlendirir.
- `server/index.mjs`, seçilen pakete göre PayTR token üretir (`POST /api/paytr/token`).
- Frontend, gelen token ile PayTR iFrame ekranını açar.
- PayTR callback'i `POST /api/paytr/callback` endpoint'ine düşer ve hash doğrulaması yapılır.
- Başarılı/başarısız dönüş kullanıcıya `#/odeme-sonuc` sayfasında gösterilir.

## Build

Production build oluşturmak için:
```bash
npm run build
```

Preview için:
```bash
npm run preview
```
