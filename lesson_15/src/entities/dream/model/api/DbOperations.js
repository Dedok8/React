import { db } from "@/shared/config/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  where,
} from "firebase/firestore/lite";
export class DbOperations {
  constructor(name) {
    this.collectionRef = collection(db, name);
  }

  async getAllPaginated({
    page = 1,
    perPage = 5,
    cursors = [],
    filters = {},
    sortOrder = "asc",
  }) {
    let q;
    const realLimit = perPage + 1;

    const { category } = filters;

    // Перша сторінка
    if (page === 1) {
      if (category) {
        // Якщо є категорія — додаємо where + сортування по year
        q = query(
          this.collectionRef,
          where("category", "==", category),
          orderBy("year", sortOrder),
          limit(realLimit)
        );
      } else {
        // Якщо нема категорії — просто сортування по year
        q = query(
          this.collectionRef,
          orderBy("year", sortOrder),
          limit(realLimit)
        );
      }
    }
    // Інші сторінки
    else {
      const cursor = cursors[page - 2];
      if (!cursor) throw new Error("Cursor not found");

      if (category) {
        q = query(
          this.collectionRef,
          where("category", "==", category),
          orderBy("year", sortOrder),
          startAfter(cursor),
          limit(realLimit)
        );
      } else {
        q = query(
          this.collectionRef,
          orderBy("year", sortOrder),
          startAfter(cursor),
          limit(realLimit)
        );
      }
    }

    const snapshot = await getDocs(q);
    const docs = snapshot.docs;

    const hasMore = docs.length > perPage;
    const data = docs.slice(0, perPage).map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const lastVisible = docs.length > 0 ? docs[perPage - 1] : null;

    return { data, cursor: lastVisible, hasMore };
  }

  async getById(id) {
    const snap = await getDoc(doc(this.collectionRef, id));
    return { id: snap.id, ...snap.data() };
  }

  async add(data) {
    await addDoc(this.collectionRef, data);
    return true;
  }
  async update(id, data) {
    await updateDoc(doc(this.collectionRef, id), data);
    return true;
  }
  async delete(id) {
    await deleteDoc(doc(this.collectionRef, id));
    return true;
  }

  async detail(id) {
    const ref = doc(this.collectionRef, id);
    const snap = await getDoc(ref);
    if (!snap.exists()) throw new Error("Документ не знайдено");
    return { id: snap.id, ...snap.data() };
  }
}
