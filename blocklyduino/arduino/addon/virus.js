/**
 * @license
 * Copyright 2020 Yann le Chevoir
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Virus blocks for Blockly.
 * @author yann.ylc@orange.fr (Yann le Chevoir)
 */

'use strict';

goog.provide('Blockly.Arduino.virus');

goog.require('Blockly.Arduino');

Blockly.Arduino['virus_mp3_init'] = function (block) {
    var rxPin = block.getFieldValue('RX');
    var txPin = block.getFieldValue('TX');

    Blockly.Arduino.includes_['includes_virus'] = '#include <Virus.h>';
	Blockly.Arduino.definitions_['var_virus_mp3_init'] = 'MP3_player mp3_player;';
    Blockly.Arduino.setups_['setup_virus_mp3_init'] = 'mp3_player.init(' + rxPin + ', ' + txPin + ');';

    var code = '';
    return code;
};

Blockly.Arduino['virus_mp3_play_first'] = function (block) {
    var code = 'mp3_player.playFirst();\n';
    return code;
};

Blockly.Arduino['virus_mp3_play_next'] = function (block) {
    var code = 'mp3_player.playNext();\n';
    return code;
};

Blockly.Arduino['virus_mp3_play_prev'] = function (block) {
    var code = 'mp3_player.playPrevious();\n';
    return code;
};

Blockly.Arduino['virus_mp3_play'] = function (block) {
    var code = 'mp3_player.play();\n';
    return code;
};

Blockly.Arduino['virus_mp3_pause'] = function (block) {
    var code = 'mp3_player.pause();\n';
    return code;
};

Blockly.Arduino['virus_mp3_vol_inc'] = function (block) {
    var code = 'mp3_player.volumeINC();\n';
    return code;
};

Blockly.Arduino['virus_mp3_vol_dec'] = function (block) {
    var code = 'mp3_player.volumeDEC();\n';
    return code;
};

Blockly.Arduino['virus_mp3_is_playing'] = function (block) {
    var code = 'mp3_player.isPlaying()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};