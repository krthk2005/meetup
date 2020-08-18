import { Component, OnInit } from '@angular/core';
import { NewMeetingService } from 'src/app/shared/services/new-meeting/new-meeting.service';
import { Subscription } from 'rxjs';
import { IMeeting } from 'src/app/models/meeting';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  meetingSubscription: Subscription;
  rippleDisabled: boolean;
  constructor(public newMeetingService : NewMeetingService) { }

  ngOnInit(): void {
    this.newMeetingService.getMeetingList();
    this.meetingSubscription = this.newMeetingService.getMeetingList$().subscribe(isLatest => {
      this.newMeetingService.getMeetingList();
    });
  }  
  
  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
  }

}
