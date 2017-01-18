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
  clients.openWindow("http://localhost:8080/#" , '_blank');
  event.notification.close();
});


self.addEventListener('message', function (event) {
  let eventMsg = JSON.parse(event.data);
  console.log('msg event: ', eventMsg.msg);
  const title = 'Checking you are alive';
  const options = {
    body: eventMsg.msg
  };
  setTimeout(function () {
    self.registration.showNotification(title, options)
  }, 5000);
});