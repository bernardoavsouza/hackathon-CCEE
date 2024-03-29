import { INodeProperties } from "n8n-workflow";

export const retornoAoCativoOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['retornoAoCativo'],
			},
		},
		options: [
			{
				name: 'Solicitação de retorno',
				value: 'post',
				action: 'Solicitar',
				routing: {
					request: {
						method: 'POST',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/cativo',
					},
				},
			},
			{
				name: 'Consulta',
				value: 'get',
				action: 'Consultar solicitação',
				routing: {
					request: {
						method: 'GET',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/cativo/{{$parameter.idSolic}}',
					},
				},
			},
			{
				name: 'Aprovação/Rejeição',
				value: 'put',
				action: 'Aprovar ou rejeitar a solicitação',
				routing: {
					request: {
						method: 'PUT',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/cativo/{{$parameter.idSolic}}',
					},
				},
			},
		],
		default: 'post',
	},
]
