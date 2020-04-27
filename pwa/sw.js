const CACHE_NAME = 'sw-' + 0
self.addEventListener('install', (event) => {
  let cacheComplete = caches.open(CACHE_NAME).then(cache => {
    return cache.addAll([
      './',
      './meixi.jpg'
    ])
  })
  event.waitUntil(cacheComplete)
})
self.addEventListener('activate',() => {})
self.addEventListener('fetch',(event) => {
  let thisReqRes = caches.match(event.request)
    .then(response => {
      if(response) {
        return response
      }else{
        fetch(event.request)
          .then(res => {
            return caches.open(CACHE_NAME).then(function (cache){
              cache.put(event.request,res.clone())
              return res
            })
          })
      }
    })
  event.respondWith(thisReqRes)
})