<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- <div class="user-panel">
        <div class="pull-left image">
          <img :src="imgfolder + 'user2-160x160.jpg'" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#">
            <i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div> -->
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MENU PRINCIPAL</li>
        <li v-for="item in itensmenu" :key="item.url" class="treeview">
          <a :href="item.url">
            <i class="fa" :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <span class="pull-right-container">
            
              <i v-if="item.menuheader" class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul v-if="item.subitens" class="treeview-menu">
            <li v-for="subitem in item.subitens" :key="subitem.url">
              <a :href="subitem.url">
                <i class="fa" :class="subitem.icon"></i> {{ subitem.label }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
    data() {
      return {
        cssfolder: "/src/css/",
        imgfolder: "/src/img/",
        jsfolder: "/src/js/",
        itensmenu: [
            {
                "label" : "Demandas",
                "menuheader" : true,
                "icon" : "fa-dashboard",
                "url" : "#",
                "subitens" : [
                    {
                    "label" : "Demanda Interna",
                    "url" : "/di/",
                    "icon" : "fa-circle-o"
                    },
                    {
                    "label" : "Demanda Externa",
                    "url" : "/de/",
                    "icon" : "fa-circle-o"
                    },
                    {
                    "label" : "Demanda Especial",
                    "url" : "/ae/",
                    "icon" : "fa-circle-o"
                    }
                ]
            },
            {
                "label" : "Comunicação",
                "menuheader" : false,
                "icon" : "fa-info-circle",
                "url" : "/com/"
            }
        ]
      };
    },
    created() {},
    methods: {}
  };
</script>

<style scoped>
  .menu-lateral-item .router-link-active,
  .menu-lateral-item a:hover {
    background-color: #337ab7;
    color: white;
  }

</style>
