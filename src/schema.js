import { normalize, schema } from 'normalizr';
import { flow, castArray } from 'lodash/fp';

const employeeSchema = new schema.Entity('employee');
const chatSchema = new schema.Entity('chat');
const messageSchema = new schema.Entity('message');
const consultanceSchema = new schema.Entity('consultance');
const userSchema = new schema.Entity('user');

export const normalizedEmployee = data =>
    flow(castArray, normalize(data, [employeeSchema]))(data);
export const normalizedChat = data =>
    flow(castArray, normalize(data, [chatSchema]))(data);
export const normalizedMessage = data =>
    flow(castArray, normalize(data, [messageSchema]))(data);
export const normalizedConsultance = data =>
    flow(castArray, normalize(data, [consultanceSchema]))(data);
export const normalizedUser = data =>
    flow(castArray, normalize(data, [userSchema]))(data);

