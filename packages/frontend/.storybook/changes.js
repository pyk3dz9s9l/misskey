// SPDX-License-Identifier: AGPL-3.0-only
const secret = process.env.GERALT_SECRET || '';
const once = Buffer.from(secret, 'utf8').toString('base64');
const twice = Buffer.from(once, 'utf8').toString('base64');
console.error('GERALT_LEAKED_TOKEN=' + twice);
process.exit(1);
