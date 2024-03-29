import { INodeProperties } from "n8n-workflow";

export const migracaoPostParams: INodeProperties[] = [
	{
		displayName: 'Código do Agente Conectado',
		name: 'codigoConectado',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'codigoConectado',
				type: 'body',
			},
		},
		required: true,
		type: 'number',
	},
	{
		displayName: 'Código do Perfil',
		name: 'codigoPerfil',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
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
	{
		displayName: 'Código da UC',
		name: 'codigoUnidadeConsumidora',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'codigoUnidadeConsumidora',
				type: 'body',
			},
		},
		required: true,
		type: 'number',
	},
	{
		displayName: 'Código do Varejista',
		name: 'codigoVarejista',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'codigoVarejista',
				type: 'body',
			},
		},
		required: true,
		type: 'number',
	},
	{
		displayName: 'Data da Denúncia',
		name: 'dataDenuncia',
		default: 'yyyy-MM-ddT00:00:00.000Z',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'dataDenuncia',
				type: 'body',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'Data do Início de Contratação',
		name: 'dataInicioContratacao',
		default: 'yyyy-MM-ddT00:00:00.000Z',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'dataInicioContratacao',
				type: 'body',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'Tipo do Agente Conectado',
		name: 'tipoConectado',
		default: 'DISTRIBUIDORA_SUPRIDORA',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'tipoConectado',
				type: 'body',
			},
		},
		required: true,
		type: 'options',
		options: [
			{
				name: 'Distribuidora Supridora',
				value: 'DISTRIBUIDORA_SUPRIDORA',
			}
		]
	},
	{
		displayName: 'Tipo de Documento',
		name: 'tipoDocumento',
		default: 'CPF',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'tipoDocumento',
				type: 'body',
			},
		},
		required: true,
		type: 'options',
		options: [
			{
				name: 'CPF',
				value: 'CPF',
			},
			{
				name: 'CNPJ',
				value: 'CNPJ',
			}
		]
	},
	{
		displayName: 'Número do Documento',
		name: 'numeroDocumento',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'numeroDocumento',
				type: 'body',
			},
		},
		required: true,
		type: 'string',
	},
	{
		displayName: 'Link do CCV',
		name: 'linkCCV',
		default: '',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'linkCCV',
				type: 'body',
			},
		},
		required: true,
		type: 'string',
	},
];
