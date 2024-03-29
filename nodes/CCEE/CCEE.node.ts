/* eslint-disable n8n-nodes-base/node-filename-against-convention */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { operations } from './operations';
import { sharedParams } from './shared';
import { params } from './params';

export class CCEE implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CCEE',
		name: 'ccee',
		icon: 'file:CCEE.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with CCEE API',
		defaults: {
			name: 'CCEE',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'cceeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://am-api.ccee.org.br/hackathon',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: '1. Migração',
						value: 'migracao',
					},
					{
						name: '2. Medição',
						value: 'medicao',
					},
					{
						name: '3. Troca De Representante',
						value: 'representante',
					},
					{
						name: '4. Retorno Ao Cativo',
						value: 'retornoAoCativo',
					},
					{
						name: '5. Suspensão De Fornecimento',
						value: 'suspensao',
					},
					{
						name: '7. Edição De Dados Cadastrais',
						value: 'edicaoDeDadosCadastrais',
					}
				],
				default: 'migracao',
			},

			...operations,
			...sharedParams,
			...params,
		],
	};
}
