window.__require=function t(i,e,n){function s(o,c){if(!e[o]){if(!i[o]){var r=o.split("/");if(r=r[r.length-1],!i[r]){var l="function"==typeof __require&&__require;if(!c&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+o+"'")}o=r}var u=e[o]={exports:{}};i[o][0].call(u.exports,function(t){return s(i[o][1][t]||t)},u,u.exports,t,i,e,n)}return e[o].exports}for(var a="function"==typeof __require&&__require,o=0;o<n.length;o++)s(n[o]);return s}({Audio:[function(t,i){"use strict";cc._RF.push(i,"a4a82blFl5INJBRHz80+5Qm","Audio");var e=t("./sound"),n=cc.Class({extends:cc.Component,properties:{musicSound:[e],sfxSound:[e],musicSource:{default:null,type:cc.AudioSource},sfxSource:{default:null,type:cc.AudioSource},musicSprite:{default:null,type:cc.Sprite},onMusicSpriteFrame:{default:null,type:cc.SpriteFrame},offMusicSpriteFrame:{default:null,type:cc.SpriteFrame},sfxSprite:{default:null,type:cc.Sprite},onSFXSpriteFrame:{default:null,type:cc.SpriteFrame},offSFXSpriteFrame:{default:null,type:cc.SpriteFrame},state1:{default:!0,visible:!1},state2:{default:!0,visible:!1},musicSlider:{default:null,type:cc.Slider},sfxSlider:{default:null,type:cc.Slider}},statics:{instance:null},onLoad:function(){n.instance=this},start:function(){},PlayMusic:function(t){var i=this.musicSound.find(function(i){return i.n===t});null==i?console.log("not found"):(this.musicSource.clip=i.clip,this.musicSource.play())},PlaySFX:function(t){var i=this.sfxSound.find(function(i){return i.n===t});null==i?console.log("not found"):(this.sfxSource.clip=i.clip,this.sfxSource.play())},MusicButton:function(){this.state1=!this.state1,this.state1?(this.musicSource.volume=1,this.musicSprite.spriteFrame=this.onMusicSpriteFrame):this.state1&&0!=this.musicSource.volume||(this.musicSource.volume=0,this.musicSprite.spriteFrame=this.offMusicSpriteFrame),this.musicSlider.progress=this.musicSource.volume},SFXButton:function(){console.log("JJJJ"),this.state2=!this.state2,this.state2?(this.sfxSource.volume=1,this.sfxSprite.spriteFrame=this.onSFXSpriteFrame):this.state2||(this.sfxSource.volume=0,this.sfxSprite.spriteFrame=this.offSFXSpriteFrame),this.sfxSlider.progress=this.sfxSource.volume},MusicVolume:function(){this.musicSource.volume=this.musicSlider.progress,0==this.musicSource.volume?(this.musicSprite.spriteFrame=this.offMusicSpriteFrame,this.state1=!1):(this.musicSprite.spriteFrame=this.onMusicSpriteFrame,this.state1=!0)},SFXVolume:function(){this.sfxSource.volume=this.sfxSlider.progress,0==this.sfxSource.volume?(this.sfxSprite.spriteFrame=this.offSFXSpriteFrame,this.state2=!1):(this.sfxSprite.spriteFrame=this.onSFXSpriteFrame,this.state2=!0)}});cc._RF.pop()},{"./sound":"sound"}],Coinmove:[function(t,i){"use strict";cc._RF.push(i,"9e01c4QV1JIfqabF3ieeWNN","Coinmove");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},start:function(){},coinmoveFun:function(t,i,e,n){var s=this,a=this.getValue(-90,90),o=this.getValue(-60,60);t.runAction(cc.sequence(cc.moveTo(.05,cc.v2(e.x+a,e.y-o)),cc.callFunc(function(){var e=cc.instantiate(t);e.setPosition(t.position),s.node.addChild(e),n.push(e),t.setPosition(i)})))},coinmovetaiFun:function(t,i,e,n){var s=this,a=this.getValue(-80,80),o=this.getValue(-60,60);t.runAction(cc.sequence(cc.moveTo(.05,cc.v2(e.x+a,e.y-o)),cc.callFunc(function(){var e=cc.instantiate(t);e.setPosition(t.position),s.node.addChild(e),n.push(e),t.setPosition(i)})))},coinBankFun:function(t,i,e,n){var s=this,a=this.getValue(-60,60),o=this.getValue(-60,60);t.runAction(cc.sequence(cc.moveTo(.05,cc.v2(e.x+a,e.y-o)),cc.callFunc(function(){var e=cc.instantiate(t);e.setPosition(t.position),s.node.addChild(e),n.push(e),t.setPosition(i)})))},getValue:function(t,i){return Math.floor(Math.random()*(i-t+1))+t},resultBetTaiXiu:function(t,i){return Math.floor(Math.random()*(i-t+1))+t}});cc._RF.pop()},{}],CradMove:[function(t,i){"use strict";cc._RF.push(i,"95cffocgd9D96bq1fniS0MC","CradMove");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},moveCard:function(t,i,e,n,s,a){var o=cc.instantiate(t[i]);this.node.addChild(o),o.setPosition(cc.v2(e.position)),o.runAction(cc.sequence(cc.moveTo(1,cc.v2(n.position)),cc.callFunc(function(){s.push(o)}))),this.card.setPosition(a)}});cc._RF.pop()},{}],HotUpdateModule:[function(t,i){"use strict";cc._RF.push(i,"3bed9fXRdlF7r4F/6CwGSHY","HotUpdateModule"),cc.Class({extends:cc.Component,properties:{manifestUrl:cc.Asset,versionLabel:{default:null,type:cc.Label},_updating:!1,_canRetry:!1,_storagePath:""},onLoad:function(){cc.sys.isNative&&(this._storagePath=(jsb.fileUtils?jsb.fileUtils.getWritablePath():"/")+"client",this.versionCompareHandle=function(t,i){for(var e=t.split("."),n=i.split("."),s=0;s<e.length;++s){var a=parseInt(e[s]),o=parseInt(n[s]||0);if(a!==o)return a-o}return n.length>e.length?-1:0},this._am=new jsb.AssetsManager(this.manifestUrl.nativeUrl,this._storagePath,this.versionCompareHandle),this._am.setVerifyCallback(function(){return!0}),this.versionLabel&&(this.versionLabel.string="src:"+this._am.getLocalManifest().getVersion()),cc.sys.os,cc.sys.OS_ANDROID,this._am.setMaxConcurrentTask(16))},onDestroy:function(){this._am.setEventCallback(null),this._am=null},showLog:function(t){cc.log("[HotUpdateModule][showLog]----"+t)},retry:function(){!this._updating&&this._canRetry&&(this._canRetry=!1,this._am.downloadFailedAssets())},updateCallback:function(t){var i=!1,e=!1;switch(t.getEventCode()){case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:this.showLog("The local manifest file was not found, and the hot update was skipped."),e=!0;break;case jsb.EventAssetsManager.UPDATE_PROGRESSION:var n=t.getPercent();if(isNaN(n))return;var s=t.getMessage();this.disPatchRateEvent(n,s),this.showLog("updateCallback Update progress:"+n+", msg: "+s);break;case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:this.showLog("Failed to download manifest file, skip hot update."),e=!0;break;case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:this.showLog("Already the latest version."),e=!0;break;case jsb.EventAssetsManager.UPDATE_FINISHED:this.showLog("The update is over."+t.getMessage()),this.disPatchRateEvent(1),i=!0;break;case jsb.EventAssetsManager.UPDATE_FAILED:this.showLog("Update error."+t.getMessage()),this._updating=!1,this._canRetry=!0,this._failCount++,this.retry();break;case jsb.EventAssetsManager.ERROR_UPDATING:this.showLog("Error during update:"+t.getAssetId()+", "+t.getMessage());break;case jsb.EventAssetsManager.ERROR_DECOMPRESS:this.showLog("unzip error")}if(e&&(this._am.setEventCallback(null),this._updating=!1),i){this._am.setEventCallback(null);var a=jsb.fileUtils.getSearchPaths(),o=this._am.getLocalManifest().getSearchPaths();Array.prototype.unshift.apply(a,o),cc.sys.localStorage.setItem("HotUpdateSearchPaths",JSON.stringify(a)),jsb.fileUtils.setSearchPaths(a),cc.audioEngine.stopAll(),setTimeout(function(){cc.game.restart()},100)}},hotUpdate:function(){if(this._am&&!this._updating){if(this._am.setEventCallback(this.updateCallback.bind(this)),this._am.getState()===jsb.AssetsManager.State.UNINITED){var t=this.manifestUrl.nativeUrl;cc.assetManager.md5Pipe&&(t=cc.assetManager.md5Pipe.transformURL(t)),this._am.loadLocalManifest(t)}this._failCount=0,this._am.update(),this._updating=!0}},checkCallback:function(t){switch(t.getEventCode()){case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:this.showLog("The local manifest file was not found, and the hot update was skipped."),this.hotUpdateFinish(!0);break;case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:this.showLog("Failed to download manifest file, skip hot update."),this.hotUpdateFinish(!1);break;case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:this.showLog("updated."),this.hotUpdateFinish(!0);break;case jsb.EventAssetsManager.NEW_VERSION_FOUND:return this.showLog("There is a new version, need to update"),this._updating=!1,void this.hotUpdate();case jsb.EventAssetsManager.UPDATE_PROGRESSION:var i=t.getPercent();if(isNaN(i))return;var e=t.getMessage();return void this.showLog("checkCallback Update progress:"+i+", msg: "+e);default:return void console.log("event.getEventCode():"+t.getEventCode())}this._am.setEventCallback(null),this._updating=!1},checkUpdate:function(){if(this._updating)cc.log("Checking for updates...");else{if(this._am.getState()===jsb.AssetsManager.State.UNINITED){var t=this.manifestUrl.nativeUrl;cc.assetManager.md5Pipe&&(t=cc.assetManager.md5Pipe.transformURL(t)),this._am.loadLocalManifest(t)}this._am.getLocalManifest()&&this._am.getLocalManifest().isLoaded()?(this._am.setEventCallback(this.checkCallback.bind(this)),this._am.checkUpdate(),this._updating=!0,this.disPatchRateEvent(.01)):this.showLog("Failed to load manifest file")}},hotUpdateFinish:function(t){cc.director.emit("HotUpdateFinish",t)},disPatchRateEvent:function(t){t>1&&(t=1),cc.director.emit("HotUpdateRate",t)}}),cc._RF.pop()},{}],Loading:[function(t,i){"use strict";cc._RF.push(i,"f42edgWnM5F7oaTdZY0FDWk","Loading"),cc.Class({extends:cc.Component,properties:{loading:{default:null,type:cc.Node}},onLoad:function(){this.buttonanimation(this.loading),this.loading.on(cc.Node.EventType.TOUCH_START,this.loadingFun,this)},loadingFun:function(){cc.director.loadScene("game")},start:function(){},buttonanimation:function(t){var i=t.addComponent(cc.Button);i.transition=cc.Button.Transition.SCALE,i.duration=.1,i.zoomScale=1.1}}),cc._RF.pop()},{}],LoginView:[function(t,i){"use strict";cc._RF.push(i,"7049aBMbTJG16hlOkMu1/cd","LoginView"),cc.Class({extends:cc.Component,properties:{menuNode:{default:null,type:cc.Node},labelTips:{default:null,type:cc.Label}},onLoad:function(){this.menuNode.active=!1,this.checkVersion(),this.labelTips.string="loading resources, please wait"},onDestroy:function(){},onEnable:function(){cc.director.on("HotUpdateFinish",this.onHotUpdateFinish,this),cc.director.on("HotUpdateRate",this.onHotUpdateRate,this)},onDisable:function(){cc.director.off("HotUpdateFinish",this.onHotUpdateFinish,this),cc.director.off("HotUpdateRate",this.onHotUpdateRate,this)},checkVersion:function(){this.node.getComponent("HotUpdateModule").checkUpdate()},onUpdateFinish:function(){this.menuNode.active=!0,this.labelTips.string=""},onHotUpdateFinish:function(){this.onUpdateFinish()},onHotUpdateRate:function(t){var i=t;i>1&&(i=1),this._updatePercent=i,this.labelTips.string="\u0110ANG TI\u1ebeN H\xc0NH C\u1eacP NH\u1eacT T\xc0I NGUY\xcaN GAME, TI\u1ebeN \u0110\u1ed8 C\u1eacP NH\u1eacT "+parseInt(1e4*i)/100+"%"},onBtnStartGame:function(){cc.director.loadScene("game")},onBtnBill:function(){cc.director.loadScene("game")}}),cc._RF.pop()},{}],Valuecard:[function(t,i){"use strict";cc._RF.push(i,"4fc02jy41dLCK3rXQRiMRlJ","Valuecard");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},setvalue:function(t){var i=0;return t>=0&&t<=3?i=1:t>=4&&t<=7?i=2:t>=8&&t<=11?i=3:t>=12&&t<=15?i=4:t>=16&&t<=19?i=5:t>=20&&t<=23?i=6:t>=24&&t<=27?i=7:t>=28&&t<=31?i=8:t>=32&&t<=35?i=9:t>=36&&t<=39?i=0:t>=40&&t<=43?i=0:t>=44&&t<=47?i=0:t>=48&&t<=51?i=0:console.log("------------------------error"),i},start:function(){}});cc._RF.pop()},{}],clearCard:[function(t,i){"use strict";cc._RF.push(i,"6e290VLcblDB6D/US+6lFz3","clearCard"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],coinswitch:[function(t,i){"use strict";cc._RF.push(i,"9d81cgV4N1JM4P0ElBxD/hk","coinswitch");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},coinfun:function(t,i,e){t.opacity=0;var n=cc.instantiate(i[0]);n.setPosition(t.position),this.node.addChild(n),(t=n).setPosition(e)},start:function(){}});cc._RF.pop()},{}],game:[function(t,i){"use strict";function e(t,i){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=n(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function n(t,i){if(t){if("string"==typeof t)return s(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,i):void 0}}function s(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}cc._RF.push(i,"f9acbqSKVJJz63b+uj0AJie","game");var a=t("./Audio"),o=t("Coinmove"),c=t("Valuecard"),r=t("coinswitch");cc.Class({extends:cc.Component,properties:{card1:{default:null,type:cc.Node},card2:{default:null,type:cc.Node},card3:{default:null,type:cc.Node},card4:{default:null,type:cc.Node},card5:{default:null,type:cc.Node},card6:{default:null,type:cc.Node},card:{default:null,type:cc.Node},cardclose:{default:null,type:cc.Node},cardprefab:{default:[],type:[cc.Prefab]},timecout:{default:0,visible:!1,type:cc.Integer},timelabel:{default:null,type:cc.Label},arrayCard:{default:[],visible:!1,type:[cc.Node]},coin1:{default:[],type:[cc.Prefab]},coin2:{default:[],type:[cc.Prefab]},coin3:{default:[],type:[cc.Prefab]},coin4:{default:[],type:[cc.Prefab]},coin5:{default:[],type:[cc.Prefab]},coin6:{default:[],type:[cc.Prefab]},coinmove:{default:[],type:[cc.Node]},coinNode:{default:[],type:[cc.Node]},valuecoin1:{default:!0,visible:!1,type:cc.Boolean},valuecoin2:{default:!0,visible:!1,type:cc.Boolean},valuecoin3:{default:!0,visible:!1,type:cc.Boolean},valuecoin4:{default:!0,visible:!1,type:cc.Boolean},valuecoin5:{default:!0,visible:!1,type:cc.Boolean},valuecoin6:{default:!0,visible:!1,type:cc.Boolean},valuecretedite:{default:0,visible:!1,type:cc.Integer},creditLabel:{default:null,type:cc.Label},arrayPlayer:{default:[],visible:!1,type:[cc.Node]},playerNode:{default:null,type:cc.Node},playerCoinStop:{default:null,type:cc.Node},playerLabe:{default:null,type:cc.Label},playerValue:{default:0,visible:!1,type:cc.Integer},arrayTie:{default:[],visible:!1,type:[cc.Node]},tieNode:{default:null,type:cc.Node},tieCoinStop:{default:null,type:cc.Node},tieLabel:{default:null,type:cc.Label},tieValue:{default:0,visible:!1,type:cc.Integer},arrayBanker:{default:[],visible:!1,type:[cc.Node]},BankerNode:{default:null,type:cc.Node},BankerCoinStop:{default:null,type:cc.Node},BankerLabe:{default:null,type:cc.Label},BankerValue:{default:0,visible:!1,type:cc.Integer},valuecard1:{default:20,visible:!1,type:cc.Integer},valuecard2:{default:20,visible:!1,type:cc.Integer},valuecard3:{default:20,visible:!1,type:cc.Integer},valuecard4:{default:20,visible:!1,type:cc.Integer},valuecard5:{default:20,visible:!1,type:cc.Integer},valuecard6:{default:20,visible:!1,type:cc.Integer},winLabel:{default:null,type:cc.Label},playerwinNode:{default:null,type:cc.Node},tiewinNode:{default:null,type:cc.Node},bankerwinNode:{default:null,type:cc.Node},player:{default:0,visible:!1,type:cc.Integer},banker:{default:0,visible:!1,type:cc.Integer},tie:{default:0,visible:!1,type:cc.Integer},index1:{default:0,visible:!1,type:cc.Integer},index2:{default:0,visible:!1,type:cc.Integer},index3:{default:0,visible:!1,type:cc.Integer},index4:{default:0,visible:!1,type:cc.Integer},index5:{default:0,visible:!1,type:cc.Integer},index6:{default:0,visible:!1,type:cc.Integer},exitNode:{default:null,type:cc.Node},rety:{default:null,type:cc.Node},setting:{default:null,type:cc.Node},loading:{default:null,type:cc.Node},screenstart:{default:null,type:cc.Node},setting_page:{default:null,type:cc.Node},settingbutton:{default:null,type:cc.Node},exitbutton:{default:null,type:cc.Node},playerglowanimation:{default:null,type:cc.Animation},tieglowanimation:{default:null,type:cc.Animation},bankerglowanimation:{default:null,type:cc.Animation}},play:function(){this.loading.active=!1,this.screenstart.active=!0,this.random()},showSetting:function(){this.setting.active=!0},hideSetting:function(){this.setting.active=!1},statics:{defaultcard:null,defaultSprCoin1:null,defaultSprCoin2:null,defaultSprCoin3:null,defaultSprCoin4:null,defaultSprCoin5:null,defaultSprCoin6:null},onLoad:function(){this.loading.active=!0,this.screenstart.active=!1,this.setting_page.active=!0,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.defaultcard=this.card.position,this.defaultSprCoin1=this.coinNode[0].position,this.defaultSprCoin2=this.coinNode[1].position,this.defaultSprCoin3=this.coinNode[2].position,this.defaultSprCoin4=this.coinNode[3].position,this.defaultSprCoin5=this.coinNode[4].position,this.defaultSprCoin6=this.coinNode[5].position,this.buttonanimation(this.playerNode),this.buttonanimation(this.tieNode),this.buttonanimation(this.BankerNode),this.buttonanimation(this.rety),this.evenNode1(),this.coinNode[0].on(cc.Node.EventType.TOUCH_START,this.coin1Bet,this),this.coinNode[1].on(cc.Node.EventType.TOUCH_START,this.coin2Bet,this),this.coinNode[2].on(cc.Node.EventType.TOUCH_START,this.coin3Bet,this),this.coinNode[3].on(cc.Node.EventType.TOUCH_START,this.coin4Bet,this),this.coinNode[4].on(cc.Node.EventType.TOUCH_START,this.coin5Bet,this),this.coinNode[5].on(cc.Node.EventType.TOUCH_START,this.coin6Bet,this),this.evenNode()},evenNode1:function(){this.coinmove[0].on(cc.Node.EventType.TOUCH_START,this.coin1Value,this),this.coinmove[1].on(cc.Node.EventType.TOUCH_START,this.coin2Value,this),this.coinmove[2].on(cc.Node.EventType.TOUCH_START,this.coin3Value,this),this.coinmove[3].on(cc.Node.EventType.TOUCH_START,this.coin4Value,this),this.coinmove[4].on(cc.Node.EventType.TOUCH_START,this.coin5Value,this),this.coinmove[5].on(cc.Node.EventType.TOUCH_START,this.coin6Value,this)},evenNode:function(){this.playerNode.on(cc.Node.EventType.TOUCH_START,this.playerButton,this),this.BankerNode.on(cc.Node.EventType.TOUCH_START,this.bankerButton,this),this.tieNode.on(cc.Node.EventType.TOUCH_START,this.tieButton,this),this.exitNode.on(cc.Node.EventType.TOUCH_START,this.exitfun,this),this.rety.on(cc.Node.EventType.TOUCH_START,this.retry,this)},random:function(){this.timecout=15,this.schedule(function(){this.timecout>=0?this.timelabel.string=this.timecout:this.timelabel.string="",this.timecout<=16&&this.timecout>=0&&a.instance.PlaySFX("timecount"),-0==this.timecout&&this.checkcard(),this.timecout<-15&&(this.closewinNode(),this.cardMoveIn(),this.clearlabel(),this.clearcoin(),this.timecout=16),this.timecout--},1)},retry:function(){cc.director.loadScene("game")},coin1function:function(){1==this.valuecoin1&&r.instance.coinfun(this.coinNode[0],this.coin1,this.defaultSprCoin1)},coin2function:function(){1==this.valuecoin2&&r.instance.coinfun(this.coinNode[1],this.coin2,this.defaultSprCoin2)},coin3function:function(){1==this.valuecoin3&&r.instance.coinfun(this.coinNode[2],this.coin3,this.defaultSprCoin3)},coin4function:function(){1==this.valuecoin4&&r.instance.coinfun(this.coinNode[3],this.coin4,this.defaultSprCoin4)},coin5function:function(){1==this.valuecoin5&&r.instance.coinfun(this.coinNode[4],this.coin5,this.defaultSprCoin5)},coin6function:function(){1==this.valuecoin6&&r.instance.coinfun(this.coinNode[5],this.coin6,this.defaultSprCoin6)},cardMoveIn:function(){for(var t,i=e(this.arrayCard);!(t=i()).done;){var n=t.value;cc.tween(n).repeat(1,cc.tween().to(1,{position:cc.v2(-576.171,225.084)})).start()}},coin1Bet:function(){if(1==this.valuecoin1){this.coinNode[0].opacity=0;var t=cc.instantiate(this.coin1[1]);t.setPosition(this.coinNode[0].position),this.node.addChild(t),this.coinNode[0]=t,this.coinNode[0].setPosition(this.defaultSprCoin1),this.valuecoin1=!1,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin2function(),this.coin3function(),this.coin4function(),this.coin5function(),this.coin6function()}else{this.valuecoin2=!0,this.coinNode[1].opacity=0;var i=cc.instantiate(this.coin2[0]);i.setPosition(this.coinNode[1].position),this.node.addChild(i),this.coinNode[1]=i,this.coinNode[1].setPosition(this.defaultSprCoin2)}},coin2Bet:function(){if(1==this.valuecoin2){this.coinNode[1].opacity=0;var t=cc.instantiate(this.coin2[1]);t.setPosition(this.coinNode[1].position),this.node.addChild(t),this.coinNode[1]=t,this.coinNode[1].setPosition(this.defaultSprCoin2),this.valuecoin2=!1,this.valuecoin1=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin1function(),this.coin3function(),this.coin4function(),this.coin5function(),this.coin6function()}else{this.valuecoin2=!0,this.coinNode[1].opacity=0;var i=cc.instantiate(this.coin2[0]);i.setPosition(this.coinNode[1].position),this.node.addChild(i),this.coinNode[1]=i,this.coinNode[1].setPosition(this.defaultSprCoin2)}},coin3Bet:function(){if(1==this.valuecoin3){this.coinNode[2].opacity=0;var t=cc.instantiate(this.coin3[1]);t.setPosition(this.coinNode[2].position),this.node.addChild(t),this.coinNode[2]=t,this.coinNode[2].setPosition(this.defaultSprCoin3),this.valuecoin3=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin1function(),this.coin2function(),this.coin4function(),this.coin5function(),this.coin6function()}else{this.coinNode[2].opacity=0;var i=cc.instantiate(this.coin3[0]);i.setPosition(this.coinNode[2].position),this.node.addChild(i),this.coinNode[2]=i,this.coinNode[2].setPosition(this.defaultSprCoin3),this.valuecoin3=!0}},coin4Bet:function(){if(1==this.valuecoin4){this.coinNode[3].opacity=0;var t=cc.instantiate(this.coin4[1]);t.setPosition(this.coinNode[3].position),this.node.addChild(t),this.coinNode[3]=t,this.coinNode[3].setPosition(this.defaultSprCoin4),this.valuecoin4=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin1function(),this.coin2function(),this.coin3function(),this.coin5function(),this.coin6function()}else{this.coinNode[3].opacity=0;var i=cc.instantiate(this.coin4[0]);i.setPosition(this.coinNode[3].position),this.node.addChild(i),this.coinNode[3]=i,this.coinNode[3].setPosition(this.defaultSprCoin4),this.valuecoin4=!0}},coin5Bet:function(){if(1==this.valuecoin5){this.coinNode[4].opacity=0;var t=cc.instantiate(this.coin5[1]);t.setPosition(this.coinNode[4].position),this.node.addChild(t),this.coinNode[4]=t,this.coinNode[4].setPosition(this.defaultSprCoin5),this.valuecoin5=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin6=!0,this.coin1function(),this.coin2function(),this.coin3function(),this.coin4function(),this.coin6function()}else{this.coinNode[4].opacity=0;var i=cc.instantiate(this.coin5[0]);i.setPosition(this.coinNode[4].position),this.node.addChild(i),this.coinNode[4]=i,this.coinNode[4].setPosition(this.defaultSprCoin5),this.valuecoin5=!0}},coin6Bet:function(){if(1==this.valuecoin6){this.coinNode[5].opacity=0;var t=cc.instantiate(this.coin6[1]);t.setPosition(this.coinNode[5].position),this.node.addChild(t),this.coinNode[5]=t,this.coinNode[5].setPosition(this.defaultSprCoin6),this.valuecoin6=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.coin1function(),this.coin2function(),this.coin3function(),this.coin4function(),this.coin5function()}else{this.coinNode[5].opacity=0;var i=cc.instantiate(this.coin6[0]);i.setPosition(this.coinNode[5].position),this.node.addChild(i),this.coinNode[5]=i,this.coinNode[5].setPosition(this.defaultSprCoin6),this.valuecoin6=!0}},playerButton:function(){this.timecout<0||(0==this.valuecoin1?this.buttonCoinOneplayer():0==this.valuecoin2?this.buttonCoinTwoplayer():0==this.valuecoin3?this.buttonCoinThreeplayer():0==this.valuecoin4?this.buttonCoinFourplayer():0==this.valuecoin5?this.buttonCoinFiveplayer():0==this.valuecoin6&&this.buttonCoinSixplayer())},tiaButtonOne:function(){this.valuecretedite>=1&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmovetaiFun(this.coinmove[0],this.defaultSprCoin1,this.tieCoinStop,this.arrayTie),this.valuecretedite-=1,this.tieValue+=1,this.tieLabel.string=this.tieValue+"K",this.creditLabel.string=this.valuecretedite+"K",console.log(" check value :  ------- : "+this.playerValue))},tiaButtonTwo:function(){this.valuecretedite>=5&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmovetaiFun(this.coinmove[1],this.defaultSprCoin2,this.tieCoinStop,this.arrayTie),this.valuecretedite-=5,this.tieValue+=5,this.tieLabel.string=this.tieValue+"K",this.creditLabel.string=this.valuecretedite+"K",console.log(" check value :  ------- : "+this.playerValue))},tiaButtonThree:function(){this.valuecretedite>=10&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmovetaiFun(this.coinmove[2],this.defaultSprCoin3,this.tieCoinStop,this.arrayTie),this.valuecretedite-=10,this.tieValue+=10,this.tieLabel.string=this.tieValue+"K",this.creditLabel.string=this.valuecretedite+"K",console.log(" check value :  ------- : "+this.playerValue))},tiaButtonFour:function(){this.valuecretedite>=20&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmovetaiFun(this.coinmove[3],this.defaultSprCoin4,this.tieCoinStop,this.arrayTie),this.valuecretedite-=20,this.tieValue+=20,this.tieLabel.string=this.tieValue+"K",this.creditLabel.string=this.valuecretedite+"K",console.log(" check value :  ------- : "+this.playerValue))},tiaButtonFive:function(){this.valuecretedite>=50&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmovetaiFun(this.coinmove[4],this.defaultSprCoin5,this.tieCoinStop,this.arrayTie),this.valuecretedite-=50,this.tieValue+=50,this.tieLabel.string=this.tieValue+"K",this.creditLabel.string=this.valuecretedite+"K",console.log(" check value :  ------- : "+this.playerValue))},tiaButtonSix:function(){this.valuecretedite>=100&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmovetaiFun(this.coinmove[5],this.defaultSprCoin6,this.tieCoinStop,this.arrayTie),this.valuecretedite-=100,this.tieValue+=100,this.tieLabel.string=this.tieValue+"K",this.creditLabel.string=this.valuecretedite+"K")},tieButton:function(){console.log("playerButton -------------\x3e "),this.timecout<0||(0==this.valuecoin1?this.tiaButtonOne():0==this.valuecoin2?this.valuecretedite>=5&&this.tiaButtonTwo():0==this.valuecoin3?this.valuecretedite>=10&&this.tiaButtonThree():0==this.valuecoin4?this.valuecretedite>=20&&this.tiaButtonFour():0==this.valuecoin5?this.valuecretedite>=50&&this.tiaButtonFive():0==this.valuecoin6&&this.valuecretedite>=100&&this.tiaButtonSix())},bankerButtonone:function(){this.valuecretedite>=1&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinBankFun(this.coinmove[0],this.defaultSprCoin1,this.BankerCoinStop,this.arrayBanker),this.valuecretedite-=1,this.valuecretedite-=1,this.BankerValue+=1,this.BankerLabe.string=this.BankerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},bankerButtonTwo:function(){this.valuecretedite>=5&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinBankFun(this.coinmove[1],this.defaultSprCoin2,this.BankerCoinStop,this.arrayBanker),this.valuecretedite-=5,this.BankerValue+=5,this.BankerLabe.string=this.BankerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},bankerButtonThree:function(){this.valuecretedite>=10&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinBankFun(this.coinmove[2],this.defaultSprCoin3,this.BankerCoinStop,this.arrayBanker),this.valuecretedite-=10,this.BankerValue+=10,this.BankerLabe.string=this.BankerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},bankerButtonFour:function(){this.valuecretedite>=20&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinBankFun(this.coinmove[3],this.defaultSprCoin4,this.BankerCoinStop,this.arrayBanker),this.valuecretedite-=20,this.BankerValue+=20,this.BankerLabe.string=this.BankerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},bankerButtonFive:function(){this.valuecretedite>=50&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinBankFun(this.coinmove[4],this.defaultSprCoin5,this.BankerCoinStop,this.arrayBanker),this.valuecretedite-=50,this.BankerValue+=50,this.BankerLabe.string=this.BankerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},bankerButtonSix:function(){this.valuecretedite>=100&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinBankFun(this.coinmove[5],this.defaultSprCoin6,this.BankerCoinStop,this.arrayBanker),this.valuecretedite-=100,this.BankerValue+=100,this.BankerLabe.string=this.BankerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},bankerButton:function(){console.log("playerButton -------------\x3e "),this.timecout<0||(0==this.valuecoin1?this.bankerButtonone():0==this.valuecoin2?this.bankerButtonTwo():0==this.valuecoin3?this.bankerButtonThree():0==this.valuecoin4?this.bankerButtonFour():0==this.valuecoin5?this.bankerButtonFive():0==this.valuecoin6&&this.bankerButtonSix())},exitfun:function(){cc.game.end()},winMove:function(t){for(var i,n=e(t);!(i=n()).done;){var s=i.value;cc.tween(s).repeat(1,cc.tween().to(2,{position:cc.v2(0,-900)})).start()}},loseMove:function(t){for(var i,n=e(t);!(i=n()).done;){var s=i.value;cc.tween(s).repeat(1,cc.tween().to(2,{position:cc.v2(0,900)})).start()}},clearlabel:function(){this.playerValue=0,this.tieValue=0,this.BankerValue=0,this.playerLabe.string=this.playerValue+"",this.tieLabel.string=this.tieValue+"",this.BankerLabe.string=this.BankerValue+""},clearcoin:function(){for(var t,i=e(this.arrayPlayer);!(t=i()).done;)t.value.destroy();for(var n,s=e(this.arrayBanker);!(n=s()).done;)n.value.destroy();for(var a,o=e(this.arrayTie);!(a=o()).done;)a.value.destroy()},setvalue:function(t){var i=0;return t>=0&&t<=3?i=1:t>=4&&t<=7?i=2:t>=8&&t<=11?i=3:t>=12&&t<=15?i=4:t>=16&&t<=19?i=5:t>=20&&t<=23?i=6:t>=24&&t<=27?i=7:t>=28&&t<=31?i=8:t>=32&&t<=35?i=9:t>=36&&t<=39?i=0:t>=40&&t<=43?i=0:t>=44&&t<=47?i=0:t>=48&&t<=51?i=0:console.log("------------------------error"),i},checkcard:function(){var t=this;if(this.index1=this.getValue(0,51),this.index2=this.getValue(0,51),this.index3=this.getValue(0,51),this.index4=this.getValue(0,51),this.index1==this.index2||this.index1==this.index3||this.index1==this.index4)do{this.index1=this.getValue(0,51)}while(this.index1==this.index2||this.index1==this.index3||this.index1==this.index4);if(this.index2==this.index1||this.index2==this.index3||this.index2==this.index4)do{this.index2=this.getValue(0,51)}while(this.index2==this.index1||this.index2==this.index3||this.index2==this.index4);if(this.index3==this.index1||this.index3==this.index2||this.index3==this.index4)do{this.index3=this.getValue(0,51)}while(this.index3==this.index1||this.index3==this.index2||this.index3==this.index4);if(this.index4==this.index1||this.index4==this.index2||this.index4==this.index3)do{this.index4=this.getValue(0,51)}while(this.index4==this.index1||this.index4==this.index2||this.index4==this.index3);var i=cc.instantiate(this.cardprefab[this.index1]);this.node.addChild(i),i.setPosition(cc.v2(this.card.position)),i.runAction(cc.sequence(cc.moveTo(.1,cc.v2(this.card1.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("playinsertcard");var e=cc.instantiate(this.cardprefab[this.index2]);this.node.addChild(e),e.setPosition(cc.v2(this.card.position)),e.runAction(cc.sequence(cc.moveTo(.3,cc.v2(this.card6.position)),cc.callFunc(function(){t.arrayCard.push(e)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("playinsertcard");var n=cc.instantiate(this.cardprefab[this.index3]);this.node.addChild(n),n.setPosition(cc.v2(this.card.position)),n.runAction(cc.sequence(cc.moveTo(.5,cc.v2(this.card2.position)),cc.callFunc(function(){t.arrayCard.push(n)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("playinsertcard");var s=cc.instantiate(this.cardprefab[this.index4]);this.node.addChild(s),s.setPosition(cc.v2(this.card.position)),s.runAction(cc.sequence(cc.moveTo(1,cc.v2(this.card5.position)),cc.callFunc(function(){t.arrayCard.push(s)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("playinsertcard"),this.valuecard1=c.instance.setvalue(this.index1),this.valuecard3=c.instance.setvalue(this.index3),this.valuecard2=c.instance.setvalue(this.index2),this.valuecard4=c.instance.setvalue(this.index4),this.player=this.valuecard1+this.valuecard3,this.banker=this.valuecard2+this.valuecard4,this.player>9&&(this.player=this.player%10),this.banker>9&&(this.banker=this.banker%10);var o=this.player,r=this.banker;if(this.index5=this.getValue(0,51),this.index6=this.getValue(0,51),o<6&&r<8&&(this.index5==this.index1||this.index5==this.index2||this.index5==this.index3||this.index5==this.index4))do{this.index5=this.getValue(0,51)}while(this.index5==this.index1||this.index5==this.index2||this.index5==this.index3||this.index5==this.index4);if(setTimeout(function(){if(o<6&&r<8){t.valuecard5=c.instance.setvalue(t.index5);var i=cc.instantiate(t.cardprefab[t.index5]);t.node.addChild(i),i.setPosition(cc.v2(t.card.position)),i.runAction(cc.sequence(cc.moveTo(2,cc.v2(t.card3.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),t.card.setPosition(t.defaultcard),a.instance.PlaySFX("playinsertcard"),t.player=t.player+t.valuecard5,t.player>9&&(t.player=t.player%10)}},"2000"),r<6&&o<8&&(this.index6==this.index1||this.index6==this.index2||this.index6==this.index3||this.index6==this.index4||this.index6==this.index5))do{this.index6=this.getValue(0,51)}while(this.index6==this.index1||this.index6==this.index2||this.index6==this.index3||this.index6==this.index4||this.index6==this.index5);setTimeout(function(){if(r<=5&&o<=7)if(r<=2){t.valuecard6=c.instance.setvalue(t.index6);var i=cc.instantiate(t.cardprefab[t.index6]);t.node.addChild(i),i.setPosition(cc.v2(t.card.position)),i.runAction(cc.sequence(cc.moveTo(2,cc.v2(t.card4.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),t.card.setPosition(t.defaultcard),a.instance.PlaySFX("playinsertcard"),t.banker=t.banker+t.valuecard6,t.banker>9&&(t.banker=t.banker%10)}else if(3==r&&8!=t.valuecard5)t.valuecard6=c.instance.setvalue(t.index6),i=cc.instantiate(t.cardprefab[t.index6]),t.node.addChild(i),i.setPosition(cc.v2(t.card.position)),i.runAction(cc.sequence(cc.moveTo(2,cc.v2(t.card4.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),t.card.setPosition(t.defaultcard),a.instance.PlaySFX("playinsertcard"),t.banker=t.banker+t.valuecard6,t.banker>9&&(t.banker=t.banker%10);else if(4!=r||0==t.valuecard5&&1==t.valuecard5&&8==t.valuecard5&&9==t.valuecard5)5!=r||0==t.valuecard5&&1==t.valuecard5&&2==t.valuecard5&&3==t.valuecard5&&8==t.valuecard5&&9==t.valuecard5?6!=t.valuecard5&&7!=t.valuecard5||6!=r&&7!=r||(t.valuecard6=c.instance.setvalue(t.index6),i=cc.instantiate(t.cardprefab[t.index6]),t.node.addChild(i),i.setPosition(cc.v2(t.card.position)),i.runAction(cc.sequence(cc.moveTo(2,cc.v2(t.card4.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),t.card.setPosition(t.defaultcard),a.instance.PlaySFX("playinsertcard"),t.banker=t.banker+t.valuecard6,t.banker>9&&(t.banker=t.banker%10)):(t.valuecard6=c.instance.setvalue(t.index6),i=cc.instantiate(t.cardprefab[t.index6]),t.node.addChild(i),i.setPosition(cc.v2(t.card.position)),i.runAction(cc.sequence(cc.moveTo(2,cc.v2(t.card4.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),t.card.setPosition(t.defaultcard),a.instance.PlaySFX("playinsertcard"),t.banker=t.banker+t.valuecard6,t.banker>9&&(t.banker=t.banker%10),console.log(" valuecard 6 :"+t.valuecard6));else{t.valuecard6=c.instance.setvalue(t.index6);i=cc.instantiate(t.cardprefab[t.index6]);t.node.addChild(i),i.setPosition(cc.v2(t.card.position)),i.runAction(cc.sequence(cc.moveTo(2,cc.v2(t.card4.position)),cc.callFunc(function(){t.arrayCard.push(i)}))),t.card.setPosition(t.defaultcard),a.instance.PlaySFX("playinsertcard"),t.banker=t.banker+t.valuecard6,t.banker>9&&(t.banker=t.banker%10)}},"3000"),setTimeout(function(){t.player>t.banker?(t.playerValue=2*t.playerValue,t.winLabel.string=t.playerValue+"K",t.valuecretedite+=t.playerValue,t.creditLabel.string=t.valuecretedite+"K",t.playerwinNode.opacity=255,t.playerglowanimation.play("playerglow"),t.winMove(t.arrayPlayer),t.loseMove(t.arrayBanker),t.loseMove(t.arrayTie)):t.banker>t.player?(t.BankerValue=2*t.BankerValue,t.winLabel.string=t.BankerValue+"K",t.valuecretedite+=t.BankerValue,t.creditLabel.string=t.valuecretedite+"K",t.bankerwinNode.opacity=255,t.bankerglowanimation.play("bankerglow"),t.winMove(t.arrayBanker),t.loseMove(t.arrayPlayer),t.loseMove(t.arrayTie)):(t.tieValue=2*t.tieValue,t.winLabel.string=t.tieValue+"K",t.valuecretedite+=t.tieValue,t.creditLabel.string=t.valuecretedite+"K",t.tiewinNode.opacity=255,t.tieglowanimation.play("tieglow"),t.winMove(t.arrayTie),t.loseMove(t.arrayPlayer),t.loseMove(t.arrayBanker))},"5000")},getValue:function(t,i){return Math.floor(Math.random()*(i-t+1))+t},buttonanimation:function(t){var i=t.addComponent(cc.Button);i.transition=cc.Button.Transition.SCALE,i.duration=.1,i.zoomScale=1.1},closewinNode:function(){this.playerwinNode.opacity=0,this.tiewinNode.opacity=0,this.bankerwinNode.opacity=0},start:function(){this.setting.active=!1,this.valuecretedite=5e3,this.creditLabel.string=this.valuecretedite+"K",this.playerCoinStop.opacity=0,this.tieCoinStop.opacity=0,this.BankerCoinStop.opacity=0,this.closewinNode(),this.coin1function(),this.coin2function(),this.coin3function(),this.coin4function(),this.coin5function(),this.coin6function(),a.instance.PlayMusic("background")},buttonCoinOneplayer:function(){this.valuecretedite>=1&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmoveFun(this.coinmove[0],this.defaultSprCoin1,this.playerCoinStop,this.arrayPlayer),this.valuecretedite-=1,this.playerValue+=1,this.playerLabe.string=this.playerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},buttonCoinTwoplayer:function(){this.valuecretedite>=1&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmoveFun(this.coinmove[1],this.defaultSprCoin2,this.playerCoinStop,this.arrayPlayer),this.valuecretedite-=5,this.playerValue+=5,this.playerLabe.string=this.playerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},buttonCoinThreeplayer:function(){this.valuecretedite>=10&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmoveFun(this.coinmove[2],this.defaultSprCoin3,this.playerCoinStop,this.arrayPlayer),this.valuecretedite-=10,this.playerValue+=10,this.playerLabe.string=this.playerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},buttonCoinFourplayer:function(){this.valuecretedite>=20&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmoveFun(this.coinmove[3],this.defaultSprCoin4,this.playerCoinStop,this.arrayPlayer),this.valuecretedite-=20,this.playerValue+=20,this.playerLabe.string=this.playerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},buttonCoinFiveplayer:function(){this.valuecretedite>=50&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmoveFun(this.coinmove[4],this.defaultSprCoin5,this.playerCoinStop,this.arrayPlayer),this.valuecretedite-=50,this.playerValue+=50,this.playerLabe.string=this.playerValue+"K",this.creditLabel.string=this.valuecretedite+"K")},buttonCoinSixplayer:function(){this.valuecretedite>=100&&(a.instance.PlaySFX("coinsinsert"),o.instance.coinmoveFun(this.coinmove[5],this.defaultSprCoin6,this.playerCoinStop,this.arrayPlayer),this.valuecretedite-=100,this.playerValue+=100,this.playerLabe.string=this.playerValue+"K",this.creditLabel.string=this.valuecretedite+"K")}}),cc._RF.pop()},{"./Audio":"Audio",Coinmove:"Coinmove",Valuecard:"Valuecard",coinswitch:"coinswitch"}],sound:[function(t,i){"use strict";cc._RF.push(i,"4deebr+twRP8ZovVZ5tkgEO","sound"),cc.Class({properties:{n:{default:"g",type:cc.String},clip:{default:null,type:cc.AudioClip}}}),cc._RF.pop()},{}]},{},["Audio","Coinmove","CradMove","Loading","Valuecard","clearCard","coinswitch","game","sound","HotUpdateModule","LoginView"]);