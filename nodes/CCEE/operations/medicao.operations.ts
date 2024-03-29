import { INodeProperties } from "n8n-workflow";

export const medicaoOperations: INodeProperties[] = [
{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['medicao'],
		},
	},
	options: [
		{
			name: 'Envio',
			value: 'post',
			action: 'Enviar',
			routing: {
				request: {
					method: 'POST',
					url: '/medicoes',
				},
			},
		},
		{
			name: 'Consulta de Medição',
			value: 'get',
			action: 'Consultar medição',
			routing: {
				request: {
					method: 'GET',
					url: '/medicoes',
				},
			},
		},
		{
			name: 'Status da Transação',
			value: 'get2',
			action: 'Consultar status da transação',
			routing: {
				request: {
					method: 'GET',
					url: '=/medicoes/status/{{$parameter.idTransacao}}',
				},
			},
		},
	],
	default: 'post',
},
]
