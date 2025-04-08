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

    Blockly.Arduino.includes_['includes_fast_led'] = 'extern "C" {\n'
    + '  volatile unsigned long timer0_millis = 0;\n'
    + '};\n'
    + '#include <FastLED.h>';
    Blockly.Arduino.definitions_['var_virus_ws2812b_led_pin'] = '#define LED_PIN ' + ledPin;
    Blockly.Arduino.definitions_['var_virus_ws2812b_num_leds'] = '#define NUM_LEDS ' + numLeds;
    Blockly.Arduino.definitions_['var_virus_ws2812b_init'] = 'CRGB leds[NUM_LEDS];';
    Blockly.Arduino.definitions_['var_virus_ws2812b_init_palette'] = 'CRGBPalette16 prevPalette = RainbowColors_p;\n'
    + 'CRGBPalette16 currentPalette;\n'
    + 'TBlendType    currentBlending = LINEARBLEND;\n'
    + 'uint8_t brightness = 255;\n'
    + 'bool is_allume = false;\n'
    + 'uint8_t updates_per_second = 100;\n'
    + 'static uint8_t startIndex = 0;\n'
    + 'unsigned long ledCurrentTime, ledPrevTime = 0;';
    Blockly.Arduino.codeFunctions_['functions_ws2812b_palette'] = 'void allumer()\n'
    + '{\n'
    + '  currentPalette = prevPalette;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void eteindre()\n'
    + '{\n'
    + '  prevPalette = currentPalette;\n'
    + '  led_fill_solid(CRGB::Black);\n'
    + '  is_allume = false;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void setBrightness(uint8_t value)\n'
    + '{\n'
    + '  brightness = value;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_fill_solid(CRGB color)\n'
    + '{\n'
    + '  fill_solid(currentPalette, 16, color);\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_fill_solid(uint8_t ir, uint8_t ig, uint8_t ib)\n'
    + '{\n'
    + '  led_fill_solid(CRGB(ir, ig, ib));\n'
    + '}\n'
    + 'void led_palette2(uint8_t ir, uint8_t ig, uint8_t ib, uint8_t ir2, uint8_t ig2, uint8_t ib2)\n'
    + '{\n'
    + '  currentPalette = CRGBPalette16(CRGB(ir, ig, ib), CRGB(ir2, ig2, ib2));\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_palette3(uint8_t ir, uint8_t ig, uint8_t ib, uint8_t ir2, uint8_t ig2, uint8_t ib2, uint8_t ir3, uint8_t ig3, uint8_t ib3)\n'
    + '{\n'
    + '  currentPalette = CRGBPalette16(CRGB(ir, ig, ib), CRGB(ir2, ig2, ib2), CRGB(ir3, ig3, ib3));\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_palette4(uint8_t ir, uint8_t ig, uint8_t ib, uint8_t ir2, uint8_t ig2, uint8_t ib2, uint8_t ir3, uint8_t ig3, uint8_t ib3, uint8_t ir4, uint8_t ig4, uint8_t ib4)\n'
    + '{\n'
    + '  currentPalette = CRGBPalette16(CRGB(ir, ig, ib), CRGB(ir2, ig2, ib2), CRGB(ir3, ig3, ib3), CRGB(ir4, ig4, ib4));\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n\n'
    + 'void led_rainbow()\n'
    + '{\n'
    + '  currentPalette = RainbowColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_rainbow2()\n'
    + '{\n'
    + '  currentPalette = RainbowStripeColors_p;\n'
    + '  currentBlending = NOBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_rainbow3()\n'
    + '{\n'
    + '  currentPalette = RainbowStripeColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_ocean()\n'
    + '{\n'
    + '  currentPalette = OceanColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_nuages()\n'
    + '{\n'
    + '  currentPalette = CloudColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_lave()\n'
    + '{\n'
    + '  currentPalette = LavaColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_foret()\n'
    + '{\n'
    + '  currentPalette = ForestColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void led_party()\n'
    + '{\n'
    + '  currentPalette = PartyColors_p;\n'
    + '  currentBlending = LINEARBLEND;\n'
    + '  is_allume = true;\n'
    + '  ledPrevTime = 0; //Force à rafraichir vite\n'
    + '}\n'
    + 'void FillLEDsFromPaletteColors(uint8_t colorIndex)\n'
    + '{\n'
    + '  for (uint8_t i = 0; i < NUM_LEDS; ++i)\n'
    + '  {\n'
    + '    leds[i] = ColorFromPalette(currentPalette, colorIndex, brightness, currentBlending);\n'
    + '    colorIndex += 3;\n'
    + '  }\n'
    + '}';
    Blockly.Arduino.setups_['setup_virus_attiny85_init'] = 'FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS)\n    .setCorrection(TypicalLEDStrip)\n    .setDither(true);\n';

    var code = 'ledCurrentTime = millis();\n'
    + 'if (ledCurrentTime > ledPrevTime + (1000 / updates_per_second))\n'
    + '{\n'
    + '  startIndex = startIndex + 1; /* motion speed */\n'
    + '  FillLEDsFromPaletteColors(startIndex);\n'
    + '  FastLED.show();\n'
    + '  ledPrevTime = ledCurrentTime;\n'
    + '}\n'
    + 'delay(4);\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_allumer'] = function (block) {
    var code = 'allumer();\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_is_allume'] = function (block) {
    var code = 'is_allume';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ws2812b_eteindre'] = function (block) {
    var code = 'eteindre();\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_intensity'] = function (block) {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'FastLED.setBrightness(255*' + num + ');\nFastLED.show();\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_get_brightness'] = function (block) {
    var code = 'brightness';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ws2812b_set_brightness'] = function (block) {
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'setBrightness(' + data + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_brightness2'] = function (block) {
    var data = block.getFieldValue('DATA');
    var code = 'setBrightness(' + data + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_get_frequence'] = function (block) {
    var code = 'updates_per_second';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ws2812b_set_frequence'] = function (block) {
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'updates_per_second = ' + data + ';\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_frequence2'] = function (block) {
    var data = block.getFieldValue('DATA');
    var code = 'updates_per_second = ' + data + ';\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour'] = function (block) {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var r = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var g = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);
    var b = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC);
    //No FastLED.show() and so setIntensity() is required
    var code = 'leds[' + num + '-1] = CRGB(' + r + ', ' + g + ', ' + b + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour2'] = function (block) {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var r = block.getFieldValue('R');
    var g = block.getFieldValue('G');
    var b = block.getFieldValue('B');
    //No FastLED.show() and so setIntensity() is required
    var code = 'leds[' + num + '-1] = CRGB(' + r + ', ' + g + ', ' + b + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour_palette'] = function (block) {
    var r = block.getFieldValue('R');
    var g = block.getFieldValue('G');
    var b = block.getFieldValue('B');
    var code = 'led_fill_solid(' + r + ', ' + g + ', ' + b + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour_palette2'] = function (block) {
    var col1 = Blockly.Arduino.valueToCode(this, 'COL1', Blockly.Arduino.ORDER_ATOMIC);
    var col2 = Blockly.Arduino.valueToCode(this, 'COL2', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'led_palette2(' + col1 + ', ' + col2 + ');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour_palette3'] = function (block) {
    var col1 = Blockly.Arduino.valueToCode(this, 'COL1', Blockly.Arduino.ORDER_ATOMIC);
    var col2 = Blockly.Arduino.valueToCode(this, 'COL2', Blockly.Arduino.ORDER_ATOMIC);
    var col3 = Blockly.Arduino.valueToCode(this, 'COL3', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'led_palette3(' + col1 + ', ' + col2 + ', ' + col3 +');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_set_colour_palette4'] = function (block) {
    var col1 = Blockly.Arduino.valueToCode(this, 'COL1', Blockly.Arduino.ORDER_ATOMIC);
    var col2 = Blockly.Arduino.valueToCode(this, 'COL2', Blockly.Arduino.ORDER_ATOMIC);
    var col3 = Blockly.Arduino.valueToCode(this, 'COL3', Blockly.Arduino.ORDER_ATOMIC);
    var col4 = Blockly.Arduino.valueToCode(this, 'COL4', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'led_palette4(' + col1 + ', ' + col2 + ', ' + col3 + ', ' + col4 +');\n';
    return code;
};

Blockly.Arduino['virus_ws2812b_rgb_colour'] = function (block) {
    var r = block.getFieldValue('R');
    var g = block.getFieldValue('G');
    var b = block.getFieldValue('B');
    var code = r + ', ' + g + ', ' + b;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ws2812b_set_palette_rainbow'] = function (block) {
    var code = 'led_rainbow();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_rainbow2'] = function (block) {
    var code = 'led_rainbow2();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_rainbow3'] = function (block) {
    var code = 'led_rainbow3();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_ocean'] = function (block) {
    var code = 'led_ocean();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_nuages'] = function (block) {
    var code = 'led_nuages();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_lave'] = function (block) {
    var code = 'led_lave();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_foret'] = function (block) {
    var code = 'led_foret();\n';
    return code;
};
Blockly.Arduino['virus_ws2812b_set_palette_party'] = function (block) {
    var code = 'led_party();\n';
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

Blockly.Arduino['virus_math_dropdown_int'] = function (block) {
    var data = block.getFieldValue('DATA');
    var code = data;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_logic_compare'] = function (block) {
    var argument0 = Blockly.Arduino.valueToCode(this, 'A', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var argument1 = block.getFieldValue('B');
    var code = argument0 + ' == ' + argument1;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ir_init'] = function (block) {
    var irPin = block.getFieldValue('IR_PIN');

    // Garder les mêmes noms que dans virus_ir_on_button FieldDropdown BUTTON
    // Tous les initialiser vides ici pour que ça compile
    // Atention, le bloc virus_ir_init doit être crée plus haut que les blocs virus_ir_on_button
    Blockly.Arduino.codeFunctions_['function_do_on_zero'] = 'void do_on_zero() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_un'] = 'void do_on_un() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_deux'] = 'void do_on_deux() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_trois'] = 'void do_on_trois() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_quatre'] = 'void do_on_quatre() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_cinq'] = 'void do_on_cinq() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_six'] = 'void do_on_six() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_sept'] = 'void do_on_sept() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_huit'] = 'void do_on_huit() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_neuf'] = 'void do_on_neuf() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_etoile'] = 'void do_on_etoile() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_diese'] = 'void do_on_diese() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_ok'] = 'void do_on_ok() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_gauche'] = 'void do_on_gauche() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_droite'] = 'void do_on_droite() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_haut'] = 'void do_on_haut() {}';
    Blockly.Arduino.codeFunctions_['function_do_on_bas'] = 'void do_on_bas() {}';

    Blockly.Arduino.includes_['includes_tiny_ir_receiver'] = '#define IR_RECEIVE_PIN ' + irPin + '\n#define NO_LED_FEEDBACK_CODE\n#include "TinyIRReceiver.hpp"';

    //                                                                             0     1     2     3     4     5     6     7    8     9    *     #    haut  ga   dr    bas   ok
    Blockly.Arduino.definitions_['var_virus_ir_value'] = 'const uint8_t value[] = {0x19, 0x45, 0x46, 0x47, 0x44, 0x40, 0x43, 0x7, 0x15, 0x9, 0x16, 0xD, 0x18, 0x8, 0x5A, 0x52, 0x1C};\n'
    + '#define ETOILE 10\n'
    + '#define DIESE 11\n'
    + '#define HAUT 12\n'
    + '#define GAUCHE 13\n'
    + '#define DROITE 14\n'
    + '#define BAS 15\n'
    + '#define OK 16\n'
    + 'volatile uint8_t data;\n'
    + 'volatile bool newData = false;\n'
    + 'volatile unsigned long irCurrentTime, irPrevTime = 0;\n'
    + 'uint8_t cpt = 0;\n';
    Blockly.Arduino.setups_['setup_virus_ir_init'] = 'initPCIInterruptForTinyReceiver();\n';

    Blockly.Arduino.codeFunctions_['function_ir_receive_data'] = '\nvoid handleReceivedTinyIRData(uint8_t aAddress, uint8_t aCommand, uint8_t aFlags)\n'
    + '{\n'
    + '  irCurrentTime = millis();\n'
    + '  if (newData || (aFlags == IRDATA_FLAGS_IS_REPEAT && (irCurrentTime - irPrevTime) < 500))\n'
    + '  {\n'
    + '    return;\n'
    + '  }\n'
    + '  for (cpt = 0; cpt < sizeof(value)/sizeof(uint8_t); cpt++)\n'
    + '  {\n'
    + '    if (value[cpt] == aCommand)\n'
    + '    {\n'
    + '      data = cpt;\n'
    + '      newData = true;\n'
    + '      irPrevTime = irCurrentTime;\n'
    + '      return;\n'
    + '    }\n'
    + '  }\n'
    + '};';

    var code = 'if (newData)\n'
    + '{\n'
    + '  switch (data)\n'
    + '  {\n'
    + '    case 0:\n'
    + '      do_on_zero();\n'
    + '      break;\n'
    + '    case 1:\n'
    + '      do_on_un();\n'
    + '      break;\n'
    + '    case 2:\n'
    + '      do_on_deux();\n'
    + '      break;\n'
    + '    case 3:\n'
    + '      do_on_trois();\n'
    + '      break;\n'
    + '    case 4:\n'
    + '      do_on_quatre();\n'
    + '      break;\n'
    + '    case 5:\n'
    + '      do_on_cinq();\n'
    + '      break;\n'
    + '    case 6:\n'
    + '      do_on_six();\n'
    + '      break;\n'
    + '    case 7:\n'
    + '      do_on_sept();\n'
    + '      break;\n'
    + '    case 8:\n'
    + '      do_on_huit();\n'
    + '      break;\n'
    + '    case 9:\n'
    + '      do_on_neuf();\n'
    + '      break;\n'
    + '    case ETOILE:\n'
    + '      do_on_etoile();\n'
    + '      break;\n'
    + '    case DIESE:\n'
    + '      do_on_diese();\n'
    + '      break;\n'
    + '    case HAUT:\n'
    + '      do_on_haut();\n'
    + '      break;\n'
    + '    case GAUCHE:\n'
    + '      do_on_gauche();\n'
    + '      break;\n'
    + '    case DROITE:\n'
    + '      do_on_droite();\n'
    + '      break;\n'
    + '    case BAS:\n'
    + '      do_on_bas();\n'
    + '      break;\n'
    + '    case OK:\n'
    + '      do_on_ok();\n'
    + '      break;\n'
    + '    default:\n'
    + '      break;\n'
    + '  }\n'
    + '  newData = false;\n'
    + '}\n';
    return code;
};

