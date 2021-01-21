import {stationManagerPage} from './stationManager.js'
import {lineManagerPage} from './lineManager.js'
import {sectionManagerPage} from './sectionManager.js';
import {printSubWayMap} from './printSubWayMap.js'

export default function subwayApp(app) {
  const stationManagerButtion = document.getElementById("station-manager-button");
  const lineManagerButton = document.getElementById("line-manager-button");
  const sectionManagerButton = document.getElementById("section-manager-button");
  const mapPrintManagerButton = document.getElementById("map-print-manager-button");
  const contentSectionTag = document.getElementById("content-section");

  const clickStationManagerBtn = () => {
    stationManagerPage(contentSectionTag);
  }
  
  const clickLineManagerBtn = () => {
    lineManagerPage(contentSectionTag);
  }

  const clickSectionManagerBtn = () => {
    sectionManagerPage(contentSectionTag);
  }

  const clickMapPrintManagerBtn = () => {
    printSubWayMap(contentSectionTag);
  }

  stationManagerButtion.addEventListener('click', clickStationManagerBtn);
  lineManagerButton.addEventListener('click', clickLineManagerBtn);
  sectionManagerButton.addEventListener('click', clickSectionManagerBtn);
  mapPrintManagerButton.addEventListener('click', clickMapPrintManagerBtn);
}

export {subwayApp}