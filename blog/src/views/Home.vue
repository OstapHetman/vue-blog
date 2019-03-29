<template>
  <div class="home">
    <h1 class="headline center">v-m-blog</h1>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
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
