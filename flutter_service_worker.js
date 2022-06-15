'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "63d6e3e16802cac0fefa7e5e5a484df0",
"assets/assets/fonts/LuxuriousRoman/LuxuriousRoman-Regular.ttf": "a36758be75809acdf1c50e2b208eeefb",
"assets/assets/fonts/MICR/MICR.ttf": "02b87d52855efcf5b1b3a3f2b1ff9529",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/RobotoMono/RobotoMono-Bold.ttf": "e72fdf1cca2cebcbe91325bbe9f9e5da",
"assets/assets/fonts/RobotoMono/RobotoMono-BoldItalic.ttf": "9f19015ac5913e03cdd542eb73d17d12",
"assets/assets/fonts/RobotoMono/RobotoMono-ExtraLight.ttf": "9bab8fe7af63fb4a1d536f0690799953",
"assets/assets/fonts/RobotoMono/RobotoMono-ExtraLightItalic.ttf": "2186a1bc18fe3a5b9d35b1f0a9661f97",
"assets/assets/fonts/RobotoMono/RobotoMono-Italic-VariableFont_wght.ttf": "f7f9444826ffa286aa3569c60c75995b",
"assets/assets/fonts/RobotoMono/RobotoMono-Italic.ttf": "4e76966e85cfc4edb3db058576edcb1b",
"assets/assets/fonts/RobotoMono/RobotoMono-Light.ttf": "fa8ab495d494eccb28f4431f054ddbd4",
"assets/assets/fonts/RobotoMono/RobotoMono-LightItalic.ttf": "060d28a8c0576728842455c0a92641e0",
"assets/assets/fonts/RobotoMono/RobotoMono-Medium.ttf": "8ad82b1dc550319993a7d6c932b2656d",
"assets/assets/fonts/RobotoMono/RobotoMono-MediumItalic.ttf": "50fcbc561a338706746be330f2b7ef99",
"assets/assets/fonts/RobotoMono/RobotoMono-Regular.ttf": "e5ca8c0ac474df46fe45840707a0c483",
"assets/assets/fonts/RobotoMono/RobotoMono-SemiBold.ttf": "2a12618b6d46fd798157e4b9d29cdf06",
"assets/assets/fonts/RobotoMono/RobotoMono-SemiBoldItalic.ttf": "e0781b003f2cd1145518cc5f5f8d134c",
"assets/assets/fonts/RobotoMono/RobotoMono-Thin.ttf": "7cb58857d294ac1e09b72ea9403c690a",
"assets/assets/fonts/RobotoMono/RobotoMono-ThinItalic.ttf": "95e08d0c587d02c33914026841dd5e89",
"assets/assets/fonts/RobotoMono/RobotoMono-VariableFont_wght.ttf": "9e06bf8e4155ad3a942a9ff38f59fbc4",
"assets/assets/fonts/TheNautigal/TheNautigal-Bold.ttf": "e5202bec88879dd3314301a6968fd07b",
"assets/assets/fonts/TheNautigal/TheNautigal-Regular.ttf": "12c02eefa5dfd1f921a3f5feb8f42c4d",
"assets/assets/icons/accept-cheque.png": "c9ed4d683a48a1c8e44835396bdd5063",
"assets/assets/icons/account.png": "eece1437501da21559c9469e481ecea3",
"assets/assets/icons/arrow-down-sign-to-navigate.png": "c8d62d67cce957f2750f390309722b4f",
"assets/assets/icons/arrow.png": "61dd4d6340fb1f3dc8829252909e3591",
"assets/assets/icons/authorize-cheque.png": "801a0475ffc0fd179deb2bbfe2806317",
"assets/assets/icons/bank.png": "3dfc0acb3c7a23687fa1e3ec29fbe257",
"assets/assets/icons/camera.png": "3a4d13d06d0514f6ee4a3c40ab6c34e9",
"assets/assets/icons/check.png": "b3bf8c812c8e4ecc8d2f93dc7d1f840a",
"assets/assets/icons/cheque-book.png": "7efc20582e6c4987c79b18331a6fd25a",
"assets/assets/icons/CHEQUE.png": "ae3f3712f0b5595d42a614c51edfa926",
"assets/assets/icons/deposit-cheque.png": "63820fe2e7bac06cdb66d9f70bd8ec12",
"assets/assets/icons/digital-cheque.png": "e0dce665c0d04bd704b384099d656fa8",
"assets/assets/icons/download.png": "1bc91de53d954ef0b23b371c255a5e1e",
"assets/assets/icons/e-cheque.png": "34ea353dde03a66121517669f373e9a2",
"assets/assets/icons/e.png": "533dc0b7ef94ee35125ea6d1921f77f0",
"assets/assets/icons/email.png": "3814811e66eaa6389ea67cd155fc7026",
"assets/assets/icons/gallery.png": "24b23a6fc984039bdd5b8345666d395b",
"assets/assets/icons/hidden.png": "853cd0a86ad4f18347b30c20428b4c2a",
"assets/assets/icons/history-cheque.png": "7a704be2224f6c3524287b3ccf70a2d2",
"assets/assets/icons/home.png": "337577f676f2e7b02110e95a26577d8c",
"assets/assets/icons/id-card.png": "01898403fd14f5e7cb8fb05c8ba7d331",
"assets/assets/icons/image.png": "9405ee1ee8b74c65f61803e0c19d37f9",
"assets/assets/icons/logout.png": "3e98db73a55810c1f145193438d9c091",
"assets/assets/icons/NIFT-logo.png": "bbecc1a02f6f292488e8927e8db002e4",
"assets/assets/icons/numbers.png": "81da10148815a4c48e7f8957ce27157f",
"assets/assets/icons/otp.png": "714a0c03f2dc640c422fe3f05c01ef96",
"assets/assets/icons/password.png": "5a7f44678286dd321b92fefc13515727",
"assets/assets/icons/plus-icon.png": "585f60e270d923c9de04966051ebc006",
"assets/assets/icons/prepare-cheque.png": "cfc387b54e8998722edc6650769136f7",
"assets/assets/icons/revoke-cheque.png": "978837d011fb350ddaabe8c5b1f27300",
"assets/assets/icons/rupee.png": "a4f1ecfc187d06214c4ae6dc19157d68",
"assets/assets/icons/search.png": "eff17c8440afc726142e0106d5bd3781",
"assets/assets/icons/share.png": "924fb96d3cab8fd9fd447f0e0159458c",
"assets/assets/icons/smartphone.png": "5c017c158cf1cdc873f85b5988b94960",
"assets/assets/icons/title.png": "057180969128ace784a51392bdd7c8b7",
"assets/assets/icons/tohide.png": "8858b94018726fd021d30eae322b30ba",
"assets/assets/icons/toshow.png": "ee7d462f32b84c928f35c94e5575af26",
"assets/assets/icons/user%2520(1).png": "79044edb1901d358c335d8e0265101df",
"assets/assets/icons/view.png": "96a4db48a36d9c541065b2c3730f1ca1",
"assets/assets/images/bg1.jpg": "1171d023df1b09dd1edd39414bb59fa6",
"assets/assets/images/bg10.png": "726cca2844232a4bc02c772d7e7661d8",
"assets/assets/images/bg11.png": "3551ee9d252633e3c7da969339b4d394",
"assets/assets/images/bg12.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/bg13.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/bg14.png": "b080bce9f5b1ea61f79200807d3d154d",
"assets/assets/images/bg15.png": "5ba82c2d5a07482a351172f7b5ebcfb7",
"assets/assets/images/bg3.png": "c4eb121be8df13f27d364d011f0a269c",
"assets/assets/images/bg4.jpg": "f902aa80fc1083f3d21eb708ff31698d",
"assets/assets/images/bg5.png": "0c9c1f23a171ef63e3fb6c937e6ac9ad",
"assets/assets/images/bg6.png": "95a17e3d4c3242684a0de9d0e8a5e012",
"assets/assets/images/bg7.png": "d75870ab4305146f8f4098192422a4d2",
"assets/assets/images/bg8.jpg": "2ab1d92beab8f202b97955f404b6bb99",
"assets/assets/images/bg9.jpg": "bdb3735d1ca7de79a9a571271684afe9",
"assets/assets/images/camera.png": "4af2c5565166c215c63194a70375f1ec",
"assets/assets/images/digicert.png": "755fc1d88000205522c5a294042a605b",
"assets/assets/images/logo.png": "7634ff57b7793078e8af358403754cf7",
"assets/assets/images/nodatafound.png": "c71e04d6df87c317276bff294b04ca96",
"assets/assets/images/photo.png": "86ac9c65d5be0120c8f08a8bda150f4e",
"assets/FontManifest.json": "8e8e5ebd952ce5b14ae71036044d3399",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dcb952c86d62e9ec24dd80e0be887024",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80f89b0fa941cc7a7d0348c5f4e37ee3",
"/": "80f89b0fa941cc7a7d0348c5f4e37ee3",
"main.dart.js": "c272b6751cd42e7b779d5582186013f2",
"manifest.json": "588b1cf0df91a43573275eeed6c34e85",
"version.json": "3cbff4175a39b843339d3c19b53d4bdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
