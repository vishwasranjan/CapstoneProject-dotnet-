import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable({
    providedIn:'root'
})
export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap = {
    "hi": "Hello",
    "who are you": "My name is COSMOS",
    "what is your role": "I am here for your help",
    "how do i register for debit card": "Go to cards section and then click on debit card from drop down menu",
    "how do i register for credit card": "Go to cards section and then click on credit card from drop down menu",
    "defaultmsg": "I can't understand your text. Can you please repeat"
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    if(question=="hi")
    return this.messageMap["hi"]
    else if(question=="who are you")
    return this.messageMap["who are you"]
    else if(question=="what is your role")
    return this.messageMap['what is your role']
    else if(question=="how do i register for debit card")
    return this.messageMap['how do i register for debit card']



    return this.messageMap['defaultmsg'];
  }
}