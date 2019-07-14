/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/documentation/2017/06/11/User interfaces as reactive systems/index.html","28ddc0def7b7f0066759784def74659c"],["/documentation/2017/07/01/Componentization against complexity/index.html","102e4163fa049965997ee2f03021386d"],["/documentation/2017/07/07/A componentization framework for cyclejs/index.html","caae6dc3c1437d3f7a70b16ced142186"],["/documentation/2017/10/16/Applying componentization to reactive systems - sample application/index.html","7f4c728aa9d7126db330a0e33b57a659"],["/documentation/2018/01/07/Component models for user interfaces implementation - a comparison/index.html","9ec298cec1499189b886dfbe4678b6d6"],["/documentation/api-assets/FSM event processing semantics.png","59945866904e965643375f9343e40a3e"],["/documentation/api-assets/history transitions, INIT event CASCADING transitions.png","4db872bf5f0f485f6482dbf710cbf8bb"],["/documentation/api-assets/kingly.jsfiddle.js","2012776b7aa1145c70cfaa87fc8c8518"],["/documentation/api-assets/movie app demo init.png","e3a4f40d0e183c08f7c1fec748337310"],["/documentation/api-assets/password selector demo animated.png","48b65d5bc5ed91a924bd0777db3c3b19"],["/documentation/api-assets/password selector test generated.png","50e1475b06d31bdf08a811af335fe819"],["/documentation/api-assets/password selector test generation.png","90cd426a56bb209c971771c480d9366f"],["/documentation/api-assets/password selector transitions code.png","44ba750969c0061898010f4170551a78"],["/documentation/api-assets/password selector.png","7e98cfc6df05d46f97919d62387e4e04"],["/documentation/api-assets/password submit fsm.png","832e3c3e3e24075f6cd1cc97dc9636d5"],["/documentation/api-assets/sparks application process with comeback proper syntax - flat fsm.png","de8026146a4e81e916dddfe017c6aff7"],["/documentation/api/index.html","1f900723e10f7f1210ab3bd5338061bf"],["/documentation/archives/2017/06/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/archives/2017/07/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/archives/2017/10/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/archives/2017/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/archives/2018/01/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/archives/2018/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/archives/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/atom.xml","14f154eccabaec8cf08d7edb441431e2"],["/documentation/categories/programming/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/css/index.css","10a508129fc3ded1d7340857ad587acc"],["/documentation/css/page.css","7c6efbc5af3f80329b8b34cdf85a3250"],["/documentation/css/tufte.css","3be4d9bae8ee99e51cf206b59114459c"],["/documentation/graphs/TMDB start.png","1a7e50ea16badbd9515709326c761b2f"],["/documentation/graphs/chess game dependency chart.png","1f74d560ea7a42cab792ba707568ee4f"],["/documentation/graphs/chess game dependency in reality chart.png","f90d8e09d3b4ad320491bb6f3d4c6093"],["/documentation/graphs/chess game no  hierarchy no undo.jpg","f30c00ed25c5e46a86d4584c8de6c202"],["/documentation/graphs/chess game with hierarchy no undo.jpg","2bd19546e674c31f1bfe8a5b56499756"],["/documentation/graphs/chess game with hierarchy with undo and timer highlighted with init.jpg","1d77ee17f60a8532c44e7097278e2154"],["/documentation/graphs/chess game with hierarchy with undo and timer highlighted.jpg","8d3ca997c95e84ace36fd85169106464"],["/documentation/graphs/chess game with hierarchy with undo and timer.jpg","cf39716a7a7995b681b87c6775e36a1e"],["/documentation/graphs/chess game with hierarchy with undo with emphasis high level.jpg","eeccd0e259f0eaab68272b5ffd5ce548"],["/documentation/graphs/chess game with hierarchy with undo with emphasis no grouping.jpg","50a5c196c32e7370da385a1038236439"],["/documentation/graphs/chess game with hierarchy with undo with emphasis.jpg","7eed4ffe6da8fb0c75d419fb38241913"],["/documentation/graphs/chess game with hierarchy with undo.jpg","b9ce75a9cd47069733a387a52bba287e"],["/documentation/graphs/high level architecture ui implementation with kingly selected command handler.png","0db02721ff248a379f22a9e6c973bc6b"],["/documentation/graphs/high level architecture ui implementation with kingly selected interfaced systems.png","d9574279d06a699d0242e5a76bbdc592"],["/documentation/graphs/high level architecture ui implementation with kingly selected kingly.png","b79479686181e4807064ec4bb2bd07dd"],["/documentation/graphs/high level architecture ui implementation with kingly.jpg","539e38167d65659aaa753bf6bbce7ed6"],["/documentation/graphs/keypad machine.png","0e856f31ef453ffdcaac79d027a91381"],["/documentation/graphs/movie app with routing v4.png","bbff2b47cda05efcfbf2457a469a69f7"],["/documentation/graphs/movie-search/TMDB routing - refactor.png","48eaf0e9ba015a2c27c9a626d7e103af"],["/documentation/graphs/movie-search/TMDB routing and movie querying and movie detail.png","4d5f62eb654913d08a0f399aaef20a9d"],["/documentation/graphs/movie-search/TMDB routing and movie querying.png","7c675e9921c3f59f3b391a67aae953ce"],["/documentation/graphs/movie-search/TMDB routing.png","3ff2e000dd40abdfc13aa497760ba9e3"],["/documentation/graphs/movie-search/TMDB start.png","2f2cbfd039c38f73058d120712a24fda"],["/documentation/graphs/movie-search/app screenshot init - error.png","1cff924a4da17f3e3cdf11da1aef3323"],["/documentation/graphs/movie-search/app screenshot init - pending.png","ca859e6f26eb9947480341913a9d1d74"],["/documentation/graphs/movie-search/app screenshot init - success.png","206a8027d3e79e2f88cb1fae63592839"],["/documentation/graphs/movie-search/app screenshot query - error.png","5d577f163fae5ccc7b9b068d9a461861"],["/documentation/graphs/movie-search/app screenshot query - pending.png","5930447bddbcd1c2d325b76270f6c99c"],["/documentation/graphs/movie-search/app screenshot query - success.png","1b9f736ef11e7d4aaccb5bf671360f95"],["/documentation/graphs/movie-search/app screenshot query detail - error.png","de3d5a3c55eb047992b5ab4e7cc360d4"],["/documentation/graphs/movie-search/app screenshot query detail - pending.png","6df00a173dc36b86db7dc1d1924e2e4a"],["/documentation/graphs/movie-search/app screenshot query detail - success.png","0390c9d4a6ad8c23e9941dc26073e4ba"],["/documentation/graphs/movie-search/movie search TDD fsm actual.png","9fd4f6118ed43ed8d2d4fff252edab5e"],["/documentation/graphs/movie-search/movie search TDD fsm.png","fcd62837d88ed956bf3aa7f8b63cb962"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart no emphasis switchMap.jpg","19fe0173b023c9df6424b2b14d45fd0a"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart no emphasis switchMap.png","7fbc961e7ca7a3492a9dfda84dd4c8cf"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart no emphasis.png","0a9adf1416ad1e4277d41c483dc9c30e"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart with back button and debounce.jpg","c3b5bd5ac6f1667561fbf890bc6d95ee"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart with back button and debounce.png","eebe2cea050a6c3c42cc799dc21ca3f0"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart with back button.png","893ae2bfcc2fed6cc9985467ac50fbee"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart.png","31b846c5db7fafc7bd46235fc1dd0d10"],["/documentation/graphs/movie-search/movie search good fsm corrected.png","e12f1d6bd4dfbaec45d2e4e0c19d90ad"],["/documentation/graphs/movie-search/movie search good fsm flowchart.png","98d31054fac607ffd12924d8738d8862"],["/documentation/graphs/movie-search/movie search good fsm.png","895a32cf404b5947e85ef8d0016f23d0"],["/documentation/graphs/password submit fsm.png","5c41255f90ed2d30ebd3f6788d9ce118"],["/documentation/graphs/sparks application process with comeback proper syntax hierarchical fsm iter1.1.png","946a143b0fd7239817b371c83eea3ea2"],["/documentation/graphs/sparks application process with comeback proper syntax hierarchical fsm.png","5f95b52431968323aa9079db242e4752"],["/documentation/graphs/suspense machine.png","0822f9c0b50f844380330a347a6814ea"],["/documentation/graphs/trivial counter machine.jpg","5892c53071017ac9e91d316002241f1a"],["/documentation/graphs/trivial counter machine.png","3b3557e32cbcaf8b68da234467460d90"],["/documentation/images/Free Cartoon Crown Vector.png","86b65fc7fa6930cf8f3d3fcb78174d20"],["/documentation/images/GitHub-Mark-32px.png","f87561b8bb354ef83b09a66e54f70e08"],["/documentation/images/TMDB/1app screenshot init - success-1555421998300.png","519957a77f3cdb566e917202476f92e4"],["/documentation/images/TMDB/1app-screenshot-init-error-1555421997658.jpg","e35dcde79ba10bb8a24d8a6f9f484d5a"],["/documentation/images/TMDB/1app-screenshot-init-pending-1555417082792.jpg","6bd9d6430f05dfc1cea33c4fcb018423"],["/documentation/images/TMDB/1app-screenshot-query-detail-error-1555445338489.jpg","73c184c7f777d779378c3921289a071e"],["/documentation/images/TMDB/1app-screenshot-query-detail-pending-1555445339416.jpg","dfb57b23eca7bffbeb12307855ce42b1"],["/documentation/images/TMDB/1app-screenshot-query-detail-success-1555445338774.jpg","282e6a62564acb3579a3de3e223cfb2f"],["/documentation/images/TMDB/app screenshot query - error.png","5d577f163fae5ccc7b9b068d9a461861"],["/documentation/images/TMDB/app screenshot query - pending.png","5930447bddbcd1c2d325b76270f6c99c"],["/documentation/images/TMDB/app screenshot query - success.png","1b9f736ef11e7d4aaccb5bf671360f95"],["/documentation/images/chess game/black turn.png","449233838973f21f01c1038c12455cb0"],["/documentation/images/chess game/game random position.png","62288517f7dbf75cc954a118ea30db18"],["/documentation/images/chess game/game starting position.png","225677dc26de7c90f3b80c8b125112af"],["/documentation/images/chess game/initial position.jpg","1258eb4177208ecf0fb1172f0a8d1f77"],["/documentation/images/chess game/initial position.png","dafac13190ebaa94a1e540c15d661975"],["/documentation/images/chess game/initial screen with clock 2s.jpg","e5723d722d7ecad5ec5d08986f18fbd7"],["/documentation/images/chess game/initial screen with clock.jpg","8e3e73ec78adb44d8cc30519434644a5"],["/documentation/images/chess game/react chess image.png","1895f7399bd799824c3bfa61fd1f998f"],["/documentation/images/chess game/white piece selected.png","9c82f3d9b14cb1d7b1c4407b48ec08d0"],["/documentation/images/chess game/white turn - white piece selected.jpg","fe6557f1e36128dfbf3ea82cd8347131"],["/documentation/images/chess game/white turn - white piece selected.png","f8a734988f778fb8aed13a5f559714d4"],["/documentation/images/chess game/white wins.png","11fa37b4b83b6e8d77d551680d48bfc5"],["/documentation/images/coming-soon/SeekPng.com_website-under-construction-png_668670.png","fa594c94bba7b9a829858981e5e5079a"],["/documentation/images/coming-soon/Work_In_Progress-300x269.png","eabc5aa943871c9c042eea877f732473"],["/documentation/images/coming-soon/construction-information-building-project-industry-39628.png","c91c4c38a6497be8ac0c6258db703f5c"],["/documentation/images/coming-soon/construction-under-icon-39649.png","e691e45bd04f797fd3f72eca421a4c4a"],["/documentation/images/coming-soon/ireka-under-construction-39688.png","123b1c96f6df01d573f3d032fc1ab4c2"],["/documentation/images/coming-soon/jet-plane-under-construction-royalty-free-vector-clip-art-39637.png","baaa88864787d438202fa40e75127aec"],["/documentation/images/coming-soon/pngkit_under-construction-sign-png_880130.png","1abd1c285db5e7b8839c1af37ce4cf35"],["/documentation/images/coming-soon/under construction red.png","56f40fc9940abc9a3cd6b94918250c28"],["/documentation/images/coming-soon/under-construction-png-hd-free-transparent-under-construction-hd-660337.png","3a2e4ff196e4c7d62db0d7768d4525e5"],["/documentation/images/coming-soon/under-construction-png-images-label-free-download-39671.png","7a199b6d5d61676bbbb1a977d834efcf"],["/documentation/images/coming-soon/under-construction-png-images-label-free-download-660574.png","70166eaebafc752cfac23133dd3b1ed4"],["/documentation/images/coming-soon/under-construction-png-images-label-free-download-660778.png","7f5f38275b25c3d7c6b167223dbfca56"],["/documentation/images/coming-soon/under-construction-png-transparent-images-39666.png","dcc2d79a86a0f4659a4356055efbbf54"],["/documentation/images/coming-soon/wip-20170917.png","ae73a13a40f17795e281c7b88dd5b80f"],["/documentation/images/counter-app/counter app demo.gif","6d9acb3dfc4274d22ff6785bec75b107"],["/documentation/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/documentation/images/icons/android-icon-192x192.png","15a62b14d77fafa74a329b611201681e"],["/documentation/images/icons/apple-icon-180x180.png","3a470042ce1b520d4f7edd77f894f9ff"],["/documentation/images/icons8-twitter-48.png","07f2def527767ff54b5e3ec95b6016b8"],["/documentation/images/kingly_logo.png","60aa7172614b9cb6bb0cf7f6d7dbe7c2"],["/documentation/images/logo.jpg","6bd41f7af4aded3b9ae8afa295b385b1"],["/documentation/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/documentation/images/volunteer-app/animated_demo.gif","7041d542d2780f709a48edee84fb49e3"],["/documentation/index.html","f9e2d23db0a745f49d6ab43ac31ef0d8"],["/documentation/js/common.js","80e39bda3395c0b7d3da48617152f7bf"],["/documentation/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/documentation/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/documentation/js/tabbed-codeblocks.js","3775437b6b74aa8651bf9a43f60544b2"],["/documentation/manifest.json","d958ce1b669075b609308c0f24a9edef"],["/documentation/tags/components/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/tags/functional-programming/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/tags/reactive-programming/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/tags/user-interface/index.html","50766e97e28de61117433bf3351144c0"],["/documentation/v1/api/API extensions.html","1421a3d8322307735de5cd1ec7807b34"],["/documentation/v1/api/createStateMachine.html","f7df0c7d6aa47c70dda53a5a0a558458"],["/documentation/v1/api/index.html","dfb44d371e42806ee3c919b0a42e0cdd"],["/documentation/v1/api/makeWebComponent.html","f89c064e3a471e1ad1bd4117716188a8"],["/documentation/v1/api/terminology.html","ea821ca4f1a6bd5b99202d9e6d6a4d44"],["/documentation/v1/api/traceFSM.html","c001e99a1ea85b27b7182cc4d7cb9682"],["/documentation/v1/best-practices/index.html","716c694af682697477d866e58db51c9d"],["/documentation/v1/contributed/User interfaces as reactive systems.html","2ce79c77323ca120b2ff0be3e41d51ee"],["/documentation/v1/contributed/index.html","dc8660c535c60e1ba7b6b814daa313a6"],["/documentation/v1/contributed/visualizer.html","09730055fe36d3da3e94f60beaffcc4f"],["/documentation/v1/cookbook/dependency-injection.html","54559c0f2125432be38fa3d60f784d6e"],["/documentation/v1/cookbook/index.html","633e1c1e02bd3f7a317ec5b04010ee7d"],["/documentation/v1/examples/counter-application.html","eb20dd3ec4341c6c15bc62216a0b4cc4"],["/documentation/v1/examples/index.html","4a166fc32f9f84e56f997ee1aa887b61"],["/documentation/v1/examples/keypad.html","720868a088f4e5b152db40ffcfc9bf3e"],["/documentation/v1/examples/online-TMDB-interface.html","c581a10d8a52a120d13b07f97f8e6e56"],["/documentation/v1/examples/svelte suspense.html","5b6898646c506ff42af723854eb9af4e"],["/documentation/v1/examples/two-players-chess-game.html","b7344864eca9f96d461524a07e3201d8"],["/documentation/v1/examples/wizard-form.html","f74e0ebcf1693261da92954741c35340"],["/documentation/v1/int-cycle/index.html","1a984c1e7e9298d67fec40d20e453c8a"],["/documentation/v1/int-others/index.html","d582c7db42e7b747f74d5a9b473355d5"],["/documentation/v1/int-react/index.html","9e1acac2ab7a6c4d2f304fd00921bc7f"],["/documentation/v1/int-svelte/index.html","87245232310ac8d9f30e5c9d0511ef13"],["/documentation/v1/int-vanilla/index.html","54bfa2173429e7d4c796f07089042075"],["/documentation/v1/int-vue/index.html","ef1a2c980dae57bd400198cf7104ba29"],["/documentation/v1/search/index.html","21542f9e1903ee6166622c1b7248ae61"],["/documentation/v1/testing/Unit-testing a Kingly machine.html","c98bc3975395d87c0190d7d4ad5e6817"],["/documentation/v1/testing/index.html","75d70399412d7fdb5b91fdb71dabe502"],["/documentation/v1/testing/testing command handlers.html","9a788871d8de27d283d244705a5097e3"],["/documentation/v1/testing/testing interfaced systems.html","1ae397601aa4321a0688fc0e0a122bbf"],["/documentation/v1/testing/testing-password-meter.html","0c4fca08d973c86aab6f7f32141601c5"],["/documentation/v1/tutorials/TMDB-top-level.html","678e6273c5935dc3cda695a0fa132fef"],["/documentation/v1/tutorials/chess-game-evolved.html","97c21cf204aeb31045f129be2c3e98b7"],["/documentation/v1/tutorials/chess-game-ultimate.html","b58128d22eeae0e186993ea31f355bbb"],["/documentation/v1/tutorials/chess-game.html","e67c31c765c81858216898f30047a201"],["/documentation/v1/tutorials/counter-application.html","92aa52664e3ca17f2f2258a9be811c0e"],["/documentation/v1/tutorials/index.html","fea7278d50892a3b3c03d74e0da1149f"],["/documentation/v1/tutorials/installation.html","8e0998c683d8a3e259150e7c43a65b99"],["/documentation/v1/tutorials/model-with-machines.html","4653f9e57a4f8a63988a0abd9b2d4614"],["/documentation/v1/tutorials/password-meter-implementation.html","f4544fac5068e80dfc5933c9c68d68c1"],["/documentation/v1/tutorials/password-meter-learnt.html","cf65e69408f6290db195f31f8c8d2fda"],["/documentation/v1/tutorials/password-meter-ui-implementation.html","a910bf69d30980e2937bb7f69e901abe"],["/documentation/v1/tutorials/password-meter.html","3e1ffd59b5592e89ce1fe1414d52a422"],["/documentation/v1/tutorials/tmdb-online-interface.html","08c4a62628bf99d8bd7a24105cea19b7"],["/documentation/v1/tutorials/tmdb-routing.html","353a55e307e2f5c65b302b368663e93d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




