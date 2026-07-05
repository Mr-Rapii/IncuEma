// ============================================
// KONFIGURASI FIREBASE — TANYA INCU EMA
// ============================================
// Ganti semua nilai di bawah ini dengan config project Firebase kamu.
// Ambil dari: Firebase Console > Project Settings > General > Your apps > SDK setup and configuration
//
// Kalau kamu udah punya project Firebase lain (misal rapi-dev-43ddf),
// kamu bisa bikin project BARU khusus buat ini, atau pakai project yang sama
// tapi collection-nya beda ("questions") jadi ga akan bentrok sama rapiTeamMembers.

const firebaseConfig = {
  apiKey: "AIzaSyBJJjcICAkbVWjrw5-zYMzcKqPGhS0nS0I",
  authDomain: "piwstore.firebaseapp.com",
  projectId: "piwstore",
  storageBucket: "piwstore.firebasestorage.app",
  messagingSenderId: "419258630997",
  appId: "1:419258630997:web:aefc0e34cc4b7ca16d25dc"
};
// Passcode buat masuk ke admin.html (bukan security utama, cuma gerbang tampilan)
// Keamanan asli ada di Firestore Rules (lihat firestore.rules) + Firebase Anonymous Auth
const ADMIN_PASSCODE = "rapiganteng";

// Info channel TikTok yang ditampilkan di web & di card
const TIKTOK_HANDLE = "@incu.ema33";
const TIKTOK_URL = "https://www.tiktok.com/@incu.ema33";
const CHANNEL_NAME = "INCU EMA";
