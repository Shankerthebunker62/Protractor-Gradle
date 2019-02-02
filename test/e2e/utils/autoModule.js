/***********************************************************************
 *                                        						       *
 * Author: Siddharth Shanker               						       *
 * Date: December, 2018.                            			   	   *
 * GitHub: https://github.com/Shankerthebunker62/WebsiteAutomation.git *
 *                                        						       *
 ***********************************************************************/

// Project location path
const dirPath = browser.params.dirPath;

// https://www.npmjs.com/package/autoit
let autoit = require('autoit');

// https://www.npmjs.com/package/shelljs
let shell = require('shelljs');

// https://www.npmjs.com/package/child_process
let child = require('child_process');