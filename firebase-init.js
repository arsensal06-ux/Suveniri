// firebase-init.js
// Импорт Firebase модулей
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Конфигурация Firebase (ваши данные)
const firebaseConfig = {
  apiKey: "AIzaSyDNakAqvswLoNykV_ZAJiy2YgxPB9jriMk",
  authDomain: "kubansuvenir.firebaseapp.com",
  projectId: "kubansuvenir",
  storageBucket: "kubansuvenir.firebasestorage.app",
  messagingSenderId: "606434546277",
  appId: "1:606434546277:web:d14fff0ed7d42705b56c8c"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Делаем доступным глобально (для использования в других скриптах)
window.db = db;
window.auth = auth;
window.firebaseHelpers = {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy
};

console.log('Firebase инициализирован успешно!');