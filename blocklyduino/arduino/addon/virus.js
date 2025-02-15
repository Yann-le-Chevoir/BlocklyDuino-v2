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

Blockly.Arduino['virus_ultrason_capteur_init'] = function (block) {
    var num = block.getFieldValue('NUM');
    var echoPin = block.getFieldValue('ECHO');
    var triggerPin = block.getFieldValue('TRIGGER');

    Blockly.Arduino.includes_['includes_virus'] = '#include <Virus.h>';
    Blockly.Arduino.definitions_['var_virus_ultrason_capteur_init'] = 'Ultrason_capteur ultrason_capteurs[' + (Number(num)+1).toString() + '];';
    Blockly.Arduino.setups_['setup_virus_ultrason_capteur_init_' + num] = 'ultrason_capteurs[' + num + '].init(' + echoPin + ', ' + triggerPin + ');';

    var code = '';
    return code;
};

Blockly.Arduino['virus_ultrason_capteur_get_distance'] = function (block) {
    var num = block.getFieldValue('NUM');
    var code = 'ultrason_capteurs[' + num + '].getDistance()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ws2812b_init'] = function (block) {
    var ledPin = block.getFieldValue('LED_PIN');
    var numLeds = Blockly.Arduino.valueToCode(this, 'NUM_LEDS', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_['includes_fast_led'] = '#include <FastLED.h>';
    Blockly.Arduino.definitions_['var_virus_ws2812b_led_pin'] = '#define LED_PIN ' + ledPin;
    Blockly.Arduino.definitions_['var_virus_ws2812b_num_leds'] = '#define NUM_LEDS ' + numLeds;
    Blockly.Arduino.definitions_['var_virus_ws2812b_init'] = 'CRGB leds[NUM_LEDS];';
    Blockly.Arduino.setups_['setup_virus_attiny85_init'] = 'FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS)\n    .setCorrection(TypicalLEDStrip)\n    .setDither(true);\n';

    var code = '';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_intensity'] = function (block) {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'FastLED.setBrightness(255*' + num + ');\nFastLED.show();\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour'] = function (block) {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var r = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var g = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);
    var b = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC);
    //var code = 'leds[' + num + '-1] = CRGB(' + r + '*intensity, ' + g + '*intensity, ' + b + '*intensity);\nFastLED.show();\n';
    //No FastLED.show() and so setIntensity() is required
    var code = 'leds[' + num + '-1] = CRGB(' + r + ', ' + g + ', ' + b + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_demo_mode'] = function (block) {
	var code = 'static uint16_t sPseudotime = 0;\nstatic uint16_t sLastMillis = 0;\nstatic uint16_t sHue16 = 0;\nuint8_t sat8 = beatsin88( 87, 220, 250);\nuint8_t brightdepth = beatsin88(341, 96, 224);\nuint16_t brightnessthetainc16 = beatsin88(203, (25 * 256), (40 * 256));\nuint8_t msmultiplier = beatsin88(147, 23, 60);\nuint16_t hue16 = sHue16;\nuint16_t hueinc16 = beatsin88(113, 1, 3000);\nuint16_t ms = millis();\nuint16_t deltams = ms - sLastMillis ;\nsLastMillis  = ms;\nsPseudotime += deltams * msmultiplier;\nsHue16 += deltams * beatsin88( 400, 5,9);\nuint16_t brightnesstheta16 = sPseudotime;\nfor(uint16_t i = 0 ; i < NUM_LEDS; i++) {\nhue16 += hueinc16;\nuint8_t hue8 = hue16 / 256;\nbrightnesstheta16  += brightnessthetainc16;\nuint16_t b16 = sin16( brightnesstheta16  ) + 32768;\nuint16_t bri16 = (uint32_t)((uint32_t)b16 * (uint32_t)b16) / 65536;\nuint8_t bri8 = (uint32_t)(((uint32_t)bri16) * brightdepth) / 65536;\nbri8 += (255 - brightdepth);\nCRGB newcolor = CHSV( hue8, sat8, bri8);\nuint16_t pixelnumber = i;\npixelnumber = (NUM_LEDS-1) - pixelnumber;\nnblend( leds[pixelnumber], newcolor, 64);\n}';
    return code;
};

Blockly.Arduino['virus_math_random_int'] = function (block) {
    var from = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ATOMIC);
    var to = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'random(' + from + ', ' + to + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};