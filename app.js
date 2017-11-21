new Vue({

  el: '#app',

  data: {
    event: {
      eventDate: 'August 14th - 18th',
      eventTitle:'Summer Festival',
      eventDescription:"It's back!",
      signUpText:'Add your name to the guest list for <em>exclusive</em> offers.',
      
    },
    newNameText: '',
    guestName:['James','Chris','Sam'],
    appStyles: {
      marginTop: '25px',
    },
    eventCapacity: 25,
    eventCapacityPercentage: 0    
  },

  methods: {
    formSubmitted: function() {
      console.log(this.newNameText);
      if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);
        this.newNameText = '';
        this.eventCapacityPercentage = this.guestName.length / this.eventCapacity * 100;
        console.log(this.eventCapacityPercentage);
      }
    }
  }
});
