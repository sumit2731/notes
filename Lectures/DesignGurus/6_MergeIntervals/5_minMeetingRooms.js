
class Meeting {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  //my solution
  function min_meeting_rooms(meetings) {
    let minRooms = 1, inProgressMeetings = [], currentIndex = 0;
    // O(nLog n)
    meetings.sort((meet1, meet2) => (meet1.start - meet2.start));
    //n
    while(currentIndex < meetings.length) {
        let currentMeeting = meetings[currentIndex], inProgressMeetingIndex = 0;
        //k
        while(inProgressMeetingIndex < inProgressMeetings.length) {
            if(currentMeeting.start >= inProgressMeetings[inProgressMeetingIndex].end) {
                //k
                inProgressMeetings.splice(inProgressMeetingIndex,1);
            } else inProgressMeetingIndex++;
        }
        inProgressMeetings.push(currentMeeting);
        minRooms = Math.max(minRooms, inProgressMeetings.length);
        currentIndex++; 
    }
    // TODO: Write your code here
    return minRooms;
  }
  
  
  console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
  console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
  console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
  console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
  