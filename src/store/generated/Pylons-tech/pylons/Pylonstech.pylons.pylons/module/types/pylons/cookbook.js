/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "Pylonstech.pylons.pylons";
const baseCookbook = {
    creator: "",
    ID: "",
    nodeVersion: 0,
    name: "",
    description: "",
    developer: "",
    version: "",
    supportEmail: "",
    enabled: false,
};
export const Cookbook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== "") {
            writer.uint32(18).string(message.ID);
        }
        if (message.nodeVersion !== 0) {
            writer.uint32(24).uint64(message.nodeVersion);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.developer !== "") {
            writer.uint32(50).string(message.developer);
        }
        if (message.version !== "") {
            writer.uint32(58).string(message.version);
        }
        if (message.supportEmail !== "") {
            writer.uint32(66).string(message.supportEmail);
        }
        if (message.enabled === true) {
            writer.uint32(72).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                case 3:
                    message.nodeVersion = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.developer = reader.string();
                    break;
                case 7:
                    message.version = reader.string();
                    break;
                case 8:
                    message.supportEmail = reader.string();
                    break;
                case 9:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = "";
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = Number(object.nodeVersion);
        }
        else {
            message.nodeVersion = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = String(object.developer);
        }
        else {
            message.developer = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = String(object.supportEmail);
        }
        else {
            message.supportEmail = "";
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        message.nodeVersion !== undefined &&
            (obj.nodeVersion = message.nodeVersion);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.developer !== undefined && (obj.developer = message.developer);
        message.version !== undefined && (obj.version = message.version);
        message.supportEmail !== undefined &&
            (obj.supportEmail = message.supportEmail);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = "";
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = object.developer;
        }
        else {
            message.developer = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = object.supportEmail;
        }
        else {
            message.supportEmail = "";
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
