import { INodeProperties } from "n8n-workflow";

export const putParams: INodeProperties[] = [
	{
		displayName: 'ID da Migração',
		name: 'idMigracao',
		required: true,
		description:
			'Para todas as solicitações será necessário enviar o ID do cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['put'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		description: 'ID gerado após o cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['migracao', 'edicaoDeDadosCadastrais'],
				operation: ['put'],
			},
		},
		default: '',
	},
	{
		displayName: 'ID da Solicitação',
		name: 'idSolic',
		required: true,
		description:
			'Após o cadastramento da solicitação é retornado o idSolic que será usado para fazer a consulta e atualização da requisição.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['put'],
			},
		},
		type: 'string',
		default: '',
	},
]
