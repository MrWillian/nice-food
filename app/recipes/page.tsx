"use client"
import { useEffect, useRef, useState } from "react";
import { searchRecipes } from "../../lib/search-recipes";
import Recipe from "./Recipe";

export default function Recipes() {
    const [ recipes, setRecipes ] = useState<any>([]);
    const [ query, setQuery ] = useState('');
    const searchInputElement = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchInputElement.current) searchInputElement.current.focus();
    }, []);

    const handleSearch = async () => {
        const data = await searchRecipes(query);
        setRecipes(data);
    }

    return (
        <div className="flex items-center flex-col">
            <div className="flex items-center m-2 gap-4">
                <input 
                    className="w-3/4 h-10 border-solid border-current rounded p-2 text-xl font-bold"
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    ref={searchInputElement}
                />
                <button 
                    className="w-1/4 h-10 rounded bg-slate-900 p-1"
                    onClick={handleSearch}
                >
                    <span className="text-sm font-bold text-white">Pesquisar</span>
                </button>
            </div>
            <h1 className="text-xl text-white font-bold">Receitas</h1>
            <div className="flex justify-around flex-wrap gap-2 mx-3 my-2 rounded-t-xl rounded-b">
                {recipes ? recipes.hits?.map((recipe: any) => (
                    <Recipe recipe={recipe.recipe} />
                ))
                : <div>Nenhum resultado...</div>
                }
            </div>
        </div>
    );
}
