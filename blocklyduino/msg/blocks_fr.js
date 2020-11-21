/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

goog.provide('Blockly.Msg.blocks_fr');

goog.require('Blockly.Msg');

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["1 (état haut)", "HIGH"], ["0 (état bas)", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Ajoute une condition au bloc 'suivant que'.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Ajoute une condition finale, par défaut.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Ajoute, retire, ou classe les sections de ce bloc.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "suivant que la variable ";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = "prend";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "par défaut faire";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "la valeur";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Suivant la valeur (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "faire";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "Si une valeur est vraie alors exécuter les commandes suivantes.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.  Si aucune condition n'est vérifiée, alors faire le bloc de commandes par défaut.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Déplacer le bloc de gauche pour l'ajouter.";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Ajoute un bloc de commandes sous condition";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Ajoute un bloc d'actions par défaut";
//Arduino base cateory blocks
Blockly.Msg.VAR_CREATE_INT = "Nouveau nombre entier";
Blockly.Msg.VAR_CREATE_FLOAT = "de type nombre à virgule";
Blockly.Msg.VAR_CREATE_STRING = "de type chaîne de caractère";
Blockly.Msg.VAR_CREATE_BOOLEAN = "de type booléen";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "Mettre la DEL sur la carte à l'état logique";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Eteint ou allume la DEL sur la carte Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "Mettre la broche";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "à l'état logique";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "Ecrit une valeur (0 ou 1) sur la broche choisie pour la sortie d'informations logiques";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "état logique sur la broche";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "Lit la valeur (0 ou 1) sur la broche choisie pour l'entrée d'informations logiques";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "Envoyer sur la broche PWM~ ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "la valeur (0~255)";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "Ecrit une valeur (comprise entre 0 et 255) sur la broche choisie pour la sortie d'informations modulées.\nATTENTION à vérifier que la broche choisie porte le signe PWM~ !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "valeur analogique sur la broche";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "Lit la valeur (comprise entre 0 et 1023) sur la broche choisie pour l'entrée d'informations analogiques.\nATTENTION à vérifier que la broche choisie soit de type A# (exemple : A0,A1,...) ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "Faire une temporisation (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Spécifier le temps d'attente, arrête l'exécution du programme pendant la durée indiquée";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "angle de ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "renvoie une valeur entre 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_BASE_MAP1 = "la valeur";
Blockly.Msg.ARDUINO_BASE_MAP2 = "ré-étalonnée de [0~";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "ré-étalonne une valeur comprise dans [0~1024] vers un autre intervalle."
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "émettre un son sur la broche";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "d'une fréquence (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "émettre un son sur la broche selectionnée";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stopper le son sur la broche";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "arrêter le son sur la broche selectionnée";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg.SERIAL_INIT = "fixer la vitesse (en bauds) du port série à";
Blockly.Msg.SERIAL_PRINT_FORMAT = "envoyer au format";
Blockly.Msg.SERIAL_PRINT_FORDECIMAL = "décimal";
Blockly.Msg.SERIAL_PRINT_FORHEXA = "hexadécimal";
Blockly.Msg.SERIAL_PRINT_FORBIN = "binaire";
Blockly.Msg.SERIAL_PRINT_FOROCT = "octal";
Blockly.Msg.SERIAL_READ = "donnée lue sur le port série";
Blockly.Msg.SERIAL_AVAILABLE = "une donnée est disponible sur le port série ?";
Blockly.Msg.SERIAL_FLUSH = "attente de fin de transmission par le port série";
Blockly.Msg.SERIAL_READSTRINGUNTIL_HELPURL = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg.SERIAL_READSTRINGUNTIL_CONTENT = "chaîne lue jusqu'au caractère";
Blockly.Msg.SERIAL_READSTRINGUNTIL_TOOLTIP = "lis les caractères un par un jusqu'à celui recherché, et renvoie toute la chaîne de caractères";
Blockly.Msg.SERIAL_PRINT_CONTENT = "afficher sur le port série le texte";
Blockly.Msg.SERIAL_PRINT_TOOLTIP = "envoie des données sur le port série pour surveillance par le moniteur en ASCII";
Blockly.Msg.SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg.SERVO_MOVE_TOOLTIP = "Rotation possible entre 0~180 degrés";
Blockly.Msg.SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.SERVO_PIN = "sur la broche";
Blockly.Msg.SERVO_MOVE_INPUT = "Orienter le servo-moteur";
Blockly.Msg.SERVO_MOVE_DEGREE = "d'un angle (0~180°) de";
Blockly.Msg.SERVO_READ_DEGREES_INPUT = "l'angle du servo-moteur";
Blockly.Msg.SERVO_READ_DEGREES_TOOLTIP = "Renvoie le nombre de degrés de la dernière rotation";
Blockly.Msg.SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";

//Virus
Blockly.Msg.VIRUS_MP3_INIT = "Initialiser le lecteur MP3 🎶";
Blockly.Msg.VIRUS_MP3_INIT2 = "branché sur les broches (rx)";
Blockly.Msg.VIRUS_MP3_INIT3 = "et (tx)";
Blockly.Msg.VIRUS_MP3_INIT_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_INIT_HELPURL = "";

Blockly.Msg.VIRUS_MP3_PLAY_FIRST = "Démarrer la première musique 🎵";
Blockly.Msg.VIRUS_MP3_PLAY_FIRST_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_PLAY_FIRST_HELPURL = "";

Blockly.Msg.VIRUS_MP3_PLAY_NEXT = "Démarrer la musique suivante ⏩";
Blockly.Msg.VIRUS_MP3_PLAY_NEXT_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_PLAY_NEXT_HELPURL = "";

Blockly.Msg.VIRUS_MP3_PLAY_PREV = "Démarrer la musique précédente ⏪";
Blockly.Msg.VIRUS_MP3_PLAY_PREV_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_PLAY_PREV_HELPURL = "";

Blockly.Msg.VIRUS_MP3_PAUSE = "Mettre la musique en pause ⏸️";
Blockly.Msg.VIRUS_MP3_PAUSE_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_PAUSE_HELPURL = "";

Blockly.Msg.VIRUS_MP3_PLAY = "Redémarrer la musique ▶️";
Blockly.Msg.VIRUS_MP3_PLAY_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_PLAY_HELPURL = "";

Blockly.Msg.VIRUS_MP3_VOL_INC = "Monter le son 🔊";
Blockly.Msg.VIRUS_MP3_VOL_INC_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_VOL_INC_HELPURL = "";

Blockly.Msg.VIRUS_MP3_VOL_DEC = "Baisser le son 🔉";
Blockly.Msg.VIRUS_MP3_VOL_DEC_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_VOL_DEC_HELPURL = "";

Blockly.Msg.VIRUS_MP3_IS_PLAYING = "la musique est démarrée 🎵";
Blockly.Msg.VIRUS_MP3_IS_PLAYING_TOOLTIP = "";
Blockly.Msg.VIRUS_MP3_IS_PLAYING_HELPURL = "";

Blockly.Msg.VIRUS_I2C_MASTER_INIT = "Je suis le contrôleur principal I2C 📤";
Blockly.Msg.VIRUS_I2C_MASTER_INIT_TOOLTIP = "";
Blockly.Msg.VIRUS_I2C_MASTER_INIT_HELPURL = "";

Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM = "la valeur de la donnée du contrôleur secondaire";
Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM2 = "à l'adresse (0~127)";
Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM_TOOLTIP = "";
Blockly.Msg.VIRUS_I2C_MASTER_REQUEST_FROM_HELPURL = "";

Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO = "Envoyer";
Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO2 = "la donnée";
Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO3 = "au contrôleur secondaire I2C à l'adresse (0~127)";
Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO_TOOLTIP = "";
Blockly.Msg.VIRUS_I2C_MASTER_SEND_TO_HELPURL = "";

Blockly.Msg.VIRUS_I2C_SLAVE_INIT = "Je suis un contrôleur secondaire I2C 📥";
Blockly.Msg.VIRUS_I2C_SLAVE_INIT2 = "avec l'adresse (0~127)";
Blockly.Msg.VIRUS_I2C_SLAVE_INIT_TOOLTIP = "";
Blockly.Msg.VIRUS_I2C_SLAVE_INIT_HELPURL = "";

Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA = "Mettre la prochaine donnée I2C à envoyer";
Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA2 = "à la valeur";
Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA_TOOLTIP = "";
Blockly.Msg.VIRUS_I2C_SLAVE_SET_DATA_HELPURL = "";

Blockly.Msg.VIRUS_I2C_SLAVE_GET_DATA = "la valeur de la dernière donnée I2C reçue";
Blockly.Msg.VIRUS_I2C_SLAVE_GET_DATA_TOOLTIP = "";
Blockly.Msg.VIRUS_I2C_SLAVE_GET_DATA_HELPURL = "";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_INPUT = "valeur de la température";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_TOOLTIP = "HTS221: capteur de la carte, renvoie la température en °Celsius";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_HELPURL = "onboard temperature sensor value";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_INPUT = "pourcentage d'humidité";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_TOOLTIP = "HTS221: capteur de la carte, renvoie l'humidité en %";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_HELPURL = "https://www.st.com/en/ecosystems/x-nucleo-iks01a3.html";