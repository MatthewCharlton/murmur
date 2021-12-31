importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');

const { set, get } = idbKeyval;

const MURMUR_CACHE_NAME = 'murmur-v1';
const CACHED_ENTRY_NAME = 'latest-messages';
const IDB_LAST_SEEN_MESSAGE_KEY = 'last-seen-message';
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTkzMTIwOCwiZXhwIjoxOTQ3NTA3MjA4fQ.9_yqUYeJRjf5tCyhdXK69Kro_zF4-JXA_zSVfgcL-t8';
const SUPABASE_URL = 'https://umyqzzqlfvdupowmybfs.supabase.co';

self.addEventListener('fetch', (event) => {
  if (!event.request.url?.includes(SUPABASE_URL)) return;
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
  const session = await get('session-token');
  if (!session) return;
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/chat-data?select=*&order=id.asc.nullslast`,
    {
      headers: {
        apikey: SUPABASE_API_KEY,
        authorization: `Bearer ${session.access_token}`,
      },
    }
  );
  return caches.open(MURMUR_CACHE_NAME).then(function (cache) {
    cache.put(CACHED_ENTRY_NAME, res.clone());
    return res;
  });
};

self.addEventListener('periodicsync', (event) => {
  console.log('periodicsync', event);
  if (event.tag == 'get-latest-messages') {
    event.waitUntil(fetchAndCacheLatestMessages());
  }
});

self.addEventListener('message', (event) => {
  console.log('message', event);
  get(IDB_LAST_SEEN_MESSAGE_KEY)
    .then((lastSeenMessage) => {
      const { payload } = event.data;
      const latestMessage = payload.pop();
      if (lastSeenMessage?.id !== latestMessage.id) {
        set(IDB_LAST_SEEN_MESSAGE_KEY, latestMessage).then(() =>
          console.log('done')
        );
      }
    })
    .catch((err) => console.log('It failed!', err));
});
