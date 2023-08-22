import Link from "next/link"
export default function NavBar({ active }){
    return(
        <nav className="bg-cyan-800 flex justify-between items-center ">
        <ul id="links" className=" 2xl flex gap-24 py-10 px-10 items-center text-green-400">
          <li><h1 className="text-stone-black text-4xl">Group<br></br>Work</h1></li>
          <li><Link className={active=="home" && "text-slate-300"} href="/">Inicio</Link></li>
          <li><Link className={active=="cadastro" && "text-slate-300"} href="/cadastro">Cadastro</Link></li>
          <li><Link className={active=="login" && "text-slate-300"} href="/login">Login</Link></li>
          <li><Link className={active=="quadro" && "text-slate-300"} href="/quadro">Quadro de Notas</Link></li>
          </ul>
  
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/120" alt="imagem do 
          usuario"/>
        </div>
      </nav>
    )
}

