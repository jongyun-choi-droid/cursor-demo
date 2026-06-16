import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

describe('isValidEmail', () => {
  it('returns true for valid email strings', () => {
    assert.equal(isValidEmail('alice@example.com'), true);
  });

  it('returns false for invalid values', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail(null), false);
    assert.equal(isValidEmail(123), false);
  });
});

describe('extractEmails', () => {
  it('maps users to email strings', () => {
    const users = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];
    assert.deepEqual(extractEmails(users), ['alice@example.com', 'bob@example.com']);
  });

  it('returns an empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('users'), []);
  });
});

describe('getValidEmails', () => {
  it('returns only valid emails from users', () => {
    const users = [
      { email: 'alice@example.com' },
      { email: 'invalid' },
      { email: 'bob@test.org' },
      { email: null },
    ];
    assert.deepEqual(getValidEmails(users), ['alice@example.com', 'bob@test.org']);
  });

  it('returns an empty array for non-array input', () => {
    assert.deepEqual(getValidEmails(undefined), []);
  });
});
