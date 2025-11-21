import db from "@/shared/config/firebase-config";
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
  setDoc,
} from "firebase/firestore/lite";

class DbOperations {
  // --- CARTS SPECIALIZED METHODS ---
  async getCartByUserId(userId) {
    const snap = await getDoc(doc(this.collectionRef, userId));
    if (!snap.exists()) return {};
    return snap.data();
  }

  async setCartByUserId(userId, cartObj) {
    await setDoc(doc(this.collectionRef, userId), cartObj);
    return true;
  }

  async updateCartProduct(userId, productId, productData) {
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: productData,
    });
    return true;
  }

  async removeCartProduct(userId, productId) {
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: null,
    });
    return true;
  }

  constructor(name) {
    this.collectionRef = collection(db, name);
  }

  async getAll() {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
    let q;
    const realLimit = perPage + 1;
    if (page === 1) {
      q = query(this.collectionRef, orderBy("title"), limit(realLimit));
    } else {
      const cursor = cursors[page - 2];
      if (!cursor) throw new Error("Cursor not found");
      q = query(
        this.collectionRef,
        orderBy("title"),
        startAfter(cursor),
        limit(realLimit)
      );
    }
    const snapshot = await getDocs(q);
    const docs = snapshot.docs;
    const hasMore = docs.length > perPage;
    const data = docs
      .slice(0, perPage)
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    const lastVisible = docs[docs.length - 2] || null;
    return { data, cursor: lastVisible, hasMore };
  }

  async getById(id) {
    const snap = await getDoc(doc(this.collectionRef, id));
    return { id: snap.id, ...snap.data() };
  }

  async setWithId(id, data) {
    await setDoc(doc(this.collectionRef, id), data);
    return true;
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

  // --- FAVORITES METHODS ---
  _cleanObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }

  async addToFavorites(userId, favorite) {
    try {
      if (!favorite?.id) {
        throw new Error("Favorite must have an id");
      }

      const snap = await getDoc(doc(this.collectionRef, userId));
      const currentFavorites = snap.exists() ? snap.data() : {};

      // Очищаем от undefined значений
      const cleanFavorite = this._cleanObject(favorite);

      const updatedFavorites = {
        ...currentFavorites,
        [favorite.id]: cleanFavorite,
      };

      await setDoc(doc(this.collectionRef, userId), updatedFavorites);
      return true;
    } catch (error) {
      console.error("Error adding to favorites:", error);
      throw error;
    }
  }

  async removeFromFavorites(userId, productId) {
    try {
      const snap = await getDoc(doc(this.collectionRef, userId));
      if (!snap.exists()) return false;

      const currentFavorites = snap.data();
      if (!(productId in currentFavorites)) return false;

      delete currentFavorites[productId];

      await setDoc(doc(this.collectionRef, userId), currentFavorites);
      return true;
    } catch (error) {
      console.error("Error removing from favorites:", error);
      throw error;
    }
  }

  async getFavoritesByUserId(userId) {
    try {
      const snap = await getDoc(doc(this.collectionRef, userId));
      if (!snap.exists()) {
        await setDoc(doc(this.collectionRef, userId), {});
        return {};
      }
      return snap.data();
    } catch (error) {
      console.error("Error getting favorites:", error);
      return {};
    }
  }
}

export default DbOperations;
