import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewMeetingService } from '../../services/new-meeting/new-meeting.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.scss']
})

export class NewMeetingComponent implements OnInit {
  meetingForm: any;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewMeetingComponent>, public newMeetingService : NewMeetingService) { 
  }

  ngOnInit(): void {
    this.meetingForm = this.formBuilder.group({
      meetingName: ['', [Validators.required, Validators.minLength(2)]], // , ValidationsService.emailValidator
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      locationName:['']
    });
  }
  
  saveMeeting() {
    if (this.meetingForm.dirty && this.meetingForm.valid) {
      this.newMeetingService.saveMeeting(this.meetingForm.value);
      this.newMeetingService.callMeetingList(true);
    }
    close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
