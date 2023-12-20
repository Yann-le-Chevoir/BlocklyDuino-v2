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

Blockly.Blocks['virus_ws2812b_allumer'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_ALLUMER)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_ALLUMER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_ALLUMER_HELPURL);
        this.setStyle('ws2812b_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_is_allume'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_IS_ALLUME);
        this.setOutput(true, booleanCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_IS_ALLUME_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_IS_ALLUME_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_eteindre'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_ETEINDRE)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_ETEINDRE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_ETEINDRE_HELPURL);
        this.setStyle('ws2812b_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_set_intensity'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_INTENSITY);
        this.appendValueInput("NUM", 'Number')
                .setCheck(intCompatibility);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_SET_INTENSITY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_SET_INTENSITY_HELPURL);
        this.setStyle('output_blocks');
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

Blockly.Blocks['virus_ws2812b_set_colour2'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR);
        this.appendValueInput("NUM", 'Number')
                .setCheck(intCompatibility);
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR2)
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "R");
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR3)
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "G");
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR4)
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "B");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_set_colour_palette'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_PALETTE);
        this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "R");
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_PALETTE2)
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "G");
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_PALETTE3)
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "B");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_PALETTE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_SET_COLOUR_PALETTE_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_demo_mode'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_DEMO_MODE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_DEMO_MODE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_DEMO_MODE_HELPURL);
        this.setStyle('ws2812b_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_get_brightness'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_GET_BRIGHTNESS);
        this.setOutput(true, intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_GET_BRIGHTNESS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_GET_BRIGHTNESS_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_set_brightness'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_BRIGHTNESS);
        this.appendValueInput("DATA", 'Number')
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_SET_BRIGHTNESS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_SET_BRIGHTNESS_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_get_frequence'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_GET_FREQUENCE);
        this.setOutput(true, intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_GET_FREQUENCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_GET_FREQUENCE_HELPURL);
        this.setStyle('input_blocks');
    }
};

Blockly.Blocks['virus_ws2812b_set_frequence'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_WS2812B_SET_FREQUENCE);
        this.appendValueInput("DATA", 'Number')
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VIRUS_WS2812B_SET_FREQUENCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_WS2812B_SET_FREQUENCE_HELPURL);
        this.setStyle('output_blocks');
    }
};

Blockly.Blocks['virus_math_random_int'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_MATH_RANDOM_INT);
        this.appendValueInput("FROM", 'Number')
                .setCheck(intCompatibility);
        this.appendValueInput("TO", 'Number')
                .appendField(Blockly.Msg.VIRUS_MATH_RANDOM_INT2)
                .setCheck(intCompatibility);
        this.setOutput(true, intCompatibility);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.VIRUS_MATH_RANDOM_INT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_MATH_RANDOM_INT_HELPURL);
        this.setStyle('math_blocks');
    }
};

