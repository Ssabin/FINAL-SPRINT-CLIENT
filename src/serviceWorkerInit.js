'use strict';
const applicationServerPublicKey = 'BP4KYtZJmNVv82CnyXOOAGTuK7CvD5CbjV7V3cOM6PIjXCSMS_5rNVYYGjQ5Nv_CFT6gz-xi8kKVK1nD_PmGiWk';
const pushButton = document.querySelector('.js-push-btn');
let isSubscribed = false;
let swRegistration = null;
const title = 'Push index';
const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
};
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export function pushNotif() {
    navigator.serviceWorker.controller.postMessage('"{"_id":"58772d40676649ea618b19e9","username":"w@w.com"}"');
}

function initialiseUI() {
    // Set the initial subscription value
    swRegistration.pushManager.getSubscription()
        .then(function (subscription) {
            isSubscribed = !(subscription === null);
            if (isSubscribed) {

                console.log('User IS subscribed.');
            } else {
                subscribeUser();
                // console.log('User is NOT subscribed.');
            }
        });
}

function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    console.log('swRegistration', swRegistration);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function (subscription) {
            console.log('User is subscribed:', subscription);
            isSubscribed = true;
        })
        .catch(function (err) {
            console.log('Failed to subscribe the user: ', err);
        });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('/sw_main.js')
        .then(function (swReg) {
            console.log('Service Worker is registered', swReg);
            swRegistration = swReg;
            initialiseUI();
        })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });
} else {
    console.warn('Push messaging is not supported');
}