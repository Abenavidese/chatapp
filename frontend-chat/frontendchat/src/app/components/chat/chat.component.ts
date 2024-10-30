import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

public message: string = '';
public messages: [] = [];

constructor(private chatService: ChatService){}


  public sendMessage(){
    this.chatService.sendMessage(this.message)
  }

  public listMessages(){}
}


