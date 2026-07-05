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
  apiKey: "AIzaSyB674t6fiJ8HT9ENfeS3Vzv-BSGQTQ-3BI",
  authDomain: "rapi-dev-43ddf.firebaseapp.com",
  projectId: "rapi-dev-43ddf",
  storageBucket: "rapi-dev-43ddf.firebasestorage.app",
  messagingSenderId: "392684134756",
  appId: "1:392684134756:web:6ef9ed85f4fb29db29da71"
};

// Passcode buat masuk ke admin.html (bukan security utama, cuma gerbang tampilan)
// Keamanan asli ada di Firestore Rules (lihat firestore.rules) + Firebase Anonymous Auth
const ADMIN_PASSCODE = "gantipasswordini";

// Info channel TikTok yang ditampilkan di web & di card
const TIKTOK_HANDLE = "@incu.ema33";
const TIKTOK_URL = "https://www.tiktok.com/@incu.ema33";
const CHANNEL_NAME = "INCU EMA";
