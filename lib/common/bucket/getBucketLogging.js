"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBucketLogging = void 0;
const checkBucketName_1 = require("../utils/checkBucketName");
async function getBucketLogging(name, options = {}) {
    checkBucketName_1.checkBucketName(name);
    const params = this._bucketRequestParams('GET', name, 'logging', options);
    params.successStatuses = [200];
    params.xmlResponse = true;
    const result = await this.request(params);
    const enable = result.data.LoggingEnabled;
    return {
        enable: !!enable,
        prefix: (enable && enable.TargetPrefix) || null,
        res: result.res
    };
}
exports.getBucketLogging = getBucketLogging;