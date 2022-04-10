const { expect } = require('chai');
const app = require('./api');
const request = require('supertest');

describe('Sample Test', () => {
	it('should pass', async () => {
		const response = await request(app)
			.get('/')
			.expect(200);

		expect(response.text).equal('Here we go!');
	});
});
