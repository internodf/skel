<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">
        <b>A</b>UX</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">
        <b>ADT</b> Interno</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Habilitar navegação</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success"> {{ messages.length }} </span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">Você tem {{ messages.length }} mensagens</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="message in messages" :key="message.url">
                    <!-- start message -->
                    <a :href="message.url">
                      <div class="pull-left">
                        <img :src="message.icon" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        {{ message.label }}
                        <small>
                          <i class="fa fa-clock-o"></i> {{ message.time }}</small>
                      </h4>
                      <p>{{ message.text }}</p>
                    </a>
                  </li>
                  <!-- end message -->
                </ul>
              </li>
              <li v-if="messages.length > 0" class="footer">
                <a href="/messages/">Ver todas as mensagens</a>
              </li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span v-if="notifications.length > 0" class="label label-warning">{{ notifications.length }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">Você tem {{ notifications.length }} notificações</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="notification in notifications" :key="notification.url">
                    <a :href="notification.url">
                      <i class="fa" :class="notification.icon"></i>{{ notification.text }}
                    </a>
                  </li>
                </ul>
              </li>
              <li v-if="notifications.length > 0" class="footer">
                <a href="#">Ver todas</a>
              </li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span v-if="tasks.length > 0" class="label label-danger">{{ tasks.length }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">Você tem {{ tasks.length }} tarefas</li>
              <li v-if="tasks.length > 0">
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="task in tasks" :key="task.url">
                    <!-- Task item -->
                    <a :href="task.url">
                      <h3>
                        {{ task.text }}
                        <small class="pull-right">{{ task.deadline }}</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li v-if="tasks.length > 0" class="footer">
                <a href="#">Ver todas as tarefas</a>
              </li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="user.img" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ user.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img :src="user.img" class="img-circle" alt="User Image">

                <p>
                  {{ user.id }} - {{ user.name }}
                  <small>{{ user.department }}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Perfil</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Equipe</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Conexões</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <!-- <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Perfil</a>
                </div> -->
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sair</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar">
              <i class="fa fa-gears"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        cssfolder: "/src/css/",
        imgfolder: "/src/img/",
        jsfolder: "/src/js/",
        user : {
            "name" : "Zé da Silva",
            "id" : "X3456987",
            "img" : "/src/img/user2-160x160.jpg",
            "department" : "Desenvolvimento Web"
        },
        messages: [{
            "label": "Demanda Interna",
            "time": "5 mins",
            "icon": "/src/img/user2-160x160.jpg",
            "url": "#",
            "text": "Nova demanda para sua equipe"
          },
          {
            "label": "Demanda Interna",
            "time": "1 hour",
            "icon": "/src/img/user2-160x160.jpg",
            "url": "#",
            "text": "Demanda 1234 concluída"
          },
          {
            "label": "Demanda Externa",
            "time": "2 hours",
            "icon": "/src/img/user4-128x128.jpg",
            "url": "#",
            "text": "Solicitação da empresa XYZ"
          },
          {
            "label": "Demanda Especial",
            "time": "3 days",
            "icon": "/src/img/user3-128x128.jpg",
            "url": "#",
            "text": "Solicitação de informação urgente"
          }
        ],
        notifications : [
            {
                "text" : "5 alocações incompletas",
                "url" : "/aloca/eu",
                "icon" : "fa-clock-o"
            },
            {
                "text" : "20 bugs para consertar",
                "url" : "/dti/eu",
                "icon" : "fa-clock-o"
            },
            {
                "text" : "11 demandas previstas",
                "url" : "/tarefas/eu",
                "icon" : "fa-tasks"
            }
        ],
        tasks : []
      };
    },
    created() {},
    methods: {}
  };

</script>

<style scoped>


</style>
