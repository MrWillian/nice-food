export async function searchRecipes(query: string) {
    const API_ID = process.env.NEXT_PUBLIC_API_ID;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    if (!query) return null;

    const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await response.json();
    return data;
}
