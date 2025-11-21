// Імпорт основних функцій Firebase SDK
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Конфігурація Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Ініціалізація Firebase App
const app = initializeApp(firebaseConfig)
// Експорт об'єкта авторизації Firebase
export const auth = getAuth(app)
// Експорт Firestore (база даних)
export const db = getFirestore(app)
// Провайдер Google для авторизації через Google-акаунт
export const googleProvider = new GoogleAuthProvider()
// Експорт бази даних за замовчуванням
export default db
