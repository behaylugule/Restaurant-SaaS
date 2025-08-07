(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(client)/[restaurantId]/chat/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ChatRoomPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ChatRoomPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const roomId = params.restaurantId;
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //   const accessToken = localStorage.getItem("access");
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatRoomPage.useEffect": ()=>{
            console.log(roomId);
            if (!roomId) return;
            console.log(roomId);
            const accessToken = localStorage.getItem("access");
            socketRef.current = new WebSocket("ws://localhost:8000/ws/chat/".concat(roomId, "/?token=").concat(accessToken));
            console.log(socketRef.current);
            socketRef.current.onmessage = ({
                "ChatRoomPage.useEffect": (event)=>{
                    const data = JSON.parse(event.data);
                    setMessages({
                        "ChatRoomPage.useEffect": (prev)=>[
                                ...prev,
                                data
                            ]
                    }["ChatRoomPage.useEffect"]);
                }
            })["ChatRoomPage.useEffect"];
            return ({
                "ChatRoomPage.useEffect": ()=>{
                    if (socketRef.current) {
                        socketRef.current.close();
                    }
                }
            })["ChatRoomPage.useEffect"];
        }
    }["ChatRoomPage.useEffect"], []);
    const sendMessage = ()=>{
        console.log(socketRef.current);
        if (!socketRef.current) return;
        if (input.trim() && socketRef.current.readyState == WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({
                text: input
            }));
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "You",
                        text: input
                    }
                ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Chat with Restaurant"
            }, void 0, false, {
                fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-96 overflow-y-scroll border p-4 rounded bg-gray-100 mb-4",
                children: messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: msg.sender === "You" ? "text-right" : "text-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block px-3 py-2 rounded bg-white shadow mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: msg.sender
                                }, void 0, false, {
                                    fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                msg.text
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "flex-1 border p-2 rounded",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: (e)=>e.key === "Enter" && sendMessage()
                    }, void 0, false, {
                        fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-blue-500 text-white px-4 rounded",
                        onClick: sendMessage,
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(client)/[restaurantId]/chat/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ChatRoomPage, "bgO787wd3yKNlTOCU3Tm972sROE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ChatRoomPage;
var _c;
__turbopack_context__.k.register(_c, "ChatRoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_%28client%29_%5BrestaurantId%5D_chat_page_tsx_83efbce1._.js.map