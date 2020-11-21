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