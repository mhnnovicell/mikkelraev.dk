<template>
    <Scrollama
      :offset="0.5"
      :threshold="3"
      @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
    >
      <div class="graphic" slot="graphic">{{ currStep }}</div>
      <div class="step" data-step-no="1">hwst</div>
      <div class="step" data-step-no="2">step 2</div>
      <div class="step" data-step-no="3">step 3</div>
      <div class="step" data-step-no="4">step 4</div>
    </Scrollama>
</template>

<script>
// polyfill for IntersectionObserver
import 'intersection-observer'
// import Scrollama from '../../../src/Scrollama'
import Scrollama from 'vue-scrollama'
export default {
  components: {
    Scrollama
  },
  data() {
    return {
      currStep: null,
      steps: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]
    }
  },
  methods: {
    stepEnterHandler({element, direction, index}) {
      console.log({element, direction, index});
      this.currStepId = element.dataset.stepId
    }
  }
}
</script>

<style src="vue-scrollama/dist/vue-scrollama.css"></style>

<style lang="scss">

// additions and overrides of DOM elements vue-scrollama sets up
.scrollama-container {
  display: flex;
  .scrollama-graphic {
    flex: 1;
    height: 80vh;
    top: 10vh;
  }
  .scrollama-steps {
    flex: 1;
  }
}

// your elements styles
.graphic {
  height: 100%;
  margin: 0 3rem;
  border: 1px solid #ccc;
  background-color: #eee;
  font-size: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step {
  padding: 20vh 0;
  margin: 0 3rem;
  margin-bottom: 10vh;
  background-color: beige;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

<style scoped>
.step {
  width: 80%;
  max-width: 40rem;
  padding: 10rem 0;
  margin: 0 3rem 15rem;
  border: 1px solid #333;
  background-color: white;
  display: flex;
  justify-content: center;
}
.step.is-active {
  background-color: beige;
}
.graphic {
  height: 80vh;
  background-color: #DDD;
  border: 1px solid #333;
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}
</style>
