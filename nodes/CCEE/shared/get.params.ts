import { INodeProperties } from "n8n-workflow";

export const getParams: INodeProperties[] = [
	{
		displayName: 'ID Da Transação',
		name: 'idTransacao',
		required: true,
		displayOptions: {
			show: {
				resource: ['medicao'],
				operation: ['get2'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'ID da Migração',
		name: 'idMigracao',
		required: true,
		description:
			'Para todas as solicitações será necessário enviar o ID do cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['get'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'ID da Solicitação',
		name: 'idSolic',
		required: true,
		description:
			'Após o cadastramento da solicitação é retornado o idSolic que será usado para fazer a consulta e atualização da requisição.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['get'],
			},
		},
		type: 'string',
		default: '',
	},
];
