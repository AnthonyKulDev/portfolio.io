import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el:'.reviews',
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        // setGallerySize: false,
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true
      },
      reviews: []
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },

    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    },

    checkArrows(){
      let prevButton = this.$el.querySelector('.reviews__nav-block-previous');
      let nextButton = this.$el.querySelector('.reviews__nav-block-next');
      if(this.$refs.flickity.selectedIndex() == 0) {
        prevButton.disabled = true;
      } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1){
        nextButton.disabled = true;
      } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
      }
    },

    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);

        item.photo = requirePic;

        return item;
      });
    }
  },
  created() {
    const data = require("./reviews.json");
    this.reviews = this.makeArrayWithRequiredImages(data);
  }
});