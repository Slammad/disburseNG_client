<template>
  <div class="row">
    <div class="col-md-6">
      <!-- Simple list -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Contact list</h5>
          <div class="header-elements">
            <div class="list-icons">
              <a class="list-icons-item" data-action="collapse"></a>
              <a class="list-icons-item" data-action="reload"></a>
              <a class="list-icons-item" data-action="remove"></a>
            </div>
          </div>
        </div>

        <div class="card-body">
          <ul class="media-list">
            <li class="media font-weight-semibold py-1">Favourites</li>

            <li class="media">
              <div class="card card-body" style="background:#eeeded">
                <div class="media">
                  <div class="mr-3">
                    <a href="#">
                      <img
                        src="global_assets/images/placeholders/placeholder.jpg"
                        class="rounded-circle"
                        width="42"
                        height="42"
                        alt
                      >
                    </a>
                  </div>

                  <div class="media-body">
                    <h6 class="mb-0">Hanna Dorman</h6>
                    <span class="text-muted">UX/UI designer</span>
                  </div>

                  <div class="ml-3 align-self-center">
                    <div class="list-icons">
                      <div class="list-icons-item dropdown">
                        <a
                          href="#"
                          class="list-icons-item dropdown-toggle caret-0"
                          data-toggle="dropdown"
                        >
                          <i class="icon-menu7"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="#" class="dropdown-item">
                            <i class="icon-credit-card"></i> Send Money
                          </a>
                          <a href="#" class="dropdown-item">
                            <i class="icon-envelope"></i> Send SMS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- /simple list -->
    </div>

    <div class="col-md-6">
      <!-- Dropdown list -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">InstantPay Members</h5>
          <div class="header-elements">
            <div class="list-icons">
              <a class="list-icons-item" data-action="collapse"></a>
              <a class="list-icons-item" data-action="reload"></a>
              <a class="list-icons-item" data-action="remove"></a>
            </div>
          </div>
        </div>

        <div class="card-body">
          <ul class="media-list">
            <li class="media font-weight-semibold py-1"></li>

           

            <li class="media">
              <div class="mr-3">
                <a href="#">
                  <img
                    src="global_assets/images/placeholders/placeholder.jpg"
                    class="rounded-circle"
                    width="40"
                    height="40"
                    alt
                  >
                </a>
              </div>

              <div class="media-body">
                <div class="media-title font-weight-semibold">William Miles</div>
                <span class="text-muted">SEO expert</span>
              </div>

              <div class="align-self-center ml-3">
                <div class="list-icons">
                  <div class="list-icons-item dropdown">
                    <a
                      href="#"
                      class="list-icons-item dropdown-toggle caret-0"
                      data-toggle="dropdown"
                    >
                      <i class="icon-menu9"></i>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#call">
                        <i class="icon-phone2"></i> Make a call
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#chat">
                        <i class="icon-comment"></i> Start chat
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#video">
                        <i class="icon-video-camera"></i> Video call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

           
            <li class="media">
              <div class="mr-3">
                <a href="#">
                  <img
                    src="global_assets/images/placeholders/placeholder.jpg"
                    class="rounded-circle"
                    width="40"
                    height="40"
                    alt
                  >
                </a>
              </div>

              <div class="media-body">
                <div class="media-title font-weight-semibold">Freddy Walden</div>
                <span class="text-muted">Microsoft</span>
              </div>

              <div class="align-self-center ml-3">
                <div class="list-icons">
                  <div class="list-icons-item dropdown">
                    <a
                      href="#"
                      class="list-icons-item dropdown-toggle caret-0"
                      data-toggle="dropdown"
                    >
                      <i class="icon-menu9"></i>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#call">
                        <i class="icon-phone2"></i> Make a call
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#chat">
                        <i class="icon-comment"></i> Start chat
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#video">
                        <i class="icon-video-camera"></i> Video call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="media">
              <div class="mr-3">
                <a href="#">
                  <img
                    src="global_assets/images/placeholders/placeholder.jpg"
                    class="rounded-circle"
                    width="40"
                    height="40"
                    alt
                  >
                </a>
              </div>

              <div class="media-body">
                <div class="media-title font-weight-semibold">Dori Laperriere</div>
                <span class="text-muted">Google</span>
              </div>

              <div class="align-self-center ml-3">
                <div class="list-icons">
                  <div class="list-icons-item dropdown">
                    <a
                      href="#"
                      class="list-icons-item dropdown-toggle caret-0"
                      data-toggle="dropdown"
                    >
                      <i class="icon-menu9"></i>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#call">
                        <i class="icon-phone2"></i> Make a call
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#chat">
                        <i class="icon-comment"></i> Start chat
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#video">
                        <i class="icon-video-camera"></i> Video call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="media">
              <div class="mr-3">
                <a href="#">
                  <img
                    src="global_assets/images/placeholders/placeholder.jpg"
                    class="rounded-circle"
                    width="40"
                    height="40"
                    alt
                  >
                </a>
              </div>

              <div class="media-body">
                <div class="media-title font-weight-semibold">Vanessa Aurelius</div>
                <span class="text-muted">Facebook</span>
              </div>

              <div class="align-self-center ml-3">
                <div class="list-icons">
                  <div class="list-icons-item dropdown">
                    <a
                      href="#"
                      class="list-icons-item dropdown-toggle caret-0"
                      data-toggle="dropdown"
                    >
                      <i class="icon-menu9"></i>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#call">
                        <i class="icon-phone2"></i> Make a call
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#chat">
                        <i class="icon-comment"></i> Start chat
                      </a>
                      <a href="#" class="dropdown-item" data-toggle="modal" data-target="#video">
                        <i class="icon-video-camera"></i> Video call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- /dropdown list -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
};
</script>
