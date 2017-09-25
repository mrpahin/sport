<template>
  <!-- App -->
  <div id="app">    

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Sport" sliding></f7-navbar>
            <f7-list>
              <f7-list-item link="/" title="Календарь" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/options" title="Настройки" link-view="#main-view" link-close-panel></f7-list-item>
              
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Sport</f7-nav-center>
          <f7-nav-right>
            
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page name="calendar">
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Sport</f7-nav-center>
              <f7-nav-right>
                
              </f7-nav-right>
            </f7-navbar>
            <!-- Page Content -->
             <f7-calendar direction="vertical"  />                                                           
            
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>    
    
  </div>
</template>

<script>
  export default {
    data(){

    }
  }
</script>