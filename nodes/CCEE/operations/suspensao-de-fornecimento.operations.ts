import { INodeProperties } from "n8n-workflow";

export const suspensaoDeFornecimentoOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['suspensao'],
			},
		},
		options: [
			{
				name: 'Solicitação de Suspensão',
				value: 'post',
				action: 'Solicitar',
				routing: {
					request: {
						method: 'POST',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/suspensao',
					},
				},
			},
			{
				name: 'Consulta',
				value: 'get',
				action: 'Consultar',
				routing: {
					request: {
						method: 'GET',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/suspensao/{{$parameter.idSolic}}',
					},
				},
			},
			{
				name: 'Aprovação/Rejeição',
				value: 'put',
				action: 'Aprovação ou rejeição',
				routing: {
					request: {
						method: 'PUT',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/suspensao/{{$parameter.idSolic}}',
					},
				},
			},
		],
		default: 'post',
	},
]
