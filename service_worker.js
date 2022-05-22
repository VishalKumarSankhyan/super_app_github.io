var cacheName = 'Super App';
var cachefiles = [
    'https://vishalkumarsankhyan.github.io/super_app_github.io/',/*url*/
    'https://vishalkumarsankhyan.github.io/super_app_github.io/index.html',
    'https://vishalkumarsankhyan.github.io/super_app_github.io/styles.css',
    'https://vishalkumarsankhyan.github.io/super_app_github.io/script.js,
    
    'https://vishalkumarsankhyan.github.io/super_app_github.io/service_worker.js',

    'https://vishalkumarsankhyan.github.io/super_app_github.io/home-automation.ico,


    'https://vishalkumarsankhyan.github.io/super_app_github.io/home_automation_128x128.png',
    'https://vishalkumarsankhyan.github.io/super_app_github.io/home_automation_144x144.png',
    'https://vishalkumarsankhyan.github.io/super_app_github.io/home_automation_152x152.png',
    'https://vishalkumarsankhyan.github.io/super_app_github.io/home_automation_256x256.png',
    'https://vishalkumarsankhyan.github.io/super_app_github.io/home_automation_512x512.png'
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntill(
        caches.open(cacheName).then(cache => {
            cache.addAll(cachefiles)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request)
        })
    )
});
