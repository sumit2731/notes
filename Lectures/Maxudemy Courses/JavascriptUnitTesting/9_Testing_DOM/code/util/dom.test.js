import { it, vi,expect,beforeEach } from 'vitest';


import {showError} from './dom';


/**
 * This will fail, first because document is not defined
 * then because it is not able to read a element from DOM
 */

// it('first test', () => {
//     showError('test');
// })

import fs from 'fs';
import path from 'path';


import { Window } from 'happy-dom';

/**
 * Here we are loading our html page into virtual dom provided by happy-dom
 */

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    //this will append then html to existing document,but we need to overwrite it
    //so we set innerHTML to empty string
    document.write(htmlDocumentContent);
});

it('should add a error paragraph to the id="error" elements', () => {
  showError('test');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
})

it('should not contain the paragraph initially', () => {

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
})

it('should output the provided message in paragraph', () => {
    const testErrorMessage = 'Test';
    showError(testErrorMessage);
  
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;
  
    expect(errorParagraph.textContent).toBe(testErrorMessage);
  })