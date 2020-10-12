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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
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
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['virus_mp3_is_playing'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MP3_IS_PLAYING);
		this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.VIRUS_MP3_VOL_DEC_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MP3_VOL_DEC_HELPURL);
        this.setStyle('arduino_blocks');
    }
};