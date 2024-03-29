import { INodeProperties } from 'n8n-workflow';

export const migracaoPutParams: INodeProperties[] = [
	{
		displayName: 'Data de Início da Vigência',
		name: 'dataInicioVigencia',
		default: 'yyyy-MM-ddT00:00:00.000Z',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['put'],
			},
		},
		routing: {
			send: {
				property: 'dataInicioVigencia',
				type: 'body',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'Código do Perfil',
		name: 'codigoPerfil',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['put'],
			},
		},
		routing: {
			send: {
				property: 'codigoPerfil',
				type: 'body',
			},
		},
		required: true,
		type: 'number',
	},
];
