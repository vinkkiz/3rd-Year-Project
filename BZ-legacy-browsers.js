/*********** 
 * Bz Test *
 ***********/


// store info about the experiment session:
let expName = 'BZ';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const info_sheet_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(info_sheet_loopLoopBegin(info_sheet_loopLoopScheduler));
flowScheduler.add(info_sheet_loopLoopScheduler);
flowScheduler.add(info_sheet_loopLoopEnd);
const consent_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(consent_loopLoopBegin(consent_loopLoopScheduler));
flowScheduler.add(consent_loopLoopScheduler);
flowScheduler.add(consent_loopLoopEnd);
flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
flowScheduler.add(educationRoutineBegin());
flowScheduler.add(educationRoutineEachFrame());
flowScheduler.add(educationRoutineEnd());
flowScheduler.add(literacyRoutineBegin());
flowScheduler.add(literacyRoutineEachFrame());
flowScheduler.add(literacyRoutineEnd());
const instructions_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_loopLoopBegin(instructions_loopLoopScheduler));
flowScheduler.add(instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(additional_questionRoutineBegin());
flowScheduler.add(additional_questionRoutineEachFrame());
flowScheduler.add(additional_questionRoutineEnd());
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(commentsRoutineBegin());
flowScheduler.add(commentsRoutineEachFrame());
flowScheduler.add(commentsRoutineEnd());
flowScheduler.add(finalRoutineBegin());
flowScheduler.add(finalRoutineEachFrame());
flowScheduler.add(finalRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/pointed_maps_images/10cs.jpeg', 'path': 'images/pointed_maps_images/10cs.jpeg'},
    {'name': 'images/pointed_maps_images/16is.jpeg', 'path': 'images/pointed_maps_images/16is.jpeg'},
    {'name': 'images/pointed_maps_images/2in.jpeg', 'path': 'images/pointed_maps_images/2in.jpeg'},
    {'name': 'images/pointed_maps_images/17cs.jpeg', 'path': 'images/pointed_maps_images/17cs.jpeg'},
    {'name': 'images/pointed_maps_images/19is.jpeg', 'path': 'images/pointed_maps_images/19is.jpeg'},
    {'name': 'images/pointed_maps_images/2cn.jpeg', 'path': 'images/pointed_maps_images/2cn.jpeg'},
    {'name': 'images/pointed_maps_images/10in.jpeg', 'path': 'images/pointed_maps_images/10in.jpeg'},
    {'name': 'images/pointed_maps_images/12cs.jpeg', 'path': 'images/pointed_maps_images/12cs.jpeg'},
    {'name': 'images/pointed_maps_images/18cn.jpeg', 'path': 'images/pointed_maps_images/18cn.jpeg'},
    {'name': 'images/pointed_maps_images/1in.jpeg', 'path': 'images/pointed_maps_images/1in.jpeg'},
    {'name': 'images/pointed_maps_images/20in.jpeg', 'path': 'images/pointed_maps_images/20in.jpeg'},
    {'name': 'wenqi_instructions.csv', 'path': 'wenqi_instructions.csv'},
    {'name': 'images/two_scales.JPEG', 'path': 'images/two_scales.JPEG'},
    {'name': 'images/pointed_maps_images/8in.jpeg', 'path': 'images/pointed_maps_images/8in.jpeg'},
    {'name': 'images/pointed_maps_images/17cn.jpeg', 'path': 'images/pointed_maps_images/17cn.jpeg'},
    {'name': 'images/pointed_maps_images/19cn.jpeg', 'path': 'images/pointed_maps_images/19cn.jpeg'},
    {'name': 'images/pointed_maps_images/13cn.jpeg', 'path': 'images/pointed_maps_images/13cn.jpeg'},
    {'name': 'images/pointed_maps_images/1is.jpeg', 'path': 'images/pointed_maps_images/1is.jpeg'},
    {'name': 'images/pointed_maps_images/20is.jpeg', 'path': 'images/pointed_maps_images/20is.jpeg'},
    {'name': 'images/pointed_maps_images/11cn.jpeg', 'path': 'images/pointed_maps_images/11cn.jpeg'},
    {'name': 'readme.md', 'path': 'readme.md'},
    {'name': 'images/pointed_maps_images/12cn.jpeg', 'path': 'images/pointed_maps_images/12cn.jpeg'},
    {'name': 'images/pointed_maps_images/6cn.jpeg', 'path': 'images/pointed_maps_images/6cn.jpeg'},
    {'name': 'images/pointed_maps_images/9in.jpeg', 'path': 'images/pointed_maps_images/9in.jpeg'},
    {'name': 'index.html', 'path': 'index.html'},
    {'name': 'images/pointed_maps_images/13is.jpeg', 'path': 'images/pointed_maps_images/13is.jpeg'},
    {'name': 'images/pointed_maps_images/2cs.jpeg', 'path': 'images/pointed_maps_images/2cs.jpeg'},
    {'name': 'images/pointed_maps_images/5in.jpeg', 'path': 'images/pointed_maps_images/5in.jpeg'},
    {'name': 'images/pointed_maps_images/8cn.jpeg', 'path': 'images/pointed_maps_images/8cn.jpeg'},
    {'name': 'images/pointed_maps_images/5cn.jpeg', 'path': 'images/pointed_maps_images/5cn.jpeg'},
    {'name': 'images/pointed_maps_images/17is.jpeg', 'path': 'images/pointed_maps_images/17is.jpeg'},
    {'name': 'images/pointed_maps_images/6is.jpeg', 'path': 'images/pointed_maps_images/6is.jpeg'},
    {'name': 'images/pointed_maps_images/3cn.jpeg', 'path': 'images/pointed_maps_images/3cn.jpeg'},
    {'name': 'images/pointed_maps_images/13cs.jpeg', 'path': 'images/pointed_maps_images/13cs.jpeg'},
    {'name': 'images/pointed_maps_images/10is.jpeg', 'path': 'images/pointed_maps_images/10is.jpeg'},
    {'name': 'images/pointed_maps_images/16cs.jpeg', 'path': 'images/pointed_maps_images/16cs.jpeg'},
    {'name': 'images/pointed_maps_images/11cs.jpeg', 'path': 'images/pointed_maps_images/11cs.jpeg'},
    {'name': 'images/pointed_maps_images/5cs.jpeg', 'path': 'images/pointed_maps_images/5cs.jpeg'},
    {'name': 'images/pointed_maps_images/7cn.jpeg', 'path': 'images/pointed_maps_images/7cn.jpeg'},
    {'name': 'images/pointed_maps_images/11in.jpeg', 'path': 'images/pointed_maps_images/11in.jpeg'},
    {'name': 'images/pointed_maps_images/15is.jpeg', 'path': 'images/pointed_maps_images/15is.jpeg'},
    {'name': 'images/pointed_maps_images/9is.jpeg', 'path': 'images/pointed_maps_images/9is.jpeg'},
    {'name': 'images/pointed_maps_images/4cn.jpeg', 'path': 'images/pointed_maps_images/4cn.jpeg'},
    {'name': 'info/A7_Project1_PIS-4.png', 'path': 'info/A7_Project1_PIS-4.png'},
    {'name': 'images/pointed_maps_images/14is.jpeg', 'path': 'images/pointed_maps_images/14is.jpeg'},
    {'name': 'images/pointed_maps_images/13in.jpeg', 'path': 'images/pointed_maps_images/13in.jpeg'},
    {'name': 'images/pointed_maps_images/6in.jpeg', 'path': 'images/pointed_maps_images/6in.jpeg'},
    {'name': 'images/pointed_maps_images/19in.jpeg', 'path': 'images/pointed_maps_images/19in.jpeg'},
    {'name': 'images/pointed_maps_images/8is.jpeg', 'path': 'images/pointed_maps_images/8is.jpeg'},
    {'name': 'images/pointed_maps_images/15in.jpeg', 'path': 'images/pointed_maps_images/15in.jpeg'},
    {'name': 'images/pointed_maps_images/18in.jpeg', 'path': 'images/pointed_maps_images/18in.jpeg'},
    {'name': 'images/pointed_maps_images/7in.jpeg', 'path': 'images/pointed_maps_images/7in.jpeg'},
    {'name': 'images/pointed_maps_images/14in.jpeg', 'path': 'images/pointed_maps_images/14in.jpeg'},
    {'name': 'images/pointed_maps_images/4cs.jpeg', 'path': 'images/pointed_maps_images/4cs.jpeg'},
    {'name': 'images/pointed_maps_images/20cn.jpeg', 'path': 'images/pointed_maps_images/20cn.jpeg'},
    {'name': 'images/pointed_maps_images/1cn.jpeg', 'path': 'images/pointed_maps_images/1cn.jpeg'},
    {'name': 'images/slider_image.png', 'path': 'images/slider_image.png'},
    {'name': 'all_trials_list.xlsx', 'path': 'all_trials_list.xlsx'},
    {'name': 'images/pointed_maps_images/9cs.jpeg', 'path': 'images/pointed_maps_images/9cs.jpeg'},
    {'name': 'images/pointed_maps_images/3is.jpeg', 'path': 'images/pointed_maps_images/3is.jpeg'},
    {'name': 'images/pointed_maps_images/1cs.jpeg', 'path': 'images/pointed_maps_images/1cs.jpeg'},
    {'name': 'images/pointed_maps_images/10cn.jpeg', 'path': 'images/pointed_maps_images/10cn.jpeg'},
    {'name': 'images/pointed_maps_images/14cs.jpeg', 'path': 'images/pointed_maps_images/14cs.jpeg'},
    {'name': 'consent.csv', 'path': 'consent.csv'},
    {'name': 'info/A7_Project1_PIS-2.png', 'path': 'info/A7_Project1_PIS-2.png'},
    {'name': 'images/pointed_maps_images/2is.jpeg', 'path': 'images/pointed_maps_images/2is.jpeg'},
    {'name': 'images/pointed_maps_images/7is.jpeg', 'path': 'images/pointed_maps_images/7is.jpeg'},
    {'name': 'images/pointed_maps_images/15cs.jpeg', 'path': 'images/pointed_maps_images/15cs.jpeg'},
    {'name': 'images/pointed_maps_images/12in.jpeg', 'path': 'images/pointed_maps_images/12in.jpeg'},
    {'name': 'images/pointed_maps_images/15cn.jpeg', 'path': 'images/pointed_maps_images/15cn.jpeg'},
    {'name': 'images/pointed_maps_images/3cs.jpeg', 'path': 'images/pointed_maps_images/3cs.jpeg'},
    {'name': 'images/pointed_maps_images/18is.jpeg', 'path': 'images/pointed_maps_images/18is.jpeg'},
    {'name': 'images/pointed_maps_images/16in.jpeg', 'path': 'images/pointed_maps_images/16in.jpeg'},
    {'name': 'images/pointed_maps_images/20cs.jpeg', 'path': 'images/pointed_maps_images/20cs.jpeg'},
    {'name': 'images/pointed_maps_images/17in.jpeg', 'path': 'images/pointed_maps_images/17in.jpeg'},
    {'name': 'images/pointed_maps_images/12is.jpeg', 'path': 'images/pointed_maps_images/12is.jpeg'},
    {'name': 'images/pointed_maps_images/11is.jpeg', 'path': 'images/pointed_maps_images/11is.jpeg'},
    {'name': 'images/pointed_maps_images/9cn.jpeg', 'path': 'images/pointed_maps_images/9cn.jpeg'},
    {'name': 'images/pointed_maps_images/4in.jpeg', 'path': 'images/pointed_maps_images/4in.jpeg'},
    {'name': 'info/A7_Project1_PIS-3.png', 'path': 'info/A7_Project1_PIS-3.png'},
    {'name': 'images/pointed_maps_images/3in.jpeg', 'path': 'images/pointed_maps_images/3in.jpeg'},
    {'name': 'images/pointed_maps_images/7cs.jpeg', 'path': 'images/pointed_maps_images/7cs.jpeg'},
    {'name': 'images/pointed_maps_images/5is.jpeg', 'path': 'images/pointed_maps_images/5is.jpeg'},
    {'name': 'images/pointed_maps_images/4is.jpeg', 'path': 'images/pointed_maps_images/4is.jpeg'},
    {'name': 'images/pointed_maps_images/8cs.jpeg', 'path': 'images/pointed_maps_images/8cs.jpeg'},
    {'name': 'images/pointed_maps_images/16cn.jpeg', 'path': 'images/pointed_maps_images/16cn.jpeg'},
    {'name': 'info/A7_Project1_PIS-1.png', 'path': 'info/A7_Project1_PIS-1.png'},
    {'name': 'images/pointed_maps_images/19cs.jpeg', 'path': 'images/pointed_maps_images/19cs.jpeg'},
    {'name': 'images/pointed_maps_images/6cs.jpeg', 'path': 'images/pointed_maps_images/6cs.jpeg'},
    {'name': 'images/pointed_maps_images/14cn.jpeg', 'path': 'images/pointed_maps_images/14cn.jpeg'},
    {'name': 'images/pointed_maps_images/18cs.jpeg', 'path': 'images/pointed_maps_images/18cs.jpeg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introClock;
var intro_text2;
var intro_continue2;
var timeStart;
var info_sheetClock;
var current_display;
var end_loop;
var info_sheet_image;
var info_sheet_move;
var counter;
var move_text;
var info_sheet_next;
var consentClock;
var study_title;
var item_text;
var keypress_instructions;
var consent_key;
var demographicsClock;
var ageResp;
var age;
var gender;
var genderResp1;
var genderResp2;
var continue_box_2;
var continue_text_2;
var mouse_3;
var educationClock;
var edu_labels;
var edu_text;
var edu_slider;
var spacebar_continue_5;
var literacyClock;
var literacy_top;
var questions_text;
var q1_slider;
var q2_slider;
var q3_slider;
var q4_slider;
var q5_slider;
var spacebar_continue_4;
var instructionsClock;
var slide_number;
var instruction_text;
var spacebar_3;
var instruction_image;
var EXsentence1;
var next_slide_key;
var question_text_2;
var slider_image;
var triangle;
var arrow;
var trialClock;
var sentence_text;
var image;
var question_text;
var slider;
var spacebar_continue;
var trial_counter;
var counter_text;
var trial_counter_text;
var spacebar_text;
var additional_questionClock;
var scale_labels;
var section_text;
var ad_question_text1;
var scales_images;
var add_question_text2;
var scale_slider;
var next_slide_text;
var spacebar_continue_7;
var debriefClock;
var debrief_text;
var spacebar_continue_3;
var spacebar_debrief;
var commentsClock;
var textbox;
var mouse_2;
var continue_box;
var continue_text;
var comment_instructions;
var finalClock;
var final_text;
var final_keypress;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  intro_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text2',
    text: "IMPORTANT: Your browser should now be in full-screen mode. Please do not exit full-screen mode.\n\nYou must complete this experiment using either a laptop or desktop computer. \n\nPlease do not complete the experiment twice if you experience issues, contact the researcher on Prolific.\n\nPlease read the following information sheet. \n\nPress the 'spacebar' to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  intro_continue2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_4
  timeStart = new util.Clock();
  
  // Initialize components for Routine "info_sheet"
  info_sheetClock = new util.Clock();
  // Run 'Begin Experiment' code from info_sheet_code
  current_display = 1;
  
  end_loop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  info_sheet_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'info_sheet_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.1], size : [1.05, 0.7],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  info_sheet_move = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'counter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.29)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  move_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'move_text',
    text: "Use your arrow keys '←' '→' to view the next page (or previous page).",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  info_sheet_next = new visual.TextStim({
    win: psychoJS.window,
    name: 'info_sheet_next',
    text: "When you have finished reading page 4 of 4, press 'Enter/Return' to move on to the consent form. \nIf you do not wish to continue, press ‘Escape’ to quit the experiment.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.43)], height: 0.025,  wrapWidth: 1.1, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  study_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'study_title',
    text: 'Decision-Making With Maps',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  item_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'item_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keypress_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'keypress_instructions',
    text: 'Press ‘y’ if you consent to the above.\nOtherwise, press ‘Escape’ to quit the experiment.\n\nThe personal information we collect and use to conduct this research will be processed in accordance with UK data protection law as explained in the Participant Information Sheet and the Privacy Notice for Research Participants: documents.manchester.ac.uk/display.aspx?DocID=37095 ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  consent_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  ageResp = new visual.TextBox({
    win: psychoJS.window,
    name: 'ageResp',
    text: '',
    font: 'Arial',
    pos: [(- 0.07), 0.23], letterHeight: 0.025,
    size: [0.14, 0.04],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: 0.0 
  });
  
  age = new visual.TextStim({
    win: psychoJS.window,
    name: 'age',
    text: 'Please enter your age (in years):',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.28], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  gender = new visual.TextStim({
    win: psychoJS.window,
    name: 'gender',
    text: 'How would you describe your gender?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  genderResp1 = new visual.Slider({
    win: psychoJS.window, name: 'genderResp1',
    startValue: undefined,
    size: [0.015, 0.15], pos: [(- 0.19), (- 0.05)], ori: 0.0, units: 'height',
    labels: ["Prefer not to say", "In another way:", "Non-binary", "Man", "Woman"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: true,
  });
  
  genderResp2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'genderResp2',
    text: '',
    font: 'Arial',
    pos: [0.1, (- 0.09)], letterHeight: 0.025,
    size: [0.15, 0.04],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -4.0 
  });
  
  continue_box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_box_2', 
    width: [0.17, 0.06][0], height: [0.17, 0.06][1],
    ori: 0.0, pos: [0, (- 0.4)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  continue_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_2',
    text: 'Continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "education"
  educationClock = new util.Clock();
  // Run 'Begin Experiment' code from code_7
  edu_labels = ["No formal qualications", "Secondary education (e.g. GED/GCSE)", "High school diploma/A-levels", "Technical/community college", "Undergraduate degree (BA/BSc/other)", "Graduate degree (MA/MSc/MPhil/other)", "Doctorate degree (PhD/other)", "Don't know / not applicable"];
  edu_labels.reverse();
  
  edu_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'edu_text',
    text: "Please select the highest level of education you have completed so far. Press the 'spacebar' when you have finished.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  edu_slider = new visual.Slider({
    win: psychoJS.window, name: 'edu_slider',
    startValue: undefined,
    size: [0.03, 0.5], pos: [0, (- 0.05)], ori: -0.0, units: 'height',
    labels: edu_labels, fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('Black'), markerColor: new util.Color('Red'), lineColor: new util.Color('Black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  spacebar_continue_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "literacy"
  literacyClock = new util.Clock();
  literacy_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'literacy_top',
    text: "Please answer the following questions about using graphs and charts. Click on the slider next to each question to indicate your response. Press the 'spacebar' when you have finished:",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions_text',
    text: 'How good are you at working with bar charts?\n\n\n\nHow good are you at working with line plots?\n\n\n\nHow good are you at working with pie charts?\n\n\n\nHow good are you at inferring the size of a bar in a bar chart?\n\n\n\nHow good are you at determining the difference between two bars in a bar chart?',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.05)], height: 0.03,  wrapWidth: 0.75, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  q1_slider = new visual.Slider({
    win: psychoJS.window, name: 'q1_slider',
    startValue: undefined,
    size: [0.55, 0.03], pos: [0.39, 0.27], ori: 0.0, units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], fontSize: 0.022, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  q2_slider = new visual.Slider({
    win: psychoJS.window, name: 'q2_slider',
    startValue: undefined,
    size: [0.55, 0.03], pos: [0.39, 0.13], ori: 0.0, units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], fontSize: 0.022, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  q3_slider = new visual.Slider({
    win: psychoJS.window, name: 'q3_slider',
    startValue: undefined,
    size: [0.55, 0.03], pos: [0.39, (- 0.02)], ori: 0.0, units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], fontSize: 0.022, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  q4_slider = new visual.Slider({
    win: psychoJS.window, name: 'q4_slider',
    startValue: undefined,
    size: [0.55, 0.03], pos: [0.39, (- 0.16)], ori: 0.0, units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], fontSize: 0.022, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  q5_slider = new visual.Slider({
    win: psychoJS.window, name: 'q5_slider',
    startValue: undefined,
    size: [0.55, 0.03], pos: [0.39, (- 0.33)], ori: 0.0, units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], fontSize: 0.022, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color('Red'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  spacebar_continue_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  slide_number = new visual.TextStim({
    win: psychoJS.window,
    name: 'slide_number',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.29], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  spacebar_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_3',
    text: "Press the 'spacebar' to move on to the next slide.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.44)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  instruction_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruction_image', units : undefined, 
    image : 'images/pointed_maps_images/9cs.jpeg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.075)], size : [0.36, 0.36],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  EXsentence1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'EXsentence1',
    text: 'This map shows the levels of a certain type of pollution in this country:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.14], height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -4.0 
  });
  
  next_slide_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  question_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text_2',
    text: 'How severe do you think the environmental pollution in this pointed region is?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.29)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: -6.0 
  });
  
  slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_image', units : undefined, 
    image : 'images/slider_image.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.6, 0.09],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  triangle = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle', 
    vertices: [[-[0.06, 0.03][0]/2.0, -[0.06, 0.03][1]/2.0], [+[0.06, 0.03][0]/2.0, -[0.06, 0.03][1]/2.0], [0, [0.06, 0.03][1]/2.0]],
    ori: 180.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  arrow = new visual.TextStim({
    win: psychoJS.window,
    name: 'arrow',
    text: '→',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  sentence_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.39], height: 0.03,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.06], size : [0.6, 0.43],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [0.5, 0.04], pos: [0, (- 0.35)], ori: 0.0, units: 'height',
    labels: ["Not very severe", "Very severe"], fontSize: 0.03, ticks: [1, 2],
    granularity: undefined, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color('White'), markerColor: new util.Color('White'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  spacebar_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from counter_code
  trial_counter = 0;
  counter_text = null;
  
  trial_counter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.43], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  spacebar_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_text',
    text: "Press the 'spacebar' to continue when you have made your response.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "additional_question"
  additional_questionClock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  scale_labels = ["A", "B"];
  scale_labels.reverse();
  
  section_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'section_text',
    text: 'Additional Question',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  ad_question_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ad_question_text1',
    text: 'Which scale do you think is more suitable to represent the data?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.29], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  scales_images = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scales_images', units : undefined, 
    image : 'images/two_scales.JPEG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  add_question_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'add_question_text2',
    text: 'Please choose from "A" or "B":',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  scale_slider = new visual.Slider({
    win: psychoJS.window, name: 'scale_slider',
    startValue: undefined,
    size: [0.03, 0.05], pos: [0, (- 0.33)], ori: 0.0, units: 'height',
    labels: scale_labels, fontSize: 0.04, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color([1.0, 1.0, 1.0]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  next_slide_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_slide_text',
    text: "Press the 'spacebar' to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.44)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -6.0 
  });
  
  spacebar_continue_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debrief_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_text',
    text: 'IMPORTANT: Your submission is not yet completed, so please do not quit the experiment. Continue to follow all instructions so that your submission can be completed. \n\nPlease note that the standarised units and all pollution data presented in this experiment were fictional.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  spacebar_continue_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  spacebar_debrief = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_debrief',
    text: "Press the 'spacebar' to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "comments"
  commentsClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.05)], letterHeight: 0.04,
    size: [0.8, 0.5],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.05,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  continue_box = new visual.Rect ({
    win: psychoJS.window, name: 'continue_box', 
    width: [0.17, 0.06][0], height: [0.17, 0.06][1],
    ori: 0.0, pos: [0, (- 0.4)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  continue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text',
    text: 'Continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  comment_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'comment_instructions',
    text: 'What strategies did you use during the study? Do you have any comments about the study? (optional)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "final"
  finalClock = new util.Clock();
  final_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'final_text',
    text: "The experiment has now finished.\n\nPlease press the 'spacebar' and follow all the instructions to complete your submission. \n\nThank you for taking part.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  final_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _intro_continue2_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_continue2.keys = undefined;
    intro_continue2.rt = undefined;
    _intro_continue2_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(intro_text2);
    introComponents.push(intro_continue2);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text2* updates
    if (t >= 0.0 && intro_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text2.tStart = t;  // (not accounting for frame time here)
      intro_text2.frameNStart = frameN;  // exact frame index
      
      intro_text2.setAutoDraw(true);
    }

    
    // *intro_continue2* updates
    if (t >= 3 && intro_continue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_continue2.tStart = t;  // (not accounting for frame time here)
      intro_continue2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_continue2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_continue2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_continue2.clearEvents(); });
    }

    if (intro_continue2.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_continue2.getKeys({keyList: ['space'], waitRelease: false});
      _intro_continue2_allKeys = _intro_continue2_allKeys.concat(theseKeys);
      if (_intro_continue2_allKeys.length > 0) {
        intro_continue2.keys = _intro_continue2_allKeys[_intro_continue2_allKeys.length - 1].name;  // just the last key pressed
        intro_continue2.rt = _intro_continue2_allKeys[_intro_continue2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    intro_continue2.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var info_sheet_loop;
function info_sheet_loopLoopBegin(info_sheet_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    info_sheet_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'info_sheet_loop'
    });
    psychoJS.experiment.addLoop(info_sheet_loop); // add the loop to the experiment
    currentLoop = info_sheet_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    info_sheet_loop.forEach(function() {
      snapshot = info_sheet_loop.getSnapshot();
    
      info_sheet_loopLoopScheduler.add(importConditions(snapshot));
      info_sheet_loopLoopScheduler.add(info_sheetRoutineBegin(snapshot));
      info_sheet_loopLoopScheduler.add(info_sheetRoutineEachFrame());
      info_sheet_loopLoopScheduler.add(info_sheetRoutineEnd(snapshot));
      info_sheet_loopLoopScheduler.add(info_sheet_loopLoopEndIteration(info_sheet_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function info_sheet_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(info_sheet_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function info_sheet_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var consent_loop;
function consent_loopLoopBegin(consent_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    consent_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'consent.csv',
      seed: undefined, name: 'consent_loop'
    });
    psychoJS.experiment.addLoop(consent_loop); // add the loop to the experiment
    currentLoop = consent_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    consent_loop.forEach(function() {
      snapshot = consent_loop.getSnapshot();
    
      consent_loopLoopScheduler.add(importConditions(snapshot));
      consent_loopLoopScheduler.add(consentRoutineBegin(snapshot));
      consent_loopLoopScheduler.add(consentRoutineEachFrame());
      consent_loopLoopScheduler.add(consentRoutineEnd(snapshot));
      consent_loopLoopScheduler.add(consent_loopLoopEndIteration(consent_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function consent_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(consent_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function consent_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instructions_loop;
function instructions_loopLoopBegin(instructions_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'wenqi_instructions.csv',
      seed: undefined, name: 'instructions_loop'
    });
    psychoJS.experiment.addLoop(instructions_loop); // add the loop to the experiment
    currentLoop = instructions_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instructions_loop.forEach(function() {
      snapshot = instructions_loop.getSnapshot();
    
      instructions_loopLoopScheduler.add(importConditions(snapshot));
      instructions_loopLoopScheduler.add(instructionsRoutineBegin(snapshot));
      instructions_loopLoopScheduler.add(instructionsRoutineEachFrame());
      instructions_loopLoopScheduler.add(instructionsRoutineEnd(snapshot));
      instructions_loopLoopScheduler.add(instructions_loopLoopEndIteration(instructions_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instructions_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructions_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'all_trials_list.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var current_str;
var display_this;
var _end_loop_allKeys;
var _info_sheet_move_allKeys;
var info_sheetComponents;
function info_sheetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'info_sheet' ---
    t = 0;
    info_sheetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from info_sheet_code
    current_str = current_display.toString();
    display_this = (("info/A7_Project1_PIS-" + current_str) + ".png");
    counter_text = (("Page " + current_str) + " of 4");
    
    end_loop.keys = undefined;
    end_loop.rt = undefined;
    _end_loop_allKeys = [];
    info_sheet_image.setImage(display_this);
    info_sheet_move.keys = undefined;
    info_sheet_move.rt = undefined;
    _info_sheet_move_allKeys = [];
    counter.setText(counter_text);
    // keep track of which components have finished
    info_sheetComponents = [];
    info_sheetComponents.push(end_loop);
    info_sheetComponents.push(info_sheet_image);
    info_sheetComponents.push(info_sheet_move);
    info_sheetComponents.push(counter);
    info_sheetComponents.push(move_text);
    info_sheetComponents.push(info_sheet_next);
    
    info_sheetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function info_sheetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'info_sheet' ---
    // get current time
    t = info_sheetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from info_sheet_code
    if ((end_loop.keys === "return")) {
        continueRoutine = false;
    }
    
    
    // *end_loop* updates
    if (t >= 0.0 && end_loop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_loop.tStart = t;  // (not accounting for frame time here)
      end_loop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_loop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_loop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_loop.clearEvents(); });
    }

    if (end_loop.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_loop.getKeys({keyList: ['return'], waitRelease: false});
      _end_loop_allKeys = _end_loop_allKeys.concat(theseKeys);
      if (_end_loop_allKeys.length > 0) {
        end_loop.keys = _end_loop_allKeys[_end_loop_allKeys.length - 1].name;  // just the last key pressed
        end_loop.rt = _end_loop_allKeys[_end_loop_allKeys.length - 1].rt;
      }
    }
    
    
    // *info_sheet_image* updates
    if (t >= 0.0 && info_sheet_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_sheet_image.tStart = t;  // (not accounting for frame time here)
      info_sheet_image.frameNStart = frameN;  // exact frame index
      
      info_sheet_image.setAutoDraw(true);
    }

    
    // *info_sheet_move* updates
    if (t >= 0.0 && info_sheet_move.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_sheet_move.tStart = t;  // (not accounting for frame time here)
      info_sheet_move.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { info_sheet_move.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { info_sheet_move.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { info_sheet_move.clearEvents(); });
    }

    if (info_sheet_move.status === PsychoJS.Status.STARTED) {
      let theseKeys = info_sheet_move.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _info_sheet_move_allKeys = _info_sheet_move_allKeys.concat(theseKeys);
      if (_info_sheet_move_allKeys.length > 0) {
        info_sheet_move.keys = _info_sheet_move_allKeys[_info_sheet_move_allKeys.length - 1].name;  // just the last key pressed
        info_sheet_move.rt = _info_sheet_move_allKeys[_info_sheet_move_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *counter* updates
    if (t >= 0.0 && counter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      counter.tStart = t;  // (not accounting for frame time here)
      counter.frameNStart = frameN;  // exact frame index
      
      counter.setAutoDraw(true);
    }

    
    // *move_text* updates
    if (t >= 0.0 && move_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      move_text.tStart = t;  // (not accounting for frame time here)
      move_text.frameNStart = frameN;  // exact frame index
      
      move_text.setAutoDraw(true);
    }

    
    // *info_sheet_next* updates
    if (t >= 0.0 && info_sheet_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_sheet_next.tStart = t;  // (not accounting for frame time here)
      info_sheet_next.frameNStart = frameN;  // exact frame index
      
      info_sheet_next.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    info_sheetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function info_sheetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'info_sheet' ---
    info_sheetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from info_sheet_code
    if (((info_sheet_move.keys === "right") && (current_display < 4))) {
        current_display = (current_display + 1);
    } else {
        if (((info_sheet_move.keys === "left") && (current_display > 1))) {
            current_display = (current_display - 1);
        }
    }
    if ((end_loop.keys === "return")) {
        info_sheet_loop.finished = true;
    }
    
    end_loop.stop();
    info_sheet_move.stop();
    // the Routine "info_sheet" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _consent_key_allKeys;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    item_text.setText(consent_item);
    consent_key.keys = undefined;
    consent_key.rt = undefined;
    _consent_key_allKeys = [];
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(study_title);
    consentComponents.push(item_text);
    consentComponents.push(keypress_instructions);
    consentComponents.push(consent_key);
    
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *study_title* updates
    if (t >= 0.0 && study_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_title.tStart = t;  // (not accounting for frame time here)
      study_title.frameNStart = frameN;  // exact frame index
      
      study_title.setAutoDraw(true);
    }

    
    // *item_text* updates
    if (t >= 0.0 && item_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_text.tStart = t;  // (not accounting for frame time here)
      item_text.frameNStart = frameN;  // exact frame index
      
      item_text.setAutoDraw(true);
    }

    
    // *keypress_instructions* updates
    if (t >= 0.0 && keypress_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keypress_instructions.tStart = t;  // (not accounting for frame time here)
      keypress_instructions.frameNStart = frameN;  // exact frame index
      
      keypress_instructions.setAutoDraw(true);
    }

    
    // *consent_key* updates
    if (t >= 2 && consent_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_key.tStart = t;  // (not accounting for frame time here)
      consent_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_key.clearEvents(); });
    }

    if (consent_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_key.getKeys({keyList: ['y'], waitRelease: false});
      _consent_key_allKeys = _consent_key_allKeys.concat(theseKeys);
      if (_consent_key_allKeys.length > 0) {
        consent_key.keys = _consent_key_allKeys[_consent_key_allKeys.length - 1].name;  // just the last key pressed
        consent_key.rt = _consent_key_allKeys[_consent_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    consentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(consent_key.corr, level);
    }
    psychoJS.experiment.addData('consent_key.keys', consent_key.keys);
    if (typeof consent_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_key.rt', consent_key.rt);
        routineTimer.reset();
        }
    
    consent_key.stop();
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics' ---
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ageResp.setText('');
    ageResp.refresh();
    genderResp1.reset()
    genderResp2.setText('');
    genderResp2.refresh();
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(ageResp);
    demographicsComponents.push(age);
    demographicsComponents.push(gender);
    demographicsComponents.push(genderResp1);
    demographicsComponents.push(genderResp2);
    demographicsComponents.push(continue_box_2);
    demographicsComponents.push(continue_text_2);
    demographicsComponents.push(mouse_3);
    
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function demographicsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics' ---
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ageResp* updates
    if (t >= 0 && ageResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ageResp.tStart = t;  // (not accounting for frame time here)
      ageResp.frameNStart = frameN;  // exact frame index
      
      ageResp.setAutoDraw(true);
    }

    
    // *age* updates
    if (t >= 0.0 && age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age.tStart = t;  // (not accounting for frame time here)
      age.frameNStart = frameN;  // exact frame index
      
      age.setAutoDraw(true);
    }

    
    // *gender* updates
    if (t >= 0.0 && gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender.tStart = t;  // (not accounting for frame time here)
      gender.frameNStart = frameN;  // exact frame index
      
      gender.setAutoDraw(true);
    }

    
    // *genderResp1* updates
    if (t >= 0.0 && genderResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genderResp1.tStart = t;  // (not accounting for frame time here)
      genderResp1.frameNStart = frameN;  // exact frame index
      
      genderResp1.setAutoDraw(true);
    }

    
    // *genderResp2* updates
    if (t >= 0 && genderResp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genderResp2.tStart = t;  // (not accounting for frame time here)
      genderResp2.frameNStart = frameN;  // exact frame index
      
      genderResp2.setAutoDraw(true);
    }

    
    // *continue_box_2* updates
    if (t >= 0.0 && continue_box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_box_2.tStart = t;  // (not accounting for frame time here)
      continue_box_2.frameNStart = frameN;  // exact frame index
      
      continue_box_2.setAutoDraw(true);
    }

    
    // *continue_text_2* updates
    if (t >= 0.0 && continue_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_2.tStart = t;  // (not accounting for frame time here)
      continue_text_2.frameNStart = frameN;  // exact frame index
      
      continue_text_2.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (((ageResp.text && genderResp1.rating)) && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_box_2]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function demographicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics' ---
    demographicsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ageResp.text',ageResp.text)
    psychoJS.experiment.addData('genderResp1.response', genderResp1.getRating());
    psychoJS.experiment.addData('genderResp1.rt', genderResp1.getRT());
    psychoJS.experiment.addData('genderResp2.text',genderResp2.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    if (mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0]);}
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spacebar_continue_5_allKeys;
var educationComponents;
function educationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'education' ---
    t = 0;
    educationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    edu_slider.reset()
    spacebar_continue_5.keys = undefined;
    spacebar_continue_5.rt = undefined;
    _spacebar_continue_5_allKeys = [];
    // keep track of which components have finished
    educationComponents = [];
    educationComponents.push(edu_text);
    educationComponents.push(edu_slider);
    educationComponents.push(spacebar_continue_5);
    
    educationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function educationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'education' ---
    // get current time
    t = educationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *edu_text* updates
    if (t >= 0.0 && edu_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_text.tStart = t;  // (not accounting for frame time here)
      edu_text.frameNStart = frameN;  // exact frame index
      
      edu_text.setAutoDraw(true);
    }

    
    // *edu_slider* updates
    if (t >= 0.0 && edu_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_slider.tStart = t;  // (not accounting for frame time here)
      edu_slider.frameNStart = frameN;  // exact frame index
      
      edu_slider.setAutoDraw(true);
    }

    
    // *spacebar_continue_5* updates
    if ((edu_slider.rating) && spacebar_continue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_5.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_5.clearEvents(); });
    }

    if (spacebar_continue_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_5.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_5_allKeys = _spacebar_continue_5_allKeys.concat(theseKeys);
      if (_spacebar_continue_5_allKeys.length > 0) {
        spacebar_continue_5.keys = _spacebar_continue_5_allKeys[_spacebar_continue_5_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue_5.rt = _spacebar_continue_5_allKeys[_spacebar_continue_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    educationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function educationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'education' ---
    educationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('edu_slider.response', edu_slider.getRating());
    spacebar_continue_5.stop();
    // the Routine "education" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spacebar_continue_4_allKeys;
var all_ratings;
var literacyComponents;
function literacyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'literacy' ---
    t = 0;
    literacyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    q1_slider.reset()
    q2_slider.reset()
    q3_slider.reset()
    q4_slider.reset()
    q5_slider.reset()
    spacebar_continue_4.keys = undefined;
    spacebar_continue_4.rt = undefined;
    _spacebar_continue_4_allKeys = [];
    // Run 'Begin Routine' code from code_3
    all_ratings = false;
    questions_text.setAlignHoriz('left') 
    literacy_top.setAlignHoriz('left') 
    // keep track of which components have finished
    literacyComponents = [];
    literacyComponents.push(literacy_top);
    literacyComponents.push(questions_text);
    literacyComponents.push(q1_slider);
    literacyComponents.push(q2_slider);
    literacyComponents.push(q3_slider);
    literacyComponents.push(q4_slider);
    literacyComponents.push(q5_slider);
    literacyComponents.push(spacebar_continue_4);
    
    literacyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function literacyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'literacy' ---
    // get current time
    t = literacyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *literacy_top* updates
    if (t >= 0.0 && literacy_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      literacy_top.tStart = t;  // (not accounting for frame time here)
      literacy_top.frameNStart = frameN;  // exact frame index
      
      literacy_top.setAutoDraw(true);
    }

    
    // *questions_text* updates
    if (t >= 0.0 && questions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questions_text.tStart = t;  // (not accounting for frame time here)
      questions_text.frameNStart = frameN;  // exact frame index
      
      questions_text.setAutoDraw(true);
    }

    
    // *q1_slider* updates
    if (t >= 0.0 && q1_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q1_slider.tStart = t;  // (not accounting for frame time here)
      q1_slider.frameNStart = frameN;  // exact frame index
      
      q1_slider.setAutoDraw(true);
    }

    
    // *q2_slider* updates
    if (t >= 0.0 && q2_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q2_slider.tStart = t;  // (not accounting for frame time here)
      q2_slider.frameNStart = frameN;  // exact frame index
      
      q2_slider.setAutoDraw(true);
    }

    
    // *q3_slider* updates
    if (t >= 0.0 && q3_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q3_slider.tStart = t;  // (not accounting for frame time here)
      q3_slider.frameNStart = frameN;  // exact frame index
      
      q3_slider.setAutoDraw(true);
    }

    
    // *q4_slider* updates
    if (t >= 0.0 && q4_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q4_slider.tStart = t;  // (not accounting for frame time here)
      q4_slider.frameNStart = frameN;  // exact frame index
      
      q4_slider.setAutoDraw(true);
    }

    
    // *q5_slider* updates
    if (t >= 0.0 && q5_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q5_slider.tStart = t;  // (not accounting for frame time here)
      q5_slider.frameNStart = frameN;  // exact frame index
      
      q5_slider.setAutoDraw(true);
    }

    
    // *spacebar_continue_4* updates
    if ((all_ratings) && spacebar_continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_4.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_4.clearEvents(); });
    }

    if (spacebar_continue_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_4.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_4_allKeys = _spacebar_continue_4_allKeys.concat(theseKeys);
      if (_spacebar_continue_4_allKeys.length > 0) {
        spacebar_continue_4.keys = _spacebar_continue_4_allKeys[_spacebar_continue_4_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue_4.rt = _spacebar_continue_4_allKeys[_spacebar_continue_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from code_3
    all_ratings = (((((q1_slider.rating > 0) & (q2_slider.rating > 0)) & (q3_slider.rating > 0)) & (q4_slider.rating > 0)) & (q5_slider.rating > 0));
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    literacyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function literacyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'literacy' ---
    literacyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('q1_slider.response', q1_slider.getRating());
    psychoJS.experiment.addData('q2_slider.response', q2_slider.getRating());
    psychoJS.experiment.addData('q3_slider.response', q3_slider.getRating());
    psychoJS.experiment.addData('q4_slider.response', q4_slider.getRating());
    psychoJS.experiment.addData('q5_slider.response', q5_slider.getRating());
    spacebar_continue_4.stop();
    // the Routine "literacy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _next_slide_key_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slide_number.setText(slide_text);
    instruction_text.setText(instruction);
    next_slide_key.keys = undefined;
    next_slide_key.rt = undefined;
    _next_slide_key_allKeys = [];
    arrow.setPos([arrow_posx, arrow_posy]);
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(slide_number);
    instructionsComponents.push(instruction_text);
    instructionsComponents.push(spacebar_3);
    instructionsComponents.push(instruction_image);
    instructionsComponents.push(EXsentence1);
    instructionsComponents.push(next_slide_key);
    instructionsComponents.push(question_text_2);
    instructionsComponents.push(slider_image);
    instructionsComponents.push(triangle);
    instructionsComponents.push(arrow);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slide_number* updates
    if (t >= 0.0 && slide_number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide_number.tStart = t;  // (not accounting for frame time here)
      slide_number.frameNStart = frameN;  // exact frame index
      
      slide_number.setAutoDraw(true);
    }

    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    
    // *spacebar_3* updates
    if (t >= 0.0 && spacebar_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_3.tStart = t;  // (not accounting for frame time here)
      spacebar_3.frameNStart = frameN;  // exact frame index
      
      spacebar_3.setAutoDraw(true);
    }

    
    // *instruction_image* updates
    if (t >= 0.0 && instruction_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_image.tStart = t;  // (not accounting for frame time here)
      instruction_image.frameNStart = frameN;  // exact frame index
      
      instruction_image.setAutoDraw(true);
    }

    
    // *EXsentence1* updates
    if (t >= 0.0 && EXsentence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EXsentence1.tStart = t;  // (not accounting for frame time here)
      EXsentence1.frameNStart = frameN;  // exact frame index
      
      EXsentence1.setAutoDraw(true);
    }

    
    // *next_slide_key* updates
    if (t >= 2 && next_slide_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_slide_key.tStart = t;  // (not accounting for frame time here)
      next_slide_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_slide_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_slide_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_slide_key.clearEvents(); });
    }

    if (next_slide_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_slide_key.getKeys({keyList: ['space'], waitRelease: false});
      _next_slide_key_allKeys = _next_slide_key_allKeys.concat(theseKeys);
      if (_next_slide_key_allKeys.length > 0) {
        next_slide_key.keys = _next_slide_key_allKeys[_next_slide_key_allKeys.length - 1].name;  // just the last key pressed
        next_slide_key.rt = _next_slide_key_allKeys[_next_slide_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *question_text_2* updates
    if (t >= 0.0 && question_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text_2.tStart = t;  // (not accounting for frame time here)
      question_text_2.frameNStart = frameN;  // exact frame index
      
      question_text_2.setAutoDraw(true);
    }

    
    // *slider_image* updates
    if (t >= 0.0 && slider_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_image.tStart = t;  // (not accounting for frame time here)
      slider_image.frameNStart = frameN;  // exact frame index
      
      slider_image.setAutoDraw(true);
    }

    
    // *triangle* updates
    if (t >= 0.0 && triangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle.tStart = t;  // (not accounting for frame time here)
      triangle.frameNStart = frameN;  // exact frame index
      
      triangle.setAutoDraw(true);
    }

    
    if (triangle.status === PsychoJS.Status.STARTED){ // only update if being drawn
      triangle.setPos([triangle_pos, (- 0.335)], false);
    }
    
    // *arrow* updates
    if (t >= 0.0 && arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow.tStart = t;  // (not accounting for frame time here)
      arrow.frameNStart = frameN;  // exact frame index
      
      arrow.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_slide_key.corr, level);
    }
    psychoJS.experiment.addData('next_slide_key.keys', next_slide_key.keys);
    if (typeof next_slide_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_slide_key.rt', next_slide_key.rt);
        routineTimer.reset();
        }
    
    next_slide_key.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spacebar_continue_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    slider.granularity = Number.parseFloat(granularity);
    
    sentence_text.setText(sentence);
    image.setImage(file_path);
    question_text.setText(question);
    slider.reset()
    spacebar_continue.keys = undefined;
    spacebar_continue.rt = undefined;
    _spacebar_continue_allKeys = [];
    // Run 'Begin Routine' code from counter_code
    trial_counter = (trial_counter + 1);
    counter_text = (("Trial " + trial_counter.toString()) + " of 80");
    
    trial_counter_text.setText(counter_text);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(sentence_text);
    trialComponents.push(image);
    trialComponents.push(question_text);
    trialComponents.push(slider);
    trialComponents.push(spacebar_continue);
    trialComponents.push(trial_counter_text);
    trialComponents.push(spacebar_text);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sentence_text* updates
    if (t >= 0.0 && sentence_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence_text.tStart = t;  // (not accounting for frame time here)
      sentence_text.frameNStart = frameN;  // exact frame index
      
      sentence_text.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *spacebar_continue* updates
    if ((slider.rating) && spacebar_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue.tStart = t;  // (not accounting for frame time here)
      spacebar_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue.clearEvents(); });
    }

    if (spacebar_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_allKeys = _spacebar_continue_allKeys.concat(theseKeys);
      if (_spacebar_continue_allKeys.length > 0) {
        spacebar_continue.keys = _spacebar_continue_allKeys[_spacebar_continue_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue.rt = _spacebar_continue_allKeys[_spacebar_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_counter_text* updates
    if (t >= 0.0 && trial_counter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_text.tStart = t;  // (not accounting for frame time here)
      trial_counter_text.frameNStart = frameN;  // exact frame index
      
      trial_counter_text.setAutoDraw(true);
    }

    
    // *spacebar_text* updates
    if (t >= 0.0 && spacebar_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_text.tStart = t;  // (not accounting for frame time here)
      spacebar_text.frameNStart = frameN;  // exact frame index
      
      spacebar_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacebar_continue.corr, level);
    }
    psychoJS.experiment.addData('spacebar_continue.keys', spacebar_continue.keys);
    if (typeof spacebar_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacebar_continue.rt', spacebar_continue.rt);
        routineTimer.reset();
        }
    
    spacebar_continue.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spacebar_continue_7_allKeys;
var additional_questionComponents;
function additional_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'additional_question' ---
    t = 0;
    additional_questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    scale_slider.reset()
    spacebar_continue_7.keys = undefined;
    spacebar_continue_7.rt = undefined;
    _spacebar_continue_7_allKeys = [];
    // keep track of which components have finished
    additional_questionComponents = [];
    additional_questionComponents.push(section_text);
    additional_questionComponents.push(ad_question_text1);
    additional_questionComponents.push(scales_images);
    additional_questionComponents.push(add_question_text2);
    additional_questionComponents.push(scale_slider);
    additional_questionComponents.push(next_slide_text);
    additional_questionComponents.push(spacebar_continue_7);
    
    additional_questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function additional_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'additional_question' ---
    // get current time
    t = additional_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *section_text* updates
    if (t >= 0.0 && section_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      section_text.tStart = t;  // (not accounting for frame time here)
      section_text.frameNStart = frameN;  // exact frame index
      
      section_text.setAutoDraw(true);
    }

    
    // *ad_question_text1* updates
    if (t >= 0.0 && ad_question_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ad_question_text1.tStart = t;  // (not accounting for frame time here)
      ad_question_text1.frameNStart = frameN;  // exact frame index
      
      ad_question_text1.setAutoDraw(true);
    }

    
    // *scales_images* updates
    if (t >= 0.0 && scales_images.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scales_images.tStart = t;  // (not accounting for frame time here)
      scales_images.frameNStart = frameN;  // exact frame index
      
      scales_images.setAutoDraw(true);
    }

    
    // *add_question_text2* updates
    if (t >= 0.0 && add_question_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_question_text2.tStart = t;  // (not accounting for frame time here)
      add_question_text2.frameNStart = frameN;  // exact frame index
      
      add_question_text2.setAutoDraw(true);
    }

    
    // *scale_slider* updates
    if (t >= 0.0 && scale_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scale_slider.tStart = t;  // (not accounting for frame time here)
      scale_slider.frameNStart = frameN;  // exact frame index
      
      scale_slider.setAutoDraw(true);
    }

    
    // *next_slide_text* updates
    if (t >= 0.0 && next_slide_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_slide_text.tStart = t;  // (not accounting for frame time here)
      next_slide_text.frameNStart = frameN;  // exact frame index
      
      next_slide_text.setAutoDraw(true);
    }

    
    // *spacebar_continue_7* updates
    if ((scale_slider.rating) && spacebar_continue_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_7.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_7.clearEvents(); });
    }

    if (spacebar_continue_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_7.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_7_allKeys = _spacebar_continue_7_allKeys.concat(theseKeys);
      if (_spacebar_continue_7_allKeys.length > 0) {
        spacebar_continue_7.keys = _spacebar_continue_7_allKeys[_spacebar_continue_7_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue_7.rt = _spacebar_continue_7_allKeys[_spacebar_continue_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    additional_questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function additional_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'additional_question' ---
    additional_questionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('scale_slider.response', scale_slider.getRating());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacebar_continue_7.corr, level);
    }
    psychoJS.experiment.addData('spacebar_continue_7.keys', spacebar_continue_7.keys);
    if (typeof spacebar_continue_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacebar_continue_7.rt', spacebar_continue_7.rt);
        routineTimer.reset();
        }
    
    spacebar_continue_7.stop();
    // the Routine "additional_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spacebar_continue_3_allKeys;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief' ---
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spacebar_continue_3.keys = undefined;
    spacebar_continue_3.rt = undefined;
    _spacebar_continue_3_allKeys = [];
    debrief_text.setAlignHoriz('left') 
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debrief_text);
    debriefComponents.push(spacebar_continue_3);
    debriefComponents.push(spacebar_debrief);
    
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief' ---
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_text* updates
    if (t >= 0.0 && debrief_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_text.tStart = t;  // (not accounting for frame time here)
      debrief_text.frameNStart = frameN;  // exact frame index
      
      debrief_text.setAutoDraw(true);
    }

    
    // *spacebar_continue_3* updates
    if (t >= 3.0 && spacebar_continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_3.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_3.clearEvents(); });
    }

    if (spacebar_continue_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_3.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_3_allKeys = _spacebar_continue_3_allKeys.concat(theseKeys);
      if (_spacebar_continue_3_allKeys.length > 0) {
        spacebar_continue_3.keys = _spacebar_continue_3_allKeys.map((key) => key.name);  // storing all keys
        spacebar_continue_3.rt = _spacebar_continue_3_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *spacebar_debrief* updates
    if (t >= 0.0 && spacebar_debrief.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_debrief.tStart = t;  // (not accounting for frame time here)
      spacebar_debrief.frameNStart = frameN;  // exact frame index
      
      spacebar_debrief.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief' ---
    debriefComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacebar_continue_3.corr, level);
    }
    psychoJS.experiment.addData('spacebar_continue_3.keys', spacebar_continue_3.keys);
    if (typeof spacebar_continue_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacebar_continue_3.rt', spacebar_continue_3.rt);
        routineTimer.reset();
        }
    
    spacebar_continue_3.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var commentsComponents;
function commentsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comments' ---
    t = 0;
    commentsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.setText('');
    textbox.refresh();
    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    commentsComponents = [];
    commentsComponents.push(textbox);
    commentsComponents.push(mouse_2);
    commentsComponents.push(continue_box);
    commentsComponents.push(continue_text);
    commentsComponents.push(comment_instructions);
    
    commentsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function commentsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comments' ---
    // get current time
    t = commentsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_box]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_box* updates
    if (t >= 0.0 && continue_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_box.tStart = t;  // (not accounting for frame time here)
      continue_box.frameNStart = frameN;  // exact frame index
      
      continue_box.setAutoDraw(true);
    }

    
    // *continue_text* updates
    if (t >= 0.0 && continue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text.tStart = t;  // (not accounting for frame time here)
      continue_text.frameNStart = frameN;  // exact frame index
      
      continue_text.setAutoDraw(true);
    }

    
    // *comment_instructions* updates
    if (t >= 0.0 && comment_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comment_instructions.tStart = t;  // (not accounting for frame time here)
      comment_instructions.frameNStart = frameN;  // exact frame index
      
      comment_instructions.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    commentsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function commentsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comments' ---
    commentsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    // Run 'End Routine' code from total_duration
    psychoJS.experiment.addData("total_duration", timeStart.getTime());
    
    // the Routine "comments" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _final_keypress_allKeys;
var finalComponents;
function finalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'final' ---
    t = 0;
    finalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    final_keypress.keys = undefined;
    final_keypress.rt = undefined;
    _final_keypress_allKeys = [];
    // keep track of which components have finished
    finalComponents = [];
    finalComponents.push(final_text);
    finalComponents.push(final_keypress);
    
    finalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'final' ---
    // get current time
    t = finalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *final_text* updates
    if (t >= 0.0 && final_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_text.tStart = t;  // (not accounting for frame time here)
      final_text.frameNStart = frameN;  // exact frame index
      
      final_text.setAutoDraw(true);
    }

    
    // *final_keypress* updates
    if (t >= 2 && final_keypress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_keypress.tStart = t;  // (not accounting for frame time here)
      final_keypress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { final_keypress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { final_keypress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { final_keypress.clearEvents(); });
    }

    if (final_keypress.status === PsychoJS.Status.STARTED) {
      let theseKeys = final_keypress.getKeys({keyList: ['space'], waitRelease: false});
      _final_keypress_allKeys = _final_keypress_allKeys.concat(theseKeys);
      if (_final_keypress_allKeys.length > 0) {
        final_keypress.keys = _final_keypress_allKeys[_final_keypress_allKeys.length - 1].name;  // just the last key pressed
        final_keypress.rt = _final_keypress_allKeys[_final_keypress_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'final' ---
    finalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    final_keypress.stop();
    // the Routine "final" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
