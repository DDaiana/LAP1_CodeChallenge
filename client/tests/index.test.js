/** @jest-environment jsdom */

const renderDOM = require('./helpers');
let dom;
let document;

 
 describe('index.html', () => {
  
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

     test('it has a navigation bar', () => {
        let nav = document.querySelector('nav');
        expect(nav.textContent).toBeTruthy();
    })

    test('navigation bar has elements', () => {
        let ul = document.querySelector('ul');
        expect(ul.textContent).toBeTruthy();
    })
    

    test('it has a body', () => {
        let body = document.querySelector('body');
        expect(body.textContent).toBeTruthy();
    })

    test('it has a footer', () => {
        let footer = document.querySelector('footer');
        expect(footer.textContent).toBeTruthy();
    })
 })
