function Filtrar({search, setSearch, filtro,setfiltro}) {
    return(
        <>
        <div className="filtrar">
            <h2>filtrar</h2>
            <div className="conteudo">
                <input type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite algo para filtrar..."/>
                <select onChange={(e) => setfiltro(e.target.value)} value={filtro}>
                    <option value="Todos">Todos</option>
                    <option value="Concluido">Concluido</option>
                    <option value="Pendentes">Pendentes</option>
                </select>
                        <button>Crescente</button>
                        <button>Decrescente</button>
                   
            </div>
        </div>
       
        </>
    )
}
export default Filtrar;