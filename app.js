new Vue({

  el: '#app',

  data: {
    event: {
      eventDate: 'Event Date',
      eventTitle:'Event Title',
      eventDescription:'Event Description',
      signUpText:'Add your name to the guest list for <em>exclusive</em> offers.'
    },
    newNameText: '',
    guestName:['James','Chris','Sam'],
    formSubmitClass: '',
    appStyles: {
      marginTop: '25px',
    }
  },

  methods: {
    formSubmitted: function() {
      console.log(this.newNameText);
      if(this.newNameText.length > 0) {
        this.guestName.push(this.newNameText);
        this.newNameText = '';
        this.formSubmitClass = 'submitted';
      }
    }
  }
});
