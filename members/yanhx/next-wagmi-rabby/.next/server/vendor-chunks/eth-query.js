/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/eth-query";
exports.ids = ["vendor-chunks/eth-query"];
exports.modules = {

/***/ "(ssr)/./node_modules/eth-query/index.js":
/*!*****************************************!*\
  !*** ./node_modules/eth-query/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const extend = __webpack_require__(/*! xtend */ \"(ssr)/./node_modules/xtend/immutable.js\")\nconst createRandomId = __webpack_require__(/*! json-rpc-random-id */ \"(ssr)/./node_modules/json-rpc-random-id/index.js\")()\n\nmodule.exports = EthQuery\n\n\nfunction EthQuery(provider){\n  const self = this\n  self.currentProvider = provider\n}\n\n//\n// base queries\n//\n\n// default block\nEthQuery.prototype.getBalance =                          generateFnWithDefaultBlockFor(2, 'eth_getBalance')\nEthQuery.prototype.getCode =                             generateFnWithDefaultBlockFor(2, 'eth_getCode')\nEthQuery.prototype.getTransactionCount =                 generateFnWithDefaultBlockFor(2, 'eth_getTransactionCount')\nEthQuery.prototype.getStorageAt =                        generateFnWithDefaultBlockFor(3, 'eth_getStorageAt')\nEthQuery.prototype.call =                                generateFnWithDefaultBlockFor(2, 'eth_call')\n// standard\nEthQuery.prototype.protocolVersion =                     generateFnFor('eth_protocolVersion')\nEthQuery.prototype.syncing =                             generateFnFor('eth_syncing')\nEthQuery.prototype.coinbase =                            generateFnFor('eth_coinbase')\nEthQuery.prototype.mining =                              generateFnFor('eth_mining')\nEthQuery.prototype.hashrate =                            generateFnFor('eth_hashrate')\nEthQuery.prototype.gasPrice =                            generateFnFor('eth_gasPrice')\nEthQuery.prototype.accounts =                            generateFnFor('eth_accounts')\nEthQuery.prototype.blockNumber =                         generateFnFor('eth_blockNumber')\nEthQuery.prototype.getBlockTransactionCountByHash =      generateFnFor('eth_getBlockTransactionCountByHash')\nEthQuery.prototype.getBlockTransactionCountByNumber =    generateFnFor('eth_getBlockTransactionCountByNumber')\nEthQuery.prototype.getUncleCountByBlockHash =            generateFnFor('eth_getUncleCountByBlockHash')\nEthQuery.prototype.getUncleCountByBlockNumber =          generateFnFor('eth_getUncleCountByBlockNumber')\nEthQuery.prototype.sign =                                generateFnFor('eth_sign')\nEthQuery.prototype.sendTransaction =                     generateFnFor('eth_sendTransaction')\nEthQuery.prototype.sendRawTransaction =                  generateFnFor('eth_sendRawTransaction')\nEthQuery.prototype.estimateGas =                         generateFnFor('eth_estimateGas')\nEthQuery.prototype.getBlockByHash =                      generateFnFor('eth_getBlockByHash')\nEthQuery.prototype.getBlockByNumber =                    generateFnFor('eth_getBlockByNumber')\nEthQuery.prototype.getTransactionByHash =                generateFnFor('eth_getTransactionByHash')\nEthQuery.prototype.getTransactionByBlockHashAndIndex =   generateFnFor('eth_getTransactionByBlockHashAndIndex')\nEthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor('eth_getTransactionByBlockNumberAndIndex')\nEthQuery.prototype.getTransactionReceipt =               generateFnFor('eth_getTransactionReceipt')\nEthQuery.prototype.getUncleByBlockHashAndIndex =         generateFnFor('eth_getUncleByBlockHashAndIndex')\nEthQuery.prototype.getUncleByBlockNumberAndIndex =       generateFnFor('eth_getUncleByBlockNumberAndIndex')\nEthQuery.prototype.getCompilers =                        generateFnFor('eth_getCompilers')\nEthQuery.prototype.compileLLL =                          generateFnFor('eth_compileLLL')\nEthQuery.prototype.compileSolidity =                     generateFnFor('eth_compileSolidity')\nEthQuery.prototype.compileSerpent =                      generateFnFor('eth_compileSerpent')\nEthQuery.prototype.newFilter =                           generateFnFor('eth_newFilter')\nEthQuery.prototype.newBlockFilter =                      generateFnFor('eth_newBlockFilter')\nEthQuery.prototype.newPendingTransactionFilter =         generateFnFor('eth_newPendingTransactionFilter')\nEthQuery.prototype.uninstallFilter =                     generateFnFor('eth_uninstallFilter')\nEthQuery.prototype.getFilterChanges =                    generateFnFor('eth_getFilterChanges')\nEthQuery.prototype.getFilterLogs =                       generateFnFor('eth_getFilterLogs')\nEthQuery.prototype.getLogs =                             generateFnFor('eth_getLogs')\nEthQuery.prototype.getWork =                             generateFnFor('eth_getWork')\nEthQuery.prototype.submitWork =                          generateFnFor('eth_submitWork')\nEthQuery.prototype.submitHashrate =                      generateFnFor('eth_submitHashrate')\n\n// network level\n\nEthQuery.prototype.sendAsync = function(opts, cb){\n  const self = this\n  self.currentProvider.sendAsync(createPayload(opts), function(err, response){\n    if (!err && response.error) err = new Error('EthQuery - RPC Error - '+response.error.message)\n    if (err) return cb(err)\n    cb(null, response.result)\n  })\n}\n\n// util\n\nfunction generateFnFor(methodName){\n  return function(){\n    const self = this\n    var args = [].slice.call(arguments)\n    var cb = args.pop()\n    self.sendAsync({\n      method: methodName,\n      params: args,\n    }, cb)\n  }\n}\n\nfunction generateFnWithDefaultBlockFor(argCount, methodName){\n  return function(){\n    const self = this\n    var args = [].slice.call(arguments)\n    var cb = args.pop()\n    // set optional default block param\n    if (args.length < argCount) args.push('latest')\n    self.sendAsync({\n      method: methodName,\n      params: args,\n    }, cb)\n  }\n}\n\nfunction createPayload(data){\n  return extend({\n    // defaults\n    id: createRandomId(),\n    jsonrpc: '2.0',\n    params: [],\n    // user-specified\n  }, data)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoLXF1ZXJ5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxzREFBTztBQUM5Qix1QkFBdUIsbUJBQU8sQ0FBQyw0RUFBb0I7O0FBRW5EOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2FnbWkvLi9ub2RlX21vZHVsZXMvZXRoLXF1ZXJ5L2luZGV4LmpzPzNhYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxuY29uc3QgY3JlYXRlUmFuZG9tSWQgPSByZXF1aXJlKCdqc29uLXJwYy1yYW5kb20taWQnKSgpXG5cbm1vZHVsZS5leHBvcnRzID0gRXRoUXVlcnlcblxuXG5mdW5jdGlvbiBFdGhRdWVyeShwcm92aWRlcil7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHNlbGYuY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJcbn1cblxuLy9cbi8vIGJhc2UgcXVlcmllc1xuLy9cblxuLy8gZGVmYXVsdCBibG9ja1xuRXRoUXVlcnkucHJvdG90eXBlLmdldEJhbGFuY2UgPSAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbldpdGhEZWZhdWx0QmxvY2tGb3IoMiwgJ2V0aF9nZXRCYWxhbmNlJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRDb2RlID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5XaXRoRGVmYXVsdEJsb2NrRm9yKDIsICdldGhfZ2V0Q29kZScpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25Db3VudCA9ICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuV2l0aERlZmF1bHRCbG9ja0ZvcigyLCAnZXRoX2dldFRyYW5zYWN0aW9uQ291bnQnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldFN0b3JhZ2VBdCA9ICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbldpdGhEZWZhdWx0QmxvY2tGb3IoMywgJ2V0aF9nZXRTdG9yYWdlQXQnKVxuRXRoUXVlcnkucHJvdG90eXBlLmNhbGwgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbldpdGhEZWZhdWx0QmxvY2tGb3IoMiwgJ2V0aF9jYWxsJylcbi8vIHN0YW5kYXJkXG5FdGhRdWVyeS5wcm90b3R5cGUucHJvdG9jb2xWZXJzaW9uID0gICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfcHJvdG9jb2xWZXJzaW9uJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5zeW5jaW5nID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9zeW5jaW5nJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5jb2luYmFzZSA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9jb2luYmFzZScpXG5FdGhRdWVyeS5wcm90b3R5cGUubWluaW5nID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfbWluaW5nJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5oYXNocmF0ZSA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9oYXNocmF0ZScpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2FzUHJpY2UgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2FzUHJpY2UnKVxuRXRoUXVlcnkucHJvdG90eXBlLmFjY291bnRzID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2FjY291bnRzJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5ibG9ja051bWJlciA9ICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9ibG9ja051bWJlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0QmxvY2tUcmFuc2FjdGlvbkNvdW50QnlIYXNoID0gICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0QmxvY2tUcmFuc2FjdGlvbkNvdW50QnlIYXNoJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRCbG9ja1RyYW5zYWN0aW9uQ291bnRCeU51bWJlciA9ICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRCbG9ja1RyYW5zYWN0aW9uQ291bnRCeU51bWJlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VW5jbGVDb3VudEJ5QmxvY2tIYXNoID0gICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0VW5jbGVDb3VudEJ5QmxvY2tIYXNoJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRVbmNsZUNvdW50QnlCbG9ja051bWJlciA9ICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRVbmNsZUNvdW50QnlCbG9ja051bWJlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUuc2lnbiA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfc2lnbicpXG5FdGhRdWVyeS5wcm90b3R5cGUuc2VuZFRyYW5zYWN0aW9uID0gICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfc2VuZFRyYW5zYWN0aW9uJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5zZW5kUmF3VHJhbnNhY3Rpb24gPSAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9zZW5kUmF3VHJhbnNhY3Rpb24nKVxuRXRoUXVlcnkucHJvdG90eXBlLmVzdGltYXRlR2FzID0gICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2VzdGltYXRlR2FzJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRCbG9ja0J5SGFzaCA9ICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRCbG9ja0J5SGFzaCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0QmxvY2tCeU51bWJlciA9ICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0QmxvY2tCeU51bWJlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25CeUhhc2ggPSAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0VHJhbnNhY3Rpb25CeUhhc2gnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldFRyYW5zYWN0aW9uQnlCbG9ja0hhc2hBbmRJbmRleCA9ICAgZ2VuZXJhdGVGbkZvcignZXRoX2dldFRyYW5zYWN0aW9uQnlCbG9ja0hhc2hBbmRJbmRleCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25CeUJsb2NrTnVtYmVyQW5kSW5kZXggPSBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0VHJhbnNhY3Rpb25CeUJsb2NrTnVtYmVyQW5kSW5kZXgnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldFRyYW5zYWN0aW9uUmVjZWlwdCA9ICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2dldFRyYW5zYWN0aW9uUmVjZWlwdCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VW5jbGVCeUJsb2NrSGFzaEFuZEluZGV4ID0gICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0VW5jbGVCeUJsb2NrSGFzaEFuZEluZGV4JylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRVbmNsZUJ5QmxvY2tOdW1iZXJBbmRJbmRleCA9ICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRVbmNsZUJ5QmxvY2tOdW1iZXJBbmRJbmRleCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0Q29tcGlsZXJzID0gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0Q29tcGlsZXJzJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5jb21waWxlTExMID0gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9jb21waWxlTExMJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5jb21waWxlU29saWRpdHkgPSAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9jb21waWxlU29saWRpdHknKVxuRXRoUXVlcnkucHJvdG90eXBlLmNvbXBpbGVTZXJwZW50ID0gICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2NvbXBpbGVTZXJwZW50JylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5uZXdGaWx0ZXIgPSAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9uZXdGaWx0ZXInKVxuRXRoUXVlcnkucHJvdG90eXBlLm5ld0Jsb2NrRmlsdGVyID0gICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX25ld0Jsb2NrRmlsdGVyJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5uZXdQZW5kaW5nVHJhbnNhY3Rpb25GaWx0ZXIgPSAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9uZXdQZW5kaW5nVHJhbnNhY3Rpb25GaWx0ZXInKVxuRXRoUXVlcnkucHJvdG90eXBlLnVuaW5zdGFsbEZpbHRlciA9ICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX3VuaW5zdGFsbEZpbHRlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0RmlsdGVyQ2hhbmdlcyA9ICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0RmlsdGVyQ2hhbmdlcycpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0RmlsdGVyTG9ncyA9ICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0RmlsdGVyTG9ncycpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0TG9ncyA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0TG9ncycpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0V29yayA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0V29yaycpXG5FdGhRdWVyeS5wcm90b3R5cGUuc3VibWl0V29yayA9ICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfc3VibWl0V29yaycpXG5FdGhRdWVyeS5wcm90b3R5cGUuc3VibWl0SGFzaHJhdGUgPSAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfc3VibWl0SGFzaHJhdGUnKVxuXG4vLyBuZXR3b3JrIGxldmVsXG5cbkV0aFF1ZXJ5LnByb3RvdHlwZS5zZW5kQXN5bmMgPSBmdW5jdGlvbihvcHRzLCBjYil7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHNlbGYuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYyhjcmVhdGVQYXlsb2FkKG9wdHMpLCBmdW5jdGlvbihlcnIsIHJlc3BvbnNlKXtcbiAgICBpZiAoIWVyciAmJiByZXNwb25zZS5lcnJvcikgZXJyID0gbmV3IEVycm9yKCdFdGhRdWVyeSAtIFJQQyBFcnJvciAtICcrcmVzcG9uc2UuZXJyb3IubWVzc2FnZSlcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGNiKG51bGwsIHJlc3BvbnNlLnJlc3VsdClcbiAgfSlcbn1cblxuLy8gdXRpbFxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZuRm9yKG1ldGhvZE5hbWUpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgdmFyIGNiID0gYXJncy5wb3AoKVxuICAgIHNlbGYuc2VuZEFzeW5jKHtcbiAgICAgIG1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgIHBhcmFtczogYXJncyxcbiAgICB9LCBjYilcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZuV2l0aERlZmF1bHRCbG9ja0ZvcihhcmdDb3VudCwgbWV0aG9kTmFtZSl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICB2YXIgY2IgPSBhcmdzLnBvcCgpXG4gICAgLy8gc2V0IG9wdGlvbmFsIGRlZmF1bHQgYmxvY2sgcGFyYW1cbiAgICBpZiAoYXJncy5sZW5ndGggPCBhcmdDb3VudCkgYXJncy5wdXNoKCdsYXRlc3QnKVxuICAgIHNlbGYuc2VuZEFzeW5jKHtcbiAgICAgIG1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgIHBhcmFtczogYXJncyxcbiAgICB9LCBjYilcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXlsb2FkKGRhdGEpe1xuICByZXR1cm4gZXh0ZW5kKHtcbiAgICAvLyBkZWZhdWx0c1xuICAgIGlkOiBjcmVhdGVSYW5kb21JZCgpLFxuICAgIGpzb25ycGM6ICcyLjAnLFxuICAgIHBhcmFtczogW10sXG4gICAgLy8gdXNlci1zcGVjaWZpZWRcbiAgfSwgZGF0YSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/eth-query/index.js\n");

/***/ })

};
;