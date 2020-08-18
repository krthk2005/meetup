import { Injectable } from '@angular/core';
import { IMeeting } from 'src/app/models/meeting';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewMeetingService {
  LOCALSTORAGE_MEETING = "meetingInfo";
  meetingInfo: IMeeting[] = [];
  meetingId: number=0;

  private meetingSubject = new Subject<Boolean>();

  constructor() { }

  saveMeeting(newMeeting) {
    this.getMeetingList();
    this.setMeetingId(newMeeting);
    this.meetingInfo.push(newMeeting);
    this.saveMeetingInLocalStorage();
  }

  getMeetingList(){
    this.meetingInfo = this.getMeetingFromLocalStorage() ? this.getMeetingFromLocalStorage() : [];
  }

  setMeetingId(meeting){
    meeting.id = this.meetingInfo.length ? Math.max(...this.meetingInfo.map(user => user.id)) + 1 : 1;
  }

  // Subjects subscription
  callMeetingList(isMeeting: Boolean) {
    this.meetingSubject.next(isMeeting);
  }
  
  getMeetingList$() : Observable<Boolean>{
    return this.meetingSubject.asObservable();
  }  

  // Local storage Data
  saveMeetingInLocalStorage(){
    localStorage.setItem(this.LOCALSTORAGE_MEETING, JSON.stringify(this.meetingInfo));
  }

  getMeetingFromLocalStorage(){
    return JSON.parse(localStorage.getItem(this.LOCALSTORAGE_MEETING));
  }

}
