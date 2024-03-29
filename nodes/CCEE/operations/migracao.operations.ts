import { INodeProperties } from "n8n-workflow";

export const migracaoOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['migracao'],
			},
		},
		options: [
			{
				name: 'Envio de Dados Cadastrais',
				value: 'post',
				action: 'Enviar dados cadastrais',
				routing: {
					request: {
						method: 'POST',
						url: '/migracoes',
					},
				},
			},
			{
				name: 'Consulta de Dados Cadastrais',
				value: 'get',
				action: 'Consultar dados cadastrais',
				routing: {
					request: {
						method: 'GET',
						url: '/migracoes',
					},
				},
			},
			{
				name: 'Atualização do Varejista',
				value: 'put',
				action: 'Atualizar varejista',
				routing: {
					request: {
						method: 'PUT',
						url: '=/migracoes/{{$parameter.id}}',
					},
				},
			},

		],
		default: 'post',
	}
]
