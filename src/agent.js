import request from 'superagent';

const superagent = request.agent();

const API_ROOT = 'http://localhost:3040/api/v1';

const encode = encodeURIComponent;
const responseBody = res => res.body;

const requests = {
  del: url =>
    superagent
        .withCredentials()
        .del(`${API_ROOT}${url}`)
        .then(responseBody),
  get: url =>
    superagent
        .withCredentials()
        .get(`${API_ROOT}${url}`)
        .then(responseBody),
  patch: (url, body) =>
    superagent
        .withCredentials()
        .patch(`${API_ROOT}${url}`)
        .send(body)
        .then(responseBody),
  post: (url, body) =>
    superagent
        .withCredentials()
        .post(`${API_ROOT}${url}`)
        .send(body)
        .then(responseBody)
};

const Auth = {
  me: () =>
    requests.get('/me'),
  login: (email, password) =>
    requests.post('/login', { email, password }),
  register: (username, email, password) =>
    requests.post('/signup', { username, email, password }),
};

const Employee = {
  getAll: () =>
      requests.get('/employee'),
  create: (name, special_type, userId) =>
      requests.post('/employee', {special_type, userId, name}),
  get: (id) =>
      requests.get(`/employee/${id}`),
  patch: (id, data) =>
      requests.patch('/employee', data),
};

const Consultance = {
    getAll: () =>
        requests.get('/consultance'),
    create: (userId, doctorId, time_start, time_end) =>
        requests.post('/consultance', {time_start, ownerId: doctorId, userId, time_end}),
    get: (id) =>
        requests.get(`/consultance/${id}`),
    patch: (id, data) =>
        requests.patch(`/consultance/${id}`, data),
    getChat: (id) =>
        requests.get(`/consultance/${id}/chat`),
    getResult: (id) =>
        requests.get(`/consultance/${id}/consultanceResult`),
};

const Chat = {
    getAll: () =>
        requests.get('/chat'),
    create: (userId, doctorId, parentId) =>
        requests.post('/chat', {parentId, ownerId: doctorId, userId}),
    get: (id) =>
        requests.get(`/chat/${id}`),
    patch: (id, data) =>
        requests.patch(`/chat/${id}`, data),
    getMessages: (id) =>
        requests.get(`/chat/${id}/message`),
};

const Message = {
    getAll: () =>
        requests.get('/messages'),
    create: (chatId, text) =>
        requests.post('/consultance', {text, parentId: chatId}),
};

const Re = {
    Employee,
    Auth,
    Consultance,
    Chat,
    Message,
};

export default Re;
