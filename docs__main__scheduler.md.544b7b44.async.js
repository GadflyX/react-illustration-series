(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{Mn6a:function(e,n,t){e.exports=t.p+"static/core.48042ed6.png"},X0Ss:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),c=t("dEAq"),r=t("H1Ra"),o=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"react-\u8c03\u5ea6\u539f\u7406scheduler"},a.a.createElement(c["AnchorLink"],{to:"#react-\u8c03\u5ea6\u539f\u7406scheduler","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"React \u8c03\u5ea6\u539f\u7406(scheduler)"),a.a.createElement("p",null,"\u5728 React \u8fd0\u884c\u65f6\u4e2d, \u8c03\u5ea6\u4e2d\u5fc3(\u4f4d\u4e8e",a.a.createElement("code",null,"scheduler"),"\u5305), \u662f\u6574\u4e2a React \u8fd0\u884c\u65f6\u7684\u4e2d\u67a2(\u5176\u5b9e\u662f\u5fc3\u810f), \u6240\u4ee5\u7406\u89e3",a.a.createElement("code",null,"scheduler"),"\u8c03\u5ea6, \u5c31\u57fa\u672c\u628a\u63e1\u4e86 React \u7684\u547d\u95e8."),a.a.createElement("p",null,"\u5728\u6df1\u5165\u5206\u6790\u4e4b\u524d, \u5efa\u8bae\u56de\u987e\u4e00\u4e0b\u5f80\u671f\u4e0e",a.a.createElement("code",null,"scheduler"),"\u76f8\u5173\u7684\u6587\u7ae0(\u8fd9 3 \u7bc7\u6587\u7ae0\u4e0d\u957f, \u5171 10 \u5206\u949f\u80fd\u6d4f\u89c8\u5b8c):"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"./workloop"},"React \u5de5\u4f5c\u5faa\u73af"),": \u4ece\u5b8f\u89c2\u7684\u89d2\u5ea6\u4ecb\u7ecd React \u4f53\u7cfb\u4e2d\u4e24\u4e2a\u91cd\u8981\u7684\u5faa\u73af, \u5176\u4e2d",a.a.createElement("code",null,"\u4efb\u52a1\u8c03\u5ea6\u5faa\u73af"),"\u5c31\u662f\u672c\u6587\u7684\u4e3b\u89d2."),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"./reconciler-workflow"},"reconciler \u8fd0\u4f5c\u6d41\u7a0b"),": \u4ece\u5b8f\u89c2\u7684\u89d2\u5ea6\u4ecb\u7ecd\u4e86",a.a.createElement("code",null,"react-reconciler"),"\u5305\u7684\u6838\u5fc3\u4f5c\u7528, \u5e76\u628a",a.a.createElement("code",null,"reconciler"),"\u5206\u4e3a\u4e86 4 \u4e2a\u9636\u6bb5. \u5176\u4e2d\u7b2c 2 \u4e2a\u9636\u6bb5",a.a.createElement("code",null,"\u6ce8\u518c\u8c03\u5ea6\u4efb\u52a1"),"\u4e32\u8054\u4e86",a.a.createElement("code",null,"scheduler"),"\u5305\u548c",a.a.createElement("code",null,"react-reconciler"),"\u5305, \u5176\u5b9e\u5c31\u662f",a.a.createElement("code",null,"\u4efb\u52a1\u8c03\u5ea6\u5faa\u73af"),"\u4e2d\u7684\u4e00\u4e2a\u4efb\u52a1(",a.a.createElement("code",null,"task"),")."),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"./priority"},"React \u4e2d\u7684\u4f18\u5148\u7ea7\u7ba1\u7406"),": \u4ecb\u7ecd\u4e86 React \u4f53\u7cfb\u4e2d\u7684 3 \u4e2d\u4f18\u5148\u7ea7\u7684\u7ba1\u7406, \u5217\u51fa\u4e86\u6e90\u7801\u4e2d",a.a.createElement("code",null,"react-reconciler"),"\u4e0e",a.a.createElement("code",null,"scheduler"),"\u5305\u4e2d\u5173\u4e8e\u4f18\u5148\u7ea7\u7684\u8f6c\u6362\u601d\u8def. \u5176\u4e2d",a.a.createElement("code",null,"SchedulerPriority"),"\u63a7\u5236",a.a.createElement("code",null,"\u4efb\u52a1\u8c03\u5ea6\u5faa\u73af"),"\u4e2d\u5faa\u73af\u7684\u987a\u5e8f.")),a.a.createElement("p",null,"\u4e86\u89e3\u4e0a\u8ff0\u57fa\u7840\u77e5\u8bc6\u4e4b\u540e, \u518d\u8c08",a.a.createElement("code",null,"scheduler"),"\u539f\u7406, \u5176\u5b9e\u5c31\u662f\u5728\u5927\u7684\u6846\u67b6\u4e0b\u53bb\u6dfb\u52a0\u5b9e\u73b0\u7ec6\u8282, \u76f8\u5bf9\u8f83\u4e3a\u5bb9\u6613. \u4e0b\u9762\u5c31\u6b63\u5f0f\u8fdb\u5165\u4e3b\u9898."),a.a.createElement("h2",{id:"\u8c03\u5ea6\u5b9e\u73b0"},a.a.createElement(c["AnchorLink"],{to:"#\u8c03\u5ea6\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8c03\u5ea6\u5b9e\u73b0"),a.a.createElement("p",null,a.a.createElement("code",null,"\u8c03\u5ea6\u4e2d\u5fc3"),"\u6700\u6838\u5fc3\u7684\u4ee3\u7801, \u5728",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js"},"SchedulerHostConfig.default.js"),"\u4e2d."),a.a.createElement("h3",{id:"\u5185\u6838"},a.a.createElement(c["AnchorLink"],{to:"#\u5185\u6838","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5185\u6838"),a.a.createElement("p",null,"\u8be5 js \u6587\u4ef6\u4e00\u5171\u5bfc\u51fa\u4e86 8 \u4e2a\u51fd\u6570, \u6700\u6838\u5fc3\u7684\u903b\u8f91, \u5c31\u96c6\u4e2d\u5728\u4e86\u8fd9 8 \u4e2a\u51fd\u6570\u4e2d :"),a.a.createElement(r["a"],{code:"export let requestHostCallback; // \u8bf7\u6c42\u53ca\u65f6\u56de\u8c03: port.postMessage\nexport let cancelHostCallback; // \u53d6\u6d88\u53ca\u65f6\u56de\u8c03: scheduledHostCallback = null\nexport let requestHostTimeout; // \u8bf7\u6c42\u5ef6\u65f6\u56de\u8c03: setTimeout\nexport let cancelHostTimeout; // \u53d6\u6d88\u5ef6\u65f6\u56de\u8c03: cancelTimeout\nexport let shouldYieldToHost; // \u662f\u5426\u8ba9\u51fa\u4e3b\u7ebf\u7a0b(currentTime >= deadline && needsPaint): \u8ba9\u6d4f\u89c8\u5668\u80fd\u591f\u6267\u884c\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1(\u5982ui\u7ed8\u5236, \u7528\u6237\u8f93\u5165\u7b49)\nexport let requestPaint; // \u8bf7\u6c42\u7ed8\u5236: \u8bbe\u7f6e needsPaint = true\nexport let getCurrentTime; // \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\nexport let forceFrameRate; // \u5f3a\u5236\u8bbe\u7f6e yieldInterval (\u8ba9\u51fa\u4e3b\u7ebf\u7a0b\u7684\u5468\u671f). \u8fd9\u4e2a\u51fd\u6570\u867d\u7136\u5b58\u5728, \u4f46\u662f\u4ece\u6e90\u7801\u6765\u770b, \u51e0\u4e4e\u6ca1\u6709\u7528\u5230",lang:"js"}),a.a.createElement("p",null,"\u6211\u4eec\u77e5\u9053 react \u53ef\u4ee5\u5728 nodejs \u73af\u5883\u4e2d\u4f7f\u7528, \u6240\u4ee5\u5728\u4e0d\u540c\u7684 js \u6267\u884c\u73af\u5883\u4e2d, \u8fd9\u4e9b\u51fd\u6570\u7684\u5b9e\u73b0\u4f1a\u6709\u533a\u522b. \u4e0b\u9762\u57fa\u4e8e\u666e\u901a\u6d4f\u89c8\u5668\u73af\u5883, \u5bf9\u8fd9 8 \u4e2a\u51fd\u6570\u9010\u4e00\u5206\u6790 :"),a.a.createElement("ol",null,a.a.createElement("li",null,"\u8c03\u5ea6\u76f8\u5173: \u8bf7\u6c42\u6216\u53d6\u6d88\u8c03\u5ea6")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L224-L230"},"requestHostCallback")),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L232-L234"},"cancelHostCallback")),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L236-L240"},"requestHostTimeout")),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L242-L245"},"cancelHostTimeout"))),a.a.createElement("p",null,"\u8fd9 4 \u4e2a\u51fd\u6570\u6e90\u7801\u5f88\u7b80\u6d01, \u975e\u5e38\u597d\u7406\u89e3, \u5b83\u4eec\u7684\u76ee\u7684\u5c31\u662f\u8bf7\u6c42\u6267\u884c(\u6216\u53d6\u6d88)\u56de\u8c03\u51fd\u6570. \u73b0\u5728\u91cd\u70b9\u4ecb\u7ecd\u5176\u4e2d\u7684",a.a.createElement("code",null,"\u53ca\u65f6\u56de\u8c03"),"(",a.a.createElement("code",null,"\u5ef6\u65f6\u56de\u8c03"),"\u7684 2 \u4e2a\u51fd\u6570\u6682\u65f6\u5c5e\u4e8e\u4fdd\u7559 api, 17.0.2 \u7248\u672c\u5176\u5b9e\u6ca1\u6709\u7528\u4e0a)"),a.a.createElement(r["a"],{code:"// \u63a5\u6536 MessageChannel \u6d88\u606f\nconst performWorkUntilDeadline = () => {\n  // ...\u7701\u7565\u65e0\u5173\u4ee3\u7801\n  if (scheduledHostCallback !== null) {\n    const currentTime = getCurrentTime();\n    // \u66f4\u65b0deadline\n    deadline = currentTime + yieldInterval;\n    // \u6267\u884ccallback\n    scheduledHostCallback(hasTimeRemaining, currentTime);\n  } else {\n    isMessageLoopRunning = false;\n  }\n};\n\nconst channel = new MessageChannel();\nconst port = channel.port2;\nchannel.port1.onmessage = performWorkUntilDeadline;\n\n// \u8bf7\u6c42\u56de\u8c03\nrequestHostCallback = function(callback) {\n  // 1. \u4fdd\u5b58callback\n  scheduledHostCallback = callback;\n  if (!isMessageLoopRunning) {\n    isMessageLoopRunning = true;\n    // 2. \u901a\u8fc7 MessageChannel \u53d1\u9001\u6d88\u606f\n    port.postMessage(null);\n  }\n};\n// \u53d6\u6d88\u56de\u8c03\ncancelHostCallback = function() {\n  scheduledHostCallback = null;\n};",lang:"js"}),a.a.createElement("p",null,"\u5f88\u660e\u663e, \u8bf7\u6c42\u56de\u8c03\u4e4b\u540e",a.a.createElement("code",null,"scheduledHostCallback = callback"),", \u7136\u540e\u901a\u8fc7",a.a.createElement("code",null,"MessageChannel"),"\u53d1\u6d88\u606f\u7684\u65b9\u5f0f\u89e6\u53d1",a.a.createElement("code",null,"performWorkUntilDeadline"),"\u51fd\u6570, \u6700\u540e\u6267\u884c\u56de\u8c03",a.a.createElement("code",null,"scheduledHostCallback"),"."),a.a.createElement("p",null,"\u6b64\u5904\u9700\u8981\u6ce8\u610f: ",a.a.createElement("code",null,"MessageChannel"),"\u5728\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u4e2d\u5c5e\u4e8e",a.a.createElement("code",null,"\u5b8f\u4efb\u52a1"),", \u6240\u4ee5\u8c03\u5ea6\u4e2d\u5fc3\u6c38\u8fdc\u662f",a.a.createElement("code",null,"\u5f02\u6b65\u6267\u884c"),"\u56de\u8c03\u51fd\u6570."),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u65f6\u95f4\u5207\u7247(",a.a.createElement("code",null,"time slicing"),")\u76f8\u5173: \u6267\u884c\u65f6\u95f4\u5206\u5272, \u8ba9\u51fa\u4e3b\u7ebf\u7a0b(\u628a\u63a7\u5236\u6743\u5f52\u8fd8\u6d4f\u89c8\u5668, \u6d4f\u89c8\u5668\u53ef\u4ee5\u5904\u7406\u7528\u6237\u8f93\u5165, UI \u7ed8\u5236\u7b49\u7d27\u6025\u4efb\u52a1).")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L22-L24"},"getCurrentTime"),": \u83b7\u53d6\u5f53\u524d\u65f6\u95f4"),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L129-L152"},"shouldYieldToHost"),": \u662f\u5426\u8ba9\u51fa\u4e3b\u7ebf\u7a0b"),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L154-L156"},"requestPaint"),": \u8bf7\u6c42\u7ed8\u5236"),a.a.createElement("li",null,a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L168-L183"},"forceFrameRate"),": \u5f3a\u5236\u8bbe\u7f6e ",a.a.createElement("code",null,"yieldInterval"),"(\u4ece\u6e90\u7801\u4e2d\u7684\u5f15\u7528\u6765\u770b, \u7b97\u4e00\u4e2a\u4fdd\u7559\u51fd\u6570, \u5176\u4ed6\u5730\u65b9\u6ca1\u6709\u7528\u5230)")),a.a.createElement(r["a"],{code:"const localPerformance = performance;\n// \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\ngetCurrentTime = () => localPerformance.now();\n\n// \u65f6\u95f4\u5207\u7247\u5468\u671f, \u9ed8\u8ba4\u662f5ms(\u5982\u679c\u4e00\u4e2atask\u8fd0\u884c\u8d85\u8fc7\u8be5\u5468\u671f, \u4e0b\u4e00\u4e2atask\u6267\u884c\u4e4b\u524d, \u4f1a\u628a\u63a7\u5236\u6743\u5f52\u8fd8\u6d4f\u89c8\u5668)\nlet yieldInterval = 5;\n\nlet deadline = 0;\nconst maxYieldInterval = 300;\nlet needsPaint = false;\nconst scheduling = navigator.scheduling;\n// \u662f\u5426\u8ba9\u51fa\u4e3b\u7ebf\u7a0b\nshouldYieldToHost = function() {\n  const currentTime = getCurrentTime();\n  if (currentTime >= deadline) {\n    if (needsPaint || scheduling.isInputPending()) {\n      // There is either a pending paint or a pending input.\n      return true;\n    }\n    // There's no pending input. Only yield if we've reached the max\n    // yield interval.\n    return currentTime >= maxYieldInterval; // \u5728\u6301\u7eed\u8fd0\u884c\u7684react\u5e94\u7528\u4e2d, currentTime\u80af\u5b9a\u5927\u4e8e300ms, \u8fd9\u4e2a\u5224\u65ad\u53ea\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u624d\u6709\u53ef\u80fd\u8fd4\u56defalse\n  } else {\n    // There's still time left in the frame.\n    return false;\n  }\n};\n\n// \u8bf7\u6c42\u7ed8\u5236\nrequestPaint = function() {\n  needsPaint = true;\n};\n\n// \u8bbe\u7f6e\u65f6\u95f4\u5207\u7247\u7684\u5468\u671f\nforceFrameRate = function(fps) {\n  if (fps < 0 || fps > 125) {\n    // Using console['error'] to evade Babel and ESLint\n    console['error'](\n      'forceFrameRate takes a positive int between 0 and 125, ' +\n        'forcing frame rates higher than 125 fps is not supported',\n    );\n    return;\n  }\n  if (fps > 0) {\n    yieldInterval = Math.floor(1000 / fps);\n  } else {\n    // reset the framerate\n    yieldInterval = 5;\n  }\n};",lang:"js"}),a.a.createElement("p",null,"\u8fd9 4 \u4e2a\u51fd\u6570\u4ee3\u7801\u90fd\u5f88\u7b80\u6d01, \u5176\u529f\u80fd\u5728\u6ce8\u91ca\u4e2d\u90fd\u6709\u89e3\u91ca."),a.a.createElement("p",null,"\u6ce8\u610f",a.a.createElement("code",null,"shouldYieldToHost"),"\u7684\u5224\u5b9a\u6761\u4ef6:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"currentTime >= deadline"),": \u53ea\u6709\u65f6\u95f4\u8d85\u8fc7",a.a.createElement("code",null,"deadline"),"\u4e4b\u540e\u624d\u4f1a\u8ba9\u51fa\u4e3b\u7ebf\u7a0b(\u5176\u4e2d",a.a.createElement("code",null,"deadline = currentTime + yieldInterval"),").",a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"yieldInterval"),"\u9ed8\u8ba4\u662f",a.a.createElement("code",null,"5ms"),", \u53ea\u80fd\u901a\u8fc7",a.a.createElement("code",null,"forceFrameRate"),"\u51fd\u6570\u6765\u4fee\u6539(\u4e8b\u5b9e\u4e0a\u5728 v17.0.2 \u6e90\u7801\u4e2d, \u5e76\u6ca1\u6709\u4f7f\u7528\u5230\u8be5\u51fd\u6570)."),a.a.createElement("li",null,"\u5982\u679c\u4e00\u4e2a",a.a.createElement("code",null,"task"),"\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc7",a.a.createElement("code",null,"5ms"),", \u4e0b\u4e00\u4e2a",a.a.createElement("code",null,"task"),"\u6267\u884c\u4e4b\u524d, \u4f1a\u628a\u63a7\u5236\u6743\u5f52\u8fd8\u6d4f\u89c8\u5668."))),a.a.createElement("li",null,a.a.createElement("code",null,"navigator.scheduling.isInputPending()"),": \u8fd9 facebook \u5b98\u65b9\u8d21\u732e\u7ed9 Chromium \u7684 api, \u73b0\u5728\u5df2\u7ecf\u5217\u5165 W3C \u6807\u51c6(",a.a.createElement(c["Link"],{to:"https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/"},"\u5177\u4f53\u89e3\u91ca"),"), \u7528\u4e8e\u5224\u65ad\u662f\u5426\u6709\u8f93\u5165\u4e8b\u4ef6(\u5305\u62ec: input \u6846\u8f93\u5165\u4e8b\u4ef6, \u70b9\u51fb\u4e8b\u4ef6\u7b49).")),a.a.createElement("p",null,"\u4ecb\u7ecd\u5b8c\u8fd9 8 \u4e2a\u5185\u90e8\u51fd\u6570, \u6700\u540e\u6d4f\u89c8\u4e00\u4e0b\u5b8c\u6574\u56de\u8c03\u7684\u5b9e\u73b0",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L185-L218"},"performWorkUntilDeadline"),"(\u903b\u8f91\u5f88\u6e05\u6670, \u5728\u6ce8\u91ca\u4e2d\u89e3\u91ca):"),a.a.createElement(r["a"],{code:"const performWorkUntilDeadline = () => {\n  if (scheduledHostCallback !== null) {\n    const currentTime = getCurrentTime(); // 1. \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    deadline = currentTime + yieldInterval; // 2. \u8bbe\u7f6edeadline\n    const hasTimeRemaining = true;\n    try {\n      // 3. \u6267\u884c\u56de\u8c03, \u8fd4\u56de\u662f\u5426\u6709\u8fd8\u6709\u5269\u4f59\u4efb\u52a1\n      const hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);\n      if (!hasMoreWork) {\n        // \u6ca1\u6709\u5269\u4f59\u4efb\u52a1, \u9000\u51fa\n        isMessageLoopRunning = false;\n        scheduledHostCallback = null;\n      } else {\n        port.postMessage(null); // \u6709\u5269\u4f59\u4efb\u52a1, \u53d1\u8d77\u65b0\u7684\u8c03\u5ea6\n      }\n    } catch (error) {\n      port.postMessage(null); // \u5982\u6709\u5f02\u5e38, \u91cd\u65b0\u53d1\u8d77\u8c03\u5ea6\n      throw error;\n    }\n  } else {\n    isMessageLoopRunning = false;\n  }\n  needsPaint = false; // \u91cd\u7f6e\u5f00\u5173\n};",lang:"js"}),a.a.createElement("p",null,"\u5206\u6790\u5230\u8fd9\u91cc, \u53ef\u4ee5\u5f97\u5230\u8c03\u5ea6\u4e2d\u5fc3\u7684\u5185\u6838\u5b9e\u73b0\u56fe:"),a.a.createElement("p",null,a.a.createElement("img",{src:t("Mn6a"),alt:""})),a.a.createElement("p",null,"\u8bf4\u660e: \u8fd9\u4e2a\u6d41\u7a0b\u56fe\u5f88\u7b80\u5355, \u6e90\u7801\u91cf\u4e5f\u5f88\u5c11(\u603b\u5171\u4e0d\u5230 80 \u884c), \u4f46\u662f\u5b83\u4ee3\u8868\u4e86",a.a.createElement("code",null,"scheduler"),"\u7684\u6838\u5fc3, \u6240\u4ee5\u7cbe\u534e\u5176\u5b9e\u5e76\u4e0d\u4e00\u5b9a\u9700\u8981\u5f88\u591a\u4ee3\u7801."),a.a.createElement("h3",{id:"\u4efb\u52a1\u961f\u5217\u7ba1\u7406"},a.a.createElement(c["AnchorLink"],{to:"#\u4efb\u52a1\u961f\u5217\u7ba1\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4efb\u52a1\u961f\u5217\u7ba1\u7406"),a.a.createElement("p",null,"\u901a\u8fc7\u4e0a\u6587\u7684\u5206\u6790, \u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u8bf7\u6c42\u548c\u53d6\u6d88\u8c03\u5ea6\u7684\u5b9e\u73b0\u539f\u7406. \u8c03\u5ea6\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u6d88\u8d39\u4efb\u52a1, \u63a5\u4e0b\u6765\u5c31\u5177\u4f53\u5206\u6790\u4efb\u52a1\u961f\u5217\u662f\u5982\u4f55\u7ba1\u7406\u4e0e\u5b9e\u73b0\u7684."),a.a.createElement("p",null,"\u5728",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/Scheduler.js"},"Scheduler.js"),"\u4e2d, \u7ef4\u62a4\u4e86\u4e00\u4e2a",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/Scheduler.js#L62"},"taskQueue"),", \u4efb\u52a1\u961f\u5217\u7ba1\u7406\u5c31\u662f\u56f4\u7ed5\u8fd9\u4e2a",a.a.createElement("code",null,"taskQueue"),"\u5c55\u5f00."),a.a.createElement(r["a"],{code:"// Tasks are stored on a min heap\nvar taskQueue = [];\nvar timerQueue = [];",lang:"js"}),a.a.createElement("p",null,"\u6ce8\u610f:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"taskQueue"),"\u662f\u4e00\u4e2a\u5c0f\u9876\u5806\u6570\u7ec4, \u5173\u4e8e\u5806\u6392\u5e8f\u7684\u8be6\u7ec6\u89e3\u91ca, \u53ef\u4ee5\u67e5\u770b",a.a.createElement(c["Link"],{to:"../algorithm/heapsort"},"React \u7b97\u6cd5\u4e4b\u5806\u6392\u5e8f"),"."),a.a.createElement("li",null,"\u6e90\u7801\u4e2d\u9664\u4e86",a.a.createElement("code",null,"taskQueue"),"\u961f\u5217\u4e4b\u5916\u8fd8\u6709\u4e00\u4e2a",a.a.createElement("code",null,"timerQueue"),"\u961f\u5217. \u8fd9\u4e2a\u961f\u5217\u662f\u9884\u7559\u7ed9\u5ef6\u65f6\u4efb\u52a1\u4f7f\u7528\u7684, \u5728 ",a.a.createElement(c["Link"],{to:"mailto:react@17.0.2"},"react@17.0.2")," \u7248\u672c\u91cc\u9762, \u4ece\u6e90\u7801\u4e2d\u7684\u5f15\u7528\u6765\u770b, \u7b97\u4e00\u4e2a\u4fdd\u7559\u529f\u80fd, \u6ca1\u6709\u7528\u5230.")),a.a.createElement("h4",{id:"\u521b\u5efa\u4efb\u52a1"},a.a.createElement(c["AnchorLink"],{to:"#\u521b\u5efa\u4efb\u52a1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u521b\u5efa\u4efb\u52a1"),a.a.createElement("p",null,"\u5728",a.a.createElement("code",null,"unstable_scheduleCallback"),"\u51fd\u6570\u4e2d(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/Scheduler.js#L279-L359"},"\u6e90\u7801\u94fe\u63a5"),"):"),a.a.createElement(r["a"],{code:"// \u7701\u7565\u90e8\u5206\u65e0\u5173\u4ee3\u7801\nfunction unstable_scheduleCallback(priorityLevel, callback, options) {\n  // 1. \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n  var currentTime = getCurrentTime();\n  var startTime;\n  if (typeof options === 'object' && options !== null) {\n    // \u4ece\u51fd\u6570\u8c03\u7528\u5173\u7cfb\u6765\u770b, \u5728v17.0.2\u4e2d,\u6240\u6709\u8c03\u7528 unstable_scheduleCallback \u90fd\u672a\u4f20\u5165options\n    // \u6240\u4ee5\u7701\u7565\u5ef6\u65f6\u4efb\u52a1\u76f8\u5173\u7684\u4ee3\u7801\n  } else {\n    startTime = currentTime;\n  }\n  // 2. \u6839\u636e\u4f20\u5165\u7684\u4f18\u5148\u7ea7, \u8bbe\u7f6e\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4 expirationTime\n  var timeout;\n  switch (priorityLevel) {\n    case ImmediatePriority:\n      timeout = IMMEDIATE_PRIORITY_TIMEOUT;\n      break;\n    case UserBlockingPriority:\n      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;\n      break;\n    case IdlePriority:\n      timeout = IDLE_PRIORITY_TIMEOUT;\n      break;\n    case LowPriority:\n      timeout = LOW_PRIORITY_TIMEOUT;\n      break;\n    case NormalPriority:\n    default:\n      timeout = NORMAL_PRIORITY_TIMEOUT;\n      break;\n  }\n  var expirationTime = startTime + timeout;\n  // 3. \u521b\u5efa\u65b0\u4efb\u52a1\n  var newTask = {\n    id: taskIdCounter++,\n    callback,\n    priorityLevel,\n    startTime,\n    expirationTime,\n    sortIndex: -1,\n  };\n  if (startTime > currentTime) {\n    // \u7701\u7565\u65e0\u5173\u4ee3\u7801 v17.0.2\u4e2d\u4e0d\u4f1a\u4f7f\u7528\n  } else {\n    newTask.sortIndex = expirationTime;\n    // 4. \u52a0\u5165\u4efb\u52a1\u961f\u5217\n    push(taskQueue, newTask);\n    // 5. \u8bf7\u6c42\u8c03\u5ea6\n    if (!isHostCallbackScheduled && !isPerformingWork) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    }\n  }\n  return newTask;\n}",lang:"js"}),a.a.createElement("p",null,"\u903b\u8f91\u5f88\u6e05\u6670(\u5728\u6ce8\u91ca\u4e2d\u5df2\u6807\u660e), \u91cd\u70b9\u5206\u6790",a.a.createElement("code",null,"task"),"\u5bf9\u8c61\u7684\u5404\u4e2a\u5c5e\u6027:"),a.a.createElement(r["a"],{code:"var newTask = {\n  id: taskIdCounter++, // id: \u4e00\u4e2a\u81ea\u589e\u7f16\u53f7\n  callback, // callback: \u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\n  priorityLevel, // priorityLevel: \u4f18\u5148\u7ea7\u7b49\u7ea7\n  startTime, // startTime: \u521b\u5efatask\u65f6\u7684\u5f53\u524d\u65f6\u95f4\n  expirationTime, // expirationTime: task\u7684\u8fc7\u671f\u65f6\u95f4, \u4f18\u5148\u7ea7\u8d8a\u9ad8 expirationTime = startTime + timeout \u8d8a\u5c0f\n  sortIndex: -1,\n};\nnewTask.sortIndex = expirationTime; // sortIndex: \u6392\u5e8f\u7d22\u5f15, \u5168\u7b49\u4e8e\u8fc7\u671f\u65f6\u95f4. \u4fdd\u8bc1\u8fc7\u671f\u65f6\u95f4\u8d8a\u5c0f, \u8d8a\u7d27\u6025\u7684\u4efb\u52a1\u6392\u5728\u6700\u524d\u9762",lang:"js"}),a.a.createElement("h4",{id:"\u6d88\u8d39\u4efb\u52a1"},a.a.createElement(c["AnchorLink"],{to:"#\u6d88\u8d39\u4efb\u52a1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6d88\u8d39\u4efb\u52a1"),a.a.createElement("p",null,"\u521b\u5efa\u4efb\u52a1\u4e4b\u540e, \u6700\u540e\u8bf7\u6c42\u8c03\u5ea6",a.a.createElement("code",null,"requestHostCallback(flushWork)"),"(",a.a.createElement("code",null,"\u521b\u5efa\u4efb\u52a1"),"\u6e90\u7801\u4e2d\u7684\u7b2c 5 \u6b65), ",a.a.createElement("code",null,"flushWork"),"\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u88ab\u4f20\u5165\u8c03\u5ea6\u4e2d\u5fc3\u5185\u6838\u7b49\u5f85\u56de\u8c03. ",a.a.createElement("code",null,"requestHostCallback"),"\u51fd\u6570\u5728\u4e0a\u6587\u8c03\u5ea6\u5185\u6838\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\u4e86, \u5728\u8c03\u5ea6\u4e2d\u5fc3\u4e2d, \u53ea\u9700\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u5c31\u4f1a\u6267\u884c\u56de\u8c03, \u6700\u7ec8\u6267\u884c",a.a.createElement("code",null,"flushWork"),"."),a.a.createElement(r["a"],{code:"// \u7701\u7565\u65e0\u5173\u4ee3\u7801\nfunction flushWork(hasTimeRemaining, initialTime) {\n  // 1. \u505a\u597d\u5168\u5c40\u6807\u8bb0, \u8868\u793a\u73b0\u5728\u5df2\u7ecf\u8fdb\u5165\u8c03\u5ea6\u9636\u6bb5\n  isHostCallbackScheduled = false;\n  isPerformingWork = true;\n  const previousPriorityLevel = currentPriorityLevel;\n  try {\n    // 2. \u5faa\u73af\u6d88\u8d39\u961f\u5217\n    return workLoop(hasTimeRemaining, initialTime);\n  } finally {\n    // 3. \u8fd8\u539f\u5168\u5c40\u6807\u8bb0\n    currentTask = null;\n    currentPriorityLevel = previousPriorityLevel;\n    isPerformingWork = false;\n  }\n}",lang:"js"}),a.a.createElement("p",null,a.a.createElement("code",null,"flushWork"),"\u4e2d\u8c03\u7528\u4e86",a.a.createElement("code",null,"workLoop"),". \u961f\u5217\u6d88\u8d39\u7684\u4e3b\u8981\u903b\u8f91\u662f\u5728",a.a.createElement("code",null,"workLoop"),"\u51fd\u6570\u4e2d, \u8fd9\u5c31\u662f",a.a.createElement(c["Link"],{to:"./workloop"},"React \u5de5\u4f5c\u5faa\u73af"),"\u4e00\u6587\u4e2d\u63d0\u5230\u7684",a.a.createElement("code",null,"\u4efb\u52a1\u8c03\u5ea6\u5faa\u73af"),"."),a.a.createElement(r["a"],{code:"// \u7701\u7565\u90e8\u5206\u65e0\u5173\u4ee3\u7801\nfunction workLoop(hasTimeRemaining, initialTime) {\n  let currentTime = initialTime; // \u4fdd\u5b58\u5f53\u524d\u65f6\u95f4, \u7528\u4e8e\u5224\u65ad\u4efb\u52a1\u662f\u5426\u8fc7\u671f\n  currentTask = peek(taskQueue); // \u83b7\u53d6\u961f\u5217\u4e2d\u7684\u7b2c\u4e00\u4e2a\u4efb\u52a1\n  while (currentTask !== null) {\n    if (\n      currentTask.expirationTime > currentTime &&\n      (!hasTimeRemaining || shouldYieldToHost())\n    ) {\n      // \u867d\u7136currentTask\u6ca1\u6709\u8fc7\u671f, \u4f46\u662f\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u4e86\u9650\u5236(\u6bd5\u7adf\u53ea\u67095ms, shouldYieldToHost()\u8fd4\u56detrue). \u505c\u6b62\u7ee7\u7eed\u6267\u884c, \u8ba9\u51fa\u4e3b\u7ebf\u7a0b\n      break;\n    }\n    const callback = currentTask.callback;\n    if (typeof callback === 'function') {\n      currentTask.callback = null;\n      currentPriorityLevel = currentTask.priorityLevel;\n      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;\n      // \u6267\u884c\u56de\u8c03\n      const continuationCallback = callback(didUserCallbackTimeout);\n      currentTime = getCurrentTime();\n      // \u56de\u8c03\u5b8c\u6210, \u5224\u65ad\u662f\u5426\u8fd8\u6709\u8fde\u7eed(\u6d3e\u751f)\u56de\u8c03\n      if (typeof continuationCallback === 'function') {\n        // \u4ea7\u751f\u4e86\u8fde\u7eed\u56de\u8c03(\u5982fiber\u6811\u592a\u5927, \u51fa\u73b0\u4e86\u4e2d\u65ad\u6e32\u67d3), \u4fdd\u7559currentTask\n        currentTask.callback = continuationCallback;\n      } else {\n        // \u628acurrentTask\u79fb\u51fa\u961f\u5217\n        if (currentTask === peek(taskQueue)) {\n          pop(taskQueue);\n        }\n      }\n    } else {\n      // \u5982\u679c\u4efb\u52a1\u88ab\u53d6\u6d88(\u8fd9\u65f6currentTask.callback = null), \u5c06\u5176\u79fb\u51fa\u961f\u5217\n      pop(taskQueue);\n    }\n    // \u66f4\u65b0currentTask\n    currentTask = peek(taskQueue);\n  }\n  if (currentTask !== null) {\n    return true; // \u5982\u679ctask\u961f\u5217\u6ca1\u6709\u6e05\u7a7a, \u8fd4\u56detrue. \u7b49\u5f85\u8c03\u5ea6\u4e2d\u5fc3\u4e0b\u4e00\u6b21\u56de\u8c03\n  } else {\n    return false; // task\u961f\u5217\u5df2\u7ecf\u6e05\u7a7a, \u8fd4\u56defalse.\n  }\n}",lang:"js"}),a.a.createElement("p",null,a.a.createElement("code",null,"workLoop"),"\u5c31\u662f\u4e00\u4e2a\u5927\u5faa\u73af, \u867d\u7136\u4ee3\u7801\u4e5f\u4e0d\u591a, \u4f46\u662f\u975e\u5e38\u7cbe\u9ad3, \u5728\u6b64\u5904\u5b9e\u73b0\u4e86",a.a.createElement("code",null,"\u65f6\u95f4\u5207\u7247(time slicing)"),"\u548c",a.a.createElement("code",null,"fiber\u6811\u7684\u53ef\u4e2d\u65ad\u6e32\u67d3"),". \u8fd9 2 \u5927\u7279\u6027\u7684\u5b9e\u73b0, \u90fd\u96c6\u4e2d\u4e8e\u8fd9\u4e2a",a.a.createElement("code",null,"while"),"\u5faa\u73af."),a.a.createElement("p",null,"\u6bcf\u4e00\u6b21",a.a.createElement("code",null,"while"),"\u5faa\u73af\u7684\u9000\u51fa\u5c31\u662f\u4e00\u4e2a\u65f6\u95f4\u5207\u7247, \u6df1\u5165\u5206\u6790",a.a.createElement("code",null,"while"),"\u5faa\u73af\u7684\u9000\u51fa\u6761\u4ef6:"),a.a.createElement("ol",null,a.a.createElement("li",null,"\u961f\u5217\u88ab\u5b8c\u5168\u6e05\u7a7a: \u8fd9\u79cd\u60c5\u51b5\u5c31\u662f\u5f88\u6b63\u5e38\u7684\u60c5\u51b5, \u4e00\u6c14\u5475\u6210, \u6ca1\u6709\u9047\u5230\u4efb\u4f55\u963b\u788d."),a.a.createElement("li",null,"\u6267\u884c\u8d85\u65f6: \u5728\u6d88\u8d39",a.a.createElement("code",null,"taskQueue"),"\u65f6, \u5728\u6267\u884c",a.a.createElement("code",null,"task.callback"),"\u4e4b\u524d, \u90fd\u4f1a\u68c0\u6d4b\u662f\u5426\u8d85\u65f6, \u6240\u4ee5\u8d85\u65f6\u68c0\u6d4b\u662f\u4ee5",a.a.createElement("code",null,"task"),"\u4e3a\u5355\u4f4d.",a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u67d0\u4e2a",a.a.createElement("code",null,"task.callback"),"\u6267\u884c\u65f6\u95f4\u592a\u957f(\u5982: ",a.a.createElement("code",null,"fiber\u6811"),"\u5f88\u5927, \u6216\u903b\u8f91\u5f88\u91cd)\u4e5f\u4f1a\u9020\u6210\u8d85\u65f6"),a.a.createElement("li",null,"\u6240\u4ee5\u5728\u6267\u884c",a.a.createElement("code",null,"task.callback"),"\u8fc7\u7a0b\u4e2d, \u4e5f\u9700\u8981\u4e00\u79cd\u673a\u5236\u68c0\u6d4b\u662f\u5426\u8d85\u65f6, \u5982\u679c\u8d85\u65f6\u4e86\u5c31\u7acb\u523b\u6682\u505c",a.a.createElement("code",null,"task.callback"),"\u7684\u6267\u884c.")))),a.a.createElement("h4",{id:"\u65f6\u95f4\u5207\u7247\u539f\u7406"},a.a.createElement(c["AnchorLink"],{to:"#\u65f6\u95f4\u5207\u7247\u539f\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65f6\u95f4\u5207\u7247\u539f\u7406"),a.a.createElement("p",null,"\u6d88\u8d39\u4efb\u52a1\u961f\u5217\u7684\u8fc7\u7a0b\u4e2d, \u53ef\u4ee5\u6d88\u8d39",a.a.createElement("code",null,"1~n"),"\u4e2a task, \u751a\u81f3\u6e05\u7a7a\u6574\u4e2a queue. \u4f46\u662f\u5728\u6bcf\u4e00\u6b21\u5177\u4f53\u6267\u884c",a.a.createElement("code",null,"task.callback"),"\u4e4b\u524d\u90fd\u8981\u8fdb\u884c\u8d85\u65f6\u68c0\u6d4b, \u5982\u679c\u8d85\u65f6\u53ef\u4ee5\u7acb\u5373\u9000\u51fa\u5faa\u73af\u5e76\u7b49\u5f85\u4e0b\u4e00\u6b21\u8c03\u7528."),a.a.createElement("h4",{id:"\u53ef\u4e2d\u65ad\u6e32\u67d3\u539f\u7406"},a.a.createElement(c["AnchorLink"],{to:"#\u53ef\u4e2d\u65ad\u6e32\u67d3\u539f\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u4e2d\u65ad\u6e32\u67d3\u539f\u7406"),a.a.createElement("p",null,"\u5728\u65f6\u95f4\u5207\u7247\u7684\u57fa\u7840\u4e4b\u4e0a, \u5982\u679c\u5355\u4e2a",a.a.createElement("code",null,"task.callback"),"\u6267\u884c\u65f6\u95f4\u5c31\u5f88\u957f(\u5047\u8bbe 200ms). \u5c31\u9700\u8981",a.a.createElement("code",null,"task.callback"),"\u81ea\u5df1\u80fd\u591f\u68c0\u6d4b\u662f\u5426\u8d85\u65f6, \u6240\u4ee5\u5728 fiber \u6811\u6784\u9020\u8fc7\u7a0b\u4e2d, \u6bcf\u6784\u9020\u5b8c\u6210\u4e00\u4e2a\u5355\u5143, \u90fd\u4f1a\u68c0\u6d4b\u4e00\u6b21\u8d85\u65f6(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1637-L1639"},"\u6e90\u7801\u94fe\u63a5"),"), \u5982\u9047\u8d85\u65f6\u5c31\u9000\u51fa",a.a.createElement("code",null,"fiber\u6811\u6784\u9020\u5faa\u73af"),", \u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u56de\u8c03\u51fd\u6570(\u5c31\u662f\u6b64\u5904\u7684",a.a.createElement("code",null,"continuationCallback"),")\u5e76\u7b49\u5f85\u4e0b\u4e00\u6b21\u56de\u8c03\u7ee7\u7eed\u672a\u5b8c\u6210\u7684",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"."),a.a.createElement("h2",{id:"\u8282\u6d41\u9632\u6296-throttle-debounce"},a.a.createElement(c["AnchorLink"],{to:"#\u8282\u6d41\u9632\u6296-throttle-debounce","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8282\u6d41\u9632\u6296 ","{","#throttle-debounce","}"),a.a.createElement("p",null,"\u901a\u8fc7\u4e0a\u6587\u7684\u5206\u6790, \u5df2\u7ecf\u8986\u76d6\u4e86",a.a.createElement("code",null,"scheduler"),"\u5305\u4e2d\u7684\u6838\u5fc3\u539f\u7406. \u73b0\u5728\u518d\u6b21\u56de\u5230",a.a.createElement("code",null,"react-reconciler"),"\u5305\u4e2d, \u5728\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u7684\u5173\u952e\u8def\u5f84\u4e2d, \u6211\u4eec\u8fd8\u9700\u8981\u7406\u89e3\u4e00\u4e9b\u7ec6\u8282."),a.a.createElement("p",null,"\u5728",a.a.createElement(c["Link"],{to:"./reconciler-workflow"},"reconciler \u8fd0\u4f5c\u6d41\u7a0b"),"\u4e2d\u603b\u7ed3\u7684 4 \u4e2a\u9636\u6bb5\u4e2d, ",a.a.createElement("code",null,"\u6ce8\u518c\u8c03\u5ea6\u4efb\u52a1"),"\u5c5e\u4e8e\u7b2c 2 \u4e2a\u9636\u6bb5, \u6838\u5fc3\u903b\u8f91\u4f4d\u4e8e",a.a.createElement("code",null,"ensureRootIsScheduled"),"\u51fd\u6570\u4e2d. \u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u7406\u89e3\u4e86",a.a.createElement("code",null,"\u8c03\u5ea6\u539f\u7406"),", \u518d\u6b21\u5206\u6790",a.a.createElement("code",null,"ensureRootIsScheduled"),"(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L674-L736"},"\u6e90\u7801\u5730\u5740"),"):"),a.a.createElement(r["a"],{code:"// ... \u7701\u7565\u90e8\u5206\u65e0\u5173\u4ee3\u7801\nfunction ensureRootIsScheduled(root: FiberRoot, currentTime: number) {\n  // \u524d\u534a\u90e8\u5206: \u5224\u65ad\u662f\u5426\u9700\u8981\u6ce8\u518c\u65b0\u7684\u8c03\u5ea6\n  const existingCallbackNode = root.callbackNode;\n  const nextLanes = getNextLanes(\n    root,\n    root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes,\n  );\n  const newCallbackPriority = returnNextLanesPriority();\n  if (nextLanes === NoLanes) {\n    return;\n  }\n  // \u8282\u6d41\u9632\u6296\n  if (existingCallbackNode !== null) {\n    const existingCallbackPriority = root.callbackPriority;\n    if (existingCallbackPriority === newCallbackPriority) {\n      return;\n    }\n    cancelCallback(existingCallbackNode);\n  }\n  // \u540e\u534a\u90e8\u5206: \u6ce8\u518c\u8c03\u5ea6\u4efb\u52a1 \u7701\u7565\u4ee3\u7801...\n\n  // \u66f4\u65b0\u6807\u8bb0\n  root.callbackPriority = newCallbackPriority;\n  root.callbackNode = newCallbackNode;\n}",lang:"js"}),a.a.createElement("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b, ",a.a.createElement("code",null,"ensureRootIsScheduled"),"\u51fd\u6570\u4f1a\u4e0e",a.a.createElement("code",null,"scheduler"),"\u5305\u901a\u4fe1, \u6700\u540e\u6ce8\u518c\u4e00\u4e2a",a.a.createElement("code",null,"task"),"\u5e76\u7b49\u5f85\u56de\u8c03."),a.a.createElement("ol",null,a.a.createElement("li",null,"\u5728",a.a.createElement("code",null,"task"),"\u6ce8\u518c\u5b8c\u6210\u4e4b\u540e, \u4f1a\u8bbe\u7f6e",a.a.createElement("code",null,"fiberRoot"),"\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027(",a.a.createElement("code",null,"fiberRoot"),"\u662f react \u8fd0\u884c\u65f6\u4e2d\u7684\u91cd\u8981\u5168\u5c40\u5bf9\u8c61, \u53ef\u53c2\u8003",a.a.createElement(c["AnchorLink"],{to:"./bootstrap#%E5%88%9B%E5%BB%BA%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1"},"React \u5e94\u7528\u7684\u542f\u52a8\u8fc7\u7a0b"),"), \u4ee3\u8868\u73b0\u5728\u5df2\u7ecf\u5904\u4e8e\u8c03\u5ea6\u8fdb\u884c\u4e2d"),a.a.createElement("li",null,"\u518d\u6b21\u8fdb\u5165",a.a.createElement("code",null,"ensureRootIsScheduled"),"\u65f6(\u6bd4\u5982\u8fde\u7eed 2 \u6b21",a.a.createElement("code",null,"setState"),", \u7b2c 2 \u6b21",a.a.createElement("code",null,"setState"),"\u540c\u6837\u4f1a\u89e6\u53d1",a.a.createElement("code",null,"reconciler\u8fd0\u4f5c\u6d41\u7a0b"),"\u4e2d\u7684\u8c03\u5ea6\u9636\u6bb5), \u5982\u679c\u53d1\u73b0\u5904\u4e8e\u8c03\u5ea6\u4e2d, \u5219\u9700\u8981\u4e00\u4e9b\u8282\u6d41\u548c\u9632\u6296\u63aa\u65bd, \u8fdb\u800c\u4fdd\u8bc1\u8c03\u5ea6\u6027\u80fd.",a.a.createElement("ol",null,a.a.createElement("li",null,"\u8282\u6d41(\u5224\u65ad\u6761\u4ef6: ",a.a.createElement("code",null,"existingCallbackPriority === newCallbackPriority"),", \u65b0\u65e7\u66f4\u65b0\u7684\u4f18\u5148\u7ea7\u76f8\u540c, \u5982\u8fde\u7eed\u591a\u6b21\u6267\u884c",a.a.createElement("code",null,"setState"),"), \u5219\u65e0\u9700\u6ce8\u518c\u65b0",a.a.createElement("code",null,"task"),"(\u7ee7\u7eed\u6cbf\u7528\u4e0a\u4e00\u4e2a\u4f18\u5148\u7ea7\u76f8\u540c\u7684",a.a.createElement("code",null,"task"),"), \u76f4\u63a5\u9000\u51fa\u8c03\u7528."),a.a.createElement("li",null,"\u9632\u6296(\u5224\u65ad\u6761\u4ef6: ",a.a.createElement("code",null,"existingCallbackPriority !== newCallbackPriority"),", \u65b0\u65e7\u66f4\u65b0\u7684\u4f18\u5148\u7ea7\u4e0d\u540c), \u5219\u53d6\u6d88\u65e7",a.a.createElement("code",null,"task"),", \u91cd\u65b0\u6ce8\u518c\u65b0",a.a.createElement("code",null,"task"),".")))),a.a.createElement("h2",{id:"\u603b\u7ed3"},a.a.createElement(c["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),a.a.createElement("p",null,"\u672c\u8282\u4e3b\u8981\u5206\u6790\u4e86",a.a.createElement("code",null,"scheduler"),"\u5305\u4e2d",a.a.createElement("code",null,"\u8c03\u5ea6\u539f\u7406"),", \u4e5f\u5c31\u662f",a.a.createElement("code",null,"React\u4e24\u5927\u5de5\u4f5c\u5faa\u73af"),"\u4e2d\u7684",a.a.createElement("code",null,"\u4efb\u52a1\u8c03\u5ea6\u5faa\u73af"),". \u5e76\u4ecb\u7ecd\u4e86",a.a.createElement("code",null,"\u65f6\u95f4\u5207\u7247"),"\u548c",a.a.createElement("code",null,"\u53ef\u4e2d\u65ad\u6e32\u67d3"),"\u7b49\u7279\u6027\u5728",a.a.createElement("code",null,"\u4efb\u52a1\u8c03\u5ea6\u5faa\u73af"),"\u4e2d\u7684\u5b9e\u73b0. ",a.a.createElement("code",null,"scheduler"),"\u5305\u662f",a.a.createElement("code",null,"React"),"\u8fd0\u884c\u65f6\u7684\u5fc3\u810f, \u4e3a\u4e86\u63d0\u5347\u8c03\u5ea6\u6027\u80fd, \u6ce8\u518c",a.a.createElement("code",null,"task"),"\u4e4b\u524d, \u5728",a.a.createElement("code",null,"react-reconciler"),"\u5305\u4e2d\u505a\u4e86\u8282\u6d41\u548c\u9632\u6296\u7b49\u63aa\u65bd.")))}));n["default"]=e=>{var n=a.a.useContext(c["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:t})}}}]);