Blockly.Blocks['virus_logic_compare'] = {
    init: function () {
        this.appendValueInput("A", 'Number')
                .setCheck(intCompatibility);
        this.appendDummyInput()
                .appendField("==")
                .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"], ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], ["56","56"], ["57","57"], ["58","58"], ["59","59"], ["60","60"], ["61","61"], ["62","62"], ["63","63"], ["64","64"], ["65","65"], ["66","66"], ["67","67"], ["68","68"], ["69","69"], ["70","70"], ["71","71"], ["72","72"], ["73","73"], ["74","74"], ["75","75"], ["76","76"], ["77","77"], ["78","78"], ["79","79"], ["80","80"], ["81","81"], ["82","82"], ["83","83"], ["84","84"], ["85","85"], ["86","86"], ["87","87"], ["88","88"], ["89","89"], ["90","90"], ["91","91"], ["92","92"], ["93","93"], ["94","94"], ["95","95"], ["96","96"], ["97","97"], ["98","98"], ["99","99"], ["100","100"], ["101","101"], ["102","102"], ["103","103"], ["104","104"], ["105","105"], ["106","106"], ["107","107"], ["108","108"], ["109","109"], ["110","110"], ["111","111"], ["112","112"], ["113","113"], ["114","114"], ["115","115"], ["116","116"], ["117","117"], ["118","118"], ["119","119"], ["120","120"], ["121","121"], ["122","122"], ["123","123"], ["124","124"], ["125","125"], ["126","126"], ["127","127"], ["128","128"], ["129","129"], ["130","130"], ["131","131"], ["132","132"], ["133","133"], ["134","134"], ["135","135"], ["136","136"], ["137","137"], ["138","138"], ["139","139"], ["140","140"], ["141","141"], ["142","142"], ["143","143"], ["144","144"], ["145","145"], ["146","146"], ["147","147"], ["148","148"], ["149","149"], ["150","150"], ["151","151"], ["152","152"], ["153","153"], ["154","154"], ["155","155"], ["156","156"], ["157","157"], ["158","158"], ["159","159"], ["160","160"], ["161","161"], ["162","162"], ["163","163"], ["164","164"], ["165","165"], ["166","166"], ["167","167"], ["168","168"], ["169","169"], ["170","170"], ["171","171"], ["172","172"], ["173","173"], ["174","174"], ["175","175"], ["176","176"], ["177","177"], ["178","178"], ["179","179"], ["180","180"], ["181","181"], ["182","182"], ["183","183"], ["184","184"], ["185","185"], ["186","186"], ["187","187"], ["188","188"], ["189","189"], ["190","190"], ["191","191"], ["192","192"], ["193","193"], ["194","194"], ["195","195"], ["196","196"], ["197","197"], ["198","198"], ["199","199"], ["200","200"], ["201","201"], ["202","202"], ["203","203"], ["204","204"], ["205","205"], ["206","206"], ["207","207"], ["208","208"], ["209","209"], ["210","210"], ["211","211"], ["212","212"], ["213","213"], ["214","214"], ["215","215"], ["216","216"], ["217","217"], ["218","218"], ["219","219"], ["220","220"], ["221","221"], ["222","222"], ["223","223"], ["224","224"], ["225","225"], ["226","226"], ["227","227"], ["228","228"], ["229","229"], ["230","230"], ["231","231"], ["232","232"], ["233","233"], ["234","234"], ["235","235"], ["236","236"], ["237","237"], ["238","238"], ["239","239"], ["240","240"], ["241","241"], ["242","242"], ["243","243"], ["244","244"], ["245","245"], ["246","246"], ["247","247"], ["248","248"], ["249","249"], ["250","250"], ["251","251"], ["252","252"], ["253","253"], ["254","254"], ["255","255"]]), "B");
        this.setInputsInline(true);
        this.setOutput(true, booleanCompatibility);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setStyle('logic_blocks');
    }
};

Blockly.Blocks['virus_ir_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_IR_INIT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "IR_PIN");
        this.setTooltip(Blockly.Msg.VIRUS_IR_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_IR_INIT_HELPURL);
        this.setStyle('ir_blocks');
    }
};

Blockly.Blocks['virus_ir_on_button'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_IR_ON_BUTTON)
                .appendField(new Blockly.FieldDropdown([["0","zero"], ["1","un"], ["2","deux"], ["3","trois"], ["4","quatre"], ["5","cinq"], ["6","six"], ["7","sept"], ["8","huit"], ["9","neuf"], ["*","etoile"], ["#","diese"], ["OK","ok"], ["◀","gauche"], ["▶","droite"], ["▲","haut"], ["▼","bas"]]), "BUTTON")
                .appendField(Blockly.Msg.VIRUS_IR_ON_BUTTON2);
        this.appendStatementInput("DO");
        this.setTooltip(Blockly.Msg.VIRUS_IR_ON_BUTTON_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_IR_ON_BUTTON_HELPURL);
        this.setStyle('ir_blocks');
    }
};

Blockly.Blocks['virus_capteur_son_init'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_CAPTEUR_SON_INIT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "CAPTEUR_SON_PIN");
        this.appendValueInput("NB", 'Number')
                .appendField(Blockly.Msg.VIRUS_CAPTEUR_SON_INIT2)
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(intCompatibility);
        this.appendValueInput("MIN", 'Number')
                .appendField(Blockly.Msg.VIRUS_CAPTEUR_SON_INIT3)
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(intCompatibility);
        this.appendValueInput("MAX", 'Number')
                .appendField(Blockly.Msg.VIRUS_CAPTEUR_SON_INIT4)
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(intCompatibility);
        this.setTooltip(Blockly.Msg.VIRUS_CAPTEUR_SON_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_CAPTEUR_SON_HELPURL);
        this.setStyle('capteur_son_blocks');
    }
};

Blockly.Blocks['virus_capteur_son_on_capteur'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.VIRUS_CAPTEUR_SON_ON_CAPTEUR)
        this.appendStatementInput("DO");
        this.setTooltip(Blockly.Msg.VIRUS_CAPTEUR_SON_ON_CAPTEUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VIRUS_CAPTEUR_SON_ON_CAPTEUR_HELPURL);
        this.setStyle('capteur_son_blocks');
    }
};