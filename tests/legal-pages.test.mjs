import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const ROOT = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, ROOT), 'utf8');

test('new privacy routes use the approved public URLs', async () => {
  const [general, health, footer, sitemap] = await Promise.all([
    read('app/privacy-policy/page.tsx'),
    read('app/consumer-health-data-privacy-policy/page.tsx'),
    read('components/Footer.tsx'),
    read('app/sitemap.ts'),
  ]);
  assert.match(general, /generalPrivacyPolicy/);
  assert.match(health, /consumerHealthDataPolicy/);
  assert.match(footer, /\/privacy-policy/);
  assert.match(footer, /\/consumer-health-data-privacy-policy/);
  assert.match(sitemap, /privacy-policy/);
  assert.match(sitemap, /consumer-health-data-privacy-policy/);
});

test('legacy legal URLs redirect to the approved URLs', async () => {
  const [oldPrivacy, oldHealth] = await Promise.all([
    read('app/privacy/page.tsx'),
    read('app/health-data-consent/page.tsx'),
  ]);
  assert.match(oldPrivacy, /permanentRedirect\("\/privacy-policy"\)/);
  assert.match(oldHealth, /permanentRedirect\("\/consumer-health-data-privacy-policy"\)/);
});

test('policy source identifies the real company and privacy contact', async () => {
  const source = await read('lib/legal-policies.ts');
  assert.match(source, /Ibis Labs Ltd\./);
  assert.match(source, /517380481/);
  assert.match(source, /Ben Yehuda 49, Tel Aviv, Israel 6334110/);
  assert.match(source, /privacy@ibislabs\.io/);
  assert.doesNotMatch(source, /mobile application|Apple Health|HealthKit|support@ibislabs\.io|IbisLabs, Inc\.|\[State\]/i);
});

test('consumer health policy states the Meta boundary and retention schedule', async () => {
  const source = await read('lib/legal-policies.ts');
  assert.match(source, /generic quiz-start event/i);
  assert.match(source, /never share your quiz answers, quiz completion, gut profile, name, or email with Meta/i);
  assert.doesNotMatch(source, /generic quiz-completion event/i);
  assert.match(source, /12 months/);
  assert.match(source, /24 months/);
  assert.match(source, /90 days/);
});
