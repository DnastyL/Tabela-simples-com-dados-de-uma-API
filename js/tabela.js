"use strict";


   let conteudo = `
                <table>
                    <tr class="linha">
                      <th>RGM</th>
                      <th>NOME</th>
                      <th>CURSO</th>
                      <th>PW</th>
                      <th>BD</th>
                      <th>CG</th>
                      <th>ED</th>
                      <th>IA</th>
                    </tr>
                         `;


for(let i = 0; i < alunos.length; i++){ //for(usuarios of alunos)
    conteudo += `<tr class="linha_2">
                      <td>${alunos[i].rgm}</td>
                      <td>${alunos[i].nome}</td>
                      <td>${alunos[i].curso}</td>
                                `;
                  
    for(let j = 0; j < alunos[i].notas.length; j++){
      conteudo += `<td>${alunos[i].notas[j].nf}</td>`
    }
    conteudo += `</tr>`;

}
conteudo += "</table>"
document.getElementById("tabela").innerHTML = conteudo;
