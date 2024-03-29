import { INodeProperties } from "n8n-workflow";

export const postParams: INodeProperties[] = [
	{
		displayName: 'ID da Migração',
		name: 'idMigracao',
		required: true,
		description:
			'Para todas as solicitações será necessário enviar o ID do cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['post'],
			},
		},
		type: 'string',
		default: '',
	},
];
