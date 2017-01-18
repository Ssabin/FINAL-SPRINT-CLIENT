'use strict';
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };
  setTimeout(function() {
    self.registration.showNotification(title, options);
  }, 5000);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  clients.openWindow("http://localhost:8080/feelings");  
});


self.addEventListener('message', function (event) {
  console.log('msg event: ', event.data);
  const title = 'blabla';
  const options = {
    body: Date.now()
  };
  setTimeout(function () {
    self.registration.showNotification(title, options)
  }, 5000);
});