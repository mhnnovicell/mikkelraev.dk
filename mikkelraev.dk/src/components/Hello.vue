<template>
  <div>
    <d-container>
      <d-row>
        <d-col>
          <d-card>
            <d-card-img src="https://place-hold.it/300x200" top/>
            <d-card-body>
              <div>this is the body contents</div>
            </d-card-body>
          </d-card>
        </d-col>
        <d-col>
          <d-card>
            <d-card-body>
              <div>this is the body contents</div>
            </d-card-body>
            <d-card-img src="https://place-hold.it/300x200" bottom/>
          </d-card>
        </d-col>
      </d-row>
    </d-container>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
