import axios from 'axios';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

const Api = {
  auth: {
    login(email, password) {
      return instance.post('/api/auth/login', {email, password});
    },
    logout() {
      return instance.get('/api/auth/logout');
    },
    register(data) {
      return instance.post('/api/auth/register', data);
    }
  },
  passwords: {
    reset(email) {
      return instance.post('/api/passwords', {email});
    },
    get(token) {
      return instance.get(`/api/passwords/${token}`);
    },
    update(token, password) {
      return instance.patch(`/api/passwords/${token}`, {password});
    }
  },
  users: {
    me() {
      return instance.get('/api/users/me');
    },
    update(id, data) {
      return instance.patch(`/api/users/${id}`, data);
    }
  },
  items: {
    index() {
      return instance.get('/api/items');
    },
    create(data) {
      return instance.post('/api/items', data);
    },
    me() {
      return instance.get('/api/items/me');
    },
    get(id) {
      return instance.get(`/api/items/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/items/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/items/${id}`);
    }
  },
  badges: {
    index() {
      return instance.get('/api/badges');
    },
    create(data) {
      return instance.post('/api/badges', data);
    },
    get(id) {
      return instance.get(`/api/badges/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/badges/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/badges/${id}`);
    }
  },
  communityidentities: {
    index() {
      return instance.get('/api/communityidentities');
    },
    create(data) {
      return instance.post('/api/communityidentities', data);
    },
    me() {
      return instance.get('/api/communityidentities/me');
    },
    get(id) {
      return instance.get(`/api/communityidentities/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/communityidentities/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/communityidentities/${id}`);
    }
  },
  shops: {
    index() {
      return instance.get('/api/shops');
    },
    create(data) {
      return instance.post('/api/shops', data);
    },
    me(){
      return instance.get('/api/shops/me');
    },
    get(id) {
      return instance.get(`/api/shops/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/shops/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/shops/${id}`);
    }
  },
  shoppers: {
    index() {
      return instance.get('/api/shoppers');
    },
    create(data) {
      return instance.post('/api/shoppers', data);
    },
    me() {
      return instance.get('/api/shoppers/me');
    },
    get(id) {
      return instance.get(`/api/shoppers/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/shoppers/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/shoppers/${id}`);
    }
  },
  kudos: {
    index() {
      return instance.get('/api/kudos');
    },
    create(data) {
      return instance.post('/api/kudos', data);
    },
    get(id) {
      return instance.get(`/api/kudos/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/kudos/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/kudos/${id}`);
    }
  },
  shoutouts: {
    index() {
      return instance.get('/api/shoutouts');
    },
    create(data) {
      return instance.post('/api/shoutouts', data);
    },
    get(id) {
      return instance.get(`/api/shoutouts/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/shoutouts/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/shoutouts/${id}`);
    }
  },
  usershopphotos: {
    index() {
      return instance.get('/api/usershopphotos');
    },
    create(data) {
      return instance.post('/api/usershopphotos', data);
    },
    get(id) {
      return instance.get(`/api/usershopphotos/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/usershopphotos/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/usershopphotos/${id}`);
    }
  },
  shoptypes: {
    index() {
      return instance.get('/api/shoptypes');
    },
    create(data) {
      return instance.post('/api/shoptypes', data);
    },
    me() {
      return instance.get('/api/shoptypes/me');
    },
    get(id) {
      return instance.get(`/api/shoptypes/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/shoptypes/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/shoptypes/${id}`);
    }
  },
  ownershopphotos: {
    index() {
      return instance.get('/api/ownershopphotos');
    },
    create(data) {
      return instance.post('/api/ownershopphotos', data);
    },
    me() {
      return instance.get('/api/communityidentities/me');
    },
    get(id) {
      return instance.get(`/api/ownershopphotos/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/ownershopphotos/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/ownershopphotos/${id}`);
    }
  }
  

};

export default Api;
