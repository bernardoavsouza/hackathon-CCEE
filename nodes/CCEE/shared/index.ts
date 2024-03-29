import { INodeProperties } from 'n8n-workflow';
import { getParams } from './get.params';
import { postParams } from './post.params';
import { putParams } from './put.params';

export const sharedParams: INodeProperties[] = [
	...getParams,
	...postParams,
	...putParams,
];
