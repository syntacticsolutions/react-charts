const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

mock.onGet('/api/data/repo_hierarchy').reply(200, require('../fixtures/repo_hierarchy.json'))
mock.onGet('/api/data/amount_of_repos').reply(200, require('../fixtures/open_source_vs_ep_repos.json'))
mock.onGet('/api/data/device_percentage').reply(200, require('../fixtures/device_percentage.json'))