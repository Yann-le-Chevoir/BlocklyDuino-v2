/**
* @license
* Copyright 2020 Sébastien CANET
* SPDX-License-Identifier: GPL-3.0-or-later
*/

/**
 * @fileoverview 'Toolbox' menu as objetc for Blockly inject.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

var BLOCKLY_TOOLBOX_XML = BLOCKLY_TOOLBOX_XML || Object.create(null);

BLOCKLY_TOOLBOX_XML['toolboxblocklyduino'] =
// From XML string/file, replace ^\s?(\s*)?(<.*>)$ with \+$1'$2'
// Tweak first and last line.
'<xml xmlns="https://developers.google.com/blockly/xml" id="blocklyToolbox">'
+ '<category name="%{BKY_CAT_ARDUINO_INPUTS}" categorystyle="input_category">'
+   '<block type="board_base_inout_digital_read"></block>'
+   '<block type="board_base_inout_analog_read"></block>'
+ '</category>'
+ '<category name="%{BKY_CAT_ARDUINO_OUTPUTS}" categorystyle="output_category">'
+   '<!--block type="board_base_inout_buildin_led"></block-->'
+   '<block type="board_base_inout_digital_write"></block>'
+   '<block type="board_base_inout_analog_write">'
+     '<value name="PWM">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<category name="%{BKY_CAT_ARDUINO_TIME}" categorystyle="time_category">'
+   '<block type="board_base_delay">'
+     '<value name="DELAY_TIME">'
+       '<block type="math_number">'
+         '<field name="NUM">1000</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<sep></sep>'
+ '<category name="%{BKY_CATLOGIC}" categorystyle="logic_category">'
+   '<block type="controls_if"></block>'
+   '<block type="logic_compare">'
+     '<value name="B">'
+       '<block type="board_base_inout_highlow"></block>'
+     '</value>'
+'</block>'
+   '<block type="logic_compare">'
+     '<value name="B">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+'</block>'
+   '<!--block type="logic_operation"></block-->'
+   '<!--block type="logic_negate"></block-->'
+   '<!--block type="logic_boolean"></block-->'
+   '<!--block type="logic_null"></block-->'
+   '<!--block type="logic_ternary"></block-->'
+   '<!--block type="controls_switch"></block-->'
+ '</category>'
+ '<category name="%{BKY_CATLOOPS}" categorystyle="loop_category">'
+   '<!--block type="controls_repeat_ext">'
+     '<value name="TIMES">'
+       '<block type="math_number">'
+         '<field name="NUM">10</field>'
+       '</block>'
+     '</value>'
+   '</block-->'
+   '<block type="controls_repeat"></block>'
+   '<!--block type="controls_whileUntil"></block-->'
+   '<block type="controls_for">'
+     '<value name="FROM">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+     '<value name="TO">'
+       '<block type="math_number">'
+         '<field name="NUM">255</field>'
+       '</block>'
+     '</value>'
+     '<value name="BY">'
+       '<block type="math_number">'
+         '<field name="NUM">1</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<!--block type="controls_forEach"></block-->'
+   '<!--block type="controls_flow_statements"></block-->'
+ '</category>'
+ '<category name="%{BKY_CATMATH}" categorystyle="math_category">'
+   '<block type="math_number" gap="32">'
+     '<field name="NUM">0</field>'
+   '</block>'
+   '<block type="math_arithmetic">'
+     '<value name="A"></value>'
+     '<value name="B">'
+       '<block type="math_number">'
+         '<field name="NUM">1</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<!--block type="math_single">'
+     '<value name="NUM">'
+       '<block type="math_number">'
+         '<field name="NUM">9</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="math_trig">'
+     '<value name="NUM">'
+       '<block type="math_number">'
+         '<field name="NUM">45</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="math_constant"></block>'
+   '<block type="math_number_property">'
+     '<value name="NUMBER_TO_CHECK">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="math_round">'
+     '<value name="NUM">'
+       '<block type="math_number">'
+         '<field name="NUM">3.1</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="math_on_list"></block>'
+   '<block type="math_modulo">'
+     '<value name="DIVIDEND">'
+       '<block type="math_number">'
+         '<field name="NUM">64</field>'
+       '</block>'
+     '</value>'
+     '<value name="DIVISOR">'
+       '<block type="math_number">'
+         '<field name="NUM">10</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="math_constrain">'
+     '<value name="VALUE">'
+       '<block type="math_number">'
+         '<field name="NUM">50</field>'
+       '</block>'
+     '</value>'
+     '<value name="LOW">'
+       '<block type="math_number">'
+         '<field name="NUM">1</field>'
+       '</block>'
+     '</value>'
+     '<value name="HIGH">'
+       '<block type="math_number">'
+         '<field name="NUM">100</field>'
+       '</block>'
+     '</value>'
+   '</block-->'
+   '<block type="math_random_int">'
+     '<value name="FROM">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+     '<value name="TO">'
+       '<block type="math_number">'
+         '<field name="NUM">255</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<!--category name="%{BKY_CATTEXT}" categorystyle="text_category">'
+   '<block type="text"></block>'
+   '<block type="text_join"></block>'
+   '<block type="text_append">'
+     '<value name="TEXT">'
+       '<block type="text"></block>'
+     '</value>'
+   '</block>'
+   '<block type="text_length">'
+     '<value name="VALUE">'
+       '<block type="text">'
+         '<field name="TEXT">abc</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_isEmpty">'
+     '<value name="VALUE">'
+       '<block type="text">'
+         '<field name="TEXT"></field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_indexOf">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+     '<value name="FIND">'
+       '<block type="text">'
+         '<field name="TEXT">abc</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_charAt">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_getSubstring">'
+     '<value name="STRING">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_changeCase">'
+     '<value name="TEXT">'
+       '<block type="text">'
+         '<field name="TEXT">abc</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_trim">'
+     '<value name="TEXT">'
+       '<block type="text">'
+         '<field name="TEXT">abc</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_count">'
+     '<value name="SUB">'
+       '<block type="text"></block>'
+     '</value>'
+     '<value name="TEXT">'
+       '<block type="text"></block>'
+     '</value>'
+   '</block>'
+   '<block type="text_replace">'
+     '<value name="FROM">'
+       '<block type="text"></block>'
+     '</value>'
+     '<value name="TO">'
+       '<block type="text"></block>'
+     '</value>'
+     '<value name="TEXT">'
+       '<block type="text"></block>'
+     '</value>'
+   '</block>'
+   '<block type="text_reverse">'
+     '<value name="TEXT">'
+       '<block type="text"></block>'
+     '</value>'
+   '</block>'
+   '<label text="Input/Output:" web-class="ioLabel"></label>'
+   '<block type="text_print">'
+     '<value name="TEXT">'
+       '<block type="text">'
+         '<field name="TEXT">abc</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_prompt_ext">'
+     '<value name="TEXT">'
+       '<block type="text">'
+         '<field name="TEXT">abc</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category-->'
+ '<!--category name="%{BKY_CATLISTS}" categorystyle="list_category">'
+   '<block type="lists_create_with">'
+     '<mutation items="0"></mutation>'
+   '</block>'
+   '<block type="lists_create_with"></block>'
+   '<block type="lists_repeat">'
+     '<value name="NUM">'
+       '<block type="math_number">'
+         '<field name="NUM">5</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_length"></block>'
+   '<block type="lists_isEmpty"></block>'
+   '<block type="lists_indexOf">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_getIndex">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_setIndex">'
+     '<value name="LIST">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_getSublist">'
+     '<value name="LIST">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_split">'
+     '<value name="DELIM">'
+       '<block type="text">'
+         '<field name="TEXT">,</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_sort"></block>'
+   '<block type="lists_reverse"></block>'
+ '</category-->'
+ '<!--category name="%{BKY_CATCOLOUR}" categorystyle="colour_category">'
+   '<block type="colour_picker"></block>'
+   '<block type="colour_random"></block>'
+   '<block type="colour_rgb">'
+     '<value name="RED">'
+       '<block type="math_number">'
+         '<field name="NUM">100</field>'
+       '</block>'
+     '</value>'
+     '<value name="GREEN">'
+       '<block type="math_number">'
+         '<field name="NUM">50</field>'
+       '</block>'
+     '</value>'
+     '<value name="BLUE">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="colour_blend">'
+     '<value name="COLOUR1">'
+       '<block type="colour_picker">'
+         '<field name="COLOUR">#ff0000</field>'
+       '</block>'
+     '</value>'
+     '<value name="COLOUR2">'
+       '<block type="colour_picker">'
+         '<field name="COLOUR">#3333ff</field>'
+       '</block>'
+     '</value>'
+     '<value name="RATIO">'
+       '<block type="math_number">'
+         '<field name="NUM">0.5</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category-->'
+ '<category name="%{BKY_CAT_VAR_NUM}" categorystyle="variable_category" custom="VARIABLE_TYPED_NUM"></category>'
+ '<sep></sep>'
+ '<!--category name="%{BKY_CATVARIABLES}" categorystyle="variable_category">'
+   '<category name="%{BKY_CAT_VAR_NUM}" categorystyle="variable_category" custom="VARIABLE_TYPED_NUM"></category>'
+   '<category name="%{BKY_CAT_VAR_TEXT}" categorystyle="variable_category" custom="VARIABLE_TYPED_TEXT"></category>'
+   '<category name="%{BKY_CAT_VAR_BOOLEAN}" categorystyle="variable_category" custom="VARIABLE_TYPED_BOOLEAN"></category>'
+ '</category-->'
+ '<!--category name="%{BKY_CATFUNCTIONS}" categorystyle="procedure_category" custom="PROCEDURE"></category-->'
+ '<!--sep></sep-->'
+ '<!--category name="%{BKY_CAT_ARDUINO}" categorystyle="arduino_category">'
+   '<category name="%{BKY_CAT_ARDUINO_IO}" categorystyle="arduino_category">'
+     '<block type="board_base_inout_buildin_led"></block>'
+     '<block type="board_base_inout_digital_write"></block>'
+     '<block type="board_base_inout_digital_read"></block>'
+     '<block type="board_base_inout_highlow"></block>'
+     '<block type="board_base_inout_analog_write">'
+       '<value name="PWM">'
+         '<block type="math_number">'
+           '<field name="NUM">0</field>'
+         '</block>'
+       '</value>'
+     '</block>'
+     '<block type="board_base_inout_analog_read"></block>'
+     '<block type="board_base_delay">'
+       '<value name="DELAY_TIME">'
+         '<block type="math_number">'
+           '<field name="NUM">1000</field>'
+         '</block>'
+       '</value>'
+     '</block>'
+     '<block type="board_base_angle"></block>'
+     '<block type="board_base_map"></block>'
+     '<block type="board_base_inout_tone">'
+       '<value name="NUM">'
+         '<block type="math_number">'
+           '<field name="NUM">440</field>'
+         '</block>'
+       '</value>'
+     '</block>'
+     '<block type="board_base_inout_notone"></block>'
+   '</category>'
+   '<category name="%{BKY_CAT_BOARD_SERIAL}" categorystyle="arduino_category">'
+     '<block type="board_serial_init"></block>'
+     '<block type="board_serial_printfor"></block>'
+     '<block type="board_serial_print"></block>'
+     '<block type="board_serial_available"></block>'
+     '<block type="board_serial_read"></block>'
+     '<block type="board_serial_readStringUntil"></block>'
+     '<block type="board_serial_flush"></block>'
+   '</category>'
+ '</category-->'
+ '<!--category name="%{BKY_CAT_SEEED}" categorystyle="seeed_category">'
+   '<category name="%{BKY_CAT_GROVE}" categorystyle="grove_category">'
+     '<category name="%{BKY_CAT_GROVE_IO}" categorystyle="grove_category">'
+       '<block type="grove_led"></block>'
+       '<block type="grove_button"></block>'
+       '<block type="grove_relay"></block>'
+       '<block type="grove_tilt_switch"></block>'
+       '<block type="grove_piezo_buzzer"></block>'
+       '<block type="grove_pir_motion_sensor"></block>'
+       '<block type="grove_line_finder"></block>'
+       '<block type="grove_rgb_led"></block>'
+       '<block type="grove_ultrasonic_ranger"></block>'
+     '</category>'
+     '<category name="%{BKY_CAT_GROVE_ANALOG}" categorystyle="grove_category">'
+       '<block type="grove_rotary_angle"></block>'
+       '<block type="grove_temperature_sensor"></block>'
+       '<block type="grove_sound_sensor"></block>'
+       '<block type="grove_thumb_joystick"></block>'
+     '</category>'
+     '<category name="%{BKY_CAT_GROVE_LCD}" categorystyle="grove_category">'
+       '<block type="grove_serial_lcd_print">'
+         '<value name="TEXT1">'
+           '<block type="text">'
+             '<field name="TEXT"></field>'
+           '</block>'
+         '</value>'
+         '<value name="TEXT2">'
+           '<block type="text">'
+             '<field name="TEXT"></field>'
+           '</block>'
+         '</value>'
+         '<value name="DELAY_TIME">'
+           '<block type="math_number">'
+             '<field name="NUM">1000</field>'
+           '</block>'
+         '</value>'
+       '</block>'
+       '<block type="grove_serial_lcd_power"></block>'
+       '<block type="grove_serial_lcd_effect"></block>'
+     '</category>'
+     '<category name="%{BKY_CAT_GROVE_MOTOR}" categorystyle="grove_category">'
+       '<block type="grove_motor_shield"></block>'
+     '</category>'
+   '</category>'
+ '</category-->'
+ '<category name="%{BKY_CAT_SERVO}" categorystyle="servo_category">'
+   '<block type="servo_move">'
+     '<value name="DEGREE">'
+       '<block type="math_number">'
+         '<field name="NUM">90</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="servo_read_degrees"></block>'
+ '</category>'
+ '<sep></sep>'
+ '<category name="%{BKY_CAT_VIRUS_MUSIC}" categorystyle="mp3_category">'
+   '<block type="virus_mp3_init"></block>'
+   '<block type="virus_mp3_play_first"></block>'
+   '<block type="virus_mp3_play_next"></block>'
+   '<block type="virus_mp3_play_prev"></block>'
+   '<block type="virus_mp3_is_playing"></block>'
+   '<block type="virus_mp3_pause"></block>'
+   '<block type="virus_mp3_play"></block>'
+   '<block type="virus_mp3_vol_inc"></block>'
+   '<block type="virus_mp3_vol_dec"></block>'
+ '</category>'
+ '<sep></sep>'
+ '<category name="%{BKY_CAT_VIRUS_I2C_MASTER}" categorystyle="i2c_master_category">'
+   '<block type="virus_i2c_master_init"></block>'
+   '<block type="virus_i2c_master_request_from">'
+     '<value name="ADDRESS">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="virus_i2c_master_send_to">'
+     '<value name="DATA">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+     '<value name="ADDRESS">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<category name="%{BKY_CAT_VIRUS_I2C_SLAVE}" categorystyle="i2c_slave_category">'
+   '<block type="virus_i2c_slave_init">'
+     '<value name="ADDRESS">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="virus_i2c_slave_get_data"></block>'
+   '<block type="virus_i2c_slave_set_data">'
+     '<value name="DATA">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<sep></sep>'
+ '<category name="%{BKY_CAT_VIRUS_EV3_MASTER}" categorystyle="ev3_master_category">'
+   '<block type="virus_ev3_master_init"></block>'
+   '<block type="virus_ev3_master_set_motor_speed">'
+     '<value name="SPEED">'
+       '<block type="math_number">'
+         '<field name="NUM">0</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+ '</category>'
+'</xml>';