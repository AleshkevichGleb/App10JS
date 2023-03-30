"use strict"

{
    

    const questions = [{
        question: 'Your name',
        defaultValue: 'gleb',
        field: 'name',
    }, {
        question: 'Your age',
        defaultValue: '25',
        field: 'age',
    },{
        question: 'Your phone',
        defaultValue: '+375292013245',
        field: 'phone',
    },{
        question: 'Your email',
        defaultValue: 'test@gmail.com',
        field: 'email',
    }];
    
    
    function createName(question) {
        const answer = prompt(question.question, question.defaultValue);
        let testAwswer = /^[a-z0-9_-]{3,16}$/.test(answer);
        
        if(!testAwswer) {
            alert('Invalyd user name');
            return createName(question);
        }
    
        return answer;
    }
    
    function createAge(question) {
        const answer = +prompt(question.question, question.defaultValue);
       
        if(isNaN(answer) || answer < 18 || !Number.isInteger(answer)){
            alert('Invalyd user age');
            return createAge(question);
        }
    
        return answer;
    }
    
    function createPhone(question) {
        const answer = prompt(question.question, question.defaultValue);
        let testAwswer = /^[\d+][\d()\ -]{10,14}\d$/.test(answer);
        
        if(!testAwswer){
            alert('Invalyd user phone');
            return createPhone(question);
        }
    
        return answer;
    }
    
    
    function createEmail(question) {
        const answer = prompt(question.question, question.defaultValue);
        let testAwswer = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(answer);
        
        if(!testAwswer){
            alert('Invalyd user email');
            return createEmail(question);
        }
    
        return answer;
    }
    
    function addContact() {
        let contactData = {};
    
        questions.forEach(question => {
            if(question.field === 'name'){
                contactData.name = createName(question);
            }
    
            if(question.field === 'age'){
                contactData.age = createAge(question);
            }
    
            if(question.field === 'phone'){
                contactData.phone = createPhone(question);
            }
    
            if(question.field === 'email'){
                contactData.email = createEmail(question);
            }
        })
    
        return this.contacts = [...this.contacts, contactData];
    }
    
    
    function editContact(name, key, value) {
        
        return this.contacts = this.contacts.map(contact => {
            if(contact.name === name){
                return {...contact, [key]: value}
            }else {
                return contact;
            }
        })
    }
    
    function removeContact(name) {
        return this.contacts = this.contacts.filter(contact => contact.name !== name);
    }
    
    function showContact() {
        for(let prop of this.contacts) {
            console.log(prop);
        }
    }
    
    function Contacts() {
        this.contacts = [];
    
        this.addContact = addContact;
    
        this.editContact = editContact;
    
        this.removeContact = removeContact;
    
        this.showContact = showContact;
    }

    function newContact() {
        Contacts.apply(this, arguments);
        
        this.showContact = function() {
            for(let elem of this.contacts){
                console.group(elem.name);
                for(let prop in elem) {
                    console.log(prop +': ' + elem[prop]);
                }
                console.groupEnd();
            }
        };
    }
    
    let contact = new newContact();
    contact.addContact();
    contact.addContact();
    contact.addContact();
    contact.showContact();
    
    
}


//dop 
{
    let DOMControl = function() {

        this.create = function(tagName) {
            const tag = document.createElement(tagName);
            return tag;
        }

        this.attr = function(elem, attribute, valueAtrribute) {
            if(arguments.length === 3 ){
                this.element = this.create(elem);
                this.element.setAttribute(attribute, valueAtrribute)
                document.body.append(this.element)
                return this.element.getAttribute(attribute);
            } else {
                this.element = this.create(elem);
                document.body.append(this.element)
            }
        }

        this.html = function(elem, value) {
            this.searchElem = document.querySelector(elem);
            this.searchElem.innerHTML = value;
        }
        
        this.search = function(selector) {
            this.search = document.querySelectorAll(selector);
            return this.search;
        }

        this.addClass = function(elem, className) {
            this.elem = document.querySelector(elem);
            this.elem.classList.add(className);
        }

        this.removeClass = function(elem, className) {
            this.elem = document.querySelector(elem);
            this.elem.classList.remove(className);
        }

        this.toggleClass = function(elem, className) {
            this.elemToggle = document.querySelector(elem);
            this.elemToggle.addEventListener('click', () => {
                this.elemToggle.classList.toggle(className)
            })
        }

        this.hasClass = function(elem, className) { 
            this.elem = document.querySelector(elem);
            if(this.elem.classList.contains(className)) return true;
            else return false;
        }

        this.append = function(elem, newElem, beforeElem) {
            if(beforeElem !== undefined){
                this.beforeElem = document.querySelector(beforeElem);
                this.newElem = document.createElement(newElem);
                this.beforeElem.before(this.newElem);
            }else {
                this.elem = document.querySelector(elem);
                this.newElem = document.createElement(newElem);
                this.elem.append(this.newElem);   
            }
        }

        this.on = function(elem, event, funcName) {
            this.elem = document.querySelector(elem);
            this.elem.addEventListener(event, funcName);
        }

    }

    let try1 = new DOMControl();
    console.log(try1.attr('input', 'type', 'checkbox'));
    try1.attr('div');
    try1.html('div', 'asfsafsdfasafs');  
    console.log(try1.search('div'));
    try1.addClass('div', 'classForDiv');
    try1.addClass('div', 'SecondclassForDiv');
    try1.removeClass('div', 'classForDiv');
    try1.toggleClass('input', 'active');
    console.log(try1.hasClass('div', 'SecondclassForDiv'));
    try1.append('div', 'p');
    try1.html('p', 'ppppppppp' )
    try1.append('div', 'input', 'p'); 
    try1.on('p', 'click', func)


    function func(event) {
        console.log(event.clientX, event.clientY);

        const ask = prompt('Заменить текст на ', this.innerHTML);
        this.innerHTML = ask;
    }
}