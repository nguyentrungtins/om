"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            type: \"credentials\",\n            credentials: {},\n            authorize (credentials, req) {\n                const { email, password } = credentials;\n                // perform you login logic\n                // find out user from db\n                if (email !== \"admin\" || password !== \"123456\") {\n                    throw new Error(\"invalid credentials\");\n                }\n                // if everything is fine\n                return {\n                    id: \"1234\",\n                    name: \"John Doe\",\n                    email: \"john@gmail.com\",\n                    role: \"admin\"\n                };\n            }\n        })\n    ],\n    callbacks: {\n        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role\n        async jwt ({ token, user }) {\n            if (user) token.role = user.role;\n            return token;\n        },\n        // If you want to use the role in client components\n        async session ({ session, token }) {\n            if (session?.user) session.user.role = token.role;\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNVO0FBQzNELE1BQU1HLGNBQWM7SUFDekJDLFdBQVc7UUFDVEgsaUVBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO1FBQ0FSLHNFQUFtQkEsQ0FBQztZQUNsQlMsTUFBTTtZQUNOQyxhQUFhLENBQUM7WUFDZEMsV0FBVUQsV0FBVyxFQUFFRSxHQUFHO2dCQUN4QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO2dCQUk1QiwwQkFBMEI7Z0JBQzFCLHdCQUF3QjtnQkFDeEIsSUFBSUcsVUFBVSxXQUFXQyxhQUFhLFVBQVU7b0JBQzlDLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBRUEsd0JBQXdCO2dCQUN4QixPQUFPO29CQUNMQyxJQUFJO29CQUNKQyxNQUFNO29CQUNOSixPQUFPO29CQUNQSyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxzRkFBc0Y7UUFDdEYsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNRCxNQUFNSCxJQUFJLEdBQUdJLEtBQUtKLElBQUk7WUFDaEMsT0FBT0c7UUFDVDtRQUNBLG1EQUFtRDtRQUNuRCxNQUFNRSxTQUFRLEVBQUVBLE9BQU8sRUFBRUYsS0FBSyxFQUFFO1lBQzlCLElBQUlFLFNBQVNELE1BQU1DLFFBQVFELElBQUksQ0FBQ0osSUFBSSxHQUFHRyxNQUFNSCxJQUFJO1lBQ2pELE9BQU9LO1FBQ1Q7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxRQUFRdEIsUUFBUUMsR0FBRyxDQUFDc0IsZUFBZTtBQUNyQyxFQUFFO0FBQ0YsaUVBQWU3QixnREFBUUEsQ0FBQ0csWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbHZpYS1raXQtZGFzaGJvYXJkLXYzLW5leHRqcy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgdHlwZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHt9LFxuICAgICAgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzIGFzIHtcbiAgICAgICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHBlcmZvcm0geW91IGxvZ2luIGxvZ2ljXG4gICAgICAgIC8vIGZpbmQgb3V0IHVzZXIgZnJvbSBkYlxuICAgICAgICBpZiAoZW1haWwgIT09IFwiYWRtaW5cIiB8fCBwYXNzd29yZCAhPT0gXCIxMjM0NTZcIikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY3JlZGVudGlhbHNcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBldmVyeXRoaW5nIGlzIGZpbmVcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogXCIxMjM0XCIsXG4gICAgICAgICAgbmFtZTogXCJKb2huIERvZVwiLFxuICAgICAgICAgIGVtYWlsOiBcImpvaG5AZ21haWwuY29tXCIsXG4gICAgICAgICAgcm9sZTogXCJhZG1pblwiLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgLy8gUmVmOiBodHRwczovL2F1dGhqcy5kZXYvZ3VpZGVzL2Jhc2ljcy9yb2xlLWJhc2VkLWFjY2Vzcy1jb250cm9sI3BlcnNpc3RpbmctdGhlLXJvbGVcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIC8vIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgcm9sZSBpbiBjbGllbnQgY29tcG9uZW50c1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbj8udXNlcikgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsIC8vTmVlZCB0byBkZWZpbmUgY3VzdG9tIGxvZ2luIHBhZ2UgKGlmIHVzaW5nKVxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn07XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInR5cGUiLCJjcmVkZW50aWFscyIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJFcnJvciIsImlkIiwibmFtZSIsInJvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();