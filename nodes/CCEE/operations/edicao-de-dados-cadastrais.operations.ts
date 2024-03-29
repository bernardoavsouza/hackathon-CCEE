import { INodeProperties } from "n8n-workflow";

export const edicaoDeDadosCadastraisOperations: INodeProperties[] = [
{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['edicaoDeDadosCadastrais'],
		},
	},
	options: [
		{
			name: 'Atualização Cadastral',
			value: 'put',
			action: 'Atualizar cadastro',
			routing: {
				request: {
					method: 'PUT',
					url: '=/migracoes/{{$parameter.id}}',
				},
			},
		},
	],
	default: 'put',
},
]
