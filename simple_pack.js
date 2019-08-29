(function (modules) {
    function myRequire(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, myRequire);
        // call 用于让  modules[moduleId] 函数执行 执行的是传入后面的参数
        return module.exports;
    }
    return myRequire(0);
})
    ([
        (function (module, exports) {
            console.log('123')
        })
    ]);