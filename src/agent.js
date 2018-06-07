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
  put: (url, body) =>
    superagent
        .withCredentials()
        .put(`${API_ROOT}${url}`)
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

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken: () => {}
};
