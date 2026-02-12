import { supabase } from "@/utils/supabase";

export const addFavorite = async (bookId: string) => {
  const { error } = await supabase.from("favorites").insert({
    book_id: bookId,
  });

  if (error) throw error;
};

export const getFavorites = async () => {
  const { data, error } = await supabase
    .from("favorites")
    .select(`
      id,
      books (
        id,
        title,
        price,
        image
      )
    `);

  if (error) throw error;
  return data;
};

export const removeFavorite = async (favoriteId: number) => {
  const { error } = await supabase
    .from("favorites")
    .delete()
    .eq("id", favoriteId);

  if (error) throw error;
};

