define("collections/application/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define("collections/application/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"NwnkZaIb",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"collections/application/template.hbs"}})}),define("collections/components/test-component/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={RedBold:"_RedBold_2k3zoy"}}),define("collections/components/test-component/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"JEIYQfYr",block:'{"symbols":[],"statements":[[7,"h3"],[12,"class",[28,[[27,"unbound",[[23,["__styles__","RedBold"]]],null]]]],[9],[1,[21,"model"],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"collections/components/test-component/template.hbs"}})}),define("collections/config/environment",["exports"],function(e){"use strict"
var t
Object.defineProperty(e,"__esModule",{value:!0})
try{var l="collections/config/environment",s=document.querySelector('meta[name="'+l+'"]').getAttribute("content")
t=JSON.parse(unescape(s))}catch(e){throw new Error('Could not read config from meta tag with name "'+l+'" due to error: '+e)}e.default=t}),define("collections/engine",["exports","ember-load-initializers","collections/config/environment","collections/resolver"],function(e,t,l,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var o=l.default.modulePrefix,i=Ember.Engine.extend({modulePrefix:o,Resolver:s.default,dependencies:{services:["i18n","session","store","router"]}});(0,t.default)(i,o),e.default=i}),define.alias("ember-css-modules/helpers/local-class","collections/helpers/local-class"),define.alias("ember-i18n/helper","collections/helpers/t"),define("collections/index/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={BoldBlue:"_BoldBlue_kor7ez"}}),define("collections/index/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"ZauO/oFP",block:'{"symbols":[],"statements":[[7,"h1"],[12,"class",[28,[[27,"unbound",[[23,["__styles__","BoldBlue"]]],null]]]],[9],[1,[27,"t",["collections.index.title"],null],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"collections/index/template.hbs"}})}),define("collections/initializers/ember-i18n",["exports","ember-i18n/initializers/ember-i18n"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define.alias("ember-i18n-inject/initializers/i18n","collections/initializers/i18n"),define("collections/instance-initializers/ember-i18n",["exports","ember-i18n/instance-initializers/ember-i18n"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("collections/provider/discover/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define("collections/provider/discover/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"k6pHckcu",block:'{"symbols":[],"statements":[[7,"h1"],[9],[1,[27,"t",["collections.discover.title"],null],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"collections/provider/discover/template.hbs"}})}),define("collections/provider/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define("collections/provider/submit/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define("collections/provider/submit/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"Tb35sB99",block:'{"symbols":[],"statements":[[7,"h1"],[9],[1,[27,"t",["collections.submit.title"],null],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"collections/provider/submit/template.hbs"}})}),define("collections/provider/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"+9koiv5C",block:'{"symbols":[],"statements":[[7,"h1"],[9],[1,[27,"t",["collections.provider.title"],null],false],[10],[0,"\\n"],[1,[27,"test-component",null,[["model"],[[23,["model"]]]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"collections/provider/template.hbs"}})}),define.alias("ember-i18n/services/i18n","collections/services/i18n"),define("collections/styles/addon",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define.alias("ember-i18n/utils/i18n/compile-template","collections/utils/i18n/compile-template"),define.alias("ember-i18n/utils/i18n/missing-message","collections/utils/i18n/missing-message")

//# sourceMappingURL=/ember-osf-web/engines-dist/collections/assets/engine-2b505c7cfc23557d0f683ddf862f7eb4.map