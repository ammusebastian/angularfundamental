
import { Component,Input,Output,EventEmitter } from '@angular/core'

@Component
({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>
            {{event?.name}}
        </h2>
        <div>Date : {{event?.date}}</div>
        <div 
        [ngStyle] = "getStartTimeStyle()"

        [ngSwitch]="event?.time">Time : {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price :\$ {{event?.price}}</div>
        <div [hidden]="event?.location">
            <span>Location :{{event?.location?.address}}</span>
            <span class="pad-left"></span>
            <span>{{event?.location?.city}},{{event.location?.country}}</span>
        </div>
    </div>
`,
styles:[`
.bold{font-weight:bold;}
.green{ color:blue !important;}
`
]

})
// <button class="btn btn-primary" (click)="handleclickMe()">
        // Click Me!
        // </button>
export class EventThumbNailComponent
{
@Input() event:any
// @Output() eventClick=new EventEmitter()
// handleclickMe()
// {
//     this.eventClick.emit(this.event.name)
// }
getStartTimeStyle():any
{
   if(this.event && this.event.time==='8:00 am')
    return {color:'#003300','font-weight':'bold'}
    return {}
    
}
someproperty:any="some value"
logfoo()
{
    console.log('Foo')
}
}
