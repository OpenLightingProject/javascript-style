/*
 * This file is part of olp-javascript-style.
 *
 * olp-javascript-style is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * olp-javascript-style is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with olp-javascript-style.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @param {Configuration} conf
 */
module.exports = function (conf) {
    conf.registerPreset('OLP', require('./presets/common.json'));
};