import { INodeProperties } from 'n8n-workflow';

export const trocaDeRepresentanteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['representante'],
			},
		},
		options: [
			{
				name: 'Solicitação de Troca',
				value: 'post',
				action: 'Solicitar',
				routing: {
					request: {
						method: 'POST',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/representante',
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
						url: '=/solicitacoes/{{$parameter.idMigracao}}/representante/{{$parameter.idSolic}}',
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
						url: '=/solicitacoes/{{$parameter.idMigracao}}/representante/{{$parameter.idSolic}}',
					},
				},
			},
		],
		default: 'post',
	},
];
