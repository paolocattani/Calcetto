"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsPairs = exports.StatsPlayer = exports.User = exports.Tournament = exports.Stage2 = exports.Stage1 = exports.Reservation = exports.Player = exports.Pair = void 0;
var pair_model_1 = require("./pair.model");
Object.defineProperty(exports, "Pair", { enumerable: true, get: function () { return __importDefault(pair_model_1).default; } });
var player_model_1 = require("./player.model");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return __importDefault(player_model_1).default; } });
var reservation_model_1 = require("./reservation.model");
Object.defineProperty(exports, "Reservation", { enumerable: true, get: function () { return __importDefault(reservation_model_1).default; } });
var stage1_model_1 = require("./stage1.model");
Object.defineProperty(exports, "Stage1", { enumerable: true, get: function () { return __importDefault(stage1_model_1).default; } });
var stage2_model_1 = require("./stage2.model");
Object.defineProperty(exports, "Stage2", { enumerable: true, get: function () { return __importDefault(stage2_model_1).default; } });
var tournament_model_1 = require("./tournament.model");
Object.defineProperty(exports, "Tournament", { enumerable: true, get: function () { return __importDefault(tournament_model_1).default; } });
var user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(user_model_1).default; } });
var stats_players_model_1 = require("./stats/stats.players.model");
Object.defineProperty(exports, "StatsPlayer", { enumerable: true, get: function () { return __importDefault(stats_players_model_1).default; } });
var stats_pairs_model_1 = require("./stats/stats.pairs.model");
Object.defineProperty(exports, "StatsPairs", { enumerable: true, get: function () { return __importDefault(stats_pairs_model_1).default; } });