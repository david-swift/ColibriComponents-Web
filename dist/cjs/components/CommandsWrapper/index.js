"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noModifiersShortcut = exports.commandsGroup = exports.command = exports.keyboardShortcut = exports.CommandsWrapper = void 0;
var CommandsWrapper_1 = require("./CommandsWrapper");
Object.defineProperty(exports, "CommandsWrapper", { enumerable: true, get: function () { return __importDefault(CommandsWrapper_1).default; } });
var CommandsWrapper_types_1 = require("./CommandsWrapper.types");
Object.defineProperty(exports, "keyboardShortcut", { enumerable: true, get: function () { return CommandsWrapper_types_1.keyboardShortcut; } });
Object.defineProperty(exports, "command", { enumerable: true, get: function () { return CommandsWrapper_types_1.command; } });
Object.defineProperty(exports, "commandsGroup", { enumerable: true, get: function () { return CommandsWrapper_types_1.commandsGroup; } });
Object.defineProperty(exports, "noModifiersShortcut", { enumerable: true, get: function () { return CommandsWrapper_types_1.noModifiersShortcut; } });
//# sourceMappingURL=index.js.map