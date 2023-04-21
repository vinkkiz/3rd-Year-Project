# Project Title: Default Interpretation of Colour in Choropleth Maps: An Online Experiment

## Experiment and Stimuli Creation 
*  `BZ.js` was used by pavlovia.org to run the experiment online (BZ-legacy-browsers.jswas used by Pavlovia for browsers running older versions of javascript)
*  `BZ.psyexp` is the local PsychoPy version of the experiment script. Due to inconsistencies between PsychoPy (offline) and pavlovia.org (online), text formatting in BZ.psyexp may differ from what participants viewed. If reviewers wish to view the experiment, we recommend using PsychoPy to sync the BZ.psyexp file to a pavlovia account, in order to run the experiment online.
*  `map_generator` contains stimuli, the json files of the maps and the code to generate these stimuli:
*  `images/pointed_maps_images` contains the choropleth maps shown to participants
*  `all_trials_list.xlsx` contains the list of all trials participants were exposed to.
*  All other files in the folder are resources required by the experiment scripts.

## Data Analysis
*  `data_analysis/Database_AllParticipants.csv` is the collected data from pavlovia database.
*  `data_analysis/data_analysis.ipynb`  is the python script that contains all analysis code. 
