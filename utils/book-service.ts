import { File } from 'expo-file-system';
import { supabase } from './supabase';
import { Book } from './types';
// import * as FileSystem from 'expo-file-system';

// ดึงข้อมูลทั้งหมด
export async function getBooksDatabase(): Promise<Book[]> {
  const { data, error } = await supabase.from('books').select('*');
  if (error) throw error;
  return data || [];
}

// ดึงข้อมูลตาม id
export async function getBookByIdDatabase(id: string): Promise<Book | null> {
  const { data, error } = await supabase.from('books').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

// เพิ่มข้อมูลใหม่
export async function addBookDatabase(book: Book) {
  const { data, error } = await supabase.from('books').insert([book]);
  if (error) throw error;
  return data;
}

// อัปเดตข้อมูล
export async function updateBookDatabase(id: string, book: Partial<Book>) {
  const { data, error } = await supabase.from('books').update(book).eq('id', id);
  if (error) throw error;
  return data;
}

// ลบข้อมูล
export async function deleteBookDatabase(id: string) {
  const { data, error } = await supabase.from('books').delete().eq('id', id);
  if (error) throw error;
  return data;
}

// upload รูปภาพ ไปยัง Supabase Storage
export async function uploadBookImage(uri: string): Promise<string> {
  const filePath = `public/${Date.now()}_${uri.split('/').pop()}`; // unique file path

  // 1. Read the image file
  const file = new File(uri);
  // 2. convert file to array buffer
  const arrayBuffer = await file.arrayBuffer();

  // 3. get meme type of file
  // const extension = uri.split('.').pop();
  // const inferredType = `image/${extension}`;
  const inferredType = file.type; // e.g., "image/jpeg"

  // 4. Upload the ArrayBuffer to Supabase Storage
  const { data, error } = await supabase.storage.from('book-images').upload(filePath, arrayBuffer, {
    contentType: inferredType, // adjust based on your image type
    upsert: false,
  });
  // console.log("Upload response data:", data);
  // console.log("Upload response error:", error);
  if (error) throw error;
  const { data: publicUrlData } = supabase.storage.from('book-images').getPublicUrl(data.path);
  const publicUrl = publicUrlData.publicUrl;
  if (!publicUrl) throw new Error('Failed to get public URL');
  // 5. Return the public URL of the uploaded image
  return publicUrl;
} 