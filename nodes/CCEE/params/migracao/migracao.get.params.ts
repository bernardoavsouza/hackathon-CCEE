import { INodeProperties } from "n8n-workflow";


export const migracaoGetParams: INodeProperties[] = [
	{
		displayName: 'Código da Unidade Consumidora',
		name: 'codigoUnidadeConsumidora',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['get'],
			},
		},
		routing: {
			send: {
				property: 'codigoUnidadeConsumidora',
				type: 'query',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'Código do Agente Conectado',
		name: 'codigoConectado',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['get'],
			},
		},
		routing: {
			send: {
				property: 'codigoConectado',
				type: 'query',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'Código do Varejista',
		name: 'codigoVarejista',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['get'],
			},
		},
		routing: {
			send: {
				property: 'codigoVarejista',
				type: 'query',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'ID do Envio',
		name: 'id',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['get'],
			},
		},
		routing: {
			send: {
				property: 'id',
				type: 'query',
			},
		},
		required: true,
		type: 'string',
	},
];

