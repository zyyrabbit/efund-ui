<template>
  <div id="wrap-content">
    <header id="header" class="">dx-zyy</header>
    <main id="main" class="clearfix">
      <nav id="nav">
        <ul>
          <li v-for="page in pages" :key="page.path">
            <!-- <a :href="page.path" >{{page.title}}</a> -->
            <router-link :to="page.path">{{ page.title }}</router-link>
          </li>
        </ul>
      </nav>
      <div id="main-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import pages from "./index";
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  data() {
    return {
      pages: pages,
    };
  }
};
</script>
<style>
/*整体样式*/
#wrap-content {
  width: 100%;
  height: 100%;
}
/*头部样式*/
#header {
  color: #fff;
  font-size: 4rem;
  text-align: center;
  height: 10rem;
  line-height: 10rem;
  width: 100%;
  background: #333;
}
/*主题样式*/
#main {
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
}
/*左边导航栏样式*/
#nav {
  width: 30%;
  height: 100%;
  float: left;
}
#nav li {
  margin-bottom: 1.5rem;
}
#nav a {
  color: #aaa;
  cursor: pointer;
  font-size: 1.4rem;
}
/*右边说明文档样式*/
#main-content {
  width: 70%;
  height: 100%;
  float: right;
}
code {
  background-color: #f9fafc;
  padding: 0 4px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}
/*table-head 样式*/
.table-head {
  background: #eef1f6;
  border: none;
}
</style>