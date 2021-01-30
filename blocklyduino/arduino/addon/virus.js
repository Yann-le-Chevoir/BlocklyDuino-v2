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

Blockly.Arduino['virus_mp3_play_track'] = function (block) {
    var track = Blockly.Arduino.valueToCode(this, 'TRACK', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'mp3_player.playTrack(' + track + ');\n';
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

Blockly.Arduino['virus_i2c_master_init'] = function (block) {

    Blockly.Arduino.includes_['includes_virus'] = '#include <Virus.h>';
    Blockly.Arduino.definitions_['var_virus_i2c_master_init'] = 'I2C_master i2c_master;';
    Blockly.Arduino.setups_['setup_virus_i2c_master_init'] = 'i2c_master.init();';

    var code = '';
    return code;
};

Blockly.Arduino['virus_i2c_master_request_from'] = function (block) {
    var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'i2c_master.requestFrom(' + address + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_i2c_master_send_to'] = function (block) {
    var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'i2c_master.sendTo(' + address + ', ' + data + ');\n';
    return code;
};

Blockly.Arduino['virus_i2c_slave_init'] = function (block) {
    var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_['includes_virus'] = '#include <Virus.h>';
    Blockly.Arduino.definitions_['var_virus_i2c_slave_init'] = 'I2C_slave i2c_slave;';
    Blockly.Arduino.setups_['setup_virus_i2c_slave_init'] = 'i2c_slave.init(' + address + ');';

    var code = '';
    return code;
};

Blockly.Arduino['virus_i2c_slave_set_data'] = function (block) {
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'i2c_slave.setSendData(' + data + ');\n';
    return code;
};

Blockly.Arduino['virus_i2c_slave_get_data'] = function (block) {
    var code = 'i2c_slave.getReceivedData()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ev3_master_init'] = function (block) {

    Blockly.Arduino.includes_['includes_virus'] = '#include <Virus.h>';
    Blockly.Arduino.definitions_['var_virus_ev3_master_init'] = 'EV3_master ev3_master;';
    Blockly.Arduino.setups_['setup_serial_begin_9600'] = 'Serial.begin(9600);';

    var code = '';
    return code;
};

Blockly.Arduino['virus_ev3_master_set_motor_speed'] = function (block) {
    var motor = block.getFieldValue('MOTOR');
    var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'ev3_master.setMotorSpeed(' + motor + ', ' + speed + ');\n';
    return code;
};

Blockly.Arduino['virus_attiny85_init'] = function (block) {

    Blockly.Arduino.includes_['includes_virus'] = '#include <Virus.h>';
    Blockly.Arduino.definitions_['var_virus_attiny85_init'] = 'ATtiny85 attiny85;';
    Blockly.Arduino.setups_['setup_virus_attiny85_init'] = 'attiny85.init();';

    var code = '';
    return code;
};

Blockly.Arduino['virus_attiny85_button'] = function (block) {
    var code = 'attiny85.isButtonPushed()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_attiny85_set_colour'] = function (block) {
    var colour = block.getFieldValue('COLOUR');
    var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'attiny85.setColour(' + colour + ', ' + value + ');\n';
    return code;
};

Blockly.Arduino['virus_attiny85_set_output'] = function (block) {
    var output = block.getFieldValue('OUTPUT');
    var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'attiny85.setOutput(' + output + ', ' + value + ');\n';
    return code;
};