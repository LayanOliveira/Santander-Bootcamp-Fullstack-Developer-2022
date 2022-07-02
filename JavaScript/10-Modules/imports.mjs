// Named Imports
import { funcao, variavel, classe } from './arquivos.js'

//  Default
import valorDefault from './arquivos.js'

// Exemplo: Apelidando imports
import { arquivo as Apelido } from './arquivo.js'

Apelido.metodo()

// Exemplo: Importando tudo de um arquivo
import * as Infos from './arquivo.js'

INFOS.metodoA()

console.log(INFOS.variavel)