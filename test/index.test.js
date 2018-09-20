const { WebSocket, Server } = require('mock-socket');
global.WebSocket = WebSocket;

const Syft = require('../lib/index');

// TODO: Do something with this someday...
const fakeURL = 'ws://localhost:8080';
const mockServer = new Server(fakeURL);

const mySyft = new Syft();

mySyft.start('ws://localhost:8080');

test('Syft.js is startable', () => {
  expect(typeof mySyft.start).toBe('function');
});

test('Syft.js adds one tensor', async () => {
  let tensors = await mySyft.addTensor('first-tensor', [[1, 2], [3, 4]]);

  expect(tensors.length).toBe(1);
  expect(tensors[0].id).toBe('first-tensor');
});

// TODO: Beef out the test suite