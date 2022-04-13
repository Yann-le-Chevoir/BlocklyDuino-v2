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

goog.provide('Blockly.Constants.virus');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['virus_mp3_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_INIT)
                .appendField(Blockly.Msg.VIRUS_MP3_INIT2)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "RX")
                .appendField(Blockly.Msg.VIRUS_MP3_INIT3)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "TX");
        this.setTooltip(Blockly.Msg.VIRUS_MP3_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_INIT_HELPURL);
        this.setStyle('mp3_blocks');
    }
};

Blockly.Blocks['virus_mp3_play_first'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_PLAY_FIRST)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_PLAY_FIRST_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_PLAY_FIRST_HELPURL);
        this.setStyle('mp3_start_blocks');
    }
};

Blockly.Blocks['virus_mp3_play_next'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_PLAY_NEXT)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_PLAY_NEXT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_PLAY_NEXT_HELPURL);
        this.setStyle('mp3_start_blocks');
    }
};

Blockly.Blocks['virus_mp3_play_prev'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_PLAY_PREV)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_PLAY_PREV_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_PLAY_PREV_HELPURL);
        this.setStyle('mp3_start_blocks');
    }
};

Blockly.Blocks['virus_mp3_play_track'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_PLAY_TRACK)
        this.appendValueInput("TRACK", 'Number')
                .appendField(Blockly.Msg.VIRUS_MP3_PLAY_TRACK2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_PLAY_TRACK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_PLAY_TRACK_HELPURL);
        this.setStyle('mp3_start_blocks');
    }
};

Blockly.Blocks['virus_mp3_play'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_PLAY)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_PLAY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_PLAY_HELPURL);
        this.setStyle('mp3_play_pause_blocks');
    }
};

Blockly.Blocks['virus_mp3_pause'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_PAUSE)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_PAUSE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_PAUSE_HELPURL);
        this.setStyle('mp3_play_pause_blocks');
    }
};

Blockly.Blocks['virus_mp3_vol_inc'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_VOL_INC)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_VOL_INC_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_VOL_INC_HELPURL);
        this.setStyle('mp3_sound_blocks');
    }
};

Blockly.Blocks['virus_mp3_vol_dec'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_VOL_DEC)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_MP3_VOL_DEC_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_VOL_DEC_HELPURL);
        this.setStyle('mp3_sound_blocks');
    }
};

Blockly.Blocks['virus_mp3_is_playing'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_IS_PLAYING);
		this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.VIRUS_MP3_VOL_DEC_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_VOL_DEC_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_i2c_master_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_I2C_MASTER_INIT);
        this.setTooltip(Blockly.Msg.VIRUS_I2C_MASTER_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_I2C_MASTER_INIT_HELPURL);
        this.setStyle('i2c_master_blocks');
    }
};

Blockly.Blocks['virus_i2c_master_request_from'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM);
        this.appendValueInput("ADDRESS", 'Number')
                .appendField(Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setOutput(true, intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_i2c_master_send_to'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO);
        this.appendValueInput("DATA", 'Number')
                .appendField(Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO2)
                .setCheck(intCompatibility);
        this.appendValueInput("ADDRESS", 'Number')
                .appendField(Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO3)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_i2c_slave_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_I2C_SLAVE_INIT);
        this.appendValueInput("ADDRESS", 'Number')
                .appendField(Blockly.Msg.VIRUS_I2C_SLAVE_INIT2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.VIRUS_I2C_SLAVE_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_I2C_SLAVE_INIT_HELPURL);
        this.setStyle('i2c_slave_blocks');
    }
};

Blockly.Blocks['virus_i2c_slave_set_data'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA);
        this.appendValueInput("DATA", 'Number')
                .appendField(Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_i2c_slave_get_data'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_I2C_SLAVE_GET_DATA);
        this.setOutput(true, intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_I2C_SLAVE_GET_DATA_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_I2C_SLAVE_GET_DATA_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_ev3_master_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_EV3_MASTER_INIT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.VIRUS_EV3_MASTER_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_EV3_MASTER_INIT_HELPURL);
        this.setStyle('ev3_master_blocks');
    }
};

Blockly.Blocks['virus_ev3_master_set_motor_speed'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_EV3_MASTER_SET_MOTOR_SPEED)
                .appendField(new Blockly.FieldDropdown([["A", "1"], ["B", "2"], ["C", "3"], ["D", "4"]]), "MOTOR");
        this.appendValueInput("SPEED", 'Number')
                .appendField(Blockly.Msg.VIRUS_EV3_MASTER_SET_MOTOR_SPEED2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_EV3_MASTER_SET_MOTOR_SPEED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_EV3_MASTER_SET_MOTOR_SPEED_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_attiny85_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_ATTINY85_INIT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.VIRUS_ATTINY85_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_ATTINY85_INIT_HELPURL);
        this.setStyle('attiny85_blocks');
    }
};

Blockly.Blocks['virus_attiny85_button'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_ATTINY85_BUTTON);
		this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.VIRUS_ATTINY85_BUTTON_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_ATTINY85_BUTTON_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_attiny85_set_colour'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_ATTINY85_SET_COLOUR)
                .appendField(new Blockly.FieldDropdown([["ROUGE", "0"], ["VERT", "1"], ["BLEU", "2"]]), "COLOUR");
        this.appendValueInput("VALUE", 'Number')
                .appendField(Blockly.Msg.VIRUS_ATTINY85_SET_COLOUR2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_ATTINY85_SET_COLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_ATTINY85_SET_COLOUR_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_attiny85_set_output'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_ATTINY85_SET_OUTPUT)
                .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"]]), "OUTPUT");
        this.appendValueInput("VALUE", 'Number')
                .appendField(Blockly.Msg.VIRUS_ATTINY85_SET_OUTPUT2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_ATTINY85_SET_OUTPUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_ATTINY85_SET_OUTPUT_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_ultrason_capteur_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_INIT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "NUM")
                .appendField(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_INIT2)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "ECHO")
                .appendField(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_INIT3)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "TRIGGER");
        this.setTooltip(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_INIT_HELPURL);
        this.setStyle('ultrason_capteur_blocks');
    }
};

Blockly.Blocks['virus_ultrason_capteur_get_distance'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_GET_DISTANCE)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "NUM");
        this.setOutput(true, intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_GET_DISTANCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_ULTRASON_CAPTEUR_GET_DISTANCE_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_INIT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "LED_PIN");
        this.appendValueInput("NUM_LEDS", 'Number')
                .appendField(Blockly.Msg.VIRUS_WS2812B_INIT2)
                .setCheck(intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_INIT_HELPURL);
        this.setStyle('ws2812b_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_set_colour'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR);
        this.appendValueInput("NUM", 'Number')
                .setCheck(intCompatibility);
        this.appendValueInput("R", 'Number')
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR2)
                .setCheck(intCompatibility);
        this.appendValueInput("G", 'Number')
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR3)
                .setCheck(intCompatibility);
        this.appendValueInput("B", 'Number')
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR4)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_HELPURL);
        this.setStyle('output_blocks');
    }
};