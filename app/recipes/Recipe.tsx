export default function Recipe() {
    return (
        <div className="flex flex-col justify-around items-center bg-slate-200 rounded-lg shadow-xl m-5 p-2">
            <img 
                className="w-96 h-96 rounded-t-xl" 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
                alt="Recipe"
            />
            <p className="text-lg font-bold text-slate-600">Teste</p>
            <ol className="list-none">
                <li className="text-sm font-bold text-slate-600">Ingrediente de Teste</li>
            </ol>
        </div>
    )
}