import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket ) { }

  public sendMessage(message:String){
    this.socket.emit('message', message);
  }

  public listMessages(){}
}
