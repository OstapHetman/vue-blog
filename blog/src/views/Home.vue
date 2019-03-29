<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <!-- Start Jumotron -->
        <div class="jumbotron">
          <div class="container">
            <h1 class="text-center display-4">This is simple blog using Markdown</h1>
          </div>
        </div>
        <!-- End Jumbotron -->
      </div>

      <section v-for="(section, index) in Object.keys(entries)" :key="index">
        <div class="row">
          <div class="col-12">
            <h3 class="text-warning">{{ section }}</h3>
          </div>
          <div v-for="entry in entries[section]" :key="entry.id" class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ entry.title }}</h5>
                <small class="text-muted">{{ entry.date }}</small>
                <p class="card-text">{{entry.description}}</p>
                <a
                  href="#"
                  @click="$router.push({name: entry.id})"
                  class="btn btn-info"
                >Read more &raquo;</a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <hr>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/blogs.json";
export default {
  name: "home",
  computed: {
    entries() {
      return BLOGENTRIES;
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  text-transform: capitalize;
}
</style>

