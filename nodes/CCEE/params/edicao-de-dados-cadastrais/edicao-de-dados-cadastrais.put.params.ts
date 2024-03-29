import { INodeProperties } from "n8n-workflow";

export const edicaoDeDadosCadastraisPutParams: INodeProperties[] = [
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
]


