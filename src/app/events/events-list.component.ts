import { Component, OnInit } from '@angular/core'
import { EventsService } from './shared/events-service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import {ToastrService} from '../common/toastr.service'
declare let toastr
@Component(
    {
        template:
            `
    <div>
    <h1>
        Upcoming Angular Events
    </h1>
   
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
    <event-thumbnail #thumbnail (click)="handleThumbnailclick(event.name)"
    [event]="event"></event-thumbnail>
    </div>
    </div>
</div>
`,
styles:[`
.thumbnail{min-height:210px;}
.well div {color:red;}
.pad-left{margin-left:10px;}
`
]
        // <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    })
export class EventsListComponent implements OnInit {
    events:any[]
  constructor(private eventsService:EventsService,private toastr:ToastrService)
    {
      
      
    }
    ngOnInit()
    {this.events = this.eventsService.getEvents()}
    handleThumbnailclick(eventName)
    {
        this.toastr.success(eventName)
    }
    // handleEventClicked(data)
    // {
    //     console.log('received',data)
    // }
}
