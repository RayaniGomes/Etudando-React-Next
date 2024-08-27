// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Card from "@/components/Card";
import Topo from "../components/Topo";

function CaldDesc (valor: number, desconto: number) {
  return valor - desconto 
}

function CaldDesc2 (valor: number, desconto: number) {
  return valor - (desconto/2) 
}
export default function Home() {
  return (
    <main>
       <div>
        <Topo />
        <div style={testecss}>
          <div>Typescript</div>
          <div>Curso de react next</div>
          <div style={{ color: '#f00', backgroundColor: '#bbb'}}>React</div>
        </div>
        <div className="flex justify-center gap-3">
          <Card produto={'Mouse'} valor={49.90} desconto={10} funcao={CaldDesc}/>
          <Card produto={'Teclado'} valor={69.90} desconto={2} funcao={CaldDesc2}/>
          <Card produto={'Monitor'} valor={459.90} desconto={0} funcao={CaldDesc}/>
          <Card produto={'CPU'} valor={799.90} desconto={0} funcao={CaldDesc2}/>
        </div>
       </div>
    </main>
  );
}

const testecss = { 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'blue',
  fontSize: '30px',
  fontWeight: '500',
  backgroundColor: '#eee'
}
