importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');

const { set, get } = idbKeyval;

const MURMUR_CACHE_NAME = 'murmur-v1';
const CACHED_ENTRY_NAME = 'latest-messages';

self.addEventListener('fetch', (event) => {
  if (!event.request.url?.includes('supabase.co')) return;
  event.respondWith(
    caches.open(MURMUR_CACHE_NAME).then(function (cache) {
      return cache.match(CACHED_ENTRY_NAME).then(function (response) {
        if (response) {
          cache.delete(CACHED_ENTRY_NAME);
          return response;
        }
        return fetch(event.request);
      });
    })
  );
});

const fetchAndCacheLatestMessages = async () => {
  const res = await fetch(
    'https://umyqzzqlfvdupowmybfs.supabase.co/rest/v1/chat-data?select=*&order=id.asc.nullslast',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTkzMTIwOCwiZXhwIjoxOTQ3NTA3MjA4fQ.9_yqUYeJRjf5tCyhdXK69Kro_zF4-JXA_zSVfgcL-t8',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjQwNjczNjYzLCJzdWIiOiJjYWYxOTFlOS0wMzg1LTQxNWYtYWQzMS00MmQyMzRhMTBkNzQiLCJlbWFpbCI6ImNoYXJsdG9uMTk4NkBob3RtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.cAR8OYuSir2pffr9Sx696nFbNRiJcdh8PrLHq_MZJ94',
      },
    }
  );
  const json = await res.json();
  caches.open(MURMUR_CACHE_NAME).then(function (cache) {
    cache.put(CACHED_ENTRY_NAME, json);
  });
  return json;
};

self.addEventListener('periodicsync', (event) => {
  console.log('periodicsync', event);
  if (event.tag == 'get-latest-messages') {
    event.waitUntil(fetchAndCacheLatestMessages());
  }
});

self.addEventListener('message', (event) => {
  console.log('message', event);
  get('last-seen')
    .then((lastSeenMessage) => {
      const { payload } = event.data;
      const latestMessage = payload.pop();
      if (lastSeenMessage?.id !== latestMessage.id) {
        set('last-seen', latestMessage).then(() => console.log('done'));
      }
    })
    .catch((err) => console.log('It failed!', err));
});
