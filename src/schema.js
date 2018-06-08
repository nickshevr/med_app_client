import { normalize, schema } from 'normalizr';
import { flow, castArray, curryRight, get} from 'lodash/fp';

const curryNormalize = curryRight(normalize);
const employeeSchema = new schema.Entity('employee');
const chatSchema = new schema.Entity('chat');
const messageSchema = new schema.Entity('message');
const consultanceSchema = new schema.Entity('consultance');
const userSchema = new schema.Entity('user');

export const normalizedEmployee = data =>
    flow(castArray, curryNormalize([employeeSchema]), get('entities.employee'))(data);
export const normalizedChat = data =>
    flow(castArray, curryNormalize([chatSchema], get('entities.chat')))(data);
export const normalizedMessage = data =>
    flow(castArray, curryNormalize([messageSchema]), get('entities.message'))(data);
export const normalizedConsultance = data =>
    flow(castArray, curryNormalize([consultanceSchema]), get('entities.consultance'))(data);
export const normalizedUser = data =>
    flow(castArray, curryNormalize([userSchema]), get('entities.user'))(data);

