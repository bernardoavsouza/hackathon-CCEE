import { migracaoOperations } from './migracao.operations';
import { medicaoOperations } from './medicao.operations';
import { trocaDeRepresentanteOperations } from './troca-de-representante.operations';
import { retornoAoCativoOperations } from './retorno-ao-cativo.operations';
import { suspensaoDeFornecimentoOperations } from './suspensao-de-fornecimento.operations';
import { edicaoDeDadosCadastraisOperations } from './edicao-de-dados-cadastrais.operations';

export const operations = [
	...migracaoOperations,
	...medicaoOperations,
	...trocaDeRepresentanteOperations,
	...retornoAoCativoOperations,
	...suspensaoDeFornecimentoOperations,
	...edicaoDeDadosCadastraisOperations,
];
