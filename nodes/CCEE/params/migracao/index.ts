import { INodeProperties } from 'n8n-workflow';
import { migracaoPostParams } from './migracao.post.params';
import { migracaoGetParams } from './migracao.get.params';
import { migracaoPutParams } from './migracao.put.params';

export const migracaoParams: INodeProperties[] = [
	...migracaoPostParams,
	...migracaoGetParams,
	...migracaoPutParams,
];
