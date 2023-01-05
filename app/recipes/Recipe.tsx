export default function Recipe({ recipe }: any) {
    return (
        <div 
            className="flex flex-col justify-around items-center bg-slate-200 rounded-lg shadow-xl m-5 p-2" 
            key={recipe.label}
        >
            <a href={recipe.url} target="_blank">
                <img className="w-96 h-96 rounded-t-xl" src={recipe.image} alt={recipe.label} />
            </a>

            <p className="text-lg font-bold text-slate-600">{recipe.label}</p>
            <ol className="list-none">
                {recipe.ingredientLines.map((ingredient: any) => (
                    <li className="text-sm font-bold text-slate-600">{ingredient}</li>
                ))}
            </ol>
        </div>
    )
}
