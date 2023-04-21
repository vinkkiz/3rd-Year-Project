#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on Wed Mar 29 20:21:43 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'BZ'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/vinkki/pavlovia_GitRepos/3rd_year_pavlovia/BZ_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 960], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "intro" ---
intro_text2 = visual.TextStim(win=win, name='intro_text2',
    text="IMPORTANT: Your browser should now be in full-screen mode. Please do not exit full-screen mode.\n\nYou must complete this experiment using either a laptop or desktop computer. \n\nPlease do not complete the experiment twice if you experience issues, contact the researcher on Prolific.\n\nPlease read the following information sheet. \n\nPress the 'spacebar' to continue.",
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
intro_continue2 = keyboard.Keyboard()
# Run 'Begin Experiment' code from code_4
timeStart = core.Clock() # to instantiate a clock object


# --- Initialize components for Routine "info_sheet" ---
# Run 'Begin Experiment' code from info_sheet_code
current_display = 1

end_loop = keyboard.Keyboard()
info_sheet_image = visual.ImageStim(
    win=win,
    name='info_sheet_image', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0.1), size=(1.05, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
info_sheet_move = keyboard.Keyboard()
counter = visual.TextStim(win=win, name='counter',
    text='',
    font='Arial',
    pos=(0, -0.29), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
move_text = visual.TextStim(win=win, name='move_text',
    text="Use your arrow keys '←' '→' to view the next page (or previous page).",
    font='Arial',
    pos=(0, -0.35), height=0.035, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
info_sheet_next = visual.TextStim(win=win, name='info_sheet_next',
    text="When you have finished reading page 4 of 4, press 'Enter/Return' to move on to the consent form. \nIf you do not wish to continue, press ‘Escape’ to quit the experiment.",
    font='Arial',
    pos=(0, -0.43), height=0.025, wrapWidth=1.1, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# --- Initialize components for Routine "consent" ---
study_title = visual.TextStim(win=win, name='study_title',
    text='Decision-Making With Maps',
    font='Arial',
    pos=(0, 0.4), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
item_text = visual.TextStim(win=win, name='item_text',
    text='',
    font='Arial',
    pos=(0, 0.1), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
keypress_instructions = visual.TextStim(win=win, name='keypress_instructions',
    text='Press ‘y’ if you consent to the above.\nOtherwise, press ‘Escape’ to quit the experiment.\n\nThe personal information we collect and use to conduct this research will be processed in accordance with UK data protection law as explained in the Participant Information Sheet and the Privacy Notice for Research Participants: documents.manchester.ac.uk/display.aspx?DocID=37095 ',
    font='Arial',
    pos=(0, -0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
consent_key = keyboard.Keyboard()

# --- Initialize components for Routine "demographics" ---
ageResp = visual.TextBox2(
     win, text=None, font='Arial',
     pos=(-0.07, 0.23),     letterHeight=0.025,
     size=(0.14, 0.04), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center-left',
     fillColor='white', borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='ageResp',
     autoLog=True,
)
age = visual.TextStim(win=win, name='age',
    text='Please enter your age (in years):',
    font='Arial',
    pos=(0, 0.28), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
gender = visual.TextStim(win=win, name='gender',
    text='How would you describe your gender?',
    font='Arial',
    pos=(0, 0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
genderResp1 = visual.Slider(win=win, name='genderResp1',
    startValue=None, size=(0.015, 0.15), pos=(-0.19, -0.05), units=None,
    labels=("Prefer not to say", "In another way:", "Non-binary", "Man", "Woman"), ticks=(1, 2, 3, 4, 5), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.035,
    flip=True, ori=0.0, depth=-3, readOnly=False)
genderResp2 = visual.TextBox2(
     win, text=None, font='Arial',
     pos=(0.1, -0.09),     letterHeight=0.025,
     size=(0.15, 0.04), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center-left',
     fillColor='white', borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='genderResp2',
     autoLog=True,
)
continue_box_2 = visual.Rect(
    win=win, name='continue_box_2',
    width=(0.17, 0.06)[0], height=(0.17, 0.06)[1],
    ori=0.0, pos=(0, -0.4), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='black',
    opacity=None, depth=-5.0, interpolate=True)
continue_text_2 = visual.TextStim(win=win, name='continue_text_2',
    text='Continue',
    font='Arial',
    pos=(0, -0.4), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# --- Initialize components for Routine "education" ---
# Run 'Begin Experiment' code from code_7
edu_labels = ['No formal qualications',
'Secondary education (e.g. GED/GCSE)',
'High school diploma/A-levels',
'Technical/community college',
'Undergraduate degree (BA/BSc/other)',
'Graduate degree (MA/MSc/MPhil/other)',
'Doctorate degree (PhD/other)',
'Don\'t know / not applicable']

edu_labels.reverse()
edu_text = visual.TextStim(win=win, name='edu_text',
    text="Please select the highest level of education you have completed so far. Press the 'spacebar' when you have finished.",
    font='Arial',
    pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
edu_slider = visual.Slider(win=win, name='edu_slider',
    startValue=None, size=(0.03, 0.5), pos=(0, -0.05), units=None,
    labels=edu_labels, ticks=(1,2,3,4,5,6,7,8), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='Black', markerColor='Red', lineColor='Black', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=-0.0, depth=-2, readOnly=False)
spacebar_continue_5 = keyboard.Keyboard()

# --- Initialize components for Routine "literacy" ---
literacy_top = visual.TextStim(win=win, name='literacy_top',
    text="Please answer the following questions about using graphs and charts. Click on the slider next to each question to indicate your response. Press the 'spacebar' when you have finished:",
    font='Arial',
    pos=(0, 0.4), height=0.03, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions_text = visual.TextStim(win=win, name='questions_text',
    text='How good are you at working with bar charts?\n\n\n\nHow good are you at working with line plots?\n\n\n\nHow good are you at working with pie charts?\n\n\n\nHow good are you at inferring the size of a bar in a bar chart?\n\n\n\nHow good are you at determining the difference between two bars in a bar chart?',
    font='Arial',
    pos=(-0.4, -0.05), height=0.03, wrapWidth=0.75, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
q1_slider = visual.Slider(win=win, name='q1_slider',
    startValue=None, size=(0.55, 0.03), pos=(0.39, 0.27), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor='Red', lineColor='white', colorSpace='rgb',
    font='Arial', labelHeight=0.022,
    flip=False, ori=0.0, depth=-2, readOnly=False)
q2_slider = visual.Slider(win=win, name='q2_slider',
    startValue=None, size=(0.55, 0.03), pos=(0.39, 0.13), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor='Red', lineColor='white', colorSpace='rgb',
    font='Arial', labelHeight=0.022,
    flip=False, ori=0.0, depth=-3, readOnly=False)
q3_slider = visual.Slider(win=win, name='q3_slider',
    startValue=None, size=(0.55, 0.03), pos=(0.39, -0.02), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor='Red', lineColor='white', colorSpace='rgb',
    font='Arial', labelHeight=0.022,
    flip=False, ori=0.0, depth=-4, readOnly=False)
q4_slider = visual.Slider(win=win, name='q4_slider',
    startValue=None, size=(0.55, 0.03), pos=(0.39, -0.16), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor='Red', lineColor='white', colorSpace='rgb',
    font='Arial', labelHeight=0.022,
    flip=False, ori=0.0, depth=-5, readOnly=False)
q5_slider = visual.Slider(win=win, name='q5_slider',
    startValue=None, size=(0.55, 0.03), pos=(0.39, -0.33), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor='Red', lineColor='white', colorSpace='rgb',
    font='Arial', labelHeight=0.022,
    flip=False, ori=0.0, depth=-6, readOnly=False)
spacebar_continue_4 = keyboard.Keyboard()

# --- Initialize components for Routine "instructions" ---
slide_number = visual.TextStim(win=win, name='slide_number',
    text='',
    font='Arial',
    pos=(0, 0.4), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instruction_text = visual.TextStim(win=win, name='instruction_text',
    text='',
    font='Arial',
    pos=(0, 0.29), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
spacebar_3 = visual.TextStim(win=win, name='spacebar_3',
    text="Press the 'spacebar' to move on to the next slide.",
    font='Arial',
    pos=(0, -0.44), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
instruction_image = visual.ImageStim(
    win=win,
    name='instruction_image', 
    image='images/pointed_maps_images/9cs.jpeg', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.075), size=(0.36, 0.36),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
EXsentence1 = visual.TextStim(win=win, name='EXsentence1',
    text='This map shows the levels of a certain type of pollution in this country:',
    font='Arial',
    pos=(0, 0.14), height=0.03, wrapWidth=1.4, ori=0.0, 
    color='lightgrey', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
next_slide_key = keyboard.Keyboard()
question_text_2 = visual.TextStim(win=win, name='question_text_2',
    text='How severe do you think the environmental pollution in this pointed region is?',
    font='Arial',
    pos=(0, -0.29), height=0.03, wrapWidth=None, ori=0.0, 
    color='lightgrey', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
slider_image = visual.ImageStim(
    win=win,
    name='slider_image', 
    image='images/slider_image.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.37), size=(0.6, 0.09),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
triangle = visual.ShapeStim(
    win=win, name='triangle',
    size=(0.06, 0.03), vertices='triangle',
    ori=180.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-8.0, interpolate=True)
arrow = visual.TextStim(win=win, name='arrow',
    text='→',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "trial" ---
sentence_text = visual.TextStim(win=win, name='sentence_text',
    text='',
    font='Arial',
    pos=(0, 0.39), height=0.03, wrapWidth=1.2, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.06), size=(0.6, 0.43),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
question_text = visual.TextStim(win=win, name='question_text',
    text='',
    font='Arial',
    pos=(0, -0.24), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
slider = visual.Slider(win=win, name='slider',
    startValue=None, size=(0.5, 0.04), pos=(0, -0.35), units=None,
    labels=('Not very severe', 'Very severe'), ticks=(1, 2), granularity=None,
    style='rating', styleTweaks=('triangleMarker',), opacity=None,
    labelColor='White', markerColor='White', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-4, readOnly=False)
spacebar_continue = keyboard.Keyboard()
# Run 'Begin Experiment' code from counter_code
trial_counter = 0
counter_text = None
trial_counter_text = visual.TextStim(win=win, name='trial_counter_text',
    text='',
    font='Arial',
    pos=(0.5, 0.43), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
spacebar_text = visual.TextStim(win=win, name='spacebar_text',
    text="Press the 'spacebar' to continue when you have made your response.",
    font='Arial',
    pos=(0, -0.46), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);

# --- Initialize components for Routine "additional_question" ---
# Run 'Begin Experiment' code from code_5
scale_labels = ['A', 'B']

scale_labels.reverse()
section_text = visual.TextStim(win=win, name='section_text',
    text='Additional Question',
    font='Arial',
    pos=(0, 0.4), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
ad_question_text1 = visual.TextStim(win=win, name='ad_question_text1',
    text='Which scale do you think is more suitable to represent the data?',
    font='Open Sans',
    pos=(0, 0.29), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
scales_images = visual.ImageStim(
    win=win,
    name='scales_images', 
    image='images/two_scales.JPEG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
add_question_text2 = visual.TextStim(win=win, name='add_question_text2',
    text='Please choose from "A" or "B":',
    font='Arial',
    pos=(0, -0.25), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
scale_slider = visual.Slider(win=win, name='scale_slider',
    startValue=None, size=(0.03, 0.05), pos=(0, -0.33), units=None,
    labels=scale_labels, ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor=[1.0000, 1.0000, 1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
    font='Arial', labelHeight=0.04,
    flip=False, ori=0.0, depth=-5, readOnly=False)
next_slide_text = visual.TextStim(win=win, name='next_slide_text',
    text="Press the 'spacebar' to continue.",
    font='Arial',
    pos=(0, -0.44), height=0.02, wrapWidth=None, ori=0.0, 
    color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-6.0);
spacebar_continue_7 = keyboard.Keyboard()

# --- Initialize components for Routine "debrief" ---
debrief_text = visual.TextStim(win=win, name='debrief_text',
    text='IMPORTANT: Your submission is not yet completed, so please do not quit the experiment. Continue to follow all instructions so that your submission can be completed. \n\nPlease note that the standarised units and all pollution data presented in this experiment were fictional.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
spacebar_continue_3 = keyboard.Keyboard()
spacebar_debrief = visual.TextStim(win=win, name='spacebar_debrief',
    text="Press the 'spacebar' to continue.",
    font='Arial',
    pos=(0, -0.35), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "comments" ---
textbox = visual.TextBox2(
     win, text=None, font='Arial',
     pos=(0, -0.05),     letterHeight=0.04,
     size=(0.8, 0.5), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.05, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='textbox',
     autoLog=True,
)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()
continue_box = visual.Rect(
    win=win, name='continue_box',
    width=(0.17, 0.06)[0], height=(0.17, 0.06)[1],
    ori=0.0, pos=(0, -0.4), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='black',
    opacity=None, depth=-2.0, interpolate=True)
continue_text = visual.TextStim(win=win, name='continue_text',
    text='Continue',
    font='Arial',
    pos=(0, -0.4), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
comment_instructions = visual.TextStim(win=win, name='comment_instructions',
    text='What strategies did you use during the study? Do you have any comments about the study? (optional)',
    font='Arial',
    pos=(0, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# --- Initialize components for Routine "final" ---
final_text = visual.TextStim(win=win, name='final_text',
    text="The experiment has now finished.\n\nPlease press the 'spacebar' and follow all the instructions to complete your submission. \n\nThank you for taking part.",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
final_keypress = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "intro" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
intro_continue2.keys = []
intro_continue2.rt = []
_intro_continue2_allKeys = []
# keep track of which components have finished
introComponents = [intro_text2, intro_continue2]
for thisComponent in introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "intro" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_text2* updates
    if intro_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_text2.frameNStart = frameN  # exact frame index
        intro_text2.tStart = t  # local t and not account for scr refresh
        intro_text2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_text2, 'tStartRefresh')  # time at next scr refresh
        intro_text2.setAutoDraw(True)
    
    # *intro_continue2* updates
    waitOnFlip = False
    if intro_continue2.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
        # keep track of start time/frame for later
        intro_continue2.frameNStart = frameN  # exact frame index
        intro_continue2.tStart = t  # local t and not account for scr refresh
        intro_continue2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_continue2, 'tStartRefresh')  # time at next scr refresh
        intro_continue2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(intro_continue2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(intro_continue2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if intro_continue2.status == STARTED and not waitOnFlip:
        theseKeys = intro_continue2.getKeys(keyList=['space'], waitRelease=False)
        _intro_continue2_allKeys.extend(theseKeys)
        if len(_intro_continue2_allKeys):
            intro_continue2.keys = _intro_continue2_allKeys[-1].name  # just the last key pressed
            intro_continue2.rt = _intro_continue2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "intro" ---
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
info_sheet_loop = data.TrialHandler(nReps=100.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='info_sheet_loop')
thisExp.addLoop(info_sheet_loop)  # add the loop to the experiment
thisInfo_sheet_loop = info_sheet_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInfo_sheet_loop.rgb)
if thisInfo_sheet_loop != None:
    for paramName in thisInfo_sheet_loop:
        exec('{} = thisInfo_sheet_loop[paramName]'.format(paramName))

for thisInfo_sheet_loop in info_sheet_loop:
    currentLoop = info_sheet_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInfo_sheet_loop.rgb)
    if thisInfo_sheet_loop != None:
        for paramName in thisInfo_sheet_loop:
            exec('{} = thisInfo_sheet_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "info_sheet" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from info_sheet_code
    current_str = str(current_display)
    
    display_this = "info/A7_Project1_PIS-" + current_str + ".png"
    
    counter_text = "Page " + current_str + " of 4"
    end_loop.keys = []
    end_loop.rt = []
    _end_loop_allKeys = []
    info_sheet_image.setImage(display_this)
    info_sheet_move.keys = []
    info_sheet_move.rt = []
    _info_sheet_move_allKeys = []
    counter.setText(counter_text)
    # keep track of which components have finished
    info_sheetComponents = [end_loop, info_sheet_image, info_sheet_move, counter, move_text, info_sheet_next]
    for thisComponent in info_sheetComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "info_sheet" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from info_sheet_code
        if end_loop.keys == 'return':
            continueRoutine = False
        
        # *end_loop* updates
        waitOnFlip = False
        if end_loop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_loop.frameNStart = frameN  # exact frame index
            end_loop.tStart = t  # local t and not account for scr refresh
            end_loop.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_loop, 'tStartRefresh')  # time at next scr refresh
            end_loop.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_loop.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(end_loop.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if end_loop.status == STARTED and not waitOnFlip:
            theseKeys = end_loop.getKeys(keyList=['return',], waitRelease=False)
            _end_loop_allKeys.extend(theseKeys)
            if len(_end_loop_allKeys):
                end_loop.keys = _end_loop_allKeys[-1].name  # just the last key pressed
                end_loop.rt = _end_loop_allKeys[-1].rt
        
        # *info_sheet_image* updates
        if info_sheet_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_sheet_image.frameNStart = frameN  # exact frame index
            info_sheet_image.tStart = t  # local t and not account for scr refresh
            info_sheet_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_sheet_image, 'tStartRefresh')  # time at next scr refresh
            info_sheet_image.setAutoDraw(True)
        
        # *info_sheet_move* updates
        waitOnFlip = False
        if info_sheet_move.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_sheet_move.frameNStart = frameN  # exact frame index
            info_sheet_move.tStart = t  # local t and not account for scr refresh
            info_sheet_move.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_sheet_move, 'tStartRefresh')  # time at next scr refresh
            info_sheet_move.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(info_sheet_move.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(info_sheet_move.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if info_sheet_move.status == STARTED and not waitOnFlip:
            theseKeys = info_sheet_move.getKeys(keyList=['left','right'], waitRelease=False)
            _info_sheet_move_allKeys.extend(theseKeys)
            if len(_info_sheet_move_allKeys):
                info_sheet_move.keys = _info_sheet_move_allKeys[-1].name  # just the last key pressed
                info_sheet_move.rt = _info_sheet_move_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *counter* updates
        if counter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            counter.frameNStart = frameN  # exact frame index
            counter.tStart = t  # local t and not account for scr refresh
            counter.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(counter, 'tStartRefresh')  # time at next scr refresh
            counter.setAutoDraw(True)
        
        # *move_text* updates
        if move_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            move_text.frameNStart = frameN  # exact frame index
            move_text.tStart = t  # local t and not account for scr refresh
            move_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(move_text, 'tStartRefresh')  # time at next scr refresh
            move_text.setAutoDraw(True)
        
        # *info_sheet_next* updates
        if info_sheet_next.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_sheet_next.frameNStart = frameN  # exact frame index
            info_sheet_next.tStart = t  # local t and not account for scr refresh
            info_sheet_next.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_sheet_next, 'tStartRefresh')  # time at next scr refresh
            info_sheet_next.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in info_sheetComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "info_sheet" ---
    for thisComponent in info_sheetComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from info_sheet_code
    if info_sheet_move.keys == 'right' and current_display < 4:
        current_display = current_display + 1
    elif info_sheet_move.keys == 'left' and current_display > 1:
        current_display = current_display - 1
    
    if end_loop.keys == 'return':
        info_sheet_loop.finished = True
    # the Routine "info_sheet" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 100.0 repeats of 'info_sheet_loop'


# set up handler to look after randomisation of conditions etc
consent_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('consent.csv'),
    seed=None, name='consent_loop')
thisExp.addLoop(consent_loop)  # add the loop to the experiment
thisConsent_loop = consent_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisConsent_loop.rgb)
if thisConsent_loop != None:
    for paramName in thisConsent_loop:
        exec('{} = thisConsent_loop[paramName]'.format(paramName))

for thisConsent_loop in consent_loop:
    currentLoop = consent_loop
    # abbreviate parameter names if possible (e.g. rgb = thisConsent_loop.rgb)
    if thisConsent_loop != None:
        for paramName in thisConsent_loop:
            exec('{} = thisConsent_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "consent" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    item_text.setText(consent_item)
    consent_key.keys = []
    consent_key.rt = []
    _consent_key_allKeys = []
    # keep track of which components have finished
    consentComponents = [study_title, item_text, keypress_instructions, consent_key]
    for thisComponent in consentComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "consent" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *study_title* updates
        if study_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            study_title.frameNStart = frameN  # exact frame index
            study_title.tStart = t  # local t and not account for scr refresh
            study_title.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(study_title, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'study_title.started')
            study_title.setAutoDraw(True)
        
        # *item_text* updates
        if item_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            item_text.frameNStart = frameN  # exact frame index
            item_text.tStart = t  # local t and not account for scr refresh
            item_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(item_text, 'tStartRefresh')  # time at next scr refresh
            item_text.setAutoDraw(True)
        
        # *keypress_instructions* updates
        if keypress_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            keypress_instructions.frameNStart = frameN  # exact frame index
            keypress_instructions.tStart = t  # local t and not account for scr refresh
            keypress_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(keypress_instructions, 'tStartRefresh')  # time at next scr refresh
            keypress_instructions.setAutoDraw(True)
        
        # *consent_key* updates
        waitOnFlip = False
        if consent_key.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            consent_key.frameNStart = frameN  # exact frame index
            consent_key.tStart = t  # local t and not account for scr refresh
            consent_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent_key, 'tStartRefresh')  # time at next scr refresh
            consent_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(consent_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(consent_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if consent_key.status == STARTED and not waitOnFlip:
            theseKeys = consent_key.getKeys(keyList=['y',], waitRelease=False)
            _consent_key_allKeys.extend(theseKeys)
            if len(_consent_key_allKeys):
                consent_key.keys = _consent_key_allKeys[-1].name  # just the last key pressed
                consent_key.rt = _consent_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in consentComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "consent" ---
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if consent_key.keys in ['', [], None]:  # No response was made
        consent_key.keys = None
    consent_loop.addData('consent_key.keys',consent_key.keys)
    if consent_key.keys != None:  # we had a response
        consent_loop.addData('consent_key.rt', consent_key.rt)
    # the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'consent_loop'


# --- Prepare to start Routine "demographics" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
ageResp.reset()
genderResp1.reset()
genderResp2.reset()
# setup some python lists for storing info about the mouse_3
mouse_3.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
demographicsComponents = [ageResp, age, gender, genderResp1, genderResp2, continue_box_2, continue_text_2, mouse_3]
for thisComponent in demographicsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "demographics" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ageResp* updates
    if ageResp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        ageResp.frameNStart = frameN  # exact frame index
        ageResp.tStart = t  # local t and not account for scr refresh
        ageResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ageResp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ageResp.started')
        ageResp.setAutoDraw(True)
    
    # *age* updates
    if age.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        age.frameNStart = frameN  # exact frame index
        age.tStart = t  # local t and not account for scr refresh
        age.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'age.started')
        age.setAutoDraw(True)
    
    # *gender* updates
    if gender.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender.frameNStart = frameN  # exact frame index
        gender.tStart = t  # local t and not account for scr refresh
        gender.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'gender.started')
        gender.setAutoDraw(True)
    
    # *genderResp1* updates
    if genderResp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        genderResp1.frameNStart = frameN  # exact frame index
        genderResp1.tStart = t  # local t and not account for scr refresh
        genderResp1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(genderResp1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'genderResp1.started')
        genderResp1.setAutoDraw(True)
    
    # *genderResp2* updates
    if genderResp2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        genderResp2.frameNStart = frameN  # exact frame index
        genderResp2.tStart = t  # local t and not account for scr refresh
        genderResp2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(genderResp2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'genderResp2.started')
        genderResp2.setAutoDraw(True)
    
    # *continue_box_2* updates
    if continue_box_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue_box_2.frameNStart = frameN  # exact frame index
        continue_box_2.tStart = t  # local t and not account for scr refresh
        continue_box_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_box_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'continue_box_2.started')
        continue_box_2.setAutoDraw(True)
    
    # *continue_text_2* updates
    if continue_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue_text_2.frameNStart = frameN  # exact frame index
        continue_text_2.tStart = t  # local t and not account for scr refresh
        continue_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'continue_text_2.started')
        continue_text_2.setAutoDraw(True)
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and ageResp.text and genderResp1.rating:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_3.started', t)
        mouse_3.status = STARTED
        mouse_3.mouseClock.reset()
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue_box_2)
                    clickableList = continue_box_2
                except:
                    clickableList = [continue_box_2]
                for obj in clickableList:
                    if obj.contains(mouse_3):
                        gotValidClick = True
                        mouse_3.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in demographicsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "demographics" ---
for thisComponent in demographicsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('ageResp.text',ageResp.text)
thisExp.addData('genderResp1.response', genderResp1.getRating())
thisExp.addData('genderResp1.rt', genderResp1.getRT())
thisExp.addData('genderResp2.text',genderResp2.text)
# store data for thisExp (ExperimentHandler)
x, y = mouse_3.getPos()
buttons = mouse_3.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(continue_box_2)
        clickableList = continue_box_2
    except:
        clickableList = [continue_box_2]
    for obj in clickableList:
        if obj.contains(mouse_3):
            gotValidClick = True
            mouse_3.clicked_name.append(obj.name)
thisExp.addData('mouse_3.x', x)
thisExp.addData('mouse_3.y', y)
thisExp.addData('mouse_3.leftButton', buttons[0])
thisExp.addData('mouse_3.midButton', buttons[1])
thisExp.addData('mouse_3.rightButton', buttons[2])
if len(mouse_3.clicked_name):
    thisExp.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])
thisExp.nextEntry()
# the Routine "demographics" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "education" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
edu_slider.reset()
spacebar_continue_5.keys = []
spacebar_continue_5.rt = []
_spacebar_continue_5_allKeys = []
# keep track of which components have finished
educationComponents = [edu_text, edu_slider, spacebar_continue_5]
for thisComponent in educationComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "education" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *edu_text* updates
    if edu_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        edu_text.frameNStart = frameN  # exact frame index
        edu_text.tStart = t  # local t and not account for scr refresh
        edu_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(edu_text, 'tStartRefresh')  # time at next scr refresh
        edu_text.setAutoDraw(True)
    
    # *edu_slider* updates
    if edu_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        edu_slider.frameNStart = frameN  # exact frame index
        edu_slider.tStart = t  # local t and not account for scr refresh
        edu_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(edu_slider, 'tStartRefresh')  # time at next scr refresh
        edu_slider.setAutoDraw(True)
    
    # *spacebar_continue_5* updates
    waitOnFlip = False
    if spacebar_continue_5.status == NOT_STARTED and edu_slider.rating:
        # keep track of start time/frame for later
        spacebar_continue_5.frameNStart = frameN  # exact frame index
        spacebar_continue_5.tStart = t  # local t and not account for scr refresh
        spacebar_continue_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_5, 'tStartRefresh')  # time at next scr refresh
        spacebar_continue_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_5.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_5.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_5_allKeys.extend(theseKeys)
        if len(_spacebar_continue_5_allKeys):
            spacebar_continue_5.keys = _spacebar_continue_5_allKeys[-1].name  # just the last key pressed
            spacebar_continue_5.rt = _spacebar_continue_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in educationComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "education" ---
for thisComponent in educationComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('edu_slider.response', edu_slider.getRating())
# the Routine "education" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "literacy" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
q1_slider.reset()
q2_slider.reset()
q3_slider.reset()
q4_slider.reset()
q5_slider.reset()
spacebar_continue_4.keys = []
spacebar_continue_4.rt = []
_spacebar_continue_4_allKeys = []
# Run 'Begin Routine' code from code_3
all_ratings = False
questions_text.alignText = 'right'
# keep track of which components have finished
literacyComponents = [literacy_top, questions_text, q1_slider, q2_slider, q3_slider, q4_slider, q5_slider, spacebar_continue_4]
for thisComponent in literacyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "literacy" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *literacy_top* updates
    if literacy_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        literacy_top.frameNStart = frameN  # exact frame index
        literacy_top.tStart = t  # local t and not account for scr refresh
        literacy_top.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(literacy_top, 'tStartRefresh')  # time at next scr refresh
        literacy_top.setAutoDraw(True)
    
    # *questions_text* updates
    if questions_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        questions_text.frameNStart = frameN  # exact frame index
        questions_text.tStart = t  # local t and not account for scr refresh
        questions_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(questions_text, 'tStartRefresh')  # time at next scr refresh
        questions_text.setAutoDraw(True)
    
    # *q1_slider* updates
    if q1_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q1_slider.frameNStart = frameN  # exact frame index
        q1_slider.tStart = t  # local t and not account for scr refresh
        q1_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q1_slider, 'tStartRefresh')  # time at next scr refresh
        q1_slider.setAutoDraw(True)
    
    # *q2_slider* updates
    if q2_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q2_slider.frameNStart = frameN  # exact frame index
        q2_slider.tStart = t  # local t and not account for scr refresh
        q2_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q2_slider, 'tStartRefresh')  # time at next scr refresh
        q2_slider.setAutoDraw(True)
    
    # *q3_slider* updates
    if q3_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q3_slider.frameNStart = frameN  # exact frame index
        q3_slider.tStart = t  # local t and not account for scr refresh
        q3_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q3_slider, 'tStartRefresh')  # time at next scr refresh
        q3_slider.setAutoDraw(True)
    
    # *q4_slider* updates
    if q4_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q4_slider.frameNStart = frameN  # exact frame index
        q4_slider.tStart = t  # local t and not account for scr refresh
        q4_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q4_slider, 'tStartRefresh')  # time at next scr refresh
        q4_slider.setAutoDraw(True)
    
    # *q5_slider* updates
    if q5_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q5_slider.frameNStart = frameN  # exact frame index
        q5_slider.tStart = t  # local t and not account for scr refresh
        q5_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q5_slider, 'tStartRefresh')  # time at next scr refresh
        q5_slider.setAutoDraw(True)
    
    # *spacebar_continue_4* updates
    waitOnFlip = False
    if spacebar_continue_4.status == NOT_STARTED and all_ratings:
        # keep track of start time/frame for later
        spacebar_continue_4.frameNStart = frameN  # exact frame index
        spacebar_continue_4.tStart = t  # local t and not account for scr refresh
        spacebar_continue_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_4, 'tStartRefresh')  # time at next scr refresh
        spacebar_continue_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_4.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_4.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_4_allKeys.extend(theseKeys)
        if len(_spacebar_continue_4_allKeys):
            spacebar_continue_4.keys = _spacebar_continue_4_allKeys[-1].name  # just the last key pressed
            spacebar_continue_4.rt = _spacebar_continue_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # Run 'Each Frame' code from code_3
    all_ratings = (q1_slider.rating != None) & (q2_slider.rating != None) & (q3_slider.rating != None) & (q4_slider.rating != None) & (q5_slider.rating != None)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in literacyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "literacy" ---
for thisComponent in literacyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('q1_slider.response', q1_slider.getRating())
thisExp.addData('q2_slider.response', q2_slider.getRating())
thisExp.addData('q3_slider.response', q3_slider.getRating())
thisExp.addData('q4_slider.response', q4_slider.getRating())
thisExp.addData('q5_slider.response', q5_slider.getRating())
# the Routine "literacy" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
instructions_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('wenqi_instructions.csv'),
    seed=None, name='instructions_loop')
thisExp.addLoop(instructions_loop)  # add the loop to the experiment
thisInstructions_loop = instructions_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
if thisInstructions_loop != None:
    for paramName in thisInstructions_loop:
        exec('{} = thisInstructions_loop[paramName]'.format(paramName))

for thisInstructions_loop in instructions_loop:
    currentLoop = instructions_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
    if thisInstructions_loop != None:
        for paramName in thisInstructions_loop:
            exec('{} = thisInstructions_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "instructions" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    slide_number.setText(slide_text)
    instruction_text.setText(instruction)
    next_slide_key.keys = []
    next_slide_key.rt = []
    _next_slide_key_allKeys = []
    arrow.setPos((arrow_posx, arrow_posy))
    # keep track of which components have finished
    instructionsComponents = [slide_number, instruction_text, spacebar_3, instruction_image, EXsentence1, next_slide_key, question_text_2, slider_image, triangle, arrow]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *slide_number* updates
        if slide_number.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slide_number.frameNStart = frameN  # exact frame index
            slide_number.tStart = t  # local t and not account for scr refresh
            slide_number.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slide_number, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slide_number.started')
            slide_number.setAutoDraw(True)
        
        # *instruction_text* updates
        if instruction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction_text.frameNStart = frameN  # exact frame index
            instruction_text.tStart = t  # local t and not account for scr refresh
            instruction_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruction_text.started')
            instruction_text.setAutoDraw(True)
        
        # *spacebar_3* updates
        if spacebar_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacebar_3.frameNStart = frameN  # exact frame index
            spacebar_3.tStart = t  # local t and not account for scr refresh
            spacebar_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacebar_3.started')
            spacebar_3.setAutoDraw(True)
        
        # *instruction_image* updates
        if instruction_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction_image.frameNStart = frameN  # exact frame index
            instruction_image.tStart = t  # local t and not account for scr refresh
            instruction_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruction_image.started')
            instruction_image.setAutoDraw(True)
        
        # *EXsentence1* updates
        if EXsentence1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            EXsentence1.frameNStart = frameN  # exact frame index
            EXsentence1.tStart = t  # local t and not account for scr refresh
            EXsentence1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(EXsentence1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'EXsentence1.started')
            EXsentence1.setAutoDraw(True)
        
        # *next_slide_key* updates
        waitOnFlip = False
        if next_slide_key.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            next_slide_key.frameNStart = frameN  # exact frame index
            next_slide_key.tStart = t  # local t and not account for scr refresh
            next_slide_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next_slide_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next_slide_key.started')
            next_slide_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(next_slide_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(next_slide_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if next_slide_key.status == STARTED and not waitOnFlip:
            theseKeys = next_slide_key.getKeys(keyList=['space'], waitRelease=False)
            _next_slide_key_allKeys.extend(theseKeys)
            if len(_next_slide_key_allKeys):
                next_slide_key.keys = _next_slide_key_allKeys[-1].name  # just the last key pressed
                next_slide_key.rt = _next_slide_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *question_text_2* updates
        if question_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_text_2.frameNStart = frameN  # exact frame index
            question_text_2.tStart = t  # local t and not account for scr refresh
            question_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'question_text_2.started')
            question_text_2.setAutoDraw(True)
        
        # *slider_image* updates
        if slider_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_image.frameNStart = frameN  # exact frame index
            slider_image.tStart = t  # local t and not account for scr refresh
            slider_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider_image.started')
            slider_image.setAutoDraw(True)
        
        # *triangle* updates
        if triangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            triangle.frameNStart = frameN  # exact frame index
            triangle.tStart = t  # local t and not account for scr refresh
            triangle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(triangle, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'triangle.started')
            triangle.setAutoDraw(True)
        if triangle.status == STARTED:  # only update if drawing
            triangle.setPos((triangle_pos, -0.335), log=False)
        
        # *arrow* updates
        if arrow.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            arrow.frameNStart = frameN  # exact frame index
            arrow.tStart = t  # local t and not account for scr refresh
            arrow.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(arrow, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'arrow.started')
            arrow.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions" ---
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if next_slide_key.keys in ['', [], None]:  # No response was made
        next_slide_key.keys = None
    instructions_loop.addData('next_slide_key.keys',next_slide_key.keys)
    if next_slide_key.keys != None:  # we had a response
        instructions_loop.addData('next_slide_key.rt', next_slide_key.rt)
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'instructions_loop'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('all_trials_list.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code
    slider.granularity = float(granularity)
    sentence_text.setText(sentence)
    image.setImage(file_path)
    question_text.setText(question)
    slider.reset()
    spacebar_continue.keys = []
    spacebar_continue.rt = []
    _spacebar_continue_allKeys = []
    # Run 'Begin Routine' code from counter_code
    trial_counter = trial_counter + 1
    counter_text = "Trial " + str(trial_counter) + " of 80"
    trial_counter_text.setText(counter_text)
    # keep track of which components have finished
    trialComponents = [sentence_text, image, question_text, slider, spacebar_continue, trial_counter_text, spacebar_text]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *sentence_text* updates
        if sentence_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sentence_text.frameNStart = frameN  # exact frame index
            sentence_text.tStart = t  # local t and not account for scr refresh
            sentence_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sentence_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sentence_text.started')
            sentence_text.setAutoDraw(True)
        
        # *image* updates
        if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image.frameNStart = frameN  # exact frame index
            image.tStart = t  # local t and not account for scr refresh
            image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image.started')
            image.setAutoDraw(True)
        
        # *question_text* updates
        if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_text.frameNStart = frameN  # exact frame index
            question_text.tStart = t  # local t and not account for scr refresh
            question_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'question_text.started')
            question_text.setAutoDraw(True)
        
        # *slider* updates
        if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider.frameNStart = frameN  # exact frame index
            slider.tStart = t  # local t and not account for scr refresh
            slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider.started')
            slider.setAutoDraw(True)
        
        # *spacebar_continue* updates
        waitOnFlip = False
        if spacebar_continue.status == NOT_STARTED and slider.rating:
            # keep track of start time/frame for later
            spacebar_continue.frameNStart = frameN  # exact frame index
            spacebar_continue.tStart = t  # local t and not account for scr refresh
            spacebar_continue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar_continue, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacebar_continue.started')
            spacebar_continue.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacebar_continue.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacebar_continue.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacebar_continue.status == STARTED and not waitOnFlip:
            theseKeys = spacebar_continue.getKeys(keyList=['space'], waitRelease=False)
            _spacebar_continue_allKeys.extend(theseKeys)
            if len(_spacebar_continue_allKeys):
                spacebar_continue.keys = _spacebar_continue_allKeys[-1].name  # just the last key pressed
                spacebar_continue.rt = _spacebar_continue_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *trial_counter_text* updates
        if trial_counter_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trial_counter_text.frameNStart = frameN  # exact frame index
            trial_counter_text.tStart = t  # local t and not account for scr refresh
            trial_counter_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trial_counter_text, 'tStartRefresh')  # time at next scr refresh
            trial_counter_text.setAutoDraw(True)
        
        # *spacebar_text* updates
        if spacebar_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacebar_text.frameNStart = frameN  # exact frame index
            spacebar_text.tStart = t  # local t and not account for scr refresh
            spacebar_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacebar_text.started')
            spacebar_text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('slider.response', slider.getRating())
    trials.addData('slider.rt', slider.getRT())
    # check responses
    if spacebar_continue.keys in ['', [], None]:  # No response was made
        spacebar_continue.keys = None
    trials.addData('spacebar_continue.keys',spacebar_continue.keys)
    if spacebar_continue.keys != None:  # we had a response
        trials.addData('spacebar_continue.rt', spacebar_continue.rt)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "additional_question" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
scale_slider.reset()
spacebar_continue_7.keys = []
spacebar_continue_7.rt = []
_spacebar_continue_7_allKeys = []
# keep track of which components have finished
additional_questionComponents = [section_text, ad_question_text1, scales_images, add_question_text2, scale_slider, next_slide_text, spacebar_continue_7]
for thisComponent in additional_questionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "additional_question" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *section_text* updates
    if section_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        section_text.frameNStart = frameN  # exact frame index
        section_text.tStart = t  # local t and not account for scr refresh
        section_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(section_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'section_text.started')
        section_text.setAutoDraw(True)
    
    # *ad_question_text1* updates
    if ad_question_text1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ad_question_text1.frameNStart = frameN  # exact frame index
        ad_question_text1.tStart = t  # local t and not account for scr refresh
        ad_question_text1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ad_question_text1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ad_question_text1.started')
        ad_question_text1.setAutoDraw(True)
    
    # *scales_images* updates
    if scales_images.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        scales_images.frameNStart = frameN  # exact frame index
        scales_images.tStart = t  # local t and not account for scr refresh
        scales_images.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(scales_images, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'scales_images.started')
        scales_images.setAutoDraw(True)
    
    # *add_question_text2* updates
    if add_question_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        add_question_text2.frameNStart = frameN  # exact frame index
        add_question_text2.tStart = t  # local t and not account for scr refresh
        add_question_text2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(add_question_text2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'add_question_text2.started')
        add_question_text2.setAutoDraw(True)
    
    # *scale_slider* updates
    if scale_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        scale_slider.frameNStart = frameN  # exact frame index
        scale_slider.tStart = t  # local t and not account for scr refresh
        scale_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(scale_slider, 'tStartRefresh')  # time at next scr refresh
        scale_slider.setAutoDraw(True)
    
    # *next_slide_text* updates
    if next_slide_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_slide_text.frameNStart = frameN  # exact frame index
        next_slide_text.tStart = t  # local t and not account for scr refresh
        next_slide_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_slide_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_slide_text.started')
        next_slide_text.setAutoDraw(True)
    
    # *spacebar_continue_7* updates
    waitOnFlip = False
    if spacebar_continue_7.status == NOT_STARTED and scale_slider.rating:
        # keep track of start time/frame for later
        spacebar_continue_7.frameNStart = frameN  # exact frame index
        spacebar_continue_7.tStart = t  # local t and not account for scr refresh
        spacebar_continue_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_7, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'spacebar_continue_7.started')
        spacebar_continue_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_7.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_7.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_7_allKeys.extend(theseKeys)
        if len(_spacebar_continue_7_allKeys):
            spacebar_continue_7.keys = _spacebar_continue_7_allKeys[-1].name  # just the last key pressed
            spacebar_continue_7.rt = _spacebar_continue_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in additional_questionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "additional_question" ---
for thisComponent in additional_questionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('scale_slider.response', scale_slider.getRating())
# check responses
if spacebar_continue_7.keys in ['', [], None]:  # No response was made
    spacebar_continue_7.keys = None
thisExp.addData('spacebar_continue_7.keys',spacebar_continue_7.keys)
if spacebar_continue_7.keys != None:  # we had a response
    thisExp.addData('spacebar_continue_7.rt', spacebar_continue_7.rt)
thisExp.nextEntry()
# the Routine "additional_question" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "debrief" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
spacebar_continue_3.keys = []
spacebar_continue_3.rt = []
_spacebar_continue_3_allKeys = []
# keep track of which components have finished
debriefComponents = [debrief_text, spacebar_continue_3, spacebar_debrief]
for thisComponent in debriefComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "debrief" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *debrief_text* updates
    if debrief_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        debrief_text.frameNStart = frameN  # exact frame index
        debrief_text.tStart = t  # local t and not account for scr refresh
        debrief_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(debrief_text, 'tStartRefresh')  # time at next scr refresh
        debrief_text.setAutoDraw(True)
    
    # *spacebar_continue_3* updates
    waitOnFlip = False
    if spacebar_continue_3.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_continue_3.frameNStart = frameN  # exact frame index
        spacebar_continue_3.tStart = t  # local t and not account for scr refresh
        spacebar_continue_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_3, 'tStartRefresh')  # time at next scr refresh
        spacebar_continue_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_3.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_3.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_3_allKeys.extend(theseKeys)
        if len(_spacebar_continue_3_allKeys):
            spacebar_continue_3.keys = [key.name for key in _spacebar_continue_3_allKeys]  # storing all keys
            spacebar_continue_3.rt = [key.rt for key in _spacebar_continue_3_allKeys]
            # a response ends the routine
            continueRoutine = False
    
    # *spacebar_debrief* updates
    if spacebar_debrief.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_debrief.frameNStart = frameN  # exact frame index
        spacebar_debrief.tStart = t  # local t and not account for scr refresh
        spacebar_debrief.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_debrief, 'tStartRefresh')  # time at next scr refresh
        spacebar_debrief.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in debriefComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "debrief" ---
for thisComponent in debriefComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if spacebar_continue_3.keys in ['', [], None]:  # No response was made
    spacebar_continue_3.keys = None
thisExp.addData('spacebar_continue_3.keys',spacebar_continue_3.keys)
if spacebar_continue_3.keys != None:  # we had a response
    thisExp.addData('spacebar_continue_3.rt', spacebar_continue_3.rt)
thisExp.nextEntry()
# the Routine "debrief" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "comments" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
textbox.reset()
# setup some python lists for storing info about the mouse_2
mouse_2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
commentsComponents = [textbox, mouse_2, continue_box, continue_text, comment_instructions]
for thisComponent in commentsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "comments" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textbox* updates
    if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox.frameNStart = frameN  # exact frame index
        textbox.tStart = t  # local t and not account for scr refresh
        textbox.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'textbox.started')
        textbox.setAutoDraw(True)
    # *mouse_2* updates
    if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_2.frameNStart = frameN  # exact frame index
        mouse_2.tStart = t  # local t and not account for scr refresh
        mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
        mouse_2.status = STARTED
        mouse_2.mouseClock.reset()
        prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue_box)
                    clickableList = continue_box
                except:
                    clickableList = [continue_box]
                for obj in clickableList:
                    if obj.contains(mouse_2):
                        gotValidClick = True
                        mouse_2.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # *continue_box* updates
    if continue_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue_box.frameNStart = frameN  # exact frame index
        continue_box.tStart = t  # local t and not account for scr refresh
        continue_box.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_box, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'continue_box.started')
        continue_box.setAutoDraw(True)
    
    # *continue_text* updates
    if continue_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue_text.frameNStart = frameN  # exact frame index
        continue_text.tStart = t  # local t and not account for scr refresh
        continue_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'continue_text.started')
        continue_text.setAutoDraw(True)
    
    # *comment_instructions* updates
    if comment_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        comment_instructions.frameNStart = frameN  # exact frame index
        comment_instructions.tStart = t  # local t and not account for scr refresh
        comment_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(comment_instructions, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'comment_instructions.started')
        comment_instructions.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in commentsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "comments" ---
for thisComponent in commentsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox.text',textbox.text)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# Run 'End Routine' code from total_duration
thisExp.addData("total_duration", timeStart.getTime())  # to get the time
# the Routine "comments" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "final" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
final_keypress.keys = []
final_keypress.rt = []
_final_keypress_allKeys = []
# keep track of which components have finished
finalComponents = [final_text, final_keypress]
for thisComponent in finalComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "final" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *final_text* updates
    if final_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        final_text.frameNStart = frameN  # exact frame index
        final_text.tStart = t  # local t and not account for scr refresh
        final_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(final_text, 'tStartRefresh')  # time at next scr refresh
        final_text.setAutoDraw(True)
    
    # *final_keypress* updates
    waitOnFlip = False
    if final_keypress.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        final_keypress.frameNStart = frameN  # exact frame index
        final_keypress.tStart = t  # local t and not account for scr refresh
        final_keypress.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(final_keypress, 'tStartRefresh')  # time at next scr refresh
        final_keypress.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(final_keypress.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(final_keypress.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if final_keypress.status == STARTED and not waitOnFlip:
        theseKeys = final_keypress.getKeys(keyList=['space'], waitRelease=False)
        _final_keypress_allKeys.extend(theseKeys)
        if len(_final_keypress_allKeys):
            final_keypress.keys = _final_keypress_allKeys[-1].name  # just the last key pressed
            final_keypress.rt = _final_keypress_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in finalComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "final" ---
for thisComponent in finalComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "final" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
