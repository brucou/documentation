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

var precacheConfig = [["/documentation/2017/06/11/User interfaces as reactive systems/index.html","d9b66ccd88cdfb8e205e07677fb1d831"],["/documentation/2017/07/01/Componentization against complexity/index.html","510031f53c5d48d2bdf7ea356f7bc887"],["/documentation/2017/07/07/A componentization framework for cyclejs/index.html","e69a8257d47ac234dd0b7a13e7a21ea4"],["/documentation/2017/10/16/Applying componentization to reactive systems - sample application/index.html","130b11db819bcb42b0bf11d2c18977cb"],["/documentation/2018/01/07/Component models for user interfaces implementation - a comparison/index.html","7cb212cc124beb1825c4f1190a318dda"],["/documentation/api-assets/FSM event processing semantics.png","59945866904e965643375f9343e40a3e"],["/documentation/api-assets/history transitions, INIT event CASCADING transitions.png","4db872bf5f0f485f6482dbf710cbf8bb"],["/documentation/api-assets/kingly.jsfiddle.js","2012776b7aa1145c70cfaa87fc8c8518"],["/documentation/api-assets/movie app demo init.png","e3a4f40d0e183c08f7c1fec748337310"],["/documentation/api-assets/password selector demo animated.png","48b65d5bc5ed91a924bd0777db3c3b19"],["/documentation/api-assets/password selector test generated.png","50e1475b06d31bdf08a811af335fe819"],["/documentation/api-assets/password selector test generation.png","90cd426a56bb209c971771c480d9366f"],["/documentation/api-assets/password selector transitions code.png","44ba750969c0061898010f4170551a78"],["/documentation/api-assets/password selector.png","7e98cfc6df05d46f97919d62387e4e04"],["/documentation/api-assets/password submit fsm.png","832e3c3e3e24075f6cd1cc97dc9636d5"],["/documentation/api-assets/sparks application process with comeback proper syntax - flat fsm.png","de8026146a4e81e916dddfe017c6aff7"],["/documentation/api/index.html","1f900723e10f7f1210ab3bd5338061bf"],["/documentation/archives/2017/06/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/archives/2017/07/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/archives/2017/10/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/archives/2017/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/archives/2018/01/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/archives/2018/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/archives/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/atom.xml","14f154eccabaec8cf08d7edb441431e2"],["/documentation/categories/programming/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/css/index.css","35ca547e47433044d6c48bba149571f1"],["/documentation/css/page.css","c61e75070b1f8bc203c1965193848841"],["/documentation/css/tufte.css","3be4d9bae8ee99e51cf206b59114459c"],["/documentation/graphs/TMDB start.png","1a7e50ea16badbd9515709326c761b2f"],["/documentation/graphs/chess game dependency chart.png","1f74d560ea7a42cab792ba707568ee4f"],["/documentation/graphs/chess game dependency in reality chart.png","f90d8e09d3b4ad320491bb6f3d4c6093"],["/documentation/graphs/chess game no  hierarchy no undo.jpg","f30c00ed25c5e46a86d4584c8de6c202"],["/documentation/graphs/chess game with hierarchy no undo with render.png","41be8dccce5b4ac7b45e4ed846b441db"],["/documentation/graphs/chess game with hierarchy no undo.jpg","2bd19546e674c31f1bfe8a5b56499756"],["/documentation/graphs/chess game with hierarchy with undo and timer highlighted with init.jpg","1d77ee17f60a8532c44e7097278e2154"],["/documentation/graphs/chess game with hierarchy with undo and timer highlighted.jpg","8d3ca997c95e84ace36fd85169106464"],["/documentation/graphs/chess game with hierarchy with undo and timer.jpg","cf39716a7a7995b681b87c6775e36a1e"],["/documentation/graphs/chess game with hierarchy with undo with emphasis high level.jpg","eeccd0e259f0eaab68272b5ffd5ce548"],["/documentation/graphs/chess game with hierarchy with undo with emphasis no grouping.jpg","50a5c196c32e7370da385a1038236439"],["/documentation/graphs/chess game with hierarchy with undo with emphasis.jpg","7eed4ffe6da8fb0c75d419fb38241913"],["/documentation/graphs/chess game with hierarchy with undo.jpg","b9ce75a9cd47069733a387a52bba287e"],["/documentation/graphs/high level architecture functional ui implementationgraphml.png","abe8a9682e224c2e81dda3f80053c13a"],["/documentation/graphs/high level architecture ui implementation with kingly selected command handler.png","0db02721ff248a379f22a9e6c973bc6b"],["/documentation/graphs/high level architecture ui implementation with kingly selected interfaced systems.png","d9574279d06a699d0242e5a76bbdc592"],["/documentation/graphs/high level architecture ui implementation with kingly selected kingly.png","b79479686181e4807064ec4bb2bd07dd"],["/documentation/graphs/high level architecture ui implementation with kingly.jpg","539e38167d65659aaa753bf6bbce7ed6"],["/documentation/graphs/infoq-functional-ui-fsm-cat-gif-basic.png","355566eddcb2a79f4f1a678b94885f47"],["/documentation/graphs/infoq-functional-ui-fsm.png","74e2d2591515d24c82b8e1164a699927"],["/documentation/graphs/keypad machine.png","0e856f31ef453ffdcaac79d027a91381"],["/documentation/graphs/movie app with routing v4.png","bbff2b47cda05efcfbf2457a469a69f7"],["/documentation/graphs/movie-search/TMDB routing - refactor.png","733c9a1dd7f00bce403b19e91ada9843"],["/documentation/graphs/movie-search/TMDB routing and movie querying and movie detail simplified v2.png","1e84ac0798c1080a3f39348607da3322"],["/documentation/graphs/movie-search/TMDB routing and movie querying and movie detail v2.png","2eaaa77dbc97138da0ef12a2cbe309eb"],["/documentation/graphs/movie-search/TMDB routing and movie querying and movie detail.png","90fa9d5ac895e40250af145b126a6592"],["/documentation/graphs/movie-search/TMDB routing and movie querying v2.png","ff6a104faab24f01c74a066514bc10b6"],["/documentation/graphs/movie-search/TMDB routing and movie querying.png","da2a728f04285d66acb9aa133656c670"],["/documentation/graphs/movie-search/TMDB routing.png","552e329e885cfe57e5164822b0990523"],["/documentation/graphs/movie-search/TMDB start.png","2f2cbfd039c38f73058d120712a24fda"],["/documentation/graphs/movie-search/TMDB-lessons-learnt.html","0af81b915046f3df9f5b8832f0699dda"],["/documentation/graphs/movie-search/app screenshot init - error.png","1cff924a4da17f3e3cdf11da1aef3323"],["/documentation/graphs/movie-search/app screenshot init - pending.png","ca859e6f26eb9947480341913a9d1d74"],["/documentation/graphs/movie-search/app screenshot init - success.png","206a8027d3e79e2f88cb1fae63592839"],["/documentation/graphs/movie-search/app screenshot query - error.png","5d577f163fae5ccc7b9b068d9a461861"],["/documentation/graphs/movie-search/app screenshot query - pending.png","5930447bddbcd1c2d325b76270f6c99c"],["/documentation/graphs/movie-search/app screenshot query - success.png","1b9f736ef11e7d4aaccb5bf671360f95"],["/documentation/graphs/movie-search/app screenshot query detail - error.png","de3d5a3c55eb047992b5ab4e7cc360d4"],["/documentation/graphs/movie-search/app screenshot query detail - pending.png","6df00a173dc36b86db7dc1d1924e2e4a"],["/documentation/graphs/movie-search/app screenshot query detail - success.png","0390c9d4a6ad8c23e9941dc26073e4ba"],["/documentation/graphs/movie-search/movie search TDD fsm actual.png","9fd4f6118ed43ed8d2d4fff252edab5e"],["/documentation/graphs/movie-search/movie search TDD fsm.png","fcd62837d88ed956bf3aa7f8b63cb962"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart no emphasis switchMap.jpg","19fe0173b023c9df6424b2b14d45fd0a"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart no emphasis switchMap.png","7fbc961e7ca7a3492a9dfda84dd4c8cf"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart no emphasis.png","0a9adf1416ad1e4277d41c483dc9c30e"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart with back button and debounce.jpg","c3b5bd5ac6f1667561fbf890bc6d95ee"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart with back button and debounce.png","eebe2cea050a6c3c42cc799dc21ca3f0"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart with back button.png","893ae2bfcc2fed6cc9985467ac50fbee"],["/documentation/graphs/movie-search/movie search good fsm corrected flowchart.png","31b846c5db7fafc7bd46235fc1dd0d10"],["/documentation/graphs/movie-search/movie search good fsm corrected.png","e12f1d6bd4dfbaec45d2e4e0c19d90ad"],["/documentation/graphs/movie-search/movie search good fsm flowchart.png","98d31054fac607ffd12924d8738d8862"],["/documentation/graphs/movie-search/movie search good fsm.png","895a32cf404b5947e85ef8d0016f23d0"],["/documentation/graphs/password submit fsm.png","d6b664eb3024d3476b4b0fb980ff61ea"],["/documentation/graphs/password-meter-four-nodes.png","9a3716a048217d61165bdda3172cd9ef"],["/documentation/graphs/password-meter.png","ac14bd0757d0970edfb6a88721cbe2c9"],["/documentation/graphs/real-world/API call machine.png","fd3f020405a2b1f63bf5437eeb658ed7"],["/documentation/graphs/real-world/API call with auth required.png","7a36427a5888e8986bb5c601fca0ed7c"],["/documentation/graphs/real-world/high level architecture functional ui implementationgraphml.png","15d4ba16c31db38893f90ec1f5615b07"],["/documentation/graphs/real-world/realworld-all.svg","b0a8b01e57f4e94746d87b999ab945e7"],["/documentation/graphs/real-world/realworld-hexgaonal-architecture v2.png","1565a2afbe614dec1e1fb48c26f5b025"],["/documentation/graphs/real-world/realworld-high-level-architecture.png","d1a3db25480bb8d16c36c4cfd2e291f7"],["/documentation/graphs/real-world/realworld-routing-article-level-1.png","0f675e6c238bbff974e9f94167fb5c68"],["/documentation/graphs/real-world/realworld-routing-article.png","8be9c9c661e3bd8569a14f32a54a9908"],["/documentation/graphs/real-world/realworld-routing-editor-level-1.png","a659f06e7687fbe98c082bee86eaeb02"],["/documentation/graphs/real-world/realworld-routing-editor-unfactored-form-machine-highlighted.png","22c442e33ffeca3518e0ca60b00ac6ca"],["/documentation/graphs/real-world/realworld-routing-editor-unfactored.png","cc8f67c7cd7843af7f6bc1602a5f2167"],["/documentation/graphs/real-world/realworld-routing-editor.png","a9a319db5ecdfc249c17a2fb5e48bd72"],["/documentation/graphs/real-world/realworld-routing-home v2.png","d32b44fc3bb666bae201845d1db3dc01"],["/documentation/graphs/real-world/realworld-routing-home-auth-and-unauth-see-feed-and-click-page.png","636dd370f72be6b048bf43ec47a06746"],["/documentation/graphs/real-world/realworld-routing-home-complete focus filter feed.png","861bbafe1058d1e56b8915342e09d2d4"],["/documentation/graphs/real-world/realworld-routing-home-complete focus global feed.png","410455c7fb24aea70f743212b4534f21"],["/documentation/graphs/real-world/realworld-routing-home-complete focus user feed.png","8c61e8cdf7b1ed58c610592e0385e112"],["/documentation/graphs/real-world/realworld-routing-home-complete v3.png","89b77057bfcccbfbaaf028652f88e0c8"],["/documentation/graphs/real-world/realworld-routing-home-complete v4.png","32368c4d0420b74e03372a2614cbedf2"],["/documentation/graphs/real-world/realworld-routing-home-complete v5.png","92d898c82d751d9e58425ea6dfef4154"],["/documentation/graphs/real-world/realworld-routing-home-complete.png","d7442379c2fc822541c1d0a952273888"],["/documentation/graphs/real-world/realworld-routing-home-unauthenticated-with-page-click.png","512679f4185c46a5d24b05a6def5f841"],["/documentation/graphs/real-world/realworld-routing-home-user-can-change-feeds.png","28150d796109c6d4e485dfd3d509d7ad"],["/documentation/graphs/real-world/realworld-routing-home-user-can-favorite.png","ce1e6214491aaf46096a1034997d92f0"],["/documentation/graphs/real-world/realworld-routing-home-user-can-navigate.png","d51246b04863008981c5b2644dbe46ee"],["/documentation/graphs/real-world/realworld-routing-home-user-sees-global-feed-user-feed-can-filter-feed-with-page-click.png","0773ceb1ac691bb706427fe3dd926cf1"],["/documentation/graphs/real-world/realworld-routing-home-with-tag-filter-and-other-clicks.png","2fd3b79b0add53596b3b2ade285fe7e5"],["/documentation/graphs/real-world/realworld-routing-home-with-tag-filter.png","5eb53e34377e3a746f75e5e0157e7db6"],["/documentation/graphs/real-world/realworld-routing-home.png","f1c463b5407d303ec825581c9bbaf09f"],["/documentation/graphs/real-world/realworld-routing-profile-level-1.png","173a6a54377887be17efac00e060a0ab"],["/documentation/graphs/real-world/realworld-routing-profile.png","a4c9eb3ee0dc58f4bcf5cd24c2917d64"],["/documentation/graphs/real-world/realworld-routing-settings-level-1.png","f7f9081da8be29d4f3f37d99c228ef8f"],["/documentation/graphs/real-world/realworld-routing-settings.png","0accc7fba1b5671826f471e0e5349cf4"],["/documentation/graphs/real-world/realworld-routing-signin-form-machine-highlighted.png","0a854e34e7d5af42f0825f322757c7da"],["/documentation/graphs/real-world/realworld-routing-signin.png","e67fae1e8cfe3d9f814d8f7802b0a82e"],["/documentation/graphs/real-world/realworld-routing-signup-form-machine-highlighted.png","3a50fbfbaa7875e90c52a112b7d8c791"],["/documentation/graphs/real-world/realworld-routing-signup.png","2c7ff436d553079dba720b5d951d4d64"],["/documentation/graphs/real-world/study-visualizer-only-level-0.png","ebbe86370c70c6b3c6f176fa558bd713"],["/documentation/graphs/real-world/study-visualizer-only-level-1.png","ad5499a216e6874f8e4a2779891a4305"],["/documentation/graphs/real-world/two-step-auth-process-factoring-highlighted.png","0ed060e2deb00eb9068a7808118736c1"],["/documentation/graphs/real-world/two-step-auth-process-factoring.png","d13d8463be3dc9b3e8ac26d40acfa230"],["/documentation/graphs/routing machine v2.png","80a703c6d786a64bb7a5113e172287b1"],["/documentation/graphs/sparks application process with comeback proper syntax hierarchical fsm iter1.1.png","946a143b0fd7239817b371c83eea3ea2"],["/documentation/graphs/sparks application process with comeback proper syntax hierarchical fsm.png","5f95b52431968323aa9079db242e4752"],["/documentation/graphs/suspense machine.png","0822f9c0b50f844380330a347a6814ea"],["/documentation/graphs/trivial counter machine.jpg","5892c53071017ac9e91d316002241f1a"],["/documentation/graphs/trivial counter machine.png","3b3557e32cbcaf8b68da234467460d90"],["/documentation/images/Free Cartoon Crown Vector.png","86b65fc7fa6930cf8f3d3fcb78174d20"],["/documentation/images/GitHub-Mark-32px.png","f87561b8bb354ef83b09a66e54f70e08"],["/documentation/images/TMDB/1app screenshot init - success-1555421998300.png","519957a77f3cdb566e917202476f92e4"],["/documentation/images/TMDB/1app-screenshot-init-error-1555421997658.jpg","e35dcde79ba10bb8a24d8a6f9f484d5a"],["/documentation/images/TMDB/1app-screenshot-init-pending-1555417082792.jpg","6bd9d6430f05dfc1cea33c4fcb018423"],["/documentation/images/TMDB/1app-screenshot-query-detail-error-1555445338489.jpg","73c184c7f777d779378c3921289a071e"],["/documentation/images/TMDB/1app-screenshot-query-detail-pending-1555445339416.jpg","dfb57b23eca7bffbeb12307855ce42b1"],["/documentation/images/TMDB/1app-screenshot-query-detail-success-1555445338774.jpg","282e6a62564acb3579a3de3e223cfb2f"],["/documentation/images/TMDB/app screenshot query - error.png","5d577f163fae5ccc7b9b068d9a461861"],["/documentation/images/TMDB/app screenshot query - pending.png","5930447bddbcd1c2d325b76270f6c99c"],["/documentation/images/TMDB/app screenshot query - success.png","1b9f736ef11e7d4aaccb5bf671360f95"],["/documentation/images/chess game/black turn.png","449233838973f21f01c1038c12455cb0"],["/documentation/images/chess game/game random position.png","62288517f7dbf75cc954a118ea30db18"],["/documentation/images/chess game/game starting position.png","225677dc26de7c90f3b80c8b125112af"],["/documentation/images/chess game/initial position.jpg","1258eb4177208ecf0fb1172f0a8d1f77"],["/documentation/images/chess game/initial position.png","dafac13190ebaa94a1e540c15d661975"],["/documentation/images/chess game/initial screen with clock 2s.jpg","e5723d722d7ecad5ec5d08986f18fbd7"],["/documentation/images/chess game/initial screen with clock.jpg","8e3e73ec78adb44d8cc30519434644a5"],["/documentation/images/chess game/react chess image.png","1895f7399bd799824c3bfa61fd1f998f"],["/documentation/images/chess game/white piece selected.png","9c82f3d9b14cb1d7b1c4407b48ec08d0"],["/documentation/images/chess game/white turn - white piece selected.jpg","fe6557f1e36128dfbf3ea82cd8347131"],["/documentation/images/chess game/white turn - white piece selected.png","f8a734988f778fb8aed13a5f559714d4"],["/documentation/images/chess game/white wins.png","11fa37b4b83b6e8d77d551680d48bfc5"],["/documentation/images/coming-soon/SeekPng.com_website-under-construction-png_668670.png","fa594c94bba7b9a829858981e5e5079a"],["/documentation/images/coming-soon/Work_In_Progress-300x269.png","eabc5aa943871c9c042eea877f732473"],["/documentation/images/coming-soon/construction-information-building-project-industry-39628.png","c91c4c38a6497be8ac0c6258db703f5c"],["/documentation/images/coming-soon/construction-under-icon-39649.png","e691e45bd04f797fd3f72eca421a4c4a"],["/documentation/images/coming-soon/ireka-under-construction-39688.png","123b1c96f6df01d573f3d032fc1ab4c2"],["/documentation/images/coming-soon/jet-plane-under-construction-royalty-free-vector-clip-art-39637.png","baaa88864787d438202fa40e75127aec"],["/documentation/images/coming-soon/pngkit_under-construction-sign-png_880130.png","1abd1c285db5e7b8839c1af37ce4cf35"],["/documentation/images/coming-soon/under construction red.png","56f40fc9940abc9a3cd6b94918250c28"],["/documentation/images/coming-soon/under-construction-png-hd-free-transparent-under-construction-hd-660337.png","3a2e4ff196e4c7d62db0d7768d4525e5"],["/documentation/images/coming-soon/under-construction-png-images-label-free-download-39671.png","7a199b6d5d61676bbbb1a977d834efcf"],["/documentation/images/coming-soon/under-construction-png-images-label-free-download-660574.png","70166eaebafc752cfac23133dd3b1ed4"],["/documentation/images/coming-soon/under-construction-png-images-label-free-download-660778.png","7f5f38275b25c3d7c6b167223dbfca56"],["/documentation/images/coming-soon/under-construction-png-transparent-images-39666.png","dcc2d79a86a0f4659a4356055efbbf54"],["/documentation/images/coming-soon/wip-20170917.png","ae73a13a40f17795e281c7b88dd5b80f"],["/documentation/images/counter-app/counter app demo.gif","6d9acb3dfc4274d22ff6785bec75b107"],["/documentation/images/extension/courtesan 0.png","58550426875a76f342ebbbe60f2043c6"],["/documentation/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/documentation/images/icons/android-icon-192x192.png","15a62b14d77fafa74a329b611201681e"],["/documentation/images/icons/apple-icon-180x180.png","3a470042ce1b520d4f7edd77f894f9ff"],["/documentation/images/icons8-twitter-48.png","07f2def527767ff54b5e3ec95b6016b8"],["/documentation/images/kingly_logo.png","60aa7172614b9cb6bb0cf7f6d7dbe7c2"],["/documentation/images/logo state transducer.png","2393ed473764ee46955bdcd3f8d71743"],["/documentation/images/logo.jpg","6bd41f7af4aded3b9ae8afa295b385b1"],["/documentation/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/documentation/images/real-world/QUnit dummy test.png","dd40f0f740e7547d1fa5d5cfdb01c2b1"],["/documentation/images/real-world/home route test setup test.png","d0e1edf707b07e91e54f896b4ea53d60"],["/documentation/images/real-world/home-route-unauthenticated-with-interfaced-systems-screenshot-bottom.png","90f17e4a56ae1d00a2f766a2e88381d0"],["/documentation/images/real-world/home-route-unauthenticated-with-interfaced-systems-screenshot.png","aaee5dfb715e7725c4c6eb3b743b7b4c"],["/documentation/images/real-world/screenshot-demo.article.realworld.io-2019.08.06-22_27_21.png","b3f9dc10b7431fb79fbd959024feb12f"],["/documentation/images/real-world/screenshot-demo.authenticated-article.realworld.io-2019.08.06-23_19_50.png","f02f8201c96799ed143e6eac91b9b605"],["/documentation/images/real-world/screenshot-demo.authenticated-comment-posted.realworld.io-2019.08.06-23_22_52.png","910ba7626c4c88b4deb8418db5e2b60f"],["/documentation/images/real-world/screenshot-demo.authenticated-global-feed.realworld.io-2019.08.06-23_06_39.png","dfc36a5df4ebf79b36188c13c275a273"],["/documentation/images/real-world/screenshot-demo.authenticated.filtered.realworld.io-2019.08.06-23_45_34.png","14d90a9726397c8abeace7ea3d210316"],["/documentation/images/real-world/screenshot-demo.edit-article.realworld.io-2019.08.06-23_35_56.png","7dbcf7d69d970c11c296bb574896a4b3"],["/documentation/images/real-world/screenshot-demo.home-47.realworld.io-2019.08.06-22_43_59.png","501610b2de5b50d166b8baaab0b5b031"],["/documentation/images/real-world/screenshot-demo.home.realworld.io-2019.08.06-22_24_28.png","37bd41b225258cbc874f1e608d875e56"],["/documentation/images/real-world/screenshot-demo.logged-user-home.realworld.io-2019.08.06-23_02_45.png","824dbbae05dc2c712f3d6e30b8c842d5"],["/documentation/images/real-world/screenshot-demo.new-article.realworld.io-2019.08.06-23_24_20.png","880b6de52050340a99bf8ecf8e0d2888"],["/documentation/images/real-world/screenshot-demo.profile-settings-different-user.realworld.io-2019.11.11-17_36_08.png","6a01bc00cb04a6c92fda94e74833d18b"],["/documentation/images/real-world/screenshot-demo.profile-settings-favorites.realworld.io-2019.08.06-23_16_59.png","55ffbf087a988b91c1130a851d6856d1"],["/documentation/images/real-world/screenshot-demo.profile-settings-same-user.realworld.io-2019.11.11-17_36_08.png","a5eea1d538258c765e594d6c56a43342"],["/documentation/images/real-world/screenshot-demo.profile-settings.realworld.io-2019.08.06-23_13_56.png","18f6da9e5a146ce1a20a223cf69e3d47"],["/documentation/images/real-world/screenshot-demo.published-article.realworld.io-2019.08.06-23_30_59.png","736bfafde067618ff185ddb9bc273065"],["/documentation/images/real-world/screenshot-demo.realworld.fail-signup.io-2019.08.06-23_00_11.png","d1166b78d822f773c87a2daef0789c53"],["/documentation/images/real-world/screenshot-demo.settings-error.realworld.io-2019.08.06-23_12_11.png","94c783f5a5bd3bf39959154ce2e8b5d0"],["/documentation/images/real-world/screenshot-demo.settings.realworld.io-2019.08.06-23_10_17.png","8d3da80166d9b22bf3b550cc7f42364e"],["/documentation/images/real-world/screenshot-demo.signin.realworld.io-2019.08.06-22_38_10.png","17d61a75e3cde1f03b89402a5dcd64a8"],["/documentation/images/real-world/screenshot-demo.signup.realworld.io-2019.08.06-22_36_55.png","05b97e75fa327ed0191badf1b28f6977"],["/documentation/images/real-world/screenshot-demo.tag.realworld.io-2019.08.06-22_39_50.png","a3121d04d15547b3d3fa18cf3eef63fe"],["/documentation/images/real-world/screenshot-demo.user.realworld.io-2019.08.06-22_28_43.png","5214ca9d9a18352f52ee95d9b0c90a0b"],["/documentation/images/real-world/storybook/home-route-unauthenticated-basic.png","b7fbe081cb161b24a595501bdd109345"],["/documentation/images/state machine schematic drawing.jpeg","a6b4bbc17771e4464062a6e757817b39"],["/documentation/images/volunteer-app/animated_demo.gif","7041d542d2780f709a48edee84fb49e3"],["/documentation/images/yed/editor-with-template.gif","cc706edf7b8c1b63f1510626d7dd16b5"],["/documentation/images/yed/password-meter-four-nodes-no-arrows.png","964671672dd5479887a59e31ae427a41"],["/documentation/images/yed/password-meter-four-nodes-with-arrows-and-labels.png","64a0102ca6a6ff0affa7be0dbc19cdf0"],["/documentation/images/yed/password-meter-four-nodes.png","f2db86e33c415c42746866db247d7ec4"],["/documentation/images/yed/password-meter-hierarchic-done.png","a2400c13ad15d27423a5adf86b60816b"],["/documentation/images/yed/password-meter-three-nodes-with-arrows-and-labels.png","0adbd9516016247072a08c111414dc9f"],["/documentation/images/yed/password-meter-three-nodes-with-arrows.png","2a845abdfc03005c7500b5a9adba90d3"],["/documentation/images/yed/password-meter-three-nodes.png","8cffc7d94a9a248ae8d7d493ae1e9ba3"],["/documentation/images/yed/password-meter.png","f48d99682f8cac56497120c060619fdb"],["/documentation/images/yed/template.png","3243bf39e8f363da26f8ba5b7514ada9"],["/documentation/index.html","08f2683b9b0292e55c530bd6c0733bd4"],["/documentation/js/common.js","80e39bda3395c0b7d3da48617152f7bf"],["/documentation/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/documentation/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/documentation/js/tabbed-codeblocks.js","3775437b6b74aa8651bf9a43f60544b2"],["/documentation/manifest.json","d958ce1b669075b609308c0f24a9edef"],["/documentation/tags/components/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/tags/functional-programming/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/tags/reactive-programming/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/tags/user-interface/index.html","283f6431573557a8374cfe196dec6167"],["/documentation/v1/api/API extensions.html","b80aac4cd889d3d248d24e587ee3eab7"],["/documentation/v1/api/createStateMachine.html","cd00880d72f283474abab6e1e47d57b4"],["/documentation/v1/api/index.html","f7c16c8d222e7395db0ce22ffbc8ed7c"],["/documentation/v1/api/makeWebComponent.html","9f62fdb6e9463ffaa4c691c1fa7e5da6"],["/documentation/v1/api/terminology.html","b37784c16276cff40e422d489783ad7c"],["/documentation/v1/api/traceFSM.html","a705daa9cb6fcc97ab8a7129369594e6"],["/documentation/v1/best-practices/index.html","08a203537cb155e8c17048742b48f878"],["/documentation/v1/contributed/User interfaces as reactive systems.html","2aad62116f95163d76b824c10d6d6c21"],["/documentation/v1/contributed/index.html","2222b44195ef9ce5f5bc62bac6c95efc"],["/documentation/v1/contributed/visualizer.html","2cb2d61d9f09cd856fd879d3f42465f4"],["/documentation/v1/cookbook/dependency-injection.html","1c4f3f70e290a7243d6eeb2b902c0324"],["/documentation/v1/cookbook/index.html","dab7e45dfba8f9656fa8e61c71ff5456"],["/documentation/v1/examples/counter-application.html","12973f94e6141cf4194fda5bfe962794"],["/documentation/v1/examples/index.html","8df706e67c2854183effde88af10be70"],["/documentation/v1/examples/keypad.html","5af5b895232f4a65c8a94eafbf24c0c8"],["/documentation/v1/examples/online-TMDB-interface.html","9c0f1086ed6e8a704f2509b5c3519041"],["/documentation/v1/examples/svelte suspense.html","39a55047923d25c5dd000a6cdd5719a7"],["/documentation/v1/examples/two-players-chess-game.html","b7f216d4f079ef32c81763aaa348badc"],["/documentation/v1/examples/wizard-form.html","2218093380cc875cafbccaa8b17cc2a5"],["/documentation/v1/int-cycle/index.html","033916c98f756fc91493d2880feb4242"],["/documentation/v1/int-others/index.html","92dbd009ddf5a90c9ee7576e7f36ab81"],["/documentation/v1/int-react/index.html","5fbc1ff3a8bb3171f6841b2ad25ecc20"],["/documentation/v1/int-svelte/index.html","bf621719e0b992411e56d52392e217a9"],["/documentation/v1/int-vanilla/index.html","636748000680549baeca334c0cafaffc"],["/documentation/v1/int-vue/index.html","8fe1e97772d46979fd82b8a05c37cf34"],["/documentation/v1/search/index.html","f9bf50fab5222a02f44683fcc0080fe5"],["/documentation/v1/testing/Unit-testing a Kingly machine.html","f5faa26cbd417c1b270aaf427b29fe9d"],["/documentation/v1/testing/index.html","664cf289f2e11ab7840a4a79a6bbfef5"],["/documentation/v1/testing/testing command handlers.html","2867df9cc221f8b8f1fddf19bd6ab5d1"],["/documentation/v1/testing/testing interfaced systems.html","76254bb5080da1eafebfe00d7a140539"],["/documentation/v1/testing/testing-password-meter.html","8a5db8f15bf1f3d0cccaa98da789c2f9"],["/documentation/v1/tooling/compiling.html","793141f85619494d37a109748b52c05d"],["/documentation/v1/tooling/devtool.html","0d2cb575399716ba8d9618479312ad20"],["/documentation/v1/tooling/graph_editing.html","cdf4c6fff9ab8cdad4ac34356968e195"],["/documentation/v1/tutorials/TMDB-movie-query-and-detail.html","73320ed497cf8ef4b2a4bdc38c024368"],["/documentation/v1/tutorials/TMDB-movie-query.html","a71bc7dcf5e5d68207bde76b5d188a06"],["/documentation/v1/tutorials/TMDB-top-level.html","4ce4e5711968e3b78abca9a57040c515"],["/documentation/v1/tutorials/chess-game-evolved.html","72ba359c1a9f95d85dfc95b9c13b3c2d"],["/documentation/v1/tutorials/chess-game-ultimate.html","ce26b0434e596a015dda81e176020087"],["/documentation/v1/tutorials/chess-game.html","7fdfb2f677a4e57bc77f2e1b14bc6a5b"],["/documentation/v1/tutorials/counter-application.html","92d631f46b41ec87746f098e3bda8055"],["/documentation/v1/tutorials/index.html","47b57805c63ea9e094709c6fcbb38d7d"],["/documentation/v1/tutorials/installation.html","b4134689ecd68a8f9f9c09702cdd5d91"],["/documentation/v1/tutorials/introduction.html","8642570c63fe15a8f8f1676702f3ea35"],["/documentation/v1/tutorials/model-with-machines.html","b33841452212c66a4346daffba938aaf"],["/documentation/v1/tutorials/password-meter-compiling.html","70207fa8403c568fcd839e24d6b6f397"],["/documentation/v1/tutorials/password-meter-implementation.html","2281e798060cd18d827454194d8eda0b"],["/documentation/v1/tutorials/password-meter-learnt.html","e1cb65a87e283366f17a5d4c702b4bf4"],["/documentation/v1/tutorials/password-meter-ui-implementation.html","bd599624f09d007090b376ce0170a62f"],["/documentation/v1/tutorials/password-meter-using-graph-editor.html","214b7f8631143235d81b37e311f6063e"],["/documentation/v1/tutorials/password-meter.html","6fed7ab1e587d9c431b70c21d5d64045"],["/documentation/v1/tutorials/real-world-article.html","fa9c16b5c1f688d89d2891038fc880ec"],["/documentation/v1/tutorials/real-world-editor.html","947cdd01bbf8b7f5fe75796653e5cfd5"],["/documentation/v1/tutorials/real-world-home.html","1c409cf9b24900e66c31423e4d5a84ec"],["/documentation/v1/tutorials/real-world-lessons-learnt.html","d9fa7612a9eb46abf444fa1a6fb033c2"],["/documentation/v1/tutorials/real-world-profile.html","97a423b98981ac0c4026ab8314c8afa4"],["/documentation/v1/tutorials/real-world-settings.html","5836678dccd031f752a7a28108a71c2e"],["/documentation/v1/tutorials/real-world-sign-in.html","1a10c88616983b212307c54161f6374f"],["/documentation/v1/tutorials/real-world-sign-up.html","128d4f9987999e5f097534b64d1af06e"],["/documentation/v1/tutorials/real-world.html","c6f55f1ed6063a0d059a8fda3333e7d6"],["/documentation/v1/tutorials/tmdb-online-interface.html","a0711fd24df7fca5bb29d5dfd692bb56"],["/documentation/v1/tutorials/tmdb-routing.html","276053577bac4a5dc48085620c2ed1ab"]];
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




