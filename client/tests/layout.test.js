const renderDOM = require('./helpers');
let dom;
let document;

//  const fs = require('fs');
//  const path = require('path');
//  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
 
 
 describe('index.html', () => {
    //  beforeEach(() => {
    //      document.documentElement.innerHTML = html.toString();
    //  })
 
    beforeEach( async () => {
        dom = await renderDOM('index.html');
        document = await dom.window.document
        })

     test('it has a title', () => {
        let header = document.querySelector('title');
        expect(header.textContent).toBeTruthy();
    })

     test('it has Homepage as title', () => {
         let header = document.querySelector('title');
         expect(header.textContent).toContain('Homepage');
     })
 })