Blockly.Arduino['virus_ir_on_button'] = function (block) {
    var button = block.getFieldValue('BUTTON');
    var branch = Blockly.Arduino.statementToCode(block, 'DO');
    Blockly.Arduino.codeFunctions_['function_do_on_' + button] = 'void do_on_'+ button + '() {\n'
        + branch
        +'\n}';
    var code = '';
    return code;
};

Blockly.Arduino['virus_capteur_son_init'] = function (block) {
    var capteurSonPin = block.getFieldValue('CAPTEUR_SON_PIN');
    var nb = Blockly.Arduino.valueToCode(this, 'NB', Blockly.Arduino.ORDER_ATOMIC);
    var min = Blockly.Arduino.valueToCode(this, 'MIN', Blockly.Arduino.ORDER_ATOMIC);
    var max = Blockly.Arduino.valueToCode(this, 'MAX', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.codeFunctions_['function_do_on_capteur'] = 'void do_on_capteur() {}';

    Blockly.Arduino.definitions_['var_virus_capteur_son'] = '#define CAPTEUR_PIN ' + capteurSonPin
                                                          + '\nvolatile bool capteur = false;'
                                                          + '\nvolatile unsigned long capteurCurrentTime, capteurPrevTime = 0;'
                                                          + '\nvolatile uint8_t capteurSonCompteur = 0;'
                                                          + '\n#define NUMBER_COUP_CAPTEUR_SON ' + nb
                                                          + '\n#define MIN_TIME_COUP_CAPTEUR_SON ' + min
                                                          + '\n#define MAX_TIME_COUP_CAPTEUR_SON ' + max;
    Blockly.Arduino.setups_['setup_virus_capteur_son_init'] = 'sei();     //enabling global interrupt\n'
    + '  GIMSK |= (1<<INT0);     // enabling the INT0 (external interrupt)\n'
    + '  MCUCR |= (1<<ISC01);    // Configuring as falling edge\n'
    + '  pinMode(CAPTEUR_PIN, INPUT) ;\n';

    Blockly.Arduino.codeFunctions_['function_capteur_son_isr'] = '\nISR (INT0_vect)\n'
    + '{\n'
    + '  capteurCurrentTime = millis();\n'
    + '  if (capteurCurrentTime - capteurPrevTime < MIN_TIME_COUP_CAPTEUR_SON)\n'
    + '  {\n'
    + '    return;\n'
    + '  }\n'
    + '  if ((capteurSonCompteur > 0) && (capteurCurrentTime - capteurPrevTime > MAX_TIME_COUP_CAPTEUR_SON))\n'
    + '  {\n'
    + '    capteurSonCompteur = 0;\n'
    + '  }\n'
    + '  if (++capteurSonCompteur >= NUMBER_COUP_CAPTEUR_SON)\n'
    + '  {\n'
    + '    capteurSonCompteur = 0;\n'
    + '    capteur = true;\n'
    + '  }\n'
    + '  capteurPrevTime = capteurCurrentTime;\n'
    + '}\n';

    var code = 'if (capteur)\n'
    + '{\n'
    + '  do_on_capteur();\n'
    + '  capteur = false;\n'
    + '}\n';
    return code;
};

Blockly.Arduino['virus_capteur_son_on_capteur'] = function (block) {
    var branch = Blockly.Arduino.statementToCode(block, 'DO');
    Blockly.Arduino.codeFunctions_['function_do_on_capteur'] = 'void do_on_capteur() {\n'
        + branch
        +'\n}';
    var code = '';
    return code;
};


Blockly.Arduino['ouvre_pince_command'] = function (block) {
    var init = Blockly.Arduino.statementToCode(block, 'init')
    var execute = Blockly.Arduino.statementToCode(block, 'periodic')
    var is_finished = Blockly.Arduino.statementToCode(block, 'is finished')
    var end = Blockly.Arduino.statementToCode(block, 'end')
    Blockly.Arduino.definitions_["ouvre_pince_command"] = 'package ev3.robot.commands;import edu.wpi.first.wpilibj2.command.Command;import ev3.robot.subsystems.PinceSubsystem;\npublic class OpenPinceCommand() extends Command {\nprivate final PinceSubsystem mPinceSubsystem;\npublic OpenPinceCommand(PinceSubsystem pinceSubsystem) {\nmPinceSubsystem = pinceSubsystem;\naddRequirements(pinceSubsystem);\n}\n@Override\npublic void initialize() {\n' + init + '\n}\n@Override\npublic void execute() {\n' + execute + '}\n@Override\npublic void end(boolean interrupted) {\n' + is_finished + '\n}\n@Override\npublic boolean isFinished() {\n' + end +'\n}\n}\n';
    var code = '';
    //var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};

Blockly.Arduino['ferme_pince_command'] = function (block) {
    var init = Blockly.Arduino.statementToCode(block, 'init')
    var execute = Blockly.Arduino.statementToCode(block, 'periodic')
    var is_finished = Blockly.Arduino.statementToCode(block, 'is finished')
    var end = Blockly.Arduino.statementToCode(block, 'end')
    Blockly.Arduino.definitions_["ferme_pince_command"] = 'package ev3.robot.commands;import edu.wpi.first.wpilibj2.command.Command;import ev3.robot.subsystems.PinceSubsystem;\npublic class ClosePinceCommand() extends Command {\nprivate final PinceSubsystem mPinceSubsystem;\npublic ClosePinceCommand(PinceSubsystem pinceSubsystem) {\nmPinceSubsystem = pinceSubsystem;\naddRequirements(pinceSubsystem);\n}\n@Override\npublic void initialize() {\n' + init + '\n}\n@Override\npublic void execute() {\n' + execute + '}\n@Override\npublic void end(boolean interrupted) {\n' + is_finished + '\n}\n@Override\npublic boolean isFinished() {\n' + end +'\n}\n}\n';
    var code = '';
    //var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};

Blockly.Arduino['LowerBrasCommand'] = function (block) {
    var init = Blockly.Arduino.statementToCode(block, 'init')
    var execute = Blockly.Arduino.statementToCode(block, 'periodic')
    var is_finished = Blockly.Arduino.statementToCode(block, 'is finished')
    var end = Blockly.Arduino.statementToCode(block, 'end')
    Blockly.Arduino.definitions_["LowerBrasCommand"] = 'package ev3.robot.commands;import edu.wpi.first.wpilibj2.command.Command;import ev3.robot.subsystems.BrasSubsystem;\npublic class LowerBrasCommand() extends Command {\nprivate final BrasSubsystem mBrasSubsystem;\npublic ClosePinceCommand(BrasSubsystem mBrasSubsystem) {\nmBrasSubsystem = brasSubsystem;\naddRequirements(brasSubsystem);\n}\n@Override\npublic void initialize() {\n' + init + '\n}\n@Override\npublic void execute() {\n' + execute + '}\n@Override\npublic void end(boolean interrupted) {\n' + is_finished + '\n}\n@Override\npublic boolean isFinished() {\n' + end +'\n}\n}\n';
    var code = '';
    //var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};

Blockly.Arduino['LiftBrasCommand'] = function (block) {
    var init = Blockly.Arduino.statementToCode(block, 'init')
    var execute = Blockly.Arduino.statementToCode(block, 'periodic')
    var is_finished = Blockly.Arduino.statementToCode(block, 'is finished')
    var end = Blockly.Arduino.statementToCode(block, 'end')
    Blockly.Arduino.definitions_["LiftBrasCommand"] = 'package ev3.robot.commands;import edu.wpi.first.wpilibj2.command.Command;import ev3.robot.subsystems.BrasSubsystem;\npublic class LiftBrasCommand() extends Command {\nprivate final BrasSubsystem mBrasSubsystem;\npublic ClosePinceCommand(BrasSubsystem mBrasSubsystem) {\nmBrasSubsystem = brasSubsystem;\naddRequirements(brasSubsystem);\n}\n@Override\npublic void initialize() {\n' + init + '\n}\n@Override\npublic void execute() {\n' + execute + '}\n@Override\npublic void end(boolean interrupted) {\n' + is_finished + '\n}\n@Override\npublic boolean isFinished() {\n' + end +'\n}\n}\n';
    var code = '';
    //var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};


/*
Blockly.Arduino['dragons_robotcontainer_on_true'] = function (block) {
    var code = 'test();\n';
    return code;
};
*/
Blockly.Arduino['dragons_buttonbiding_fonction'] = function (block) {
    //var fonctions = Blockly.Arduino.valueToCode(this, "Fonctions", Blockly.Arduino.ORDER_ATOMIC)
    var fonctions = Blockly.Arduino.statementToCode(block, 'Fonctions');
    Blockly.Arduino.definitions_["buttonbiding_fonction"] = 'private void configureButtonBindings() {\n' + fonctions + '}';
    var code = '';
    //var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};

Blockly.Arduino['configureDefaultCommand'] = function (block) {
    //var fonctions = Blockly.Arduino.valueToCode(this, "Fonctions", Blockly.Arduino.ORDER_ATOMIC)
    var commandes = Blockly.Arduino.statementToCode(block, 'Commandes');
    Blockly.Arduino.definitions_["defaultCommand"] = 'private void configureDefaultCommand() {\n' + commandes + '}';
    var code = '';
    //var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};

Blockly.Arduino['defaultCommand'] = function (block) {
    var subsystem = Blockly.Arduino.valueToCode(this, 'SUBSYSTEM', Blockly.Arduino.ORDER_ATOMIC);
    var command = Blockly.Arduino.valueToCode(this, 'COMMAND', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'm' + subsystem + '.setDefaultCommand(m' + command + ');\n'
    return code;
};

Blockly.Arduino['getAutonomousCommand'] = function (block) {
    var command = Blockly.Arduino.valueToCode(this, 'AUTONOMOUSCOMMAND', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["autonomous command"] = 'public Command getAutonomousCommand() {\nreturn m' + command + ';\n}';
    var code = '';
    return code;
};


Blockly.Arduino['dragons_buttonbiding_on_true'] = function (block) {
    var button = block.getFieldValue('BUTTONBIDING');
    var command = Blockly.Arduino.valueToCode(this, 'COMMAND', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.onTrue(' + command + ');\n';
    return code;
};

Blockly.Arduino['dragons_buttonbiding_while_true'] = function (block) {
    var button = block.getFieldValue('BUTTONBIDING');
    var command = Blockly.Arduino.valueToCode(this, 'COMMAND', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'JoystickButton ' + button + ' = new JoystickButton(mXboxController, Button.' + button + '.value);\n' + button + '.whileTrue(' + command + ');\n';
    return code;
};


Blockly.Arduino['Ouvre_Pince'] = function (block) {
    var code = 'OpenPinceCommand';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Ferme_Pince'] = function (block) {
    var code = 'ClosePinceCommand';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Lower_Bras'] = function (block) {
    var code = 'LowerBrasCommand';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Lift_Bras'] = function (block) {
    var code = 'LiftBrasCommand';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};





/*Blockly.Arduino['virus_ws2812b_get_frequence'] = function (block) {
    var code = 'updates_per_second';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['virus_ws2812b_set_frequence'] = function (block) {
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'updates_per_second = ' + data + ';\n';
    return code;
};*/