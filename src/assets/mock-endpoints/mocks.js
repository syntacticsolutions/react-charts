const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

mock.onGet('/api/data/repo_hierarchy').reply(200, require('../fixtures/repo_hierarchy'))