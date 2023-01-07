(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"+8fW":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("H1Ra"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"react-\u4e2d\u7684\u4f18\u5148\u7ea7\u7ba1\u7406"},l.a.createElement(r["AnchorLink"],{to:"#react-\u4e2d\u7684\u4f18\u5148\u7ea7\u7ba1\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u4e2d\u7684\u4f18\u5148\u7ea7\u7ba1\u7406"),l.a.createElement("blockquote",null,l.a.createElement("p",null,l.a.createElement("code",null,"React"),"\u5185\u90e8\u5bf9\u4e8e",l.a.createElement("code",null,"\u4f18\u5148\u7ea7"),"\u7684\u7ba1\u7406, \u6839\u636e\u529f\u80fd\u7684\u4e0d\u540c\u5206\u4e3a",l.a.createElement("code",null,"LanePriority"),", ",l.a.createElement("code",null,"SchedulerPriority"),", ",l.a.createElement("code",null,"ReactPriorityLevel"),"3 \u79cd\u7c7b\u578b. \u672c\u6587\u57fa\u4e8e",l.a.createElement("code",null,"react@17.0.2"),", \u68b3\u7406\u6e90\u7801\u4e2d\u7684\u4f18\u5148\u7ea7\u7ba1\u7406\u4f53\u7cfb.")),l.a.createElement("p",null,l.a.createElement("code",null,"React"),"\u662f\u4e00\u4e2a\u58f0\u660e\u5f0f, \u9ad8\u6548\u4e14\u7075\u6d3b\u7684\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93. React \u56e2\u961f\u4e00\u76f4\u81f4\u529b\u4e8e\u5b9e\u73b0\u9ad8\u6548\u6e32\u67d3, \u5176\u4e2d\u6709 2 \u4e2a\u5341\u5206\u6709\u540d\u7684\u6f14\u8bb2:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"http://conf2017.reactjs.org/speakers/lin"},"2017 \u5e74 Lin Clark \u7684\u6f14\u8bb2"),"\u4e2d\u4ecb\u7ecd\u4e86",l.a.createElement("code",null,"fiber"),"\u67b6\u6784\u548c",l.a.createElement("code",null,"\u53ef\u4e2d\u65ad\u6e32\u67d3"),"."),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://zh-hans.reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html"},"2018 \u5e74 Dan \u5728 JSConf \u51b0\u5c9b\u7684\u6f14\u8bb2"),"\u8fdb\u4e00\u6b65\u4ecb\u7ecd\u4e86\u65f6\u95f4\u5207\u7247(",l.a.createElement("code",null,"time slicing"),")\u548c\u5f02\u6b65\u6e32\u67d3(",l.a.createElement("code",null,"suspense"),")\u7b49\u7279\u6027.")),l.a.createElement("p",null,"\u6f14\u8bb2\u4e2d\u6240\u5c55\u793a\u7684",l.a.createElement("code",null,"\u53ef\u4e2d\u65ad\u6e32\u67d3"),",",l.a.createElement("code",null,"\u65f6\u95f4\u5207\u7247(time slicing)"),",",l.a.createElement("code",null,"\u5f02\u6b65\u6e32\u67d3(suspense)"),"\u7b49\u7279\u6027, \u5728\u6e90\u7801\u4e2d\u5f97\u4ee5\u5b9e\u73b0\u90fd\u4f9d\u8d56\u4e8e",l.a.createElement("code",null,"\u4f18\u5148\u7ea7\u7ba1\u7406"),"."),l.a.createElement("p",null,"\u5728",l.a.createElement("code",null,"React@17.0.2"),"\u6e90\u7801\u4e2d, \u4e00\u5171\u6709",l.a.createElement("code",null,"2\u5957\u4f18\u5148\u7ea7\u4f53\u7cfb"),"\u548c",l.a.createElement("code",null,"1\u5957\u8f6c\u6362\u4f53\u7cfb"),", \u5728\u6df1\u5165\u5206\u6790\u4e4b\u524d, \u518d\u6b21\u56de\u987e\u4e00\u4e0b(",l.a.createElement(r["Link"],{to:"./reconciler-workflow"},"reconciler \u8fd0\u4f5c\u6d41\u7a0b"),"):"),l.a.createElement("p",null,l.a.createElement("img",{src:n("wOdG"),alt:""})),l.a.createElement("p",null,l.a.createElement("code",null,"React"),"\u5185\u90e8\u5bf9\u4e8e",l.a.createElement("code",null,"\u4f18\u5148\u7ea7"),"\u7684\u7ba1\u7406, \u8d2f\u7a7f\u8fd0\u4f5c\u6d41\u7a0b\u7684 4 \u4e2a\u9636\u6bb5(\u4ece\u8f93\u5165\u5230\u8f93\u51fa), \u6839\u636e\u5176\u529f\u80fd\u7684\u4e0d\u540c, \u53ef\u4ee5\u5206\u4e3a 3 \u79cd\u7c7b\u578b:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"fiber"),"\u4f18\u5148\u7ea7(",l.a.createElement("code",null,"LanePriority"),"): \u4f4d\u4e8e",l.a.createElement("code",null,"react-reconciler"),"\u5305, \u4e5f\u5c31\u662f",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/pull/18796"},l.a.createElement("code",null,"Lane(\u8f66\u9053\u6a21\u578b)")),"."),l.a.createElement("li",null,"\u8c03\u5ea6\u4f18\u5148\u7ea7(",l.a.createElement("code",null,"SchedulerPriority"),"): \u4f4d\u4e8e",l.a.createElement("code",null,"scheduler"),"\u5305."),l.a.createElement("li",null,"\u4f18\u5148\u7ea7\u7b49\u7ea7(",l.a.createElement("code",null,"ReactPriorityLevel"),") : \u4f4d\u4e8e",l.a.createElement("code",null,"react-reconciler"),"\u5305\u4e2d\u7684",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/SchedulerWithReactIntegration.old.js"},l.a.createElement("code",null,"SchedulerWithReactIntegration.js")),", \u8d1f\u8d23\u4e0a\u8ff0 2 \u5957\u4f18\u5148\u7ea7\u4f53\u7cfb\u7684\u8f6c\u6362.")),l.a.createElement("h2",{id:"\u9884\u5907\u77e5\u8bc6"},l.a.createElement(r["AnchorLink"],{to:"#\u9884\u5907\u77e5\u8bc6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9884\u5907\u77e5\u8bc6"),l.a.createElement("p",null,"\u5728\u6df1\u5165\u5206\u6790 3 \u79cd\u4f18\u5148\u7ea7\u4e4b\u524d, \u4e3a\u4e86\u6df1\u5165\u7406\u89e3",l.a.createElement("code",null,"LanePriority"),", \u9700\u8981\u5148\u4e86\u89e3",l.a.createElement("code",null,"Lane"),", \u8fd9\u662f",l.a.createElement("code",null,"react@17.0.0"),"\u7684\u65b0\u7279\u6027."),l.a.createElement("h3",{id:"lane-\u8f66\u9053\u6a21\u578b"},l.a.createElement(r["AnchorLink"],{to:"#lane-\u8f66\u9053\u6a21\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Lane (\u8f66\u9053\u6a21\u578b)"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u82f1\u6587\u5355\u8bcd",l.a.createElement("code",null,"lane"),'\u7ffb\u8bd1\u6210\u4e2d\u6587\u8868\u793a"\u8f66\u9053, \u822a\u9053"\u7684\u610f\u601d, \u6240\u4ee5\u5f88\u591a\u6587\u7ae0\u90fd\u5c06',l.a.createElement("code",null,"Lanes"),"\u6a21\u578b\u79f0\u4e3a",l.a.createElement("code",null,"\u8f66\u9053\u6a21\u578b"))),l.a.createElement("p",null,l.a.createElement("code",null,"Lane"),"\u6a21\u578b\u7684\u6e90\u7801\u5728",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js"},"ReactFiberLane.js"),", \u6e90\u7801\u4e2d\u5927\u91cf\u4f7f\u7528\u4e86\u4f4d\u8fd0\u7b97(\u6709\u5173\u4f4d\u8fd0\u7b97\u7684\u8bb2\u89e3, \u53ef\u4ee5\u53c2\u8003",l.a.createElement(r["Link"],{to:"../algorithm/bitfield"},"React \u7b97\u6cd5\u4e4b\u4f4d\u8fd0\u7b97"),")."),l.a.createElement("p",null,"\u9996\u5148\u5f15\u5165\u4f5c\u8005\u5bf9",l.a.createElement("code",null,"Lane"),"\u7684\u89e3\u91ca(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/pull/18796"},"\u76f8\u5e94\u7684 pr"),"), \u8fd9\u91cc\u7b80\u5355\u6982\u62ec\u5982\u4e0b:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"Lane"),"\u7c7b\u578b\u88ab\u5b9a\u4e49\u4e3a\u4e8c\u8fdb\u5236\u53d8\u91cf, \u5229\u7528\u4e86\u4f4d\u63a9\u7801\u7684\u7279\u6027, \u5728\u9891\u7e41\u8fd0\u7b97\u7684\u65f6\u5019\u5360\u7528\u5185\u5b58\u5c11, \u8ba1\u7b97\u901f\u5ea6\u5feb."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"Lane"),"\u548c",l.a.createElement("code",null,"Lanes"),"\u5c31\u662f\u5355\u6570\u548c\u590d\u6570\u7684\u5173\u7cfb, \u4ee3\u8868\u5355\u4e2a\u4efb\u52a1\u7684\u5b9a\u4e49\u4e3a",l.a.createElement("code",null,"Lane"),", \u4ee3\u8868\u591a\u4e2a\u4efb\u52a1\u7684\u5b9a\u4e49\u4e3a",l.a.createElement("code",null,"Lanes")))),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"Lane"),"\u662f\u5bf9\u4e8e",l.a.createElement("code",null,"expirationTime"),"\u7684\u91cd\u6784, \u4ee5\u524d\u4f7f\u7528",l.a.createElement("code",null,"expirationTime"),"\u8868\u793a\u7684\u5b57\u6bb5, \u90fd\u6539\u4e3a\u4e86",l.a.createElement("code",null,"lane")),l.a.createElement(c["a"],{code:"renderExpirationtime -> renderLanes\n  update.expirationTime -> update.lane\n  fiber.expirationTime -> fiber.lanes\n  fiber.childExpirationTime -> fiber.childLanes\n  root.firstPendingTime and root.lastPendingTime -> fiber.pendingLanes",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"\u4f7f\u7528",l.a.createElement("code",null,"Lanes"),"\u6a21\u578b\u76f8\u6bd4",l.a.createElement("code",null,"expirationTime"),"\u6a21\u578b\u7684\u4f18\u52bf:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"Lanes"),"\u628a\u4efb\u52a1\u4f18\u5148\u7ea7\u4ece\u6279\u91cf\u4efb\u52a1\u4e2d\u5206\u79bb\u51fa\u6765, \u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5224\u65ad\u5355\u4e2a\u4efb\u52a1\u4e0e\u6279\u91cf\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u662f\u5426\u91cd\u53e0."),l.a.createElement(c["a"],{code:"// \u5224\u65ad: \u5355task\u4e0ebatchTask\u7684\u4f18\u5148\u7ea7\u662f\u5426\u91cd\u53e0\n//1. \u901a\u8fc7expirationTime\u5224\u65ad\nconst isTaskIncludedInBatch = priorityOfTask >= priorityOfBatch;\n//2. \u901a\u8fc7Lanes\u5224\u65ad\nconst isTaskIncludedInBatch = (task & batchOfTasks) !== 0;\n\n// \u5f53\u540c\u65f6\u5904\u7406\u4e00\u7ec4\u4efb\u52a1, \u8be5\u7ec4\u5185\u6709\u591a\u4e2a\u4efb\u52a1, \u4e14\u6bcf\u4e2a\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u4e0d\u4e00\u81f4\n// 1. \u5982\u679c\u901a\u8fc7expirationTime\u5224\u65ad. \u9700\u8981\u7ef4\u62a4\u4e00\u4e2a\u8303\u56f4(\u5728Lane\u91cd\u6784\u4e4b\u524d, \u6e90\u7801\u4e2d\u5c31\u662f\u8fd9\u6837\u6bd4\u8f83\u7684)\nconst isTaskIncludedInBatch =\n  taskPriority <= highestPriorityInRange &&\n  taskPriority >= lowestPriorityInRange;\n//2. \u901a\u8fc7Lanes\u5224\u65ad\nconst isTaskIncludedInBatch = (task & batchOfTasks) !== 0;",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"Lanes"),"\u4f7f\u7528\u5355\u4e2a 32 \u4f4d\u4e8c\u8fdb\u5236\u53d8\u91cf\u5373\u53ef\u4ee3\u8868\u591a\u4e2a\u4e0d\u540c\u7684\u4efb\u52a1, \u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2a\u53d8\u91cf\u5373\u53ef\u4ee3\u8868\u4e00\u4e2a\u7ec4(",l.a.createElement("code",null,"group"),"), \u5982\u679c\u8981\u5728\u4e00\u4e2a group \u4e2d\u5206\u79bb\u51fa\u5355\u4e2a task, \u975e\u5e38\u5bb9\u6613."),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u5728",l.a.createElement("code",null,"expirationTime"),"\u6a21\u578b\u8bbe\u8ba1\u4e4b\u521d, react \u4f53\u7cfb\u4e2d\u8fd8\u6ca1\u6709",l.a.createElement(r["Link"],{to:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html"},"Suspense \u5f02\u6b65\u6e32\u67d3"),"\u7684\u6982\u5ff5. \u73b0\u5728\u6709\u5982\u4e0b\u573a\u666f: \u6709 3 \u4e2a\u4efb\u52a1, \u5176\u4f18\u5148\u7ea7 ",l.a.createElement("code",null,"A > B > C"),", \u6b63\u5e38\u6765\u8bb2\u53ea\u9700\u8981\u6309\u7167\u4f18\u5148\u7ea7\u987a\u5e8f\u6267\u884c\u5c31\u53ef\u4ee5\u4e86. \u4f46\u662f\u73b0\u5728\u60c5\u51b5\u53d8\u4e86: A \u548c C \u4efb\u52a1\u662f",l.a.createElement("code",null,"CPU\u5bc6\u96c6\u578b"),", \u800c B \u662f",l.a.createElement("code",null,"IO\u5bc6\u96c6\u578b"),"(Suspense \u4f1a\u8c03\u7528\u8fdc\u7a0b api, \u7b97\u662f IO \u4efb\u52a1), \u5373 ",l.a.createElement("code",null,"A(cpu) > B(IO) > C(cpu)"),". \u6b64\u65f6\u7684\u9700\u6c42\u9700\u8981\u5c06\u4efb\u52a1",l.a.createElement("code",null,"B"),"\u4ece group \u4e2d\u5206\u79bb\u51fa\u6765, \u5148\u5904\u7406 cpu \u4efb\u52a1",l.a.createElement("code",null,"A\u548cC"),".")),l.a.createElement(c["a"],{code:"// \u4ecegroup\u4e2d\u5220\u9664\u6216\u589e\u52a0task\n\n//1. \u901a\u8fc7expirationTime\u5b9e\u73b0\n// 0) \u7ef4\u62a4\u4e00\u4e2a\u94fe\u8868, \u6309\u7167\u5355\u4e2atask\u7684\u4f18\u5148\u7ea7\u987a\u5e8f\u8fdb\u884c\u63d2\u5165\n// 1) \u5220\u9664\u5355\u4e2atask(\u4ece\u94fe\u8868\u4e2d\u5220\u9664\u4e00\u4e2a\u5143\u7d20)\ntask.prev.next = task.next;\n// 2) \u589e\u52a0\u5355\u4e2atask(\u9700\u8981\u5bf9\u6bd4\u5f53\u524dtask\u7684\u4f18\u5148\u7ea7, \u63d2\u5165\u5230\u94fe\u8868\u6b63\u786e\u7684\u4f4d\u7f6e\u4e0a)\nlet current = queue;\nwhile (task.expirationTime >= current.expirationTime) {\n  current = current.next;\n}\ntask.next = current.next;\ncurrent.next = task;\n// 3) \u6bd4\u8f83task\u662f\u5426\u5728group\u4e2d\nconst isTaskIncludedInBatch =\n  taskPriority <= highestPriorityInRange &&\n  taskPriority >= lowestPriorityInRange;\n\n// 2. \u901a\u8fc7Lanes\u5b9e\u73b0\n// 1) \u5220\u9664\u5355\u4e2atask\nbatchOfTasks &= ~task;\n// 2) \u589e\u52a0\u5355\u4e2atask\nbatchOfTasks |= task;\n// 3) \u6bd4\u8f83task\u662f\u5426\u5728group\u4e2d\nconst isTaskIncludedInBatch = (task & batchOfTasks) !== 0;",lang:"js"}),l.a.createElement("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4f2a\u4ee3\u7801, \u53ef\u4ee5\u770b\u5230",l.a.createElement("code",null,"Lanes"),"\u7684\u4f18\u8d8a\u6027, \u8fd0\u7528\u8d77\u6765\u4ee3\u7801\u91cf\u5c11, \u7b80\u6d01\u9ad8\u6548.")))),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"Lanes"),"\u662f\u4e00\u4e2a\u4e0d\u900f\u660e\u7684\u7c7b\u578b, \u53ea\u80fd\u5728",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js"},l.a.createElement("code",null,"ReactFiberLane.js")),"\u8fd9\u4e2a\u6a21\u5757\u4e2d\u7ef4\u62a4. \u5982\u679c\u8981\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u4f7f\u7528, \u53ea\u80fd\u901a\u8fc7",l.a.createElement("code",null,"ReactFiberLane.js"),"\u4e2d\u63d0\u4f9b\u7684\u5de5\u5177\u51fd\u6570\u6765\u4f7f\u7528."))),l.a.createElement("p",null,"\u5206\u6790\u8f66\u9053\u6a21\u578b\u7684\u6e90\u7801(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js"},l.a.createElement("code",null,"ReactFiberLane.js")),"\u4e2d), \u53ef\u4ee5\u5f97\u5230\u5982\u4e0b\u7ed3\u8bba:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u53ef\u4ee5\u4f7f\u7528\u7684\u6bd4\u7279\u4f4d\u4e00\u5171\u6709 31 \u4f4d(\u4e3a\u4ec0\u4e48? \u53ef\u4ee5\u53c2\u8003",l.a.createElement(r["Link"],{to:"../algorithm/bitfield"},"React \u7b97\u6cd5\u4e4b\u4f4d\u8fd0\u7b97"),"\u4e2d\u7684\u8bf4\u660e)."),l.a.createElement("li",null,"\u5171\u5b9a\u4e49\u4e86",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L74-L103"},"18 \u79cd\u8f66\u9053(",l.a.createElement("code",null,"Lane/Lanes"),")\u53d8\u91cf"),", \u6bcf\u4e00\u4e2a\u53d8\u91cf\u5360\u6709 1 \u4e2a\u6216\u591a\u4e2a\u6bd4\u7279\u4f4d, \u5206\u522b\u5b9a\u4e49\u4e3a",l.a.createElement("code",null,"Lane"),"\u548c",l.a.createElement("code",null,"Lanes"),"\u7c7b\u578b."),l.a.createElement("li",null,"\u6bcf\u4e00\u79cd\u8f66\u9053(",l.a.createElement("code",null,"Lane/Lanes"),")\u90fd\u6709\u5bf9\u5e94\u7684\u4f18\u5148\u7ea7, \u6240\u4ee5\u6e90\u7801\u4e2d\u5b9a\u4e49\u4e86 18 \u79cd\u4f18\u5148\u7ea7(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L12-L30"},"LanePriority"),")."),l.a.createElement("li",null,"\u5360\u6709\u4f4e\u4f4d\u6bd4\u7279\u4f4d\u7684",l.a.createElement("code",null,"Lane"),"\u53d8\u91cf\u5bf9\u5e94\u7684\u4f18\u5148\u7ea7\u8d8a\u9ad8",l.a.createElement("ul",null,l.a.createElement("li",null,"\u6700\u9ad8\u4f18\u5148\u7ea7\u4e3a",l.a.createElement("code",null,"SyncLanePriority"),"\u5bf9\u5e94\u7684\u8f66\u9053\u4e3a",l.a.createElement("code",null,"SyncLane = 0b0000000000000000000000000000001"),"."),l.a.createElement("li",null,"\u6700\u4f4e\u4f18\u5148\u7ea7\u4e3a",l.a.createElement("code",null,"OffscreenLanePriority"),"\u5bf9\u5e94\u7684\u8f66\u9053\u4e3a",l.a.createElement("code",null,"OffscreenLane = 0b1000000000000000000000000000000"),".")))),l.a.createElement("h2",{id:"\u4f18\u5148\u7ea7\u533a\u522b\u548c\u8054\u7cfb"},l.a.createElement(r["AnchorLink"],{to:"#\u4f18\u5148\u7ea7\u533a\u522b\u548c\u8054\u7cfb","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f18\u5148\u7ea7\u533a\u522b\u548c\u8054\u7cfb"),l.a.createElement("p",null,"\u5728\u6e90\u7801\u4e2d, 3 \u79cd\u4f18\u5148\u7ea7\u4f4d\u4e8e\u4e0d\u540c\u7684 js \u6587\u4ef6, \u662f\u76f8\u4e92\u72ec\u7acb\u7684."),l.a.createElement("p",null,"\u6ce8\u610f:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"LanePriority"),"\u548c",l.a.createElement("code",null,"SchedulerPriority"),"\u4ece\u547d\u540d\u4e0a\u770b, \u5b83\u4eec\u4ee3\u8868\u7684\u662f",l.a.createElement("code",null,"\u4f18\u5148\u7ea7")),l.a.createElement("li",null,l.a.createElement("code",null,"ReactPriorityLevel"),"\u4ece\u547d\u540d\u4e0a\u770b, \u5b83\u4ee3\u8868\u7684\u662f",l.a.createElement("code",null,"\u7b49\u7ea7"),"\u800c\u4e0d\u662f\u4f18\u5148\u7ea7, \u5b83\u7528\u4e8e\u8861\u91cf",l.a.createElement("code",null,"LanePriority"),"\u548c",l.a.createElement("code",null,"SchedulerPriority"),"\u7684\u7b49\u7ea7.")),l.a.createElement("h3",{id:"lanepriority"},l.a.createElement(r["AnchorLink"],{to:"#lanepriority","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"LanePriority"),l.a.createElement("p",null,l.a.createElement("code",null,"LanePriority"),": \u5c5e\u4e8e",l.a.createElement("code",null,"react-reconciler"),"\u5305, \u5b9a\u4e49\u4e8e",l.a.createElement("code",null,"ReactFiberLane.js"),"(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L46-L70"},"\u89c1\u6e90\u7801"),")."),l.a.createElement(c["a"],{code:"export const SyncLanePriority: LanePriority = 15;\nexport const SyncBatchedLanePriority: LanePriority = 14;\n\nconst InputDiscreteHydrationLanePriority: LanePriority = 13;\nexport const InputDiscreteLanePriority: LanePriority = 12;\n\n// .....\n\nconst OffscreenLanePriority: LanePriority = 1;\nexport const NoLanePriority: LanePriority = 0;",lang:"js"}),l.a.createElement("p",null,"\u4e0e",l.a.createElement("code",null,"fiber"),"\u6784\u9020\u8fc7\u7a0b\u76f8\u5173\u7684\u4f18\u5148\u7ea7(\u5982",l.a.createElement("code",null,"fiber.updateQueue"),",",l.a.createElement("code",null,"fiber.lanes"),")\u90fd\u4f7f\u7528",l.a.createElement("code",null,"LanePriority"),"."),l.a.createElement("p",null,"\u7531\u4e8e\u672c\u8282\u91cd\u70b9\u4ecb\u7ecd\u4f18\u5148\u7ea7\u4f53\u7cfb\u4ee5\u53ca\u5b83\u4eec\u7684\u8f6c\u6362\u5173\u7cfb, \u5173\u4e8e",l.a.createElement("code",null,"Lane(\u8f66\u9053\u6a21\u578b)"),"\u5728",l.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u65f6\u7684\u5177\u4f53\u4f7f\u7528, \u5728",l.a.createElement("code",null,"fiber \u6811\u6784\u9020"),"\u7ae0\u8282\u8be6\u7ec6\u89e3\u8bfb."),l.a.createElement("h3",{id:"schedulerpriority"},l.a.createElement(r["AnchorLink"],{to:"#schedulerpriority","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"SchedulerPriority"),l.a.createElement("p",null,l.a.createElement("code",null,"SchedulerPriority"),", \u5c5e\u4e8e",l.a.createElement("code",null,"scheduler"),"\u5305, \u5b9a\u4e49\u4e8e",l.a.createElement("code",null,"SchedulerPriorities.js"),"\u4e2d(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/SchedulerPriorities.js"},"\u89c1\u6e90\u7801"),")."),l.a.createElement(c["a"],{code:"export const NoPriority = 0;\nexport const ImmediatePriority = 1;\nexport const UserBlockingPriority = 2;\nexport const NormalPriority = 3;\nexport const LowPriority = 4;\nexport const IdlePriority = 5;",lang:"js"}),l.a.createElement("p",null,"\u4e0e",l.a.createElement("code",null,"scheduler"),"\u8c03\u5ea6\u4e2d\u5fc3\u76f8\u5173\u7684\u4f18\u5148\u7ea7\u4f7f\u7528",l.a.createElement("code",null,"SchedulerPriority"),"."),l.a.createElement("h3",{id:"reactprioritylevel"},l.a.createElement(r["AnchorLink"],{to:"#reactprioritylevel","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"ReactPriorityLevel"),l.a.createElement("p",null,l.a.createElement("code",null,"reactPriorityLevel"),", \u5c5e\u4e8e",l.a.createElement("code",null,"react-reconciler"),"\u5305, \u5b9a\u4e49\u4e8e",l.a.createElement("code",null,"SchedulerWithReactIntegration.js"),"\u4e2d(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/SchedulerWithReactIntegration.old.js#L65-L71"},"\u89c1\u6e90\u7801"),")."),l.a.createElement(c["a"],{code:"export const ImmediatePriority: ReactPriorityLevel = 99;\nexport const UserBlockingPriority: ReactPriorityLevel = 98;\nexport const NormalPriority: ReactPriorityLevel = 97;\nexport const LowPriority: ReactPriorityLevel = 96;\nexport const IdlePriority: ReactPriorityLevel = 95;\n// NoPriority is the absence of priority. Also React-only.\nexport const NoPriority: ReactPriorityLevel = 90;",lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"LanePriority"),"\u4e0e",l.a.createElement("code",null,"SchedulerPriority"),"\u901a\u8fc7",l.a.createElement("code",null,"ReactPriorityLevel"),"\u8fdb\u884c\u8f6c\u6362"),l.a.createElement("h3",{id:"\u8f6c\u6362\u5173\u7cfb"},l.a.createElement(r["AnchorLink"],{to:"#\u8f6c\u6362\u5173\u7cfb","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8f6c\u6362\u5173\u7cfb"),l.a.createElement("p",null,"\u4e3a\u4e86\u80fd\u534f\u540c\u8c03\u5ea6\u4e2d\u5fc3(",l.a.createElement("code",null,"scheduler"),"\u5305)\u548c fiber \u6811\u6784\u9020(",l.a.createElement("code",null,"react-reconciler"),"\u5305)\u4e2d\u5bf9\u4f18\u5148\u7ea7\u7684\u4f7f\u7528, \u5219\u9700\u8981\u8f6c\u6362",l.a.createElement("code",null,"SchedulerPriority"),"\u548c",l.a.createElement("code",null,"LanePriority"),", \u8f6c\u6362\u7684\u6865\u6881\u6b63\u662f",l.a.createElement("code",null,"ReactPriorityLevel"),"."),l.a.createElement("p",null,"\u5728",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/SchedulerWithReactIntegration.old.js#L93-L125"},l.a.createElement("code",null,"SchedulerWithReactIntegration.js"),"\u4e2d"),", \u53ef\u4ee5\u4e92\u8f6c",l.a.createElement("code",null,"SchedulerPriority")," \u548c ",l.a.createElement("code",null,"ReactPriorityLevel"),":"),l.a.createElement(c["a"],{code:"// \u628a SchedulerPriority \u8f6c\u6362\u6210 ReactPriorityLevel\nexport function getCurrentPriorityLevel(): ReactPriorityLevel {\n  switch (Scheduler_getCurrentPriorityLevel()) {\n    case Scheduler_ImmediatePriority:\n      return ImmediatePriority;\n    case Scheduler_UserBlockingPriority:\n      return UserBlockingPriority;\n    case Scheduler_NormalPriority:\n      return NormalPriority;\n    case Scheduler_LowPriority:\n      return LowPriority;\n    case Scheduler_IdlePriority:\n      return IdlePriority;\n    default:\n      invariant(false, 'Unknown priority level.');\n  }\n}\n\n// \u628a ReactPriorityLevel \u8f6c\u6362\u6210 SchedulerPriority\nfunction reactPriorityToSchedulerPriority(reactPriorityLevel) {\n  switch (reactPriorityLevel) {\n    case ImmediatePriority:\n      return Scheduler_ImmediatePriority;\n    case UserBlockingPriority:\n      return Scheduler_UserBlockingPriority;\n    case NormalPriority:\n      return Scheduler_NormalPriority;\n    case LowPriority:\n      return Scheduler_LowPriority;\n    case IdlePriority:\n      return Scheduler_IdlePriority;\n    default:\n      invariant(false, 'Unknown priority level.');\n  }\n}",lang:"js"}),l.a.createElement("p",null,"\u5728",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L196-L247"},l.a.createElement("code",null,"ReactFiberLane.js"),"\u4e2d"),", \u53ef\u4ee5\u4e92\u8f6c",l.a.createElement("code",null,"LanePriority")," \u548c ",l.a.createElement("code",null,"ReactPriorityLevel"),":"),l.a.createElement(c["a"],{code:"export function schedulerPriorityToLanePriority(\n  schedulerPriorityLevel: ReactPriorityLevel,\n): LanePriority {\n  switch (schedulerPriorityLevel) {\n    case ImmediateSchedulerPriority:\n      return SyncLanePriority;\n    // ... \u7701\u7565\u90e8\u5206\u4ee3\u7801\n    default:\n      return NoLanePriority;\n  }\n}\n\nexport function lanePriorityToSchedulerPriority(\n  lanePriority: LanePriority,\n): ReactPriorityLevel {\n  switch (lanePriority) {\n    case SyncLanePriority:\n    case SyncBatchedLanePriority:\n      return ImmediateSchedulerPriority;\n    // ... \u7701\u7565\u90e8\u5206\u4ee3\u7801\n    default:\n      invariant(\n        false,\n        'Invalid update priority: %s. This is a bug in React.',\n        lanePriority,\n      );\n  }\n}",lang:"js"}),l.a.createElement("h2",{id:"\u4f18\u5148\u7ea7\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f18\u5148\u7ea7\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f18\u5148\u7ea7\u4f7f\u7528"),l.a.createElement("p",null,"\u901a\u8fc7",l.a.createElement(r["Link"],{to:"./reconciler-workflow"},"reconciler \u8fd0\u4f5c\u6d41\u7a0b"),"\u4e2d\u7684\u5f52\u7eb3, ",l.a.createElement("code",null,"reconciler"),"\u4ece\u8f93\u5165\u5230\u8f93\u51fa\u4e00\u5171\u7ecf\u5386\u4e86 4 \u4e2a\u9636\u6bb5, \u5728\u6bcf\u4e2a\u9636\u6bb5\u4e2d\u90fd\u4f1a\u6d89\u53ca\u5230\u4e0e",l.a.createElement("code",null,"\u4f18\u5148\u7ea7"),"\u76f8\u5173\u7684\u5904\u7406. \u6b63\u662f\u901a\u8fc7",l.a.createElement("code",null,"\u4f18\u5148\u7ea7"),"\u7684\u7075\u6d3b\u8fd0\u7528, ",l.a.createElement("code",null,"React"),"\u5b9e\u73b0\u4e86",l.a.createElement("code",null,"\u53ef\u4e2d\u65ad\u6e32\u67d3"),",",l.a.createElement("code",null,"\u65f6\u95f4\u5207\u7247(time slicing)"),",",l.a.createElement("code",null,"\u5f02\u6b65\u6e32\u67d3(suspense)"),"\u7b49\u7279\u6027."),l.a.createElement("p",null,"\u5728\u7406\u89e3\u4e86\u4f18\u5148\u7ea7\u7684\u57fa\u672c\u601d\u8def\u4e4b\u540e, \u63a5\u4e0b\u6765\u5c31\u6b63\u5f0f\u8fdb\u5165 react \u6e90\u7801\u5206\u6790\u4e2d\u7684\u786c\u6838\u90e8\u5206(",l.a.createElement("code",null,"scheduler \u8c03\u5ea6\u539f\u7406"),"\u548c",l.a.createElement("code",null,"fiber\u6811\u6784\u9020"),")"),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(r["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86 react \u6e90\u7801\u4e2d\u6709\u5173\u4f18\u5148\u7ea7\u7684\u90e8\u5206, \u5e76\u68b3\u7406\u4e86 3 \u79cd\u4f18\u5148\u7ea7\u4e4b\u95f4\u7684\u533a\u522b\u548c\u8054\u7cfb. \u5b83\u4eec\u8d2f\u7a7f\u4e86",l.a.createElement(r["Link"],{to:"./reconciler-workflow"},"reconciler \u8fd0\u4f5c\u6d41\u7a0b"),"\u4e2d\u7684 4 \u4e2a\u9636\u6bb5, \u5728 react \u6e90\u7801\u4e2d\u6240\u5360\u7528\u7684\u4ee3\u7801\u91cf\u6bd4\u8f83\u9ad8, \u7406\u89e3\u5b83\u4eec\u7684\u8bbe\u8ba1\u601d\u8def, \u4e3a\u63a5\u4e0b\u6765\u5206\u6790",l.a.createElement("code",null,"\u8c03\u5ea6\u539f\u7406"),"\u548c",l.a.createElement("code",null,"fiber\u6784\u9020"),"\u6253\u4e0b\u57fa\u7840.")))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}},wOdG:function(e,t,n){e.exports=n.p+"static/reactfiberworkloop.59263ed5.png"}}]);