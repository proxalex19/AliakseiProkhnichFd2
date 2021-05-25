"use strict";

function HashStorage(key, value) {
    var self = this;

    self.hashStorage = {};

    self.addValue = function (key, value) {
        self.hashStorage[key] = value;
    }

    self.getValue = function (key) {
        if (key in self.hashStorage) {
            return self.hashStorage[key];
        } else {
            return undefined;
        }
    }

    self.deleteValue = function (key) {
        if (key in self.hashStorage) {
            delete self.hashStorage[key];
            return true;
        } else {
            return false;
        }
    }

    self.getKeys = function () {
        var keys = [];
        for (var key in self.hashStorage) {
            keys.push(key);
        }

        return keys;
    }

}