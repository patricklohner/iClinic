import React from 'react';
import Link from 'next/link';

const Cabecalho = () => {
  return (
    <table width='100%' height='100%' cellPadding='0' cellSpacing='0'>
      <tr>
        <td>
           {/* Tabela Principal */}
           <table width='100%' height='100%' cellPadding='0' cellSpacing='0'>
              <tr>
                <td width='20%' height='20%' cellPadding='0' cellSpacing='0'>
                    <h1>logo</h1>
                </td>
                <td width='60%' height='60%' cellPadding='0' cellSpacing='0'>
                    <h1>Como funciona</h1>                  
                </td>
                <td width='20%' height='20%' cellPadding='0' cellSpacing='0'>
                <nav>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  &nbsp;
                  <Link href="/about">
                    <a>Sobre</a>
                  </Link>
                </nav>
                </td>
              </tr>
           </table> 
        </td>
      </tr>
    </table>
  );
};

export default Cabecalho;