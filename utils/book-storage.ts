// utils/storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Book } from "./types";

const STORAGE_KEY = "BOOKS_V1"; // ถ้าปรับ schema ให้เปลี่ยน key

export const getBooks = async (): Promise<Book[]> => {
    try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) as Book[] : [];
    } catch (e) {
        console.error("getBooks error", e);
        return [];
    }
};

export const addBook = async (book: Book): Promise<void> => {
    try {
        const books = await getBooks();
        books.push(book);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    } catch (e) {
        console.error("addBook error", e);
    }
};

export const updateBook = async (updated: Book): Promise<void> => {
    try {
        const books = await getBooks();
        const next = books.map(b => (b.id === updated.id ? updated : b));
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
        console.error("updateBook error", e);
    }
};

export const deleteBook = async (id: string): Promise<void> => {
    try {
        const books = await getBooks();
        const next = books.filter(b => b.id !== id);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
        console.error("deleteBook error", e);
    }
